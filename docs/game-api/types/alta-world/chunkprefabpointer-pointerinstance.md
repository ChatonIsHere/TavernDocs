---
title: "ChunkPrefabPointer.PointerInstance"
description: "class ChunkPrefabPointer.PointerInstance in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkPrefabPointer.PointerInstance

A **class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested in** [`ChunkPrefabPointer`](/game-api/types/alta-world/chunkprefabpointer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PointerInstance(string reference, AsyncOperationHandle<GameObject> handler)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"AsyncOperationHandle<GameObject> Handler { get; }"}</code> |  |
| <Link id="m-isfinished" /><code>{"bool IsFinished { get; private set; }"}</code> |  |
| <Link id="m-isloaded" /><code>{"bool IsLoaded { get; set; }"}</code> |  |
| <Link id="m-loadedsource" /><code>{"TaskCompletionSource<bool> LoadedSource { get; private set; }"}</code> |  |
| <Link id="m-reference" /><code>{"string Reference { get; }"}</code> |  |
| <Link id="m-spawned" /><code>{"GameObject Spawned { get; set; }"}</code> |  |
| <Link id="m-uses" /><code>{"HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> Uses { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-unuse" /><code>{"bool Unuse("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-use" /><code>{"void Use("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PointerInstance`:

[`ChunkPrefabPointer.inRam`](/game-api/types/alta-world/chunkprefabpointer#m-inram), [`ChunkPrefabPointer.lastSpawned`](/game-api/types/alta-world/chunkprefabpointer#m-lastspawned), [`ChunkPrefabPointer.spawnedPointer`](/game-api/types/alta-world/chunkprefabpointer#m-spawnedpointer), [`ChunkPrefabPointer.waitingForLoad`](/game-api/types/alta-world/chunkprefabpointer#m-waitingforload), [`ChunkPrefabPointer.waitingForUnload`](/game-api/types/alta-world/chunkprefabpointer#m-waitingforunload), [`PointerReference.pointer`](/game-api/types/alta-world/pointerreference#m-pointer).
