---
title: "OverworldChunk"
description: "A LocationChunk in the square grid that covers the outdoor map. Named \"Chunk <x>-<z>\"."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OverworldChunk

A **class** in `Root.Township`, `Alta.Chunks`.

A `LocationChunk` in the square grid that covers the outdoor map. Named `"Chunk <x>-<z>"`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`LocationChunk`](/game-api/types/alta-world/locationchunk)
- **Documented in** [Chunks](/game-api/world/chunks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OverworldChunk()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-gridxindex" /><code>{"private int gridXIndex"}</code> |  |
| <Link id="m-gridzindex" /><code>{"private int gridZIndex"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-gridxindex-2" /><code>{"int GridXIndex { get; }"}</code> |  |
| <Link id="m-gridzindex-2" /><code>{"int GridZIndex { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createchunkidentifier" /><code>{"static string CreateChunkIdentifier(int xIndex, int yIndex)"}</code> |  |
| <Link id="m-getneighboursforloading" /><code>{"override void GetNeighboursForLoading(float remainingLoadBudget, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> result)"}</code> |  |
| <Link id="m-setgridposition" /><code>{"void SetGridPosition(int xIndex, int zIndex)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `OverworldChunk`:

[`FastChunkLookup.GetChunksToLoadWithinRadius`](/game-api/types/alta-world/fastchunklookup#m-getchunkstoloadwithinradius), [`FastChunkLookup.GetOverworldChunkAtPosition`](/game-api/types/alta-world/fastchunklookup#m-getoverworldchunkatposition), [`FastChunkLookup.overworldChunks`](/game-api/types/alta-world/fastchunklookup#m-overworldchunks), [`LocationChunkHelper.GetChunksWithinRadius`](/game-api/types/alta-world/locationchunkhelper#m-getchunkswithinradius), [`LocationChunkHelper.GetOverworldChunkAtPosition`](/game-api/types/alta-world/locationchunkhelper#m-getoverworldchunkatposition).
