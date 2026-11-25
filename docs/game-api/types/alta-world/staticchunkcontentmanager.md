---
title: "StaticChunkContentManager"
description: "The chunk's static scenery pointers. Servers load the collider-only version."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticChunkContentManager

A **class** in `Root.Township`, `Alta.Chunks`.

The chunk's static scenery pointers. Servers load the collider-only version.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`ChunkContentManager`](/game-api/types/alta-world/chunkcontentmanager)
- **Nested types** [`Skip`](/game-api/types/alta-world/staticchunkcontentmanager-skip)
- **Documented in** [Chunk loading and saving](/game-api/world/chunk-loading-and-saving)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StaticChunkContentManager("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, bool isLogging = false)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isloadingpointers" /><code>{"static bool IsLoadingPointers"}</code> |  |
| <Link id="m-isloadingsequentially" /><code>{"static bool IsLoadingSequentially"}</code> |  |
| <Link id="m-pointerstoloadperframe" /><code>{"static int PointersToLoadPerFrame"}</code> |  |
| <Link id="m-islogging" /><code>{"private bool isLogging"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-pointercount" /><code>{"private int pointerCount"}</code> |  |
| <Link id="m-pointers" /><code>{"private List<string> pointers"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadinternal" /><code>{"protected override async Task LoadInternal()"}</code> |  |
| <Link id="m-loadpointerasync" /><code>{"private async Task LoadPointerAsync(string pointer)"}</code> |  |
| <Link id="m-unloadinternal" /><code>{"protected override async Task UnloadInternal()"}</code> |  |

## Used in

Members of other types that take, return or hold a `StaticChunkContentManager`:

[`ClientChunkContentManager.staticContentManager`](/game-api/types/alta-world/clientchunkcontentmanager#m-staticcontentmanager), [`ServerChunkContentManager.StaticManager`](/game-api/types/alta-world/serverchunkcontentmanager#m-staticmanager).
