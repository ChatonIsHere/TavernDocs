---
title: "OverworldChunk"
description: "A LocationChunk in the overworld grid, with an X and Z grid index."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OverworldChunk

A **class** in `Root.Township`, `Alta.Chunks`.

A `LocationChunk` in the overworld grid, with an X and Z grid index. Loads the chunks around it by radius as well as its normal neighbours.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`LocationChunk`](/mod/game-api/types/alta-world/locationchunk)
- **Documented in** [Chunks](/mod/game-api/world/chunks)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OverworldChunk()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gridxindex" /><code>{"private int gridXIndex"}</code> | Backing field for `GridXIndex`. |
| <Link id="m-gridzindex" /><code>{"private int gridZIndex"}</code> | Backing field for `GridZIndex`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-gridxindex-2" /><code>{"int GridXIndex { get; }"}</code> | X index of this chunk in the overworld grid. |
| <Link id="m-gridzindex-2" /><code>{"int GridZIndex { get; }"}</code> | Z index of this chunk in the overworld grid. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createchunkidentifier" /><code>{"static string CreateChunkIdentifier(int xIndex, int yIndex)"}</code> | Builds the identifier string for a grid cell, in the form `Chunk x-y`. |
| <Link id="m-getneighboursforloading" /><code>{"override void GetNeighboursForLoading(float remainingLoadBudget, HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> result)"}</code> | Adds the base neighbours, then all overworld chunks within the remaining load budget radius. |
| <Link id="m-setgridposition" /><code>{"void SetGridPosition(int xIndex, int zIndex)"}</code> | Sets the X and Z grid indexes. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Just calls the base `OnValidate`. |

## Used in

Members of other types that take, return or hold a `OverworldChunk`:

[`FastChunkLookup.GetChunksToLoadWithinRadius`](/mod/game-api/types/alta-world/fastchunklookup#m-getchunkstoloadwithinradius), [`FastChunkLookup.GetOverworldChunkAtPosition`](/mod/game-api/types/alta-world/fastchunklookup#m-getoverworldchunkatposition), [`FastChunkLookup.overworldChunks`](/mod/game-api/types/alta-world/fastchunklookup#m-overworldchunks), [`LocationChunkHelper.GetChunksWithinRadius`](/mod/game-api/types/alta-world/locationchunkhelper#m-getchunkswithinradius), [`LocationChunkHelper.GetOverworldChunkAtPosition`](/mod/game-api/types/alta-world/locationchunkhelper#m-getoverworldchunkatposition).
