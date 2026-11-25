---
title: "Chunker"
description: "Every NetworkEntity makes one in its constructor. It's protected on NetworkEntity (reach it as ((IChunkedEntity)entity).Chunker)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Chunker

A **class** in `Root.Township`, no namespace.

Every `NetworkEntity` makes one in its constructor. It's `protected` on `NetworkEntity` (reach it as `((IChunkedEntity)entity).Chunker`).

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`IChunker`](/game-api/types/global-i-l/ichunker)
- **Documented in** [Chunks](/game-api/world/chunks#chunker-how-an-entity-belongs-to-a-chunk)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Chunker("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" networkEntity)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-children" /><code>{"private readonly HashSet<"}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{"> children"}</code> |  |
| <Link id="m-chunkedentity" /><code>{"private readonly "}<Link to="/game-api/types/alta-networking/ichunkedentity">{"IChunkedEntity"}</Link>{" chunkedEntity"}</code> |  |
| <Link id="m-despawningfor" /><code>{"private readonly HashSet<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> despawningFor"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-parent" /><code>{"private "}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" parent"}</code> |  |
| <Link id="m-spawningfor" /><code>{"private readonly HashSet<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> spawningFor"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-childcount" /><code>{"int ChildCount { get; }"}</code> |  |
| <Link id="m-children-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{"> Children { get; }"}</code> |  |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; private set; }"}</code> |  |
| <Link id="m-isserveronly" /><code>{"bool IsServerOnly { get; private set; }"}</code> |  |
| <Link id="m-networkentity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" { get; }"}</code> |  |
| <Link id="m-parent-2" /><code><Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" Parent { get; private set; }"}</code> |  |
| <Link id="m-spawnedforplayers" /><code>{"HashSet<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> SpawnedForPlayers { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-enteredchunk" /><code>{"event "}<Link to="/game-api/types/global-c-d/chunkeventhandler">{"ChunkEventHandler"}</Link>{" EnteredChunk"}</code> |  |
| <Link id="m-leftchunk" /><code>{"event "}<Link to="/game-api/types/global-c-d/chunkeventhandler">{"ChunkEventHandler"}</Link>{" LeftChunk"}</code> |  |
| <Link id="m-parentchanged" /><code>{"event "}<Link to="/game-api/types/global-c-d/chunkerchangedhandler">{"ChunkerChangedHandler"}</Link>{" ParentChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-editorevaluatechunk" /><code>{"void EditorEvaluateChunk("}<Link to="/game-api/types/alta-world/fastchunklookup">{"FastChunkLookup"}</Link>{" chunkLookup)"}</code> |  |
| <Link id="m-evaluatechunk" /><code>{"void EvaluateChunk()"}</code> |  |
| <Link id="m-evaluatechunk-2" /><code>{"void EvaluateChunk(bool isLoggingOnFailure)"}</code> |  |
| <Link id="m-setchunk" /><code>{"void SetChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" newChunk)"}</code> |  |
| <Link id="m-setparent" /><code>{"void SetParent("}<Link to="/game-api/types/global-c-d/chunker">{"Chunker"}</Link>{" target, bool isDestroying = false)"}</code> |  |
| <Link id="m-setserveronly" /><code>{"void SetServerOnly(bool isServerOnly)"}</code> |  |
| <Link id="m-enddespawn" /><code>{"private void IChunker.EndDespawn("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" target, bool isUnloading, bool isChunkSync)"}</code> |  |
| <Link id="m-endspawn" /><code>{"private void IChunker.EndSpawn("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" target, bool isChunkSync)"}</code> |  |
| <Link id="m-posttoplayer" /><code>{"private async void PostToPlayer("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" oldChunk, Vector3 position, int playerId)"}</code> |  |
| <Link id="m-setchunkinternal" /><code>{"private void SetChunkInternal("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" newChunk)"}</code> |  |
| <Link id="m-startdespawn" /><code>{"private bool IChunker.StartDespawn("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" target, bool hasMovedChunks, bool isChunkSync)"}</code> |  |
| <Link id="m-startspawn" /><code>{"private bool IChunker.StartSpawn("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" target, bool hasMovedChunks, bool isChunkSync)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Chunker`:

[`EntitySerializer.chunker`](/game-api/types/alta-networking/entityserializer#m-chunker), [`IChunkedEntity.Chunker`](/game-api/types/alta-networking/ichunkedentity#m-chunker), [`NetworkEntity.Alta.Networking.IChunkedEntity.Chunker`](/game-api/types/alta-networking/networkentity#m-alta-networking-ichunkedentity-chunker), [`NetworkEntity.chunker`](/game-api/types/alta-networking/networkentity#m-chunker), [`NetworkEntity.Chunker`](/game-api/types/alta-networking/networkentity#m-chunker-2), [`NetworkPrefab.AccumulateChildPrefabs`](/game-api/types/alta-networking/networkprefab#m-accumulatechildprefabs), [`ChunkDetector.chunker`](/game-api/types/global-c-d/chunkdetector#m-chunker), [`ChunkDetector.StartCheckingForChunkChange`](/game-api/types/global-c-d/chunkdetector#m-startcheckingforchunkchange), [`ChunkerChangedHandler.BeginInvoke`](/game-api/types/global-c-d/chunkerchangedhandler#m-begininvoke), [`ChunkerChangedHandler.Invoke`](/game-api/types/global-c-d/chunkerchangedhandler#m-invoke), [`IChunker.Children`](/game-api/types/global-i-l/ichunker#m-children), [`IChunker.Parent`](/game-api/types/global-i-l/ichunker#m-parent).
