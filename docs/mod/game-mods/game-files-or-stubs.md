---
title: Game files or att-stubs
description: What to build your mod against, and when to use att-stubs.
---

# Game files or att-stubs

Your mod has to be built against the game's assemblies. There are two ways to get them.

## Your game install

Point `GameDir` at your game folder (see [Your first mod](your-first-mod.md#2-tell-it-where-the-game-is)). Run the launcher's Setup on it first, so MelonLoader is there.

This is the simplest option and you need the game to test anyway.

## att-stubs

[att-stubs](https://github.com/ChatonIsHere/att-stubs) is a copy of the game's assemblies with all the code taken out. Only the names of types and members are left. It's for building where the game can't go, like GitHub Actions, or for people who want to build a mod without having the game.

Its folders match a game install, so you use it the same way:

```powershell
git clone https://github.com/ChatonIsHere/att-stubs
dotnet build -c Release -p:GameDir=path\to\att-stubs
```

It has two branches:

| Branch | What's in it | Use it when |
| --- | --- | --- |
| `main` | About 28 of the assemblies most mods use: `Root.Township`, the `Alta.*` basics, the main Unity modules, NLog, Newtonsoft.Json, MelonLoader and Harmony | Your mod only references those |
| `full` | Every assembly in the game's `Managed` folder, plus MelonLoader | You need anything else, like `Township.Core.Runtime` or the XR modules |

```powershell
git clone -b full https://github.com/ChatonIsHere/att-stubs
```

### Private members are public

In att-stubs, the private members of `Root.Township` are made public, so your code can use them directly. That's handy, but it means code using them **only builds against att-stubs**, not against your game folder. If you build both ways, stick to public members, or use Harmony's `AccessTools` and `Traverse` to reach private ones.

### It's for building, not running

Never copy att-stubs files into a game. There's no code in them, so the game won't start.

att-stubs is made from the 0.0.39.2 server build, the last version of the game.
