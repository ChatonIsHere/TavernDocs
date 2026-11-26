---
title: "StaticChunkContentManager"
description: "Loads and unloads a chunk's static prefab pointers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticChunkContentManager

A **class** in `Root.Township`, `Alta.Chunks`.

Loads and unloads a chunk's static prefab pointers. A headless server loads the collider only pointers; clients load the normal ones.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`ChunkContentManager`](/game-api/types/alta-world/chunkcontentmanager)
- **Nested types** [`Skip`](/game-api/types/alta-world/staticchunkcontentmanager-skip)
- **Documented in** [Chunk loading and saving](/game-api/world/chunk-loading-and-saving)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticChunkContentManager("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, bool isLogging = false)"}</code> | Creates a `StaticChunkContentManager` from `chunk` and `isLogging`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isloadingpointers" /><code>{"static bool IsLoadingPointers"}</code> | Static switch; when false, pointers are not loaded at all. Defaults to true. |
| <Link id="m-isloadingsequentially" /><code>{"static bool IsLoadingSequentially"}</code> | Static switch; when true, pointers load one at a time instead of all together. Defaults to false. |
| <Link id="m-pointerstoloadperframe" /><code>{"static int PointersToLoadPerFrame"}</code> | Static: how many pointer loads start before yielding a frame. Defaults to 10. |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-islogging" /><code>{"private bool isLogging"}</code> | Private: set from the constructor. Not read in this build. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Private: logs pointer load errors. |
| <Link id="m-pointercount" /><code>{"private int pointerCount"}</code> | Private: number of pointers. |
| <Link id="m-pointers" /><code>{"private List<string> pointers"}</code> | Private: the pointer names for this chunk, collider only on headless. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadinternal" /><code>{"protected override async Task LoadInternal()"}</code> | Starts every pointer load, yielding a frame every `PointersToLoadPerFrame`, then waits for them all. Stops early if the chunk is unloading. |
| <Link id="m-unloadinternal" /><code>{"protected override async Task UnloadInternal()"}</code> | Releases this chunk's use of each pointer. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loadpointerasync" /><code>{"private async Task LoadPointerAsync(string pointer)"}</code> | Private: uses one pointer for this chunk and waits for it to load. Errors are logged and the pointer skipped. |

</details>

## Used in

Members of other types that take, return or hold a `StaticChunkContentManager`:

[`ClientChunkContentManager.staticContentManager`](/game-api/types/alta-world/clientchunkcontentmanager#m-staticcontentmanager), [`ServerChunkContentManager.StaticManager`](/game-api/types/alta-world/serverchunkcontentmanager#m-staticmanager).
