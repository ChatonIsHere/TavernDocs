---
title: "FastChunkLookup"
description: "class FastChunkLookup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FastChunkLookup

A **class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FastChunkLookup(IEnumerable<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> chunks)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunksize" /><code>{"private float chunkSize"}</code> |  |
| <Link id="m-chunksperside" /><code>{"private int chunksPerSide"}</code> |  |
| <Link id="m-maporigin" /><code>{"private Vector3 mapOrigin"}</code> |  |
| <Link id="m-maxy" /><code>{"private float maxY"}</code> |  |
| <Link id="m-miny" /><code>{"private float minY"}</code> |  |
| <Link id="m-otherchunkbounds" /><code>{"private Bounds otherChunkBounds"}</code> |  |
| <Link id="m-otherchunks" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> otherChunks"}</code> |  |
| <Link id="m-overworldchunks" /><code>{"private "}<Link to="/game-api/types/alta-world/overworldchunk">{"OverworldChunk"}</Link>{"[,] overworldChunks"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-emptylookup" /><code>{"static "}<Link to="/game-api/types/alta-world/fastchunklookup">{"FastChunkLookup"}</Link>{" EmptyLookup { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deregisterotherchunk" /><code>{"void DeregisterOtherChunk("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-getallchunksbyindex" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetAllChunksByIndex(int xIndex, int zIndex, int xMaxIndex, int zMaxIndex) (iterator)"}</code> |  |
| <Link id="m-getallchunkscontainingposition" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetAllChunksContainingPosition(Vector3 position, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk = null) (iterator)"}</code> |  |
| <Link id="m-getallchunksintersectingbounds" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetAllChunksIntersectingBounds(Bounds bounds) (iterator)"}</code> |  |
| <Link id="m-getbestchunkcontainingposition" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" GetBestChunkContainingPosition(Vector3 position, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk = null)"}</code> |  |
| <Link id="m-getbestchunkintersectingbounds" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" GetBestChunkIntersectingBounds(Bounds bounds)"}</code> |  |
| <Link id="m-getchunkstoloadwithinradius" /><code>{"void GetChunksToLoadWithinRadius("}<Link to="/game-api/types/alta-world/overworldchunk">{"OverworldChunk"}</Link>{" center, float radius, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> result)"}</code> |  |
| <Link id="m-getoverworldchunkatposition" /><code><Link to="/game-api/types/alta-world/overworldchunk">{"OverworldChunk"}</Link>{" GetOverworldChunkAtPosition(Vector3 position)"}</code> |  |
| <Link id="m-isinoverworldchunk" /><code>{"bool IsInOverworldChunk(Vector3 position)"}</code> |  |
| <Link id="m-isoutdated" /><code>{"bool IsOutdated()"}</code> |  |
| <Link id="m-registerotherchunk" /><code>{"void RegisterOtherChunk("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-removeotherchunk" /><code>{"void RemoveOtherChunk("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" otherChunk)"}</code> |  |
| <Link id="m-resetotherchunksbounds" /><code>{"void ResetOtherChunksBounds()"}</code> |  |
| <Link id="m-addchunksingrid" /><code>{"private void AddChunksInGrid(HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> chunks, int xMin, int xMax, int z, int xCenter, int zCenter, float totalRadius)"}</code> |  |
| <Link id="m-getbestchunk" /><code>{"private static "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" GetBestChunk(IEnumerable<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> chunks)"}</code> |  |
| <Link id="m-getxindex" /><code>{"private int GetXIndex(float x)"}</code> |  |
| <Link id="m-getzindex" /><code>{"private int GetZIndex(float z)"}</code> |  |

## Used in

Members of other types that take, return or hold a `FastChunkLookup`:

[`LocationChunkHelper.chunkLookup`](/game-api/types/alta-world/locationchunkhelper#m-chunklookup), [`NetworkEntity.EditorEvaluateChunk`](/game-api/types/alta-networking/networkentity#m-editorevaluatechunk), [`Chunker.EditorEvaluateChunk`](/game-api/types/global-c-d/chunker#m-editorevaluatechunk).
