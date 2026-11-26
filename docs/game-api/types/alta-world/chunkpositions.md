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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ChunkPositions()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hassurfaces" /><code>{"private bool hasSurfaces"}</code> | Backing field for `HasSurfaces`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hassurfaces-2" /><code>{"bool HasSurfaces { get; set; }"}</code> | Whether the chunk has any position surfaces set up. |
| <Link id="m-positiondefinitions" /><code>{"HashSet<"}<Link to="/game-api/types/alta-world/chunkpositionsurface">{"ChunkPositionSurface"}</Link>{"> PositionDefinitions { get; }"}</code> | The surfaces registered for this chunk. Each has a weight used by `GetPosition`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code><Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"? GetPosition(int iterations, float maxAngleFromUpDot)"}</code> | Picks a surface at random by weight and tries it up to `iterations` times for a point whose normal is steep enough. Returns null if none fits. |

## Used in

Members of other types that take, return or hold a `ChunkPositions`:

[`ChunkPositionSurface.chunkPositions`](/game-api/types/alta-world/chunkpositionsurface#m-chunkpositions), [`LocationChunk.positions`](/game-api/types/alta-world/locationchunk#m-positions), [`LocationChunk.Positions`](/game-api/types/alta-world/locationchunk#m-positions-2).
