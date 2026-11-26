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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`PlayerEntitySync`](/mod/game-api/types/alta-world/playerentitysync)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerEntitySyncServer("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Creates a `PlayerEntitySyncServer` from `chunk`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gradualsync" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> gradualSync"}</code> | <span className="api-desc">The `ChunkSync` in progress for each player.</span> |
| <Link id="m-isallowingload" /><code>{"private bool isAllowingLoad"}</code> | <span className="api-desc">True while the chunk's content is loaded, so entities may be spawned for players.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shouldbeloaded" /><code>{"bool ShouldBeLoaded { get; }"}</code> | <span className="api-desc">True while the chunk has players in it or a gradual sync is still running.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-readyforunload" /><code>{"event Action ReadyForUnload"}</code> | <span className="api-desc">Raised when no players are in the chunk and no syncs are running, so the chunk can unload.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishallsyncs" /><code>{"void FinishAllSyncs()"}</code> | <span className="api-desc">Forces every gradual sync still in progress to finish at once.</span> |
| <Link id="m-handleparentchange" /><code>{"void HandleParentChange("}<Link to="/mod/game-api/types/global-i-l/ichunker">{"IChunker"}</Link>{" chunker)"}</code> | <span className="api-desc">Re-spawns a chunker for the right players after its parent changes, and despawns it for players who should no longer see it.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-beginentityadded" /><code>{"private void BeginEntityAdded("}<Link to="/mod/game-api/types/alta-networking/ichunkedentity">{"IChunkedEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Runs when an entity joins the chunk. Starts spawning it for every player in the chunk, if the chunk is loaded.</span> |
| <Link id="m-beginentityremoved" /><code>{"private void BeginEntityRemoved("}<Link to="/mod/game-api/types/alta-networking/ichunkedentity">{"IChunkedEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Runs when an entity leaves the chunk. Despawns it for players who don't also have its new chunk loaded.</span> |
| <Link id="m-loadforplayer" /><code>{"private void LoadForPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Runs when a player is added to the chunk. Starts spawning its entities for them, and tells them it loaded if the chunk auto-syncs.</span> |
| <Link id="m-onchunkloaded" /><code>{"private void OnChunkLoaded("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Runs when the chunk's content loads. Allows loading and starts syncing for players already in the chunk.</span> |
| <Link id="m-onchunkunloaded" /><code>{"private void OnChunkUnloaded("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Runs when the chunk's content unloads. Stops new entities from being spawned for players.</span> |
| <Link id="m-startsync" /><code>{"private void StartSync("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isSpawning)"}</code> | <span className="api-desc">Starts a gradual spawn or despawn of the chunk's entities for one player. Global chunks finish it straight away.</span> |
| <Link id="m-stopsync" /><code>{"private void StopSync("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Stops and forgets any sync running for the player.</span> |
| <Link id="m-syncfinished" /><code>{"private void SyncFinished("}<Link to="/mod/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{" sync)"}</code> | <span className="api-desc">Callback when a player's gradual sync ends. Raises `ReadyForUnload` if nothing keeps the chunk loaded.</span> |
| <Link id="m-unloadforplayer" /><code>{"private void UnloadForPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Runs when a player is removed from the chunk. Tells them it unloaded and starts despawning its entities for them.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerEntitySyncServer`:

<div className="api-used-in">

[`Chunk.Sync`](/mod/game-api/types/alta-world/chunk#m-sync).

</div>
