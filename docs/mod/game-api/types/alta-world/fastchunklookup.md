---
title: "FastChunkLookup"
description: "Fast lookup from positions or bounds to location chunks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FastChunkLookup

A **class** in `Root.Township`, `Alta.Chunks`.

Fast lookup from positions or bounds to location chunks. Overworld chunks sit in a grid indexed by position; other chunks (caves and so on) are checked one by one. `LocationChunkHelper` holds the one the game uses.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FastChunkLookup(IEnumerable<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> chunks)"}</code> | Creates a `FastChunkLookup` from `chunks`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunksize" /><code>{"private float chunkSize"}</code> | Width of one overworld chunk, taken from the first grid chunk's bounds. |
| <Link id="m-chunksperside" /><code>{"private int chunksPerSide"}</code> | Number of overworld chunks along each side of the square grid. |
| <Link id="m-maporigin" /><code>{"private Vector3 mapOrigin"}</code> | Minimum corner of the overworld grid in world space. |
| <Link id="m-maxy" /><code>{"private float maxY"}</code> | Top of the overworld chunks' bounds. Positions above it skip the grid lookup. |
| <Link id="m-miny" /><code>{"private float minY"}</code> | Bottom of the overworld chunks' bounds. Positions below it skip the grid lookup. |
| <Link id="m-otherchunkbounds" /><code>{"private Bounds otherChunkBounds"}</code> | Bounds that enclose all non-overworld chunks, rebuilt by `ResetOtherChunksBounds`. |
| <Link id="m-otherchunks" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> otherChunks"}</code> | Location chunks that aren't part of the overworld grid. These are checked one by one by bounds. |
| <Link id="m-overworldchunks" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/overworldchunk">{"OverworldChunk"}</Link>{"[,] overworldChunks"}</code> | The overworld chunks as a 2D grid by x and z index, for direct lookup by position. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-emptylookup" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/fastchunklookup">{"FastChunkLookup"}</Link>{" EmptyLookup { get; }"}</code> | A shared lookup with no chunks. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregisterotherchunk" /><code>{"void DeregisterOtherChunk("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Removes a non-overworld chunk from the lookup. |
| <Link id="m-getallchunksbyindex" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetAllChunksByIndex(int xIndex, int zIndex, int xMaxIndex, int zMaxIndex) (iterator)"}</code> | Overworld chunks in a range of grid indexes, clamped to the grid. |
| <Link id="m-getallchunkscontainingposition" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetAllChunksContainingPosition(Vector3 position, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk = null) (iterator)"}</code> | Chunks whose bounds contain the position. Checks the current chunk and its neighbours first and stops there if any match. |
| <Link id="m-getallchunksintersectingbounds" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetAllChunksIntersectingBounds(Bounds bounds) (iterator)"}</code> | Overworld grid chunks overlapping the bounds, plus other chunks that intersect them. |
| <Link id="m-getbestchunkcontainingposition" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" GetBestChunkContainingPosition(Vector3 position, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk = null)"}</code> | The highest priority chunk containing the position, or null. |
| <Link id="m-getbestchunkintersectingbounds" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" GetBestChunkIntersectingBounds(Bounds bounds)"}</code> | The highest priority chunk intersecting the bounds, or null. |
| <Link id="m-getchunkstoloadwithinradius" /><code>{"void GetChunksToLoadWithinRadius("}<Link to="/mod/game-api/types/alta-world/overworldchunk">{"OverworldChunk"}</Link>{" center, float radius, HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> result)"}</code> | Adds overworld chunks within a radius (in chunks) of a centre chunk to the set, plus chunks reached through forced adjacent connections. |
| <Link id="m-getoverworldchunkatposition" /><code><Link to="/mod/game-api/types/alta-world/overworldchunk">{"OverworldChunk"}</Link>{" GetOverworldChunkAtPosition(Vector3 position)"}</code> | The overworld grid chunk at the position, or null if it is outside the grid or its height range. |
| <Link id="m-isinoverworldchunk" /><code>{"bool IsInOverworldChunk(Vector3 position)"}</code> | True unless the position is inside a non-overworld chunk. |
| <Link id="m-isoutdated" /><code>{"bool IsOutdated()"}</code> | True if the grid is empty or its first chunk has been destroyed. |
| <Link id="m-registerotherchunk" /><code>{"void RegisterOtherChunk("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Adds a non-overworld chunk to the lookup. |
| <Link id="m-removeotherchunk" /><code>{"void RemoveOtherChunk("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" otherChunk)"}</code> | Same as `DeregisterOtherChunk`. |
| <Link id="m-resetotherchunksbounds" /><code>{"void ResetOtherChunksBounds()"}</code> | Recomputes the combined bounds of all non-overworld chunks. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addchunksingrid" /><code>{"private void AddChunksInGrid(HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> chunks, int xMin, int xMax, int z, int xCenter, int zCenter, float totalRadius)"}</code> | Adds one row of overworld chunks to the load set, and follows each chunk's forced-adjacent connections with the remaining radius budget. |
| <Link id="m-getbestchunk" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" GetBestChunk(IEnumerable<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> chunks)"}</code> | Returns the chunk with the highest `Priority` from a list, or null. |
| <Link id="m-getxindex" /><code>{"private int GetXIndex(float x)"}</code> | Converts a world x position to an overworld grid column. |
| <Link id="m-getzindex" /><code>{"private int GetZIndex(float z)"}</code> | Converts a world z position to an overworld grid row. |

</details>

## Used in

Members of other types that take, return or hold a `FastChunkLookup`:

[`LocationChunkHelper.chunkLookup`](/mod/game-api/types/alta-world/locationchunkhelper#m-chunklookup), [`NetworkEntity.EditorEvaluateChunk`](/mod/game-api/types/alta-networking/networkentity#m-editorevaluatechunk), [`Chunker.EditorEvaluateChunk`](/mod/game-api/types/global-c-d/chunker#m-editorevaluatechunk).
