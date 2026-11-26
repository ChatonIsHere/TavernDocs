---
title: Writing commands
description: CommandService, CommandCollection.Collect and every console attribute, with how modules, aliases, requirements and permissions really behave.
sidebar_position: 2
---

# Writing commands

`Alta.Console` in `Root.Township`. Runs on both sides: the same command system runs on a client and on a server, and requirement attributes decide where a command shows up.

The guide page [Console commands](../../tavernlib/console-commands.md) shows the short version. This page is the reference behind it.

## How it fits together

- A **module** is a class with `[Module]`. It has a name, commands and sub-modules (nested classes that also have `[Module]`).
- A **command** is a static method with `[Command]` inside a module.
- `CommandService.CommandCollection` holds every top-level module. On first access it collects the modules in `Root.Township`. Your mod adds its own with `Collect`.
- `CommandService.Handle(line)` splits the line, finds the commands that match, picks the best one and runs it. See [Arguments and results](arguments-and-results.md).
- Every console the game has (the local console window, the websocket console on 1760, the REST console, the in-game inspector) ends up in `CommandService.Handle`. See [Remote console](remote-console.md).

## A full module

```csharp
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Alta.Console;
using Alta.Networking.Servers;
using MelonLoader;

[Module("hello", "Commands from HelloTavern")]
[Alias("hi")]
public static class HelloCommands
{
    [Command("ping", "Answers pong")]
    public static string Ping() => "pong";

    // "hello greet Placeholder" or "hello greet Placeholder 3"
    [Command("greet", "Says hello to someone")]
    public static string Greet([Param("Who to greet")] string name, int times = 1)
        => string.Join(" ", Enumerable.Repeat($"Hello, {name}!", times));

    // The last string parameter takes the rest of the line: "hello say this is all one string"
    [Command("say", "Logs a line")]
    public static string Say(string text) => text;

    [ServerOnly]
    [Command("online", "Lists who is online")]
    public static string Online(PlayerList players)
    {
        var names = players.Select(p => p.UserInfo.Username).ToList();
        if (names.Count == 0) throw new CommandException("No online player matched");
        return string.Join(", ", names);
    }

    [ServerOnly]
    [Command("limit", "Shows the player limit")]
    public static async Task<string> Limit()
    {
        await Task.Delay(100); // still on the main thread afterwards
        return $"Limit is {ServerHandler.Current.PlayerLimit}";
    }

    [Module("admin", "Commands for admins")]
    [WithPermissionOnly("server_owner")]
    public static class Admin
    {
        [Command("whoami", "Who is calling")]
        public static string WhoAmI() => CommandService.CurrentContext?.CallingUser?.Username ?? "nobody";
    }
}

public class CommandsMod : MelonMod
{
    public override void OnInitializeMelon()
    {
        CommandService.CommandCollection.Collect(Assembly.GetExecutingAssembly());
    }
}
```

That gives `hello ping`, `hi ping`, `hello greet Placeholder 2`, `hello online *`, `hello admin whoami` and so on.

## CommandService

`public static class CommandService`. Static. Main thread: every console the game has calls it from Unity's main thread, and you should too.

| Member | What it does | Notes |
| --- | --- | --- |
| `static CommandCollection CommandCollection { get; }` | The registered modules. Made on first access, which also collects `Root.Township`'s own modules. | |
| `static Task<CommandResult> Handle(string command, CommandContext context = null)` | Splits, matches and runs a line. With no context it uses a shared default context for the account the game itself is logged in as. | Sets `CurrentContext`. Async, but the command method itself is called synchronously inside. |
| `static Task<CommandResult> HandleMatchedCommand(CommandSearchResult matchedCommand)` | Runs an already-matched command and turns exceptions into error results. | The best single place to watch every command. TavernLib patches it. |
| `static CommandSearchResult[] Search(CommandCollection collection, string search, CommandContext context)` | Splits the line and returns every candidate with how well it matched. Runs nothing. | Requirements are checked here. |
| `static CommandContext CurrentContext { get; }` | The context of the command being run (or the last one). | Read it inside your command to see who called. |
| `static CommandSearchResult LastCommand { get; }` | The last command that was run. | `repeat last` uses it. |
| `static Action<CommandSearchResult> CustomHandler { get; set; }` | One-shot: the next `Handle` passes its match here instead of running it, then clears it. | `repeat` uses it to capture a command. |
| `static void ThrowError(string format, params object[] arguments)` | Throws a `CommandException` with a formatted message. | |

Its static constructor registers `Vector3Converter` for `Vector3` arguments, so `x,y,z` works anywhere.

## CommandCollection

`public class CommandCollection`. Get it from `CommandService.CommandCollection`.

