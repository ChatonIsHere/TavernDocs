---
title: "IChunker"
description: "interface IChunker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IChunker

An **interface** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`Chunker`](/game-api/types/global-c-d/chunker)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-childcount" /><code>{"int ChildCount { get; }"}</code> |  |
| <Link id="m-children" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{"> Children { get; }"}</code> |  |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; }"}</code> |  |
| <Link id="m-networkentity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" { get; }"}</code> |  |
| <Link id="m-parent" /><code><Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" Parent { get; }"}</code> |  |
| <Link id="m-spawnedforplayers" /><code>{"HashSet<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> SpawnedForPlayers { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enddespawn" /><code>{"void EndDespawn("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isUnloading, bool isChunkSync)"}</code> |  |
| <Link id="m-endspawn" /><code>{"void EndSpawn("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isChunkSync)"}</code> |  |
| <Link id="m-startdespawn" /><code>{"bool StartDespawn("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool hasMovedChunks, bool isChunkSync)"}</code> |  |
| <Link id="m-startspawn" /><code>{"bool StartSpawn("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, bool hasMovedChunks, bool isChunkSync)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IChunker`:

[`Chunk.HandleParentChange`](/game-api/types/alta-world/chunk#m-handleparentchange), [`ChunkSync.Sync`](/game-api/types/alta-world/chunksync#m-sync), [`ChunkSync.SyncDestroy`](/game-api/types/alta-world/chunksync#m-syncdestroy), [`ChunkSync.SyncSpawn`](/game-api/types/alta-world/chunksync#m-syncspawn), [`PlayerEntitySyncServer.HandleParentChange`](/game-api/types/alta-world/playerentitysyncserver#m-handleparentchange), [`ChunkerHelper.DespawnFor`](/game-api/types/global-c-d/chunkerhelper#m-despawnfor), [`ChunkerHelper.SpawnFor`](/game-api/types/global-c-d/chunkerhelper#m-spawnfor).
