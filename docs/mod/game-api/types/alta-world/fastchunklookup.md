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
| <Link id="m-ctor" /><code>{"FastChunkLookup(IEnumerable<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> chunks)"}</code> | <span className="api-desc">Creates a `FastChunkLookup` from `chunks`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunksize" /><code>{"private float chunkSize"}</code> | <span className="api-desc">Width of one overworld chunk, taken from the first grid chunk's bounds.</span> |
| <Link id="m-chunksperside" /><code>{"private int chunksPerSide"}</code> | <span className="api-desc">Number of overworld chunks along each side of the square grid.</span> |
| <Link id="m-maporigin" /><code>{"private Vector3 mapOrigin"}</code> | <span className="api-desc">Minimum corner of the overworld grid in world space.</span> |
| <Link id="m-maxy" /><code>{"private float maxY"}</code> | <span className="api-desc">Top of the overworld chunks' bounds. Positions above it skip the grid lookup.</span> |
| <Link id="m-miny" /><code>{"private float minY"}</code> | <span className="api-desc">Bottom of the overworld chunks' bounds. Positions below it skip the grid lookup.</span> |
| <Link id="m-otherchunkbounds" /><code>{"private Bounds otherChunkBounds"}</code> | <span className="api-desc">Bounds that enclose all non-overworld chunks, rebuilt by `ResetOtherChunksBounds`.</span> |
| <Link id="m-otherchunks" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> otherChunks"}</code> | <span className="api-desc">Location chunks that aren't part of the overworld grid. These are checked one by one by bounds.</span> |
| <Link id="m-overworldchunks" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/overworldchunk">{"OverworldChunk"}</Link>{"[,] overworldChunks"}</code> | <span className="api-desc">The overworld chunks as a 2D grid by x and z index, for direct lookup by position.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-emptylookup" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/fastchunklookup">{"FastChunkLookup"}</Link>{" EmptyLookup { get; }"}</code> | <span className="api-desc">A shared lookup with no chunks.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregisterotherchunk" /><code>{"void DeregisterOtherChunk("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Removes a non-overworld chunk from the lookup.</span> |
| <Link id="m-getallchunksbyindex" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetAllChunksByIndex(int xIndex, int zIndex, int xMaxIndex, int zMaxIndex) (iterator)"}</code> | <span className="api-desc">Overworld chunks in a range of grid indexes, clamped to the grid.</span> |
| <Link id="m-getallchunkscontainingposition" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetAllChunksContainingPosition(Vector3 position, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk = null) (iterator)"}</code> | <span className="api-desc">Chunks whose bounds contain the position. Checks the current chunk and its neighbours first and stops there if any match.</span> |
| <Link id="m-getallchunksintersectingbounds" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetAllChunksIntersectingBounds(Bounds bounds) (iterator)"}</code> | <span className="api-desc">Overworld grid chunks overlapping the bounds, plus other chunks that intersect them.</span> |
| <Link id="m-getbestchunkcontainingposition" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" GetBestChunkContainingPosition(Vector3 position, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk = null)"}</code> | <span className="api-desc">The highest priority chunk containing the position, or null.</span> |
| <Link id="m-getbestchunkintersectingbounds" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" GetBestChunkIntersectingBounds(Bounds bounds)"}</code> | <span className="api-desc">The highest priority chunk intersecting the bounds, or null.</span> |
| <Link id="m-getchunkstoloadwithinradius" /><code>{"void GetChunksToLoadWithinRadius("}<Link to="/mod/game-api/types/alta-world/overworldchunk">{"OverworldChunk"}</Link>{" center, float radius, HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> result)"}</code> | <span className="api-desc">Adds overworld chunks within a radius (in chunks) of a centre chunk to the set, plus chunks reached through forced adjacent connections.</span> |
| <Link id="m-getoverworldchunkatposition" /><code><Link to="/mod/game-api/types/alta-world/overworldchunk">{"OverworldChunk"}</Link>{" GetOverworldChunkAtPosition(Vector3 position)"}</code> | <span className="api-desc">The overworld grid chunk at the position, or null if it is outside the grid or its height range.</span> |
| <Link id="m-isinoverworldchunk" /><code>{"bool IsInOverworldChunk(Vector3 position)"}</code> | <span className="api-desc">True unless the position is inside a non-overworld chunk.</span> |
| <Link id="m-isoutdated" /><code>{"bool IsOutdated()"}</code> | <span className="api-desc">True if the grid is empty or its first chunk has been destroyed.</span> |
| <Link id="m-registerotherchunk" /><code>{"void RegisterOtherChunk("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Adds a non-overworld chunk to the lookup.</span> |
| <Link id="m-removeotherchunk" /><code>{"void RemoveOtherChunk("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" otherChunk)"}</code> | <span className="api-desc">Same as `DeregisterOtherChunk`.</span> |
| <Link id="m-resetotherchunksbounds" /><code>{"void ResetOtherChunksBounds()"}</code> | <span className="api-desc">Recomputes the combined bounds of all non-overworld chunks.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addchunksingrid" /><code>{"private void AddChunksInGrid(HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> chunks, int xMin, int xMax, int z, int xCenter, int zCenter, float totalRadius)"}</code> | <span className="api-desc">Adds one row of overworld chunks to the load set, and follows each chunk's forced-adjacent connections with the remaining radius budget.</span> |
| <Link id="m-getbestchunk" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" GetBestChunk(IEnumerable<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> chunks)"}</code> | <span className="api-desc">Returns the chunk with the highest `Priority` from a list, or null.</span> |
| <Link id="m-getxindex" /><code>{"private int GetXIndex(float x)"}</code> | <span className="api-desc">Converts a world x position to an overworld grid column.</span> |
| <Link id="m-getzindex" /><code>{"private int GetZIndex(float z)"}</code> | <span className="api-desc">Converts a world z position to an overworld grid row.</span> |

</details>

## Used in

Members of other types that take, return or hold a `FastChunkLookup`:

<div className="api-used-in">

[`LocationChunkHelper.chunkLookup`](/mod/game-api/types/alta-world/locationchunkhelper#m-chunklookup), [`NetworkEntity.EditorEvaluateChunk`](/mod/game-api/types/alta-networking/networkentity#m-editorevaluatechunk), [`Chunker.EditorEvaluateChunk`](/mod/game-api/types/global-c-d/chunker#m-editorevaluatechunk).

</div>