| Member | What it does | Notes |
| --- | --- | --- |
| `HashSet<Module> Modules { get; }` | The top-level modules. | Sub-modules are in `Module.Submodules`. |
| `List<Module> Collect(Assembly assembly)` | Finds every class with `[Module]` in the assembly that isn't nested in another module class, and registers it. | Always returns an empty list. Read `Modules` instead. |
| `Module ProcessModule(Type type, Assembly assembly, Module parent = null)` | Registers one class as a module (or sub-module of `parent`). | Use it to register a single type. |
| `void Unload(Assembly assembly)` | Removes every top-level module that came from that assembly. | A module you replaced doesn't come back. |
| `static void GetCommands(Type type, Module module)` | Adds every `[Command]` static method of a type to a module. | |
| `static void GetParams(MethodInfo method, Command command)` | Fills `command.Parameters` from a method. | TavernLib uses it to swap a game command's method. |
| `IEnumerable<CommandSearchResult> Search(string[] lower, string[] cased, CommandContext context)` | The matching step behind `CommandService.Search`. | |
| `IEnumerable<CommandPart> GetParts(string[] lower, string[] cased, CommandContext context)` | Finds modules and commands by path, for `help`. | |

What `Collect` does, step by step:

1. Takes every class in the assembly with `[Module]`, skipping classes nested (at any depth) inside another `[Module]` class. Those become sub-modules instead.
2. For each, makes a `Module`, reads `[Alias]` and requirement attributes from the class, then its **public** nested types (as sub-modules, or searched further for sub-modules if they have no `[Module]`), then its **static** methods with `[Command]` (public or private).
3. **Removes any existing top-level module with the same name**, then adds the new one.

So:

