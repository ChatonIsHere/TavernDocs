---
title: "Chunker"
description: "Tracks which chunk a network entity is in, its chunking parent and children, and which players it is spawned for."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Chunker

A **class** in `Root.Township`, no namespace.

Tracks which chunk a network entity is in, its chunking parent and children, and which players it is spawned for. Every `NetworkEntity` has one; you usually use the entity's own chunk members instead.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`IChunker`](/game-api/types/global-i-l/ichunker)
- **Documented in** [Chunks](/game-api/world/chunks#chunker-how-an-entity-belongs-to-a-chunk)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Chunker("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity)"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-children" /><code>{"private readonly HashSet<"}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{"> children"}</code> |
| <Link id="m-chunkedentity" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/ichunkedentity">{"IChunkedEntity"}</Link>{" chunkedEntity"}</code> |
| <Link id="m-despawningfor" /><code>{"private readonly HashSet<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> despawningFor"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-parent" /><code>{"private "}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" parent"}</code> |
| <Link id="m-spawningfor" /><code>{"private readonly HashSet<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> spawningFor"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-childcount" /><code>{"int ChildCount { get; }"}</code> | Number of chunking children. |
| <Link id="m-children-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{"> Children { get; }"}</code> | Chunkers that follow this one's chunk. |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; private set; }"}</code> | The chunk the entity is in, or null. |
| <Link id="m-isserveronly" /><code>{"bool IsServerOnly { get; private set; }"}</code> | Whether the entity is kept off clients. |
| <Link id="m-networkentity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" { get; }"}</code> | The entity this chunker belongs to. |
| <Link id="m-parent-2" /><code><Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" Parent { get; private set; }"}</code> | The chunking parent; children always take the parent's chunk. |
| <Link id="m-spawnedforplayers" /><code>{"HashSet<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> SpawnedForPlayers { get; }"}</code> | Players the entity is currently spawned for. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-enteredchunk" /><code>{"event "}<Link to="/game-api/types/global-c-d/chunkeventhandler">{"ChunkEventHandler"}</Link>{" EnteredChunk"}</code> | Raised when the entity enters a chunk. |
| <Link id="m-leftchunk" /><code>{"event "}<Link to="/game-api/types/global-c-d/chunkeventhandler">{"ChunkEventHandler"}</Link>{" LeftChunk"}</code> | Raised when the entity leaves a chunk. |
| <Link id="m-parentchanged" /><code>{"event "}<Link to="/game-api/types/global-c-d/chunkerchangedhandler">{"ChunkerChangedHandler"}</Link>{" ParentChanged"}</code> | Raised with the old and new parent when it changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-editorevaluatechunk" /><code>{"void EditorEvaluateChunk("}<Link to="/game-api/types/alta-world/fastchunklookup">{"FastChunkLookup"}</Link>{" chunkLookup)"}</code> | Editor: puts a root prefab entity into the chunk containing its position. |
| <Link id="m-evaluatechunk" /><code>{"void EvaluateChunk()"}</code> | Server: moves a root entity to the chunk holding its position. Still chunkless on the next check, it is unloaded (player-held pickups go to their postbox). |
| <Link id="m-evaluatechunk-2" /><code>{"void EvaluateChunk(bool isLoggingOnFailure)"}</code> | Server: moves a root entity to the chunk holding its position. Still chunkless on the next check, it is unloaded (player-held pickups go to their postbox). |
| <Link id="m-setchunk" /><code>{"void SetChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" newChunk)"}</code> | Moves the entity (and its children) to a chunk. On the server this is ignored for entities with a chunking parent. |
| <Link id="m-setparent" /><code>{"void SetParent("}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" target, bool isDestroying = false)"}</code> | Sets the chunking parent (null to clear) and moves to its chunk. |
| <Link id="m-setserveronly" /><code>{"void SetServerOnly(bool isServerOnly)"}</code> | Hides the entity from every player, or spawns it for the players in its chunk again. |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-enddespawn" /><code>{"private void IChunker.EndDespawn("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" target, bool isUnloading, bool isChunkSync)"}</code> |
| <Link id="m-endspawn" /><code>{"private void IChunker.EndSpawn("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" target, bool isChunkSync)"}</code> |
| <Link id="m-posttoplayer" /><code>{"private async void PostToPlayer("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" oldChunk, Vector3 position, int playerId)"}</code> |
| <Link id="m-setchunkinternal" /><code>{"private void SetChunkInternal("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" newChunk)"}</code> |
| <Link id="m-startdespawn" /><code>{"private bool IChunker.StartDespawn("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" target, bool hasMovedChunks, bool isChunkSync)"}</code> |
| <Link id="m-startspawn" /><code>{"private bool IChunker.StartSpawn("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" target, bool hasMovedChunks, bool isChunkSync)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Chunker`:

[`EntitySerializer.chunker`](/game-api/types/alta-networking/entityserializer#m-chunker), [`IChunkedEntity.Chunker`](/game-api/types/alta-networking/ichunkedentity#m-chunker), [`NetworkEntity.Alta.Networking.IChunkedEntity.Chunker`](/game-api/types/alta-networking/networkentity#m-alta-networking-ichunkedentity-chunker), [`NetworkEntity.chunker`](/game-api/types/alta-networking/networkentity#m-chunker), [`NetworkEntity.Chunker`](/game-api/types/alta-networking/networkentity#m-chunker-2), [`NetworkPrefab.AccumulateChildPrefabs`](/game-api/types/alta-networking/networkprefab#m-accumulatechildprefabs), [`ChunkDetector.chunker`](/game-api/types/global-c-d/chunkdetector#m-chunker), [`ChunkDetector.StartCheckingForChunkChange`](/game-api/types/global-c-d/chunkdetector#m-startcheckingforchunkchange), [`ChunkerChangedHandler.BeginInvoke`](/game-api/types/global-c-d/chunkerchangedhandler#m-begininvoke), [`ChunkerChangedHandler.Invoke`](/game-api/types/global-c-d/chunkerchangedhandler#m-invoke), [`IChunker.Children`](/game-api/types/global-i-l/ichunker#m-children), [`IChunker.Parent`](/game-api/types/global-i-l/ichunker#m-parent).
