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
| <Link id="m-ctor" /><code>{"OverworldChunk()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gridxindex" /><code>{"private int gridXIndex"}</code> | <span className="api-desc">Backing field for `GridXIndex`.</span> |
| <Link id="m-gridzindex" /><code>{"private int gridZIndex"}</code> | <span className="api-desc">Backing field for `GridZIndex`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-gridxindex-2" /><code>{"int GridXIndex { get; }"}</code> | <span className="api-desc">X index of this chunk in the overworld grid.</span> |
| <Link id="m-gridzindex-2" /><code>{"int GridZIndex { get; }"}</code> | <span className="api-desc">Z index of this chunk in the overworld grid.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createchunkidentifier" /><code>{"static string CreateChunkIdentifier(int xIndex, int yIndex)"}</code> | <span className="api-desc">Builds the identifier string for a grid cell, in the form `Chunk x-y`.</span> |
| <Link id="m-getneighboursforloading" /><code>{"override void GetNeighboursForLoading(float remainingLoadBudget, HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> result)"}</code> | <span className="api-desc">Adds the base neighbours, then all overworld chunks within the remaining load budget radius.</span> |
| <Link id="m-setgridposition" /><code>{"void SetGridPosition(int xIndex, int zIndex)"}</code> | <span className="api-desc">Sets the X and Z grid indexes.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Just calls the base `OnValidate`.</span> |

## Used in

Members of other types that take, return or hold a `OverworldChunk`:

<div className="api-used-in">

[`FastChunkLookup.GetChunksToLoadWithinRadius`](/mod/game-api/types/alta-world/fastchunklookup#m-getchunkstoloadwithinradius), [`FastChunkLookup.GetOverworldChunkAtPosition`](/mod/game-api/types/alta-world/fastchunklookup#m-getoverworldchunkatposition), [`FastChunkLookup.overworldChunks`](/mod/game-api/types/alta-world/fastchunklookup#m-overworldchunks), [`LocationChunkHelper.GetChunksWithinRadius`](/mod/game-api/types/alta-world/locationchunkhelper#m-getchunkswithinradius), [`LocationChunkHelper.GetOverworldChunkAtPosition`](/mod/game-api/types/alta-world/locationchunkhelper#m-getoverworldchunkatposition).

</div>
