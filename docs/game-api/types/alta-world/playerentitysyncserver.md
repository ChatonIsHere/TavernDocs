---
title: "PlayerEntitySyncServer"
description: "Server: the server half of a chunk's entity sync."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEntitySyncServer

A **class** in `Root.Township`, `Alta.Chunks`.

Server: the server half of a chunk's entity sync. It spawns and despawns the chunk's entities for players as they load and unload the chunk, spreading the work out over time with `ChunkSync`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`PlayerEntitySync`](/game-api/types/alta-world/playerentitysync)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerEntitySyncServer("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Creates a `PlayerEntitySyncServer` from `chunk`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gradualsync" /><code>{"private readonly Dictionary<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{", "}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> gradualSync"}</code> | The `ChunkSync` in progress for each player. |
| <Link id="m-isallowingload" /><code>{"private bool isAllowingLoad"}</code> | True while the chunk's content is loaded, so entities may be spawned for players. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shouldbeloaded" /><code>{"bool ShouldBeLoaded { get; }"}</code> | True while the chunk has players in it or a gradual sync is still running. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-readyforunload" /><code>{"event Action ReadyForUnload"}</code> | Raised when no players are in the chunk and no syncs are running, so the chunk can unload. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishallsyncs" /><code>{"void FinishAllSyncs()"}</code> | Forces every gradual sync still in progress to finish at once. |
| <Link id="m-handleparentchange" /><code>{"void HandleParentChange("}<Link to="/game-api/types/global-i-l/ichunker">{"IChunker"}</Link>{" chunker)"}</code> | Re-spawns a chunker for the right players after its parent changes, and despawns it for players who should no longer see it. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-beginentityadded" /><code>{"private void BeginEntityAdded("}<Link to="/game-api/types/alta-networking/ichunkedentity">{"IChunkedEntity"}</Link>{" entity)"}</code> | Runs when an entity joins the chunk. Starts spawning it for every player in the chunk, if the chunk is loaded. |
| <Link id="m-beginentityremoved" /><code>{"private void BeginEntityRemoved("}<Link to="/game-api/types/alta-networking/ichunkedentity">{"IChunkedEntity"}</Link>{" entity)"}</code> | Runs when an entity leaves the chunk. Despawns it for players who don't also have its new chunk loaded. |
| <Link id="m-loadforplayer" /><code>{"private void LoadForPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Runs when a player is added to the chunk. Starts spawning its entities for them, and tells them it loaded if the chunk auto-syncs. |
| <Link id="m-onchunkloaded" /><code>{"private void OnChunkLoaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Runs when the chunk's content loads. Allows loading and starts syncing for players already in the chunk. |
| <Link id="m-onchunkunloaded" /><code>{"private void OnChunkUnloaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Runs when the chunk's content unloads. Stops new entities from being spawned for players. |
| <Link id="m-startsync" /><code>{"private void StartSync("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isSpawning)"}</code> | Starts a gradual spawn or despawn of the chunk's entities for one player. Global chunks finish it straight away. |
| <Link id="m-stopsync" /><code>{"private void StopSync("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Stops and forgets any sync running for the player. |
| <Link id="m-syncfinished" /><code>{"private void SyncFinished("}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{" sync)"}</code> | Callback when a player's gradual sync ends. Raises `ReadyForUnload` if nothing keeps the chunk loaded. |
| <Link id="m-unloadforplayer" /><code>{"private void UnloadForPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Runs when a player is removed from the chunk. Tells them it unloaded and starts despawning its entities for them. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerEntitySyncServer`:

[`Chunk.Sync`](/game-api/types/alta-world/chunk#m-sync).
