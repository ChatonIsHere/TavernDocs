---
title: "ChunkPositions"
description: "A location chunk's set of weighted surfaces for picking random spawn points."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkPositions

A **class** in `Root.Township`, `Alta.Chunks`.

A location chunk's set of weighted surfaces for picking random spawn points. Held by `LocationChunk.Positions`; `ChunkPositionSurface` components add themselves to it.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkPositions()"}</code> | <span className="api-desc">Creates a `ChunkPositions` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hassurfaces" /><code>{"private bool hasSurfaces"}</code> | <span className="api-desc">Backing field for `HasSurfaces`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hassurfaces-2" /><code>{"bool HasSurfaces { get; set; }"}</code> | <span className="api-desc">Whether the chunk has any position surfaces set up.</span> |
| <Link id="m-positiondefinitions" /><code>{"HashSet<"}<Link to="/mod/game-api/types/alta-world/chunkpositionsurface">{"ChunkPositionSurface"}</Link>{"> PositionDefinitions { get; }"}</code> | <span className="api-desc">The surfaces registered for this chunk. Each has a weight used by `GetPosition`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code><Link to="/mod/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"? GetPosition(int iterations, float maxAngleFromUpDot)"}</code> | <span className="api-desc">Picks a surface at random by weight and tries it up to `iterations` times for a point whose normal is steep enough. Returns null if none fits.</span> |

## Used in

Members of other types that take, return or hold a `ChunkPositions`:

<div className="api-used-in">

[`ChunkPositionSurface.chunkPositions`](/mod/game-api/types/alta-world/chunkpositionsurface#m-chunkpositions), [`LocationChunk.positions`](/mod/game-api/types/alta-world/locationchunk#m-positions), [`LocationChunk.Positions`](/mod/game-api/types/alta-world/locationchunk#m-positions-2).

</div>
