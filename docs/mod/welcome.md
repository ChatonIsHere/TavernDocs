---
title: Welcome
description: What you can build for A Township Tale and where to start.
---

# Making mods

There are three kinds of thing you can make:

- **Game mods.** C# code that MelonLoader loads into the game or the server. Most mods are this. Start with [Your first mod](game-mods/your-first-mod.md).
- **Mods that use TavernLib.** TavernLib is the plugin that keeps servers running. Your mod can use it to check a player's roles, run on the server only, and more. See [What TavernLib does](tavernlib/what-tavernlib-does.md).
- **Launcher addons.** Python that adds buttons, tabs and hooks to TavernLauncher. See [How addons work](addons/how-addons-work.md).

When it's ready, [publish it on TavernMods](publishing/submitting.md) so players and servers can install it from the launcher.

## Reference

These pages are guides. For the details, there are two reference sections, also under **Mod** in the menu:

- [TavernLib API](../tavernlib-api/overview.md): every part of TavernLib a mod can use.
- [Game API](../game-api/overview.md): what's inside `Root.Township.dll` and the `Alta.*` assemblies, and how to hook it with Harmony.

## What you should know

These pages assume you can already write some C# (or Python, for addons) and use Git. They cover what's specific to A Township Tale, not programming in general.

A few things worth knowing up front:

- The game runs on Unity with Mono and .NET Framework 4.x. Mods target `net48`.
- Mods are loaded by [MelonLoader](https://melonwiki.xyz/) and usually patch the game with [Harmony](https://harmony.pardeike.net/).
- The game's code is in `Root.Township.dll` and the `Alta.*` assemblies. Alta never published docs for it, but we've written our own from the decompiled code: the [Game API](../game-api/overview.md) reference. It's unofficial, so treat it as a map and check the code when it matters.
- For anything the Game API pages don't cover, decompile the DLLs yourself. [ILSpy](https://github.com/icsharpcode/ILSpy) or [dnSpyEx](https://github.com/dnSpyEx/dnSpy) work well, and [Finding your way around](../game-api/patching/finding-your-way-around.md) shows where to start.
- TavernLib's own classes are covered in the [TavernLib API](../tavernlib-api/overview.md) reference.
- The same game runs as a client (a player) and as a server. A mod can run on either or both.

## Getting help

Ask in the modding channels on [Discord](https://discord.gg/jNQUUDAYSj). Looking at an existing mod's source is often the fastest way to learn. [Canary](https://github.com/ChatonIsHere/Canary) and [Steady](https://github.com/ChatonIsHere/Steady) are set up the way these pages describe.
