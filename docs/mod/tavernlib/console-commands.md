---
title: Console commands
description: Add your own commands to the server console.
---

# Console commands

Mods can add commands to the game's console, the same one hosts use from the Server launcher, Remote Console and TavernKeeper. This is the game's own command system, so you don't need TavernLib for it.

## Making a command

Put your commands in a static class with a `Module` attribute, and give each command method a `Command` attribute:

```csharp
using Alta.Console;

[Module("hello", "Commands from HelloTavern")]
public static class HelloCommands
{
    [Command("ping", "Answers pong")]
    public static string Ping() => "pong";

    [Command("greet", "Says hello to someone")]
    public static string Greet(string name) => $"Hello, {name}!";
}
```

That makes `hello ping` and `hello greet Placeholder`. Whatever the method returns is the reply.

- **Names must be lower case.** The game lower-cases the typed line before it matches it, but not your names, so `[Command("Ping")]` or `[Module("Hello")]` can never be run. The same goes for `[Alias]` names. Arguments keep their case.
- **Command methods must be static.** Instance methods are skipped without a warning. A nested module class must be `public`.
- **`[ServerOnly]`** on a class or method hides it until a server is running (`ServerHandler.Current` isn't null). It's also true in a client's main menu, which has a dummy server, so it isn't a full client check.

## Pick a new module name

The game keeps one top-level module per name. If your `[Module]` has the same name as one that's already there, yours **replaces it**, with all its commands. A mod with a `player` module would remove TavernLib's whole `player` module, and one called `settings` would remove the game's. Check [Built-in commands](../game-api/console-and-utilities/built-in-commands.md) and the list of [taken names](../tavernlib-api/console.md#module-names) first. Submodules inside your own module never clash.

## Registering them

The game only knows about commands it was told to collect. Do it once when your mod starts:

```csharp
using System.Reflection;

public override void OnInitializeMelon()
{
    Alta.Console.CommandService.CommandCollection.Collect(Assembly.GetExecutingAssembly());
}
```

`OnInitializeMelon` is the right place. TavernLib collects its own commands there too. The console types are in `Root.Township`, which your mod already references.

## Who can run them

Anyone with the owner console token can run everything. Hosts can make [named tokens](../../host/console-and-tokens.md#named-tokens) that only run some commands, by path: a token with access `"hello ping"` can run that command and nothing else, and `"hello"` allows the whole module. Pick clear module and command names so hosts can do that, and keep them stable: renaming one breaks every token that names it. See [Named token paths](../tavernlib-api/console.md#named-token-paths).

[Canary's commands](https://github.com/ChatonIsHere/Canary/tree/main/src/Commands) are a full example.

## Reference

- [Writing commands](../game-api/console-and-utilities/commands.md): every attribute, requirements, and how matching works.
- [Arguments and results](../game-api/console-and-utilities/arguments-and-results.md): which parameter types work and what happens to your return value.
- [TavernLib's console](../tavernlib-api/console.md): what TavernLib changes, and which module names it takes.
