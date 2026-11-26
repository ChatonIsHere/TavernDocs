---
title: "ChunkPrefabPointer.PointerInstance"
description: "One loaded static scenery pointer (an Addressables prefab) shared by every chunk that uses it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkPrefabPointer.PointerInstance

A **class** in `Root.Township`, `Alta.Chunks`.

One loaded static scenery pointer (an Addressables prefab) shared by every chunk that uses it. `ChunkPrefabPointer` creates these and instantiates or destroys them in its load queue.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Nested in** [`ChunkPrefabPointer`](/mod/game-api/types/alta-world/chunkprefabpointer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PointerInstance(string reference, AsyncOperationHandle<GameObject> handler)"}</code> | <span className="api-desc">Creates a `ChunkPrefabPointer.PointerInstance` from `reference` and `handler`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"AsyncOperationHandle<GameObject> Handler { get; }"}</code> | <span className="api-desc">The Addressables load handle for the prefab.</span> |
| <Link id="m-isfinished" /><code>{"bool IsFinished { get; private set; }"}</code> | <span className="api-desc">True once the Addressables load has completed.</span> |
| <Link id="m-isloaded" /><code>{"bool IsLoaded { get; set; }"}</code> | <span className="api-desc">True while the prefab is instantiated in the scene.</span> |
| <Link id="m-loadedsource" /><code>{"TaskCompletionSource<bool> LoadedSource { get; private set; }"}</code> | <span className="api-desc">Completes true when the pointer is instantiated, or false if every chunk stopped using it first.</span> |
| <Link id="m-reference" /><code>{"string Reference { get; }"}</code> | <span className="api-desc">The Addressables key of the prefab.</span> |
| <Link id="m-spawned" /><code>{"GameObject Spawned { get; set; }"}</code> | <span className="api-desc">The instantiated copy, or null when not loaded.</span> |
| <Link id="m-uses" /><code>{"HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> Uses { get; }"}</code> | <span className="api-desc">The chunks using this pointer right now.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-unuse" /><code>{"bool Unuse("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Drops a chunk. When the last one goes, queues the instance for destroying. Returns true if no users are left.</span> |
| <Link id="m-use" /><code>{"void Use("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Adds a chunk as a user. The first user queues the prefab to be instantiated.</span> |

## Used in

Members of other types that take, return or hold a `PointerInstance`:

<div className="api-used-in">

[`ChunkPrefabPointer.inRam`](/mod/game-api/types/alta-world/chunkprefabpointer#m-inram), [`ChunkPrefabPointer.lastSpawned`](/mod/game-api/types/alta-world/chunkprefabpointer#m-lastspawned), [`ChunkPrefabPointer.spawnedPointer`](/mod/game-api/types/alta-world/chunkprefabpointer#m-spawnedpointer), [`ChunkPrefabPointer.waitingForLoad`](/mod/game-api/types/alta-world/chunkprefabpointer#m-waitingforload), [`ChunkPrefabPointer.waitingForUnload`](/mod/game-api/types/alta-world/chunkprefabpointer#m-waitingforunload), [`PointerReference.pointer`](/mod/game-api/types/alta-world/pointerreference#m-pointer).

</div>
