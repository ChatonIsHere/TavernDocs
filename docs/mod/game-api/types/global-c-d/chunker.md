---
title: "Chunker"
description: "Tracks which chunk a network entity is in, its chunking parent and children, and which players it is spawned for."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Chunker

A **class** in `Root.Township`, the global namespace.

Tracks which chunk a network entity is in, its chunking parent and children, and which players it is spawned for. Every `NetworkEntity` has one; you usually use the entity's own chunk members instead.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`IChunker`](/mod/game-api/types/global-i-l/ichunker)
- **Documented in** [Chunks](/mod/game-api/world/chunks#chunker-how-an-entity-belongs-to-a-chunk)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Chunker("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity)"}</code> | <span className="api-desc">Creates a `Chunker` from `networkEntity`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-children" /><code>{"private readonly HashSet<"}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{"> children"}</code> | <span className="api-desc">Chunkers parented to this one. They follow this chunker into whatever chunk it moves to.</span> |
| <Link id="m-chunkedentity" /><code>{"private readonly "}<Link to="/mod/game-api/types/alta-networking/ichunkedentity">{"IChunkedEntity"}</Link>{" chunkedEntity"}</code> | <span className="api-desc">The entity as `IChunkedEntity`, told when its parent changes.</span> |
| <Link id="m-despawningfor" /><code>{"private readonly HashSet<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> despawningFor"}</code> | <span className="api-desc">Players whose despawn is waiting on a chunk move; finished in `SetChunkInternal`.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-parent" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" parent"}</code> | <span className="api-desc">Backing field for `Parent`.</span> |
| <Link id="m-spawningfor" /><code>{"private readonly HashSet<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> spawningFor"}</code> | <span className="api-desc">Players whose spawn is waiting on a chunk move; finished in `SetChunkInternal`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-childcount" /><code>{"int ChildCount { get; }"}</code> | <span className="api-desc">Number of chunking children.</span> |
| <Link id="m-children-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{"> Children { get; }"}</code> | <span className="api-desc">Chunkers that follow this one's chunk.</span> |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The chunk the entity is in, or null.</span> |
| <Link id="m-isserveronly" /><code>{"bool IsServerOnly { get; private set; }"}</code> | <span className="api-desc">Whether the entity is kept off clients.</span> |
| <Link id="m-networkentity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" { get; }"}</code> | <span className="api-desc">The entity this chunker belongs to.</span> |
| <Link id="m-parent-2" /><code><Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" Parent { get; private set; }"}</code> | <span className="api-desc">The chunking parent; children always take the parent's chunk.</span> |
| <Link id="m-spawnedforplayers" /><code>{"HashSet<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> SpawnedForPlayers { get; }"}</code> | <span className="api-desc">Players the entity is currently spawned for.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-enteredchunk" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/chunkeventhandler">{"ChunkEventHandler"}</Link>{" EnteredChunk"}</code> | <span className="api-desc">Raised when the entity enters a chunk.</span> |
| <Link id="m-leftchunk" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/chunkeventhandler">{"ChunkEventHandler"}</Link>{" LeftChunk"}</code> | <span className="api-desc">Raised when the entity leaves a chunk.</span> |
| <Link id="m-parentchanged" /><code>{"event "}<Link to="/mod/game-api/types/global-c-d/chunkerchangedhandler">{"ChunkerChangedHandler"}</Link>{" ParentChanged"}</code> | <span className="api-desc">Raised with the old and new parent when it changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-editorevaluatechunk" /><code>{"void EditorEvaluateChunk("}<Link to="/mod/game-api/types/alta-world/fastchunklookup">{"FastChunkLookup"}</Link>{" chunkLookup)"}</code> | <span className="api-desc">Editor: puts a root prefab entity into the chunk containing its position.</span> |
| <Link id="m-evaluatechunk" /><code>{"void EvaluateChunk()"}</code> | <span className="api-desc">Server: moves a root entity to the chunk holding its position. Still chunkless on the next check, it is unloaded (player-held pickups go to their postbox).</span> |
| <Link id="m-evaluatechunk-2" /><code>{"void EvaluateChunk(bool isLoggingOnFailure)"}</code> | <span className="api-desc">Server: moves a root entity to the chunk holding its position. Still chunkless on the next check, it is unloaded (player-held pickups go to their postbox).</span> |
| <Link id="m-setchunk" /><code>{"void SetChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" newChunk)"}</code> | <span className="api-desc">Moves the entity (and its children) to a chunk. On the server this is ignored for entities with a chunking parent.</span> |
| <Link id="m-setparent" /><code>{"void SetParent("}<Link to="/mod/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" target, bool isDestroying = false)"}</code> | <span className="api-desc">Sets the chunking parent (null to clear) and moves to its chunk.</span> |
| <Link id="m-setserveronly" /><code>{"void SetServerOnly(bool isServerOnly)"}</code> | <span className="api-desc">Hides the entity from every player, or spawns it for the players in its chunk again.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enddespawn" /><code>{"private void IChunker.EndDespawn("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" target, bool isUnloading, bool isChunkSync)"}</code> | <span className="api-desc">Explicit `IChunker` method: sends the entity destroyed message to the player for prefab entities.</span> |
| <Link id="m-endspawn" /><code>{"private void IChunker.EndSpawn("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" target, bool isChunkSync)"}</code> | <span className="api-desc">Explicit `IChunker` method: sends the initial serialization for serialized entities and runs `OnConnected` for the player.</span> |
| <Link id="m-posttoplayer" /><code>{"private async void PostToPlayer("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" oldChunk, Vector3 position, int playerId)"}</code> | <span className="api-desc">Pushes the entity into the postbox of the player who last held it, used when it falls out of every chunk.</span> |
| <Link id="m-setchunkinternal" /><code>{"private void SetChunkInternal("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" newChunk)"}</code> | <span className="api-desc">Moves the entity and its child chunkers to a chunk, finishes pending spawns and despawns, and fires `EnteredChunk` and `LeftChunk`.</span> |
| <Link id="m-startdespawn" /><code>{"private bool IChunker.StartDespawn("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" target, bool hasMovedChunks, bool isChunkSync)"}</code> | <span className="api-desc">Explicit `IChunker` method: removes the player from `SpawnedForPlayers` and runs `OnDisconnected` on the entity.</span> |
| <Link id="m-startspawn" /><code>{"private bool IChunker.StartSpawn("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" target, bool hasMovedChunks, bool isChunkSync)"}</code> | <span className="api-desc">Explicit `IChunker` method: adds the player to `SpawnedForPlayers` and sends the spawn message for prefab entities.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Chunker`:

<div className="api-used-in">

[`EntitySerializer.chunker`](/mod/game-api/types/alta-networking/entityserializer#m-chunker), [`IChunkedEntity.Chunker`](/mod/game-api/types/alta-networking/ichunkedentity#m-chunker), [`NetworkEntity.Alta.Networking.IChunkedEntity.Chunker`](/mod/game-api/types/alta-networking/networkentity#m-alta-networking-ichunkedentity-chunker), [`NetworkEntity.chunker`](/mod/game-api/types/alta-networking/networkentity#m-chunker), [`NetworkEntity.Chunker`](/mod/game-api/types/alta-networking/networkentity#m-chunker-2), [`NetworkPrefab.AccumulateChildPrefabs`](/mod/game-api/types/alta-networking/networkprefab#m-accumulatechildprefabs), [`ChunkDetector.chunker`](/mod/game-api/types/global-c-d/chunkdetector#m-chunker), [`ChunkDetector.StartCheckingForChunkChange`](/mod/game-api/types/global-c-d/chunkdetector#m-startcheckingforchunkchange), [`ChunkerChangedHandler.BeginInvoke`](/mod/game-api/types/global-c-d/chunkerchangedhandler#m-begininvoke), [`ChunkerChangedHandler.Invoke`](/mod/game-api/types/global-c-d/chunkerchangedhandler#m-invoke), [`IChunker.Children`](/mod/game-api/types/global-i-l/ichunker#m-children), [`IChunker.Parent`](/mod/game-api/types/global-i-l/ichunker#m-parent).

</div>
