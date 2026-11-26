---
title: "ServerWipeManager"
description: "Server: static helpers that wipe a server's world, its caves or its whole save folder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ServerWipeManager

A **static class** in `Root.Township`, the global namespace.

Server: static helpers that wipe a server's world, its caves or its whole save folder. Run from console commands and `ServerHandler`; a world wipe ends by quitting the server.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Documented in** [Saving](/mod/game-api/networking/saving)

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hadissues" /><code>{"private static bool hadIssues"}</code> | <span className="api-desc">Set when any wipe step fails; `WipeServer` then logs a fatal error and waits a minute before quitting.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iswiping" /><code>{"static bool IsWiping { get; set; }"}</code> | <span className="api-desc">True while a wipe is running.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-cavewipe" /><code>{"static event Action CaveWipe"}</code> | <span className="api-desc">Fired near the end of `WipeCaves`; the cave teleporter manager clears its teleporters on it.</span> |
| <Link id="m-wipeoperationsfinished" /><code>{"static event Action WipeOperationsFinished"}</code> | <span className="api-desc">Fired after the pre-wipe chunk operations; `PostboxManager` posts trade vendor refunds on it.</span> |
| <Link id="m-wipestarting" /><code>{"static event Action WipeStarting"}</code> | <span className="api-desc">Event the chunk physics resolver stops on. Never raised in this class in this build.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deletechunksandcache" /><code>{"static async Task DeleteChunksAndCache()"}</code> | <span className="api-desc">Server: waits for pending file writes, then deletes the chunks and cache folders.</span> |
| <Link id="m-deleteentiresavefolder" /><code>{"static async Task DeleteEntireSaveFolder()"}</code> | <span className="api-desc">Server: waits for pending file writes, then deletes the server's whole save folder.</span> |
| <Link id="m-fullwipe" /><code>{"static async Task FullWipe()"}</code> | <span className="api-desc">Server: stops the API session, locks joins, kicks everyone, deletes the whole save folder and quits.</span> |
| <Link id="m-wipecaves" /><code>{"static async Task WipeCaves()"}</code> | <span className="api-desc">Server: locks joins, moves online and offline players out of the caves, clears the cave system and raises `CaveWipe`.</span> |
| <Link id="m-wipeserver" /><code>{"static async Task WipeServer(bool isSettingOffline = false)"}</code> | <span className="api-desc">Server: stops the session (optionally marking the server offline), kicks everyone, runs wipe operations, deletes chunks and cache, sanitizes player saves and quits.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fastwipeoperations" /><code>{"private static async Task FastWipeOperations()"}</code> | <span className="api-desc">Server: runs wipe operations on just two hard-coded chunks and posts trade refunds. Not called anywhere in this build.</span> |
| <Link id="m-migratelockboxes" /><code>{"private static void MigrateLockboxes()"}</code> | <span className="api-desc">Server: moves old `Personal Chunk Storage` files from the chunks folder into each player's folder. Not called anywhere in this build.</span> |
| <Link id="m-moveplayeroutofcaves" /><code>{"private static async Task<bool> MovePlayerOutOfCaves("}<Link to="/mod/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | <span className="api-desc">Moves a saved player who is outside the overworld to a random spot at the outside-cave spawn area. Used by `WipeCaves`.</span> |
| <Link id="m-runthroughallplayers" /><code>{"private static async Task RunThroughAllPlayers(Func<"}<Link to="/mod/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{", Task<bool>> saveAction)"}</code> | <span className="api-desc">Server: loads every player save in the player folder, runs an action on it and writes it back when the action returns true.</span> |
| <Link id="m-sanitizeplayerssaves" /><code>{"private static async Task<bool> SanitizePlayersSaves("}<Link to="/mod/game-api/types/alta-utilities/playersave">{"PlayerSave"}</Link>{" save)"}</code> | <span className="api-desc">Moves a saved player to a random respawn point, clears their home and wipes their non-reserved map markers. Used by `WipeServer`.</span> |
| <Link id="m-wipechunk" /><code>{"private static async Task WipeChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Server: force-loads a chunk, calls `WipeOperation` on every entity with `IOperateOnWipe`, then unloads and saves it unless it's global.</span> |
| <Link id="m-wipeoperations" /><code>{"private static async Task WipeOperations()"}</code> | <span className="api-desc">Server: runs `WipeChunk` on every chunk `WipeManager` lists for pre-wipe, then raises `WipeOperationsFinished`.</span> |

</details>
