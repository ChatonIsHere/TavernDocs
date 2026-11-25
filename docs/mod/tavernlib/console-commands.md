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

Add `[ServerOnly]` to a class or method that should only run on a server.

## Registering them

The game only knows about commands it was told to collect. Do it once when your mod starts:

```csharp
using System.Reflection;

public override void OnInitializeMelon()
{
    Alta.Console.CommandService.CommandCollection.Collect(Assembly.GetExecutingAssembly());
}
```

The console types are in `Root.Township`, which your mod already references.

## Who can run them

Anyone with the owner console token can run everything. Hosts can make [named tokens](../../host/console-and-tokens.md#named-tokens) that only run some commands, by path: a token with access `"hello ping"` can run that command and nothing else, and `"hello"` allows the whole module. Pick clear module and command names so hosts can do that.

[Canary's commands](https://github.com/ChatonIsHere/Canary/tree/main/src/Commands) are a full example.
