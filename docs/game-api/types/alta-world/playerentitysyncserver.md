---
title: "PlayerEntitySyncServer"
description: "class PlayerEntitySyncServer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEntitySyncServer

A **class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`PlayerEntitySync`](/game-api/types/alta-world/playerentitysync)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerEntitySyncServer("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-gradualsync" /><code>{"private readonly Dictionary<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{", "}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> gradualSync"}</code> |  |
| <Link id="m-isallowingload" /><code>{"private bool isAllowingLoad"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shouldbeloaded" /><code>{"bool ShouldBeLoaded { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-readyforunload" /><code>{"event Action ReadyForUnload"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishallsyncs" /><code>{"void FinishAllSyncs()"}</code> |  |
| <Link id="m-handleparentchange" /><code>{"void HandleParentChange("}<Link to="/game-api/types/global-i-l/ichunker">{"IChunker"}</Link>{" chunker)"}</code> |  |
| <Link id="m-beginentityadded" /><code>{"private void BeginEntityAdded("}<Link to="/game-api/types/alta-networking/ichunkedentity">{"IChunkedEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-beginentityremoved" /><code>{"private void BeginEntityRemoved("}<Link to="/game-api/types/alta-networking/ichunkedentity">{"IChunkedEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-loadforplayer" /><code>{"private void LoadForPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-onchunkloaded" /><code>{"private void OnChunkLoaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-onchunkunloaded" /><code>{"private void OnChunkUnloaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-startsync" /><code>{"private void StartSync("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isSpawning)"}</code> |  |
| <Link id="m-stopsync" /><code>{"private void StopSync("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-syncfinished" /><code>{"private void SyncFinished("}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{" sync)"}</code> |  |
| <Link id="m-unloadforplayer" /><code>{"private void UnloadForPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerEntitySyncServer`:

[`Chunk.Sync`](/game-api/types/alta-world/chunk#m-sync).
