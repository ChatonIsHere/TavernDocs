---
title: "IChunker"
description: "Server: a node in the tree that decides which players a networked object is spawned for, based on chunks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IChunker

An **interface** in `Root.Township`, the global namespace.

Server: a node in the tree that decides which players a networked object is spawned for, based on chunks. `Chunker` is the implementation.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`Chunker`](/mod/game-api/types/global-c-d/chunker)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-childcount" /><code>{"int ChildCount { get; }"}</code> | How many child chunkers this one has. |
| <Link id="m-children" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{"> Children { get; }"}</code> | Child chunkers, spawned and despawned along with this one. |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; }"}</code> | The chunk this chunker's object belongs to. |
| <Link id="m-networkentity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" { get; }"}</code> | The entity this chunker spawns. |
| <Link id="m-parent" /><code><Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" Parent { get; }"}</code> | The parent chunker, if this object is a child of another. |
| <Link id="m-spawnedforplayers" /><code>{"HashSet<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> SpawnedForPlayers { get; }"}</code> | The players this object is currently spawned for. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enddespawn" /><code>{"void EndDespawn("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isUnloading, bool isChunkSync)"}</code> | Sends the destroy message for the entity to a player, after `StartDespawn`. |
| <Link id="m-endspawn" /><code>{"void EndSpawn("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, bool isChunkSync)"}</code> | Sends the entity's initial state to a player and runs its on-connected logic, after `StartSpawn`. |
| <Link id="m-startdespawn" /><code>{"bool StartDespawn("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, bool hasMovedChunks, bool isChunkSync)"}</code> | Removes a player from `SpawnedForPlayers` and runs the entity's disconnect logic. False if it wasn't spawned for them. |
| <Link id="m-startspawn" /><code>{"bool StartSpawn("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, bool hasMovedChunks, bool isChunkSync)"}</code> | Adds a player to `SpawnedForPlayers` and sends them the spawn message. False if it was already spawned for them. |

## Used in

Members of other types that take, return or hold a `IChunker`:

[`Chunk.HandleParentChange`](/mod/game-api/types/alta-world/chunk#m-handleparentchange), [`ChunkSync.Sync`](/mod/game-api/types/alta-world/chunksync#m-sync), [`ChunkSync.SyncDestroy`](/mod/game-api/types/alta-world/chunksync#m-syncdestroy), [`ChunkSync.SyncSpawn`](/mod/game-api/types/alta-world/chunksync#m-syncspawn), [`PlayerEntitySyncServer.HandleParentChange`](/mod/game-api/types/alta-world/playerentitysyncserver#m-handleparentchange), [`ChunkerHelper.DespawnFor`](/mod/game-api/types/global-c-d/chunkerhelper#m-despawnfor), [`ChunkerHelper.SpawnFor`](/mod/game-api/types/global-c-d/chunkerhelper#m-spawnfor).
