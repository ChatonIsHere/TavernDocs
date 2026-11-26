---
title: "ServerWipeManager"
description: "Server: static helpers that wipe a server's world, its caves or its whole save folder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerWipeManager

A **static class** in `Root.Township`, no namespace.

Server: static helpers that wipe a server's world, its caves or its whole save folder. Run from console commands and `ServerHandler`; a world wipe ends by quitting the server.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Documented in** [Saving](/game-api/networking/saving)

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hadissues" /><code>{"private static bool hadIssues"}</code> | Set when any wipe step fails; `WipeServer` then logs a fatal error and waits a minute before quitting. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iswiping" /><code>{"static bool IsWiping { get; set; }"}</code> | True while a wipe is running. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-cavewipe" /><code>{"static event Action CaveWipe"}</code> | Fired near the end of `WipeCaves`; the cave teleporter manager clears its teleporters on it. |
| <Link id="m-wipeoperationsfinished" /><code>{"static event Action WipeOperationsFinished"}</code> | Fired after the pre-wipe chunk operations; `PostboxManager` posts trade vendor refunds on it. |
| <Link id="m-wipestarting" /><code>{"static event Action WipeStarting"}</code> | Event the chunk physics resolver stops on. Never raised in this class in this build. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deletechunksandcache" /><code>{"static async Task DeleteChunksAndCache()"}</code> | Server: waits for pending file writes, then deletes the chunks and cache folders. |
| <Link id="m-deleteentiresavefolder" /><code>{"static async Task DeleteEntireSaveFolder()"}</code> | Server: waits for pending file writes, then deletes the server's whole save folder. |
| <Link id="m-fullwipe" /><code>{"static async Task FullWipe()"}</code> | Server: stops the API session, locks joins, kicks everyone, deletes the whole save folder and quits. |
| <Link id="m-wipecaves" /><code>{"static async Task WipeCaves()"}</code> | Server: locks joins, moves online and offline players out of the caves, clears the cave system and raises `CaveWipe`. |
| <Link id="m-wipeserver" /><code>{"static async Task WipeServer(bool isSettingOffline = false)"}</code> | Server: stops the session (optionally marking the server offline), kicks everyone, runs wipe operations, deletes chunks and cache, sanitizes player saves and quits. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fastwipeoperations" /><code>{"private static async Task FastWipeOperations()"}</code> | Server: runs wipe operations on just two hard-coded chunks and posts trade refunds. Not called anywhere in this build. |
| <Link id="m-migratelockboxes" /><code>{"private static void MigrateLockboxes()"}</code> | Server: moves old `Personal Chunk Storage` files from the chunks folder into each player's folder. Not called anywhere in this build. |
| <Link id="m-moveplayeroutofcaves" /><code>{"private static async Task<bool> MovePlayerOutOfCaves("}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | Moves a saved player who is outside the overworld to a random spot at the outside-cave spawn area. Used by `WipeCaves`. |
| <Link id="m-runthroughallplayers" /><code>{"private static async Task RunThroughAllPlayers(Func<"}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{", Task<bool>> saveAction)"}</code> | Server: loads every player save in the player folder, runs an action on it and writes it back when the action returns true. |
| <Link id="m-sanitizeplayerssaves" /><code>{"private static async Task<bool> SanitizePlayersSaves("}<Link to="/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | Moves a saved player to a random respawn point, clears their home and wipes their non-reserved map markers. Used by `WipeServer`. |
| <Link id="m-wipechunk" /><code>{"private static async Task WipeChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Server: force-loads a chunk, calls `WipeOperation` on every entity with `IOperateOnWipe`, then unloads and saves it unless it's global. |
| <Link id="m-wipeoperations" /><code>{"private static async Task WipeOperations()"}</code> | Server: runs `WipeChunk` on every chunk `WipeManager` lists for pre-wipe, then raises `WipeOperationsFinished`. |

</details>
