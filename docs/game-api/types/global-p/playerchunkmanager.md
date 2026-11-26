---
title: "PlayerChunkManager"
description: "Tracks which location chunk a player is in and which chunks they have loaded."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerChunkManager

A **class** in `Root.Township`, no namespace.

Tracks which location chunk a player is in and which chunks they have loaded. The server works it out from position and sends it; clients apply what they receive. One per `Player`.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerChunkManager("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Creates a `PlayerChunkManager` from `player`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | NLog logger for chunk errors and moves. |
| <Link id="m-player" /><code>{"protected "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | The player this manager tracks. |

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunkloader" /><code>{"private "}<Link to="/game-api/types/global-i-l/ichunkloader">{"IChunkLoader"}</Link>{" chunkLoader"}</code> | Decides which chunks load around the player. |
| <Link id="m-dynamiclist" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> dynamicList"}</code> | Shared scratch set of chunks the player should be in. |
| <Link id="m-staticlist" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> staticList"}</code> | Shared scratch set of chunks sent to the client to force-load. |
| <Link id="m-syncchunks" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-c-d/chunkstosync">{"ChunksToSync"}</Link>{"> syncChunks"}</code> | Network message that sends chunk state to the player. |
| <Link id="m-templist" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> tempList"}</code> | Scratch set used when diffing loaded chunks. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; private set; }"}</code> | The location chunk the player is in now, or null after leaving. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-chunkchanged" /><code>{"event Action<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> ChunkChanged"}</code> | Raised when `Chunk` changes. `HandleLeave` raises it with the old chunk. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleleave" /><code>{"void HandleLeave()"}</code> | Removes the player from all loaded chunks and clears `Chunk`. |
| <Link id="m-loadchunkat" /><code>{"void LoadChunkAt("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" newChunk, Vector3 position)"}</code> | Server: reloads chunks for a position and logs an error if it doesn't land in the expected chunk. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlechunksync" /><code>{"private void HandleChunkSync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" p, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-c-d/chunkstosync">{"ChunksToSync"}</Link>{" arguments)"}</code> | Writes or reads current and loaded chunks. Clients force-load the listed chunks, unload others, and update `Chunk`. |
| <Link id="m-loadchunksfromposition" /><code>{"private void LoadChunksFromPosition("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, Vector3 oldPosition, Vector3 position, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | Server: hooked to the locomotion `PositionChanged` event; calls `LoadFromPosition`. |
| <Link id="m-loadfromposition" /><code>{"private void LoadFromPosition(Vector3 position)"}</code> | Server: finds the chunk at a position, updates the player's chunk lists, and sends the result. No chunk sends them to respawn. |
| <Link id="m-playercontrollerset" /><code>{"private void PlayerControllerSet("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | On a new body: clients pick the chunk from position; the server hooks position changes. |
| <Link id="m-setloader" /><code>{"private void SetLoader("}<Link to="/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" platformTarget)"}</code> | Picks the chunk loader for the player's platform: normal for PC, optimised for Quest. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerChunkManager`:

[`IPlayer.ChunkManager`](/game-api/types/alta-networking/iplayer#m-chunkmanager), [`Player.ChunkManager`](/game-api/types/global-p/player#m-chunkmanager).
