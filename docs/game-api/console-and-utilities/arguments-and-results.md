---
title: Arguments and results
description: How the console splits and matches a line, which argument types it understands, and what a command's return value or exception turns into.
sidebar_position: 3
---

# Arguments and results

`Alta.Console` in `Root.Township`. Both sides. All of this happens inside `CommandService.Handle`, on the caller's thread, which is Unity's main thread for every console the game has.

## How a line is matched

1. The line is trimmed and split into words on spaces. A word that starts with `'` or `"` runs to the matching quote, so `say "two words"` is two words, `say` and `two words`. A backslash before a quote keeps it in the word.
2. A lower-cased copy of the words is used to match module and command names. Arguments are converted from the original words, so they keep their case.
3. Each top-level module whose name or alias equals the first word is searched: its sub-modules, then its commands. A command matches when its name or alias equals the next word. A command with a null name also tries to take the words from there as its arguments.
4. Every match is graded: `Success`, `ParameterParsingFailure`, `IncorrectParameterTypes`, `NotEnoughParameters` or `TooManyParameters` (the `CommandResultSuccess` enum).
5. The best one wins: `Success` first, then the highest `[Priority]`. If it's a success it runs. If it's a parsing failure, the error lists each parameter's problem. Otherwise you get "Command not found. Did you mean:" and every candidate.

Requirements are checked in step 3. A command whose requirements fail isn't a candidate at all.

### How words become arguments

| Situation | What happens |
| --- | --- |
| No parameters and extra words | `TooManyParameters`. |
| More words than parameters, last parameter is `string` | The extra words are joined with single spaces into the last parameter. Quotes are already gone by then. |
| More words than parameters, last parameter is an array | The rest of the words fill the array, one element per word. |
| Fewer words than the parameters before the first default | `NotEnoughParameters`. An array last parameter can be empty. |
| Words left out for parameters with defaults | They get their default value. |
| A converter returns null | `ParameterParsingFailure` with "value was null", unless the parameter (or the converter class) has `[AllowNull]`. |
| A converter throws | `IncorrectParameterTypes`. |
| The first parameter is a `ProgressiveHandler` | The command always fails with "Progressive is not supported yet!". |

Overloads are allowed: several commands can share a name in one module and the parameter counts and types pick one. When two would both succeed, give one a `[Priority]`, or the winner depends on reflection order.

## Argument types

Arguments are converted with `TypeDescriptor.GetConverter(type).ConvertFromString(word)`. That covers the .NET basics:

- `int`, `uint`, `float`, `double`, `long` and friends. They're parsed with the machine's current culture, so on a PC set to a language that writes `1,5`, it looks like `1.5` would fail. Write your own converter if that matters.
- `bool`: `true` or `false`, any case.
- Enums: by name, ignoring case.
- Nullable types: converted as the inner type. An empty word (`""`) gives null, which fails the argument unless it has `[AllowNull]`. A default value is usually simpler.
- `char`: a single character.

And the game adds these:

| Type | Typed as | Notes |
| --- | --- | --- |
| `Vector3` | `x,y,z` with no spaces | Three parts that don't parse log an error and give `Vector3.zero` instead of failing. Fewer than three parts throw, so it's `IncorrectParameterTypes`. |
| `Player`, `IPlayer` | A username or user id of an online player | Case is ignored; a second try ignores spaces and underscores. Nobody online by that name gives null, so the argument fails. |
| `PlayerList` | Names or ids separated by commas, or `*` for everyone | Names that match nobody are skipped, so the list can be empty. TavernLib refuses an empty list with "No online player matches". |
| `UserInfoAccess`, `UserList` | A username or user id, online or not | Nothing is looked up while parsing. The lookup happens when the command asks, through Alta's dead web API, unless TavernEssentials answers it. See [Alta's web API](alta-web-api.md). |
| `NetworkPrefab` | A prefab hash, or its name | Only prefabs that can be spawned through commands. An unknown name throws inside the converter, so it's `IncorrectParameterTypes`. |
| `Chunk` | `global`, or a word in the chunk's identifier | The word is used as a regular expression; the first matching chunk wins. |
| `Item`, `PageCollection`, `PopulationDefinition`, `GlobalPopulationDefinition`, `MouldDefinition`, `Festivity`, `GameAction` | A hash, or the asset's name | `HashedGeneralValueConverter<T>`: lower case, spaces removed. Not found logs a warning and fails the argument. |
| `ForestGenerator`, `Stat`, `StatDefinition`, `StatList`, `PlayerUnlock` | A name | Their own converters. |
| `GameAchievement`, `MicroTutorialSettings` | A name | `PlayerProgressFlagConverter<T>`. |

### Null arguments

Most game converters return null for "not found". By default that fails the argument, which is usually what you want. Put `[AllowNull]` on the parameter to get the null and deal with it yourself:

```csharp
[Command("find", "Finds a player, or says no one matched")]
public static string Find([AllowNull] Player player) => player == null ? "No one by that name" : player.UserInfo.Username;
```

### Your own argument types

Give your type a `TypeConverter`:

