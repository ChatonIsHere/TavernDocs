---
title: "PlayerChunkManager"
description: "class PlayerChunkManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerChunkManager

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerChunkManager("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |
| <Link id="m-player" /><code>{"protected "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> |

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-chunkloader" /><code>{"private "}<Link to="/game-api/types/global-i-l/ichunkloader">{"IChunkLoader"}</Link>{" chunkLoader"}</code> |
| <Link id="m-dynamiclist" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> dynamicList"}</code> |
| <Link id="m-staticlist" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> staticList"}</code> |
| <Link id="m-syncchunks" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-c-d/chunkstosync">{"ChunksToSync"}</Link>{"> syncChunks"}</code> |
| <Link id="m-templist" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> tempList"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; private set; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-chunkchanged" /><code>{"event Action<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> ChunkChanged"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-handleleave" /><code>{"void HandleLeave()"}</code> |
| <Link id="m-loadchunkat" /><code>{"void LoadChunkAt("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" newChunk, Vector3 position)"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-handlechunksync" /><code>{"private void HandleChunkSync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" p, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-c-d/chunkstosync">{"ChunksToSync"}</Link>{" arguments)"}</code> |
| <Link id="m-loadchunksfromposition" /><code>{"private void LoadChunksFromPosition("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, Vector3 oldPosition, Vector3 position, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |
| <Link id="m-loadfromposition" /><code>{"private void LoadFromPosition(Vector3 position)"}</code> |
| <Link id="m-playercontrollerset" /><code>{"private void PlayerControllerSet("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |
| <Link id="m-setloader" /><code>{"private void SetLoader("}<Link to="/game-api/types/assembly-other/platformtarget">{"PlatformTarget"}</Link>{" platformTarget)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerChunkManager`:

[`IPlayer.ChunkManager`](/game-api/types/alta-networking/iplayer#m-chunkmanager), [`Player.ChunkManager`](/game-api/types/global-p/player#m-chunkmanager).
