---
title: TavernLib
description: Every type in the TavernLib namespace.
sidebar_position: 2
---

# TavernLib

Every type in `TavernLib`, from TavernLib's own assembly. See [the overview](overview.md) for how these pages are made.

| Type | Kind | Public members | What it is |
| --- | --- | --- | --- |
| [`Tavern`](/mod/tavernlib-api/types/root/tavern) | class | 5 | TavernLib's `MelonPlugin`. It registers TavernLib's services, collects its console commands and applies its late patches. Both sides; MelonLoader creates it. |
| [`TavernArgs`](/mod/tavernlib-api/types/root/tavernargs) | static class | 10 | The names of TavernLib's own command-line arguments, as constants, so a mod can check for them with the game's `CommandLineArguments`. Both sides. |
| [`TavernDirectories`](/mod/tavernlib-api/types/root/taverndirectories) | static class | 13 | The folder and file paths TavernLib uses, worked out each time you read them. None of them creates the folder or file. Both sides. |
| [`TavernLogger`](/mod/tavernlib-api/types/root/tavernlogger) | internal static class | 3 | TavernLib's internal log helper. Writes through `Tavern.Logger` as `[Type.Method]: message`, finding the caller from the stack trace. |
