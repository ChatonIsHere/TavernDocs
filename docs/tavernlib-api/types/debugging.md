---
title: TavernLib.Debugging
description: Every type in the TavernLib.Debugging namespace.
sidebar_position: 10
---

# TavernLib.Debugging

Every type in `TavernLib.Debugging`, from TavernLib's own assembly. See [the overview](overview.md) for how these pages are made.

| Type | Kind | Public members | What it is |
| --- | --- | --- | --- |
| [`DebugHelper`](/tavernlib-api/types/debugging/debughelper) | class | 0 | The `/debug_helper` service: copies the game's NLog output into MelonLoader's log and draws an on-screen toggle per log level. Nothing for mods to call; its constructor is internal. |
| [`DocumentModule`](/tavernlib-api/types/debugging/documentmodule) | class | 1 | TavernLib's `document` console module: writes an HTML page of every console command into `Documentation.zip` and opens it. The first run downloads the page template from Alta's cloud storage. Its command is private. |
| [`LogArchiver`](/tavernlib-api/types/debugging/logarchiver) | static class | 2 | Moves the game's `unity-log.csv` into a numbered file in an `Archives` folder next to it, keeping 20. TavernLib runs it on servers it manages (not with `/launcherauth`). |
| [`NLogCatcher`](/tavernlib-api/types/debugging/nlogcatcher) | internal class | 2 | Internal: adds a `MelonTarget` to NLog's configuration once the app has started, and again whenever the configuration is replaced. Used by `DebugHelper`. |
| [`NLogCatcher.MelonTarget`](/tavernlib-api/types/debugging/nlogcatcher-melontarget) | class | 2 | An NLog target that writes the game's log lines to TavernLib's MelonLoader log, coloured by level. |