- A nested module class must be `public`, or it's never found. Command methods can be private.
- Instance methods are ignored without a warning. Make the methods static.
- A nested class without `[Module]` is looked through: its nested `[Module]` classes become sub-modules of the outer module. If the *outer* class has no `[Module]` (the game's `PlayerCommandModule` is like that), its nested modules are top-level ones.
- Same-name modules replace each other, and the last one collected wins. The server build has two `trade` modules (one in `Alta.Console.Commands`, one with no namespace) and only one survives. TavernLib adds a `player` module; the server build has none of its own, so nothing is lost there.

### When to call it

`OnInitializeMelon` works; TavernLib and Canary do it there. It needs no scene and no server. The first access to `CommandCollection` reflects over all of `Root.Township`, which takes a moment, so do it once.

## Module and Command

`Module` and `Command` both derive from `CommandPart`, which derives from `BasePart`.

| Member | On | What it is |
| --- | --- | --- |
| `string Name`, `string Description` | both | From the attribute. `Name` can be null for a module's default command. |
| `List<string> Aliases` | both | The name plus any `[Alias]` names. Matching only looks here. |
| `List<RequirementAttribute> Requirements` | both | From the class or method. |
| `int Priority` | both | From `[Priority]`. Only commands use it. |
| `Module Parent` | both | Null for a top-level module. Not serialized. |
| `bool RequirementsAreMet(CommandContext context)` | both | All requirements pass. TavernLib postfixes this to limit named tokens. |
| `string FullName` | both | Parent path, a dot, then the name, for example `hello admin.whoami`. |
| `Assembly Assembly`, `List<Command> Commands`, `List<Module> Submodules` | `Module` | |
| `List<Parameter> Parameters`, `MethodInfo Method`, `Type ReturnType`, `CommandAttribute Attribute` | `Command` | `ReturnType` is `T` for `Task<T>` and `void` for `Task`. |
| `Func<ProgressiveHandler, object[], Task<CommandResult>> InvokeCommand` | `Command` | What actually calls the method. |
| `string ToString()` | `Command` | The path with each parameter as `[name (Type)]`. Used in "Did you mean". |

`new Command(MethodInfo method, Module parent, CommandAttribute attribute)` is public, so you can build and insert commands by hand. TavernLib's `GameCommandPatches.Replace` does this to swap a game command for its own while keeping the aliases, requirements and priority.

## The attributes

All in `Alta.Console`.

| Attribute | Goes on | What it does |
| --- | --- | --- |
| `[Module(string name, string description)]` | class | Makes the class a module. Both arguments are required. |
| `[Command(string command, string description)]`, `[Command(string command)]` | static method | Makes the method a command. A null name makes it the module's default command: `help` runs `help`'s null-named `List`. `IsLoggingValuesAsTable = true` only changes how the result is written to the log (as a table, which also keeps it off the clipboard; see [Arguments and results](arguments-and-results.md#commandresult)). |
| `[Alias(params string[] aliases)]` | class, method | Extra names. Must be lower case like the name. |
| `[Param(string description)]` | parameter | A description for `help`. No effect on parsing. |
| `[Priority(int priority = 0)]` | method | Breaks ties when several commands match the same line. Higher wins. |
| `[AllowNull]` | parameter, or a `TypeConverter` class | Lets a converter's null through instead of failing the argument. See [Arguments and results](arguments-and-results.md#null-arguments). |

### Requirements

Every requirement derives from `RequirementAttribute` (class or method). A module's requirements apply to everything under it. When a requirement fails, the command is left out of the search, so the caller sees "Command not found" and `help` doesn't list it.

| Attribute | Passes when | Notes |
| --- | --- | --- |
| `[ServerOnly]` | `ServerHandler.Current != null` | False until the server has started, so a server's commands are hidden during startup. True in a client's main menu, where `LocalNetworkScene` makes a dummy `ServerHandler`. |
| `[ClientOnly]` | There's no game mode yet, or the current game mode is a client one. | True in the main menu. |
| `[PlayOnly]` | `Application.isPlaying` | Always true in a build. |
| `[EditorOnly]` | `!Application.isPlaying` | Never true in a build. |
| `[LoggedInOnly]` | `LoginManager.IsLoggedIn` | About the game's own login, not the caller. |
| `[DevOnly]` | The game's own identity token has the `dev` policy. | Checks the process's login, not the caller's. |
| `[WithPermissionOnly(params string[] roles)]` | The caller's `Policies` contain all of the names. | The usual one for admin commands. TavernLib's owner token has `server_owner` and `debug_features`. |
| `[WithGroupPermissionsOnly(params GroupPermissions[] groups)]` | The caller's group permissions contain all of these. | |
| `[GroupPermission(params GroupPermissions[] permissions)]` | On a server: always, unless it's a "simple server", where the caller needs the group permissions. | False on a client. |
| `[NonSimpleServer(params string[] roles)]` | On a server that isn't a simple server; on a simple server, the caller needs the roles (default `debug_features`). | False on a client. Used by `spawn`, `select` and `repair-box`. |
| `[NotAllowedInRemote]` | The caller is the account the game is logged in as (so a local console), or there's no API client. | Used by `game`. |

The caller comes from the `CommandContext`: `CallingUser` (a `UserInfoWithPermissions` with `Identifier`, `Username` and a `HashSet<string> Policies`) and `GroupPermissions`. On a websocket login those come from the token; see [Remote console](remote-console.md#logging-in).

:::warning[Requirements only gate, they don't authorise]
They run at search time. Calling your method directly, or `HandleMatchedCommand` with your own match, skips them. On a TavernLib server, named tokens are limited by a postfix on `RequirementsAreMet`, so the same rule applies: anything that goes through `Search` is checked.
:::

### Your own requirement

Override `Check()` for a simple test, or `Check(CommandContext context)` to look at the caller. Override `ToString()` so `help full` shows something readable.

```csharp
public class HeadlessOnlyAttribute : RequirementAttribute
{
    public override bool Check() => ApplicationManager.IsHeadless;

    public override string ToString() => "Headless Only";
}
```

Put it on a module or a command like any other: `[HeadlessOnly]`.

To check a TavernLib role instead, read `context.CallingUser.Policies` or ask TavernLib's `Roles` with the player's connection inside the command itself. A requirement only sees the console login, not a player.

## CommandContext

`public class CommandContext`. One per console session: each websocket connection has its own, and `Handle` without a context uses one shared default.

| Member | What it is |
| --- | --- |
| `UserInfoWithPermissions CallingUser { get; }` | Who is calling. Null when nobody is logged in. |
| `IEnumerable<GroupPermissions> GroupPermissions { get; }` | The caller's group permissions on this server. |
| `AltaSelection Selection { get; }` | The `select` module's current entity, so each session selects separately. |
| `string RawCommand { get; set; }` | The line being run. |
| `DateTime CreationTime { get; }` | When the context was made. |
| `new CommandContext(UserInfoWithPermissions user)`, `new CommandContext(UserInfoWithPermissions user, IEnumerable<GroupPermissions> groupPermissions)` | Make your own to run commands as someone. |

`CommandContextExtensions.GetDebugInfo(this CommandContext)` gives a multi-line description for logs.

## Running a command from code

```csharp
public static async Task<string> SaveNow()
{
    CommandResult result = await CommandService.Handle("save now");
    if (result.Exception != null) return "Failed: " + result.Exception.Message;
    return result.ResultString;
}
```

Call it from the main thread. `save now` is a server-build command; on a client it's "Command not found".

## See also

- [Arguments and results](arguments-and-results.md) for parsing and return values.
- [Built-in commands](built-in-commands.md) before you pick a module name.
- [Canary's commands](https://github.com/ChatonIsHere/Canary/tree/main/src/Commands) for a full real module.
- [TavernLib's console](../../tavernlib-api/console.md) for what TavernLib changes: error messages, empty player lists, named tokens and the module names it takes.
