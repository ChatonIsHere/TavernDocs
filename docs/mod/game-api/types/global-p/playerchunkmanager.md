---
title: "PlayerChunkManager"
description: "Tracks which location chunk a player is in and which chunks they have loaded."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerChunkManager

A **class** in `Root.Township`, the global namespace.

Tracks which location chunk a player is in and which chunks they have loaded. The server works it out from position and sends it; clients apply what they receive. One per `Player`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerChunkManager("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Creates a `PlayerChunkManager` from `player`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | <span className="api-desc">NLog logger for chunk errors and moves.</span> |
| <Link id="m-player" /><code>{"protected "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | <span className="api-desc">The player this manager tracks.</span> |

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunkloader" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ichunkloader">{"IChunkLoader"}</Link>{" chunkLoader"}</code> | <span className="api-desc">Decides which chunks load around the player.</span> |
| <Link id="m-dynamiclist" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> dynamicList"}</code> | <span className="api-desc">Shared scratch set of chunks the player should be in.</span> |
| <Link id="m-staticlist" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> staticList"}</code> | <span className="api-desc">Shared scratch set of chunks sent to the client to force-load.</span> |
| <Link id="m-syncchunks" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-c-d/chunkstosync">{"ChunksToSync"}</Link>{"> syncChunks"}</code> | <span className="api-desc">Network message that sends chunk state to the player.</span> |
| <Link id="m-templist" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> tempList"}</code> | <span className="api-desc">Scratch set used when diffing loaded chunks.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; private set; }"}</code> | <span className="api-desc">The location chunk the player is in now, or null after leaving.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-chunkchanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> ChunkChanged"}</code> | <span className="api-desc">Raised when `Chunk` changes. `HandleLeave` raises it with the old chunk.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleleave" /><code>{"void HandleLeave()"}</code> | <span className="api-desc">Removes the player from all loaded chunks and clears `Chunk`.</span> |
| <Link id="m-loadchunkat" /><code>{"void LoadChunkAt("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" newChunk, Vector3 position)"}</code> | <span className="api-desc">Server: reloads chunks for a position and logs an error if it doesn't land in the expected chunk.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlechunksync" /><code>{"private void HandleChunkSync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" p, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-c-d/chunkstosync">{"ChunksToSync"}</Link>{" arguments)"}</code> | <span className="api-desc">Writes or reads current and loaded chunks. Clients force-load the listed chunks, unload others, and update `Chunk`.</span> |
| <Link id="m-loadchunksfromposition" /><code>{"private void LoadChunksFromPosition("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, Vector3 oldPosition, Vector3 position, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Server: hooked to the locomotion `PositionChanged` event; calls `LoadFromPosition`.</span> |
| <Link id="m-loadfromposition" /><code>{"private void LoadFromPosition(Vector3 position)"}</code> | <span className="api-desc">Server: finds the chunk at a position, updates the player's chunk lists, and sends the result. No chunk sends them to respawn.</span> |
| <Link id="m-playercontrollerset" /><code>{"private void PlayerControllerSet("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | <span className="api-desc">On a new body: clients pick the chunk from position; the server hooks position changes.</span> |
| <Link id="m-setloader" /><code>{"private void SetLoader("}<Link to="/mod/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" platformTarget)"}</code> | <span className="api-desc">Picks the chunk loader for the player's platform: normal for PC, optimised for Quest.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerChunkManager`:

<div className="api-used-in">

[`IPlayer.ChunkManager`](/mod/game-api/types/alta-networking/iplayer#m-chunkmanager), [`Player.ChunkManager`](/mod/game-api/types/global-p/player#m-chunkmanager).

</div>
