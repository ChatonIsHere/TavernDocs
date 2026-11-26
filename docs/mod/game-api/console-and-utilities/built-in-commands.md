---
title: Built-in commands
description: Every command module the game registers, one line each, with the requirements on it and which build has it.
sidebar_position: 4
---

# Built-in commands

Every `[Module]` in `Root.Township`, from the decompiled server build (the one Tavern installs, on clients too) and the original client download. Use it to pick a module name nobody uses (a module with the same name replaces the other one, see [Writing commands](commands.md#commandcollection)) and to know what a host already has.

Requirements in brackets apply to the whole module. Most modules also carry `[PlayOnly]`, which only means "not in the Unity editor" (it checks `Application.isPlaying`), so the tables leave it out. The names, aliases, parameters and requirements here were checked against the full command tree dumped from a running TavernLib server. `help <module>` lists a module's commands; `help full <module>` also lists the ones whose requirements fail.

## In both builds

| Module | What it's for |
| --- | --- |
| `help` | `help` lists the modules you can use, `help <path>` shows a module or command, `help full`, `help search <text>`, and `help modules` (every module as JSON). |
| `websocket` | `subscriptions`, `subscribe <event>`, `unsubscribe <event>`. Only works over the websocket console. See [Console events](console-events.md). |
| `debug` | Diagnostics: prefab and script counts (`count`, `count-all`, `count-behaviours`, `count-scripts`, `print-names`), `server-stats`, `entity-health`, `entities`, `prefabcounts`, `lag <targetFPS>` (slows the game to a frame rate), `fixedtime`, `remote-console`, `open-logs`, `nameid <id>`, `export-navmesh [output]`, `turabada-ai`. Server and `server_owner` only: `set <player> [index]` (spawns a QA test set for the player) and `load-marker <player>` (spawns an unsaved Rusty Spade as a load marker in front of them). Sub-modules `tracking` (`server_owner`: `track`, `get`, `remove`; names an entity to look up later) and `static` (server; modifiable statics such as bridges: `check-current`, `list`, `modify`, `fix`). |
| `game` (alias `g`) | The menu's actions as commands: join or connect to servers, start local tests and servers, list servers. Logged-in only, and not from a remote console. Most of it asks Alta's web API, so it no longer works. `join-ip <serverIp> [sceneIndex] [playerMode] [port]` (alias `ip`) and `ip-local` join by address without asking the API, so they probably still work. |
| `info` (`server_owner`) | Logs the logged-in user, the server, the command line, the version, the player mode and system info. |
| `leaderboard` (server) | Leaderboard definitions, boards and checkpoints, set on the selected entity. |
| `logs` | `logs` (alias `open`) opens the logs folder, `config [isPrintingAll]` prints the NLog rules, `change-target <targetName> <minLevel> [maxLevel] [loggerNamePattern]` changes a rule's levels, `destroy-trace [isEnabled]`, `warn-stack [isEnabled]`. |
| `login` | `login <username> <password>` logs in to Alta. Dead. |
| `logout` | Logs the game's account out. |
| `maintenance` | `garbage` (alias `gc`) runs a full garbage collection, `resources` unloads unused Unity assets. |
| `mods` (`server_owner`) | The game's own C# script mods (`CSharpCompiler`, compiled from the mods folder), not MelonLoader mods: list, `start`, `stop`, `restart`, `add`, `remove`, `refresh`, `path`. |
| `profiling` (`server_owner`) | Profiler samples, heap and memory dumps. `cleanslatememory` kicks everyone and unloads every chunk first. |
| `progress` (server) | World progress: finish repair boxes, fill books, forge every unforged blade, fill and list cave teleporters, fill community boxes, `generatecaves <layer>`, `repaircaveteleporters <layer>`. |
| `quality` | `lod-bias`, and on a server `static-load-multiplier` and `dynamic-load-multiplier` for chunk load distances. |
| `quit` | Quits the game. |
| `repair-box` (server, non-simple server) | Spawns a repair box for a player with up to three items; `list-items`. |
| `repeat` | `repeat <count> <seconds>` captures the next command you type and runs it that many times; `repeat last`, `stop <id>`, `stopall`. |
| `select` (alias `s`, non-simple server) | Picks an entity (by id, nearest prefab, objects near a player) and moves (`move`), rotates (`rotate`), snaps, exports to a spawn string or destroys it. Each console session has its own selection. |
| `settings` | Game and server settings: `list <target>`, `possible <target> <setting>`, `changesetting <target> <setting> <value>` (aliases `set`, `change`), `toggle`, `settoggle` (server), `save [isServer]`, `reset` (server), `heat`, `enable-board` and `disable-board` (server). `<target>` is `game` or `server`. Sub-module `population` (server) sets respawn times: `set-time`, `check-time`, `reset-time`. |
| `social` (`server_owner`, logged-in) | Friends, through Alta's web API. Dead. |
| `spawn` (non-simple server) | Spawns prefabs for players or at a position, from spawn strings, populations, packages, moulds and page collections; finds and lists prefabs. |
| `time` (server) | `set <time or keyword>`, `keywords`, `ofday`, `toggle` day and night, `future <amount> <s, m, h or d>` pushes the [timeline](threads-coroutines-and-timeline.md#timeline) forward. |
| `trial` (server) | Combat trials: `list`, `progress`, `reset`, `players`. |
| `users` (`server_owner`, logged-in) | `stats <user>`: play time and registration date from Alta's web API. Dead. |
| `wacky` | "Not necessarily safe": `inputscale` and `setvolume` on a client. The server build adds more (below). |
| `audio` (client) | Sub-module `microphone` (alias `mic`): `mute`, `unmute`. |
| `landmarks` | `enable`, `load-enabled`: turn world landmarks and their loading on or off. |
| `agents` | `agents print` logs every AI agent. |
| `global-population` (alias `globalpop`, server) | Global populations: `list`, `spawned`, `set-size`, `teleport`, `teleport-to`. |
| `microtutorial` (alias `mt`, server, `[DevOnly]`) | Micro tutorials: `list`, `active`, `next-step`, `exit`, `start`, `set-log-level`. Needs a `dev` identity token, so it's normally hidden. |
| `festivities` | `start`, `stop`, `list`, `info`. |
| `impacts` (`debug_features`) | On a client, `impacts sync true` asks the server to send its hits, and shows each as a damage popup. |
| `recent-players` (alias `recent`, client) | `test-record` sends a test interaction to the recent players list. |
| `report-players` (alias `report`, client) | `list` and `create` player reports, through Alta's web API. Dead. |

## Only in the server build

Tavern installs the server build on every machine, clients included, so these exist wherever TavernLib does. The original client download doesn't have them.

### save

`[PlayOnly]`; every command is `[ServerOnly]`.

| Command | What it does |
| --- | --- |
| `save` | Saves the world through `StreamerManager.SaveWorld`, the normal way. |
| `save now` (alias `instant`) | The same, saving at once. |
| `save backup [isInstant]` | Backs up every changed save file (`RemoteFiles.BackupAllChanged`). |
| `save wipecache` | Deletes the server's cache folder. Its `isSettingOffline` argument is ignored. |
| `save wipe [isSettingOffline]` | Locks joins, kicks everyone, runs the wipe operations, deletes chunks and cache, cleans each player's save, then **quits the game**. With `true` it also asks Alta's web API to mark the server offline. Answers `False` if a wipe is already running. |
| `save wipe-forced [keepPlayers]` | With `true` (the default), deletes chunks, cache and community storage; with `false`, the whole save folder. Then disconnects everyone and quits. |
| `save full-wipe` | Kicks everyone, deletes the server's whole save folder and quits. |
| `save wipecaves` | Moves everyone in the caves to the surface and clears the cave chunks. The same as `world caves reset`. |
| `save wipe-storage` | Empties the community storage. |
| `save player-wipe <user> [lockbox] [atm] [postbox] [landmarks] [map]` | Deletes one player's save, and each of the other files unless you pass `false`. The user is a `UserInfoAccess` (see below). |
| `save player-wipe-all [atm] [postbox] [landmarks] [map]` | Deletes every player's save folder, and the other data folders unless you pass `false`. |

A wipe ends with `ApplicationManager.ExternalOnApplicationQuit`, so plan for the process to exit and be restarted.

### server

`[LoggedInOnly]`, `[PlayOnly]`, `[WithPermissionOnly("server_owner")]`. Alta's server hosting, all built on its web API.

| Command | What it does |
| --- | --- |
| `server start <serverId> ...` | Fetches the server from the web API and starts it, like `game start-server`. Dead. |
| `server proxy <serverId> <command>` | Asks the web API for another server's console and sends it one command over its websocket. Dead. |
| `server migrate [seconds]` | `[ServerOnly]`. `seconds` defaults to 120. Warns players, locks joins, stops the server for migration, then asks the web API for a new machine **every 5 seconds until it gets one**. With the API gone that never happens, so don't run it: the server is left stopped and looping. |

### trade

`[PlayOnly]`. There are two identical `TradeCommandModule` classes, one in `Alta.Console.Commands` and one with no namespace; whichever is collected last is the one you get.

| Command | What it does |
| --- | --- |
| `trade empty` | `[ServerOnly]`. Wipes every trade deck (`TradeVendor`), respawns it fresh, and finishes the post box wipe. |
| `trade post <user> <prefab> [args...]` | `[ServerOnly]`. Spawns the prefab (the first whole number in the arguments is the count) and puts it in the user's post box. Refuses kinematic prefabs. |
| `trade post-string <user> [string]` | `[ServerOnly]`, non-simple server. Spawns from a spawn string and posts it. With no string, it uses the **server machine's clipboard**. |
| `trade atm get <user>`, `set <user> <amount>`, `add <user> <amount>` | Read or change a player's ATM balance, online or not. `add` never goes below 0 and answers the new balance. These have no `[ServerOnly]` of their own. |

### world

`[PlayOnly]`, `[ServerOnly]`.

| Command | What it does |
| --- | --- |
| `world caves reset` | Moves everyone in the caves to the surface and clears the cave chunks. |
| `world caves teleport <players> <layer>` | Generates cave layers down to `layer` and teleports the players to its portal. In the unpatched game it only works for a layer that doesn't exist yet: for an existing one it does nothing. TavernLib replaces it with one that works either way. |
| `world forest list` | The forests' cache names. |
| `world forest info <forest>` | The forest's generation (seed, bounds, outline, entrances, biomes, encounters, nodes, edges) as an object, also logged as JSON. |
| `world forest teleport <players> <forest> [node]` (alias `tp`) | Teleports players to the forest's first entrance, or to a node. A node index past the end throws. |
| `world forest reset <forest>` (alias `wipe`) | Clears the forest's chunks and moves the players in it out. With TavernLib, the new forest is made at the next restart; in the unpatched game the reset is half done until then. See [Resetting the forest](../world/forest.md#resetting-the-forest). |

### Also only in the server build

- `settings infoboard <identifier> <text>` writes a text file (identifier up to 20 characters, text up to 500, escapes like `\n` allowed) to the save's `InfoBoard` folder for the in-game info boards; `settings infoboard-list` lists them.
- `wacky`: `marcopolo <player>` (reveals every map piece for the player), `replace <id>` and `replace-selected` (respawn an entity), `destroy <id>` (only a prefab root with no parent), `destroyall <prefab>`, `destroy-free <prefab> [chunks]` (only unparented ones), `chisel-deck` and `smelter` (respawn those stations), `ow-loot` (puts loot spawners back on a fixed list of overworld chests), `cleanplayerbody <user>` and `cleanplayerstate <user>` (clear an offline player's cosmetics or state in their save; refuse while they're online). All `[ServerOnly]`.

Commands that take a user rather than an online player (`trade post`, `trade atm`, `save player-wipe`, `wacky cleanplayerbody`) take a `UserInfoAccess`, which looks the user up through Alta's web API. On a server without TavernEssentials' name lookup, they wait for that to time out.

## Only in the original client download

Not in the build Tavern installs, so TavernLib users never see these.

| Module | What it's for |
| --- | --- |
| `progression` | XP and skills: `list`, `pathxp`, `allxp`, `pathlevelup`, `checkallxp`, `clearpath`, `clearall`, `showskills`, `buyskill`, `offlinelevels`, `printofflinelevels`. Its outer class (`PlayerCommandModule`) has no `[Module]`, so it's a top-level module, and that class's own shrine commands are never registered. TavernLib's `player progression` brings these commands back. |


`TextBoard` has `clear`, `add` and `color` commands but no `[Module]`, so they're never registered either.

## Added by mods

So you don't collide with them:

| Module | From |
| --- | --- |
| `player` (with `inventory` and `progression`), `chunks`, `token`, `modmanager`, `document` | TavernLib. `player` and `chunks` are ports of Alta's old server modules. |
| `canary` (with `record`, `profile`) | Canary |
| `steady` | Steady |
| `rover` | Rover |

## Things to know

- **`repeat last` runs the last command anyone ran**, from any console, through `HandleMatchedCommand` and without checking its requirements again. `repeat <count>` calls the command's method directly, so patches on `HandleMatchedCommand` don't see the repeats.
- **`time ofday`** only logged the time in the unpatched game. TavernLib replaces it with one that answers.
- **`help modules`** returns every module as an object, so its JSON goes to the clipboard of the machine running it (see [Arguments and results](arguments-and-results.md#commandresult)).
- **`debug lag`** sets a target frame rate and slows the game until it reaches it. `0` or less removes the limit.
- **Commands with the `game` module's requirements** (`[NotAllowedInRemote]`) can't be run over a remote console that's logged in as someone else.

## See also

- [Console and tokens](../../../host/console-and-tokens.md#commands-worth-knowing) for the commands hosts use most.
- [Writing commands](commands.md)
