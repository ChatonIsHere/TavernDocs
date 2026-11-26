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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested in** [`ChunkPrefabPointer`](/game-api/types/alta-world/chunkprefabpointer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PointerInstance(string reference, AsyncOperationHandle<GameObject> handler)"}</code> | Creates a `ChunkPrefabPointer.PointerInstance` from `reference` and `handler`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"AsyncOperationHandle<GameObject> Handler { get; }"}</code> | The Addressables load handle for the prefab. |
| <Link id="m-isfinished" /><code>{"bool IsFinished { get; private set; }"}</code> | True once the Addressables load has completed. |
| <Link id="m-isloaded" /><code>{"bool IsLoaded { get; set; }"}</code> | True while the prefab is instantiated in the scene. |
| <Link id="m-loadedsource" /><code>{"TaskCompletionSource<bool> LoadedSource { get; private set; }"}</code> | Completes true when the pointer is instantiated, or false if every chunk stopped using it first. |
| <Link id="m-reference" /><code>{"string Reference { get; }"}</code> | The Addressables key of the prefab. |
| <Link id="m-spawned" /><code>{"GameObject Spawned { get; set; }"}</code> | The instantiated copy, or null when not loaded. |
| <Link id="m-uses" /><code>{"HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> Uses { get; }"}</code> | The chunks using this pointer right now. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-unuse" /><code>{"bool Unuse("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Drops a chunk. When the last one goes, queues the instance for destroying. Returns true if no users are left. |
| <Link id="m-use" /><code>{"void Use("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Adds a chunk as a user. The first user queues the prefab to be instantiated. |

## Used in

Members of other types that take, return or hold a `PointerInstance`:

[`ChunkPrefabPointer.inRam`](/game-api/types/alta-world/chunkprefabpointer#m-inram), [`ChunkPrefabPointer.lastSpawned`](/game-api/types/alta-world/chunkprefabpointer#m-lastspawned), [`ChunkPrefabPointer.spawnedPointer`](/game-api/types/alta-world/chunkprefabpointer#m-spawnedpointer), [`ChunkPrefabPointer.waitingForLoad`](/game-api/types/alta-world/chunkprefabpointer#m-waitingforload), [`ChunkPrefabPointer.waitingForUnload`](/game-api/types/alta-world/chunkprefabpointer#m-waitingforunload), [`PointerReference.pointer`](/game-api/types/alta-world/pointerreference#m-pointer).
