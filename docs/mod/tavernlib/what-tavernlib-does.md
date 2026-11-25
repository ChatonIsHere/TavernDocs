---
title: What TavernLib does
description: What TavernLib is, how it loads mods, and how to use it from your own mod.
---

# What TavernLib does

TavernLib is a MelonLoader plugin that keeps A Township Tale's servers working without Alta. Every Tavern client and server has it, because the launcher's Setup installs it. It handles:

- **Logins.** It runs the login port (1762), makes each player's account and token, and checks passwords, the whitelist and the blacklist.
- **Mods.** It installs mods from mod sources, picks which build MelonLoader loads, and checks players have the right mods when they join.
- **Roles.** It reads players' roles from `users.json` and tells the game who's a moderator.
- **The console.** It runs the websocket console and its tokens.
- **Listing.** It posts the server to Community Servers.

## How mods are loaded

When a mod is installed from a mod source, it goes in its own folder in `Mods`, with one subfolder per build:

```
Mods/
  ChatonIsHere.Steady/
    manifest.json
    .client_windows/Steady.dll
    .server/Steady.dll
UserLibs/
  SomeLibrary.dll
```

MelonLoader skips folders starting with `.`, so TavernLib tells it which one to load: `.server` on a server, `.client_windows` in the game. Libraries a mod needs go flat in `UserLibs`.

A loose `Mods\YourMod.dll` still loads like any MelonLoader mod. That's what you get while testing your own.

You don't need to do anything for this. Publish one build for both targets, or separate ones, and TavernLib sorts it out. See [Manifest reference](../publishing/manifest-reference.md#targets).

## Using it from your mod

You don't need TavernLib to make a mod. Most mods only use the game and Harmony. Reference it when you want what's on these pages: [roles](roles.md), [events and services](events-and-services.md) and [its folders](folders-and-files.md).

Setup installs it at `Plugins\TavernLib.dll` in the game folder. Add to your `.csproj`:

```xml
<Reference Include="TavernLib" HintPath="$(GameDir)\Plugins\TavernLib.dll" Private="false" />
```

Keep `Private="false"` so you don't ship a copy of it. On GitHub Actions, download it first (see [Depending on TavernLib](../game-mods/building-on-github.md#depending-on-tavernlib)).

:::note

TavernLib's API is small and still growing. These pages cover what's there today. If you need something it doesn't do, ask on Discord or open an issue on [TavernLib](https://github.com/ModdingTavern/TavernLib).

:::
