---
title: TavernLib.ModulePorts
description: Every type in the TavernLib.ModulePorts namespace.
sidebar_position: 12
---

# TavernLib.ModulePorts

Every type in `TavernLib.ModulePorts`, from TavernLib's own assembly. See [the overview](overview.md) for how these pages are made.

| Type | Kind | Public members | What it is |
| --- | --- | --- | --- |
| [`ChunkCommandModule`](/tavernlib-api/types/moduleports/chunkcommandmodule) | static class | 0 | TavernLib's `chunks` console module, a port of the game's chunk commands: receive and sync tuning, load distances, listing, wiping, merging and force-loading chunks. Its commands are private. |
| [`Lines<T>`](/tavernlib-api/types/moduleports/lines-t) | class | 2 | A list for console answers: one item per line in a text console, and a JSON array in TavernKeeper. Return it instead of a plain `IEnumerable`. |
| [`ModsCommandModule`](/tavernlib-api/types/moduleports/modscommandmodule) | static class | 0 | TavernLib's `modmanager` console module, with `list` (every mod in `Mods` and its state) and `addrepo` (adds a trusted mod source after checking its index). Server. |
| [`PlayerCommandModule`](/tavernlib-api/types/moduleports/playercommandmodule) | static class | 1 | TavernLib's `player` console module, a port of the game's player commands plus its own: kick, ban, list, teleport, stats, messages and the `inventory` and `progression` submodules. |
| [`PlayerCommandModule.InventoryModule`](/tavernlib-api/types/moduleports/playercommandmodule-inventorymodule) | static class | 0 | The `player inventory` submodule: view an online player's inventory, and save or load it. Server only; its commands are private. |
| [`PlayerCommandModule.ProgressionCommandModule`](/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule) | static class | 0 | The `player progression` submodule: list paths, give and check experience, clear progress, and show and buy skills. Its commands are private. |
| [`PlayerCommandModule.ProgressionCommandModule.PathXp`](/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule-pathxp) | class | 7 | One row of `player progression checkallxp`: a player's level and experience on one path. Has JSON names for TavernKeeper and a text form. |
| [`PlayerCommandModule.ProgressionCommandModule.SkillRow`](/tavernlib-api/types/moduleports/playercommandmodule-progressioncommandmodule-skillrow) | class | 5 | One row of `player progression showskills`: a skill the player can buy now, numbered for `buyskill`. |
| [`PlayerCommandModule.StatApplicationType`](/tavernlib-api/types/moduleports/playercommandmodule-statapplicationtype) | enum | 3 | Which part of a stat `player set-stat` changes: its base value, its minimum or its maximum. |
| [`PlayerCommandModule.StatDefinitionInfo`](/tavernlib-api/types/moduleports/playercommandmodule-statdefinitioninfo) | class | 7 | One row of `player list-stats`: a stat's name, limits and, for a player with a body, its current value. |
| [`PlayerCommandModule.StatValue`](/tavernlib-api/types/moduleports/playercommandmodule-statvalue) | class | 5 | The answer to `player check-stat`: one stat's definition, current value and base value. |
| [`TokenCommandModule`](/tavernlib-api/types/moduleports/tokencommandmodule) | static class | 1 | TavernLib's `token` console module for named console tokens: `whoami`, `list`, `create`, `edit`, `revoke`, `rotate`, `show` and `log`. Server; only the owner token manages tokens. |
| [`TokenCommandModule.LogLines`](/tavernlib-api/types/moduleports/tokencommandmodule-loglines) | class | 3 | The answer to `token log`: the newest lines of `console_token_log.jsonl`. |
| [`TokenCommandModule.TokenInfo`](/tavernlib-api/types/moduleports/tokencommandmodule-tokeninfo) | class | 11 | A named token as `token list` and `token whoami` answer it, with JSON names for TavernKeeper and a one-line text form. Never holds the token's text. |
| [`TokenCommandModule.TokenList`](/tavernlib-api/types/moduleports/tokencommandmodule-tokenlist) | class | 3 | The answer to `token list`: every named token. |
