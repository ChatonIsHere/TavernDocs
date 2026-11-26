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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`ChunkContentManager`](/mod/game-api/types/alta-world/chunkcontentmanager)
- **Nested types** [`Skip`](/mod/game-api/types/alta-world/staticchunkcontentmanager-skip)
- **Documented in** [Chunk loading and saving](/mod/game-api/world/chunk-loading-and-saving)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticChunkContentManager("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, bool isLogging = false)"}</code> | <span className="api-desc">Creates a `StaticChunkContentManager` from `chunk` and `isLogging`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isloadingpointers" /><code>{"static bool IsLoadingPointers"}</code> | <span className="api-desc">Static switch; when false, pointers are not loaded at all. Defaults to true.</span> |
| <Link id="m-isloadingsequentially" /><code>{"static bool IsLoadingSequentially"}</code> | <span className="api-desc">Static switch; when true, pointers load one at a time instead of all together. Defaults to false.</span> |
| <Link id="m-pointerstoloadperframe" /><code>{"static int PointersToLoadPerFrame"}</code> | <span className="api-desc">Static: how many pointer loads start before yielding a frame. Defaults to 10.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-islogging" /><code>{"private bool isLogging"}</code> | <span className="api-desc">Private: set from the constructor. Not read in this build.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Private: logs pointer load errors.</span> |
| <Link id="m-pointercount" /><code>{"private int pointerCount"}</code> | <span className="api-desc">Private: number of pointers.</span> |
| <Link id="m-pointers" /><code>{"private List<string> pointers"}</code> | <span className="api-desc">Private: the pointer names for this chunk, collider only on headless.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadinternal" /><code>{"protected override async Task LoadInternal()"}</code> | <span className="api-desc">Starts every pointer load, yielding a frame every `PointersToLoadPerFrame`, then waits for them all. Stops early if the chunk is unloading.</span> |
| <Link id="m-unloadinternal" /><code>{"protected override async Task UnloadInternal()"}</code> | <span className="api-desc">Releases this chunk's use of each pointer.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loadpointerasync" /><code>{"private async Task LoadPointerAsync(string pointer)"}</code> | <span className="api-desc">Private: uses one pointer for this chunk and waits for it to load. Errors are logged and the pointer skipped.</span> |

</details>

## Used in

Members of other types that take, return or hold a `StaticChunkContentManager`:

<div className="api-used-in">

[`ClientChunkContentManager.staticContentManager`](/mod/game-api/types/alta-world/clientchunkcontentmanager#m-staticcontentmanager), [`ServerChunkContentManager.StaticManager`](/mod/game-api/types/alta-world/serverchunkcontentmanager#m-staticmanager).

</div>