```csharp
[TypeConverter(typeof(ColourNameConverter))]
public class ColourName
{
    public Color Value;
}

public class ColourNameConverter : TypeConverter
{
    public override bool CanConvertFrom(ITypeDescriptorContext context, Type sourceType)
        => sourceType == typeof(string) || base.CanConvertFrom(context, sourceType);

    public override object ConvertFrom(ITypeDescriptorContext context, CultureInfo culture, object value)
    {
        if (value is not string text) return base.ConvertFrom(context, culture, value);
        return text switch
        {
            "red" => new ColourName { Value = Color.red },
            "green" => new ColourName { Value = Color.green },
            _ => null, // null fails the argument, unless the parameter has [AllowNull]
        };
    }
}
```

For a type you don't own, register the converter at runtime, the way the game does for `Vector3`. This changes the type's converter for the whole process, so pick types nobody else converts:

```csharp
// MyVector2Converter is your own TypeConverter, written like ColourNameConverter above.
TypeDescriptor.AddAttributes(typeof(Vector2), new TypeConverterAttribute(typeof(MyVector2Converter)));
```

## What a command returns

| The method returns | The result | `ResultString` |
| --- | --- | --- |
| `void`, or null | `CommandResult.VoidResult` | `Success` |
| `string` | `CommandResult` | The string |
| `Task` | Awaited, then a void result | `Success` |
| `Task<string>` | Awaited | The string |
| `Task<T>` with any other `T` | Awaited, `DynamicCommandResult` with `Result` set | `Result.ToString()` |
| A collection (`ICollection`, such as a list or dictionary) | `DynamicCommandResult` | The type name, which starts with `System.` |
| Any other `IEnumerable` | Copied into a `List<object>` first, then as above | The type name |
| Any other object or value | `DynamicCommandResult` | `ToString()` |

An object result is useless as text but comes through as JSON in `Result` on the websocket console (see [Remote console](remote-console.md#replies)). TavernLib's console windows show that JSON when `ResultString` starts with `System.`. If you want people to read the answer, return a string.

:::danger[Don't return null from an async command]
A `Task<T>` that finishes with null (even a `Task<string>`) makes a `DynamicCommandResult` whose `ResultString` throws. The websocket console reads `ResultString` straight after the command, so the caller never gets a reply. Return a string, or throw.
:::

### CommandResult

| Member | What it is |
| --- | --- |
| `Command Command { get; }` | The command that ran, or null when nothing matched. |
| `virtual string ResultString { get; }` | The text answer. |
| `Exception Exception { get; set; }` | Set when it failed. Null on success. |
| `virtual void Log()` | Writes the result to the `Alta.Console.CommandResult` logger at Trace. `HandleMatchedCommand` calls it for every command that ran without throwing. |
| `static CommandResult VoidResult(Command command)`, `static CommandResult ErrorResult(Exception exception, Command command)` | Make results. |
| `T Result { get; set; }` | On `CommandResult<T>` and `DynamicCommandResult` (which is `CommandResult<object>`). |

:::warning[Object results go to the clipboard]
For an object result, `Log()` serializes it to JSON and, in the same line, copies that JSON to the system clipboard of the machine running the game. The game's `NLog.config` turns Trace on for `Alta.Console.*`, so this happens for every such command. On a server you also use as a desktop, your clipboard changes when someone runs `help modules`.
:::

## Errors

- Throw `CommandException` (or call `CommandService.ThrowError`) for a clean error message.
- Any exception becomes `CommandResult.ErrorResult` with `Exception` set. Nothing reaches the game loop.
- A **synchronous** command's exception arrives wrapped in a `TargetInvocationException` by reflection, even a `CommandException`. In the unpatched game the caller sees "Exception has been thrown by the target of an invocation." TavernLib's `CommandResultPatches.UnwrapCommandError` unwraps it, so on TavernLib servers the caller sees your message.
- An **async** command's exception isn't wrapped: the `await` rethrows it as itself.
- "Not found" is an error result with a plain `Exception` and a null `Command`. A parameter parsing failure is the same, but `Command` is the command that failed to parse.

## Watching every command

`CommandService.HandleMatchedCommand(CommandSearchResult)` runs once per matched command, from every console:

```csharp
[HarmonyPatch(typeof(CommandService), nameof(CommandService.HandleMatchedCommand))]
static class LogEveryCommand
{
    static void Prefix(CommandSearchResult matchedCommand)
    {
        var user = CommandService.CurrentContext?.CallingUser?.Username ?? "local";
        MelonLoader.MelonLogger.Msg($"{user} ran {matchedCommand.command}");
    }
}
```

It returns a `Task<CommandResult>`, so a postfix that wants the result has to wrap the task, as TavernLib's `UnwrapCommandError` does. A prefix that returns false and sets `__result` can refuse a command; TavernLib's `RefuseEmptyPlayerList` is an example.

`CommandSearchResult` is a struct with public fields `command`, `success` and `arguments` (the converted values, ready for the method).

## See also

- [Writing commands](commands.md)
- [Remote console](remote-console.md) for how results are sent to a client.
