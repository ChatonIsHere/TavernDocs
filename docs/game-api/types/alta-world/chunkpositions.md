---
title: "ChunkPositions"
description: "class ChunkPositions in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkPositions

A **class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkPositions()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hassurfaces" /><code>{"private bool hasSurfaces"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hassurfaces-2" /><code>{"bool HasSurfaces { get; set; }"}</code> |  |
| <Link id="m-positiondefinitions" /><code>{"HashSet<"}<Link to="/game-api/types/alta-world/chunkpositionsurface">{"ChunkPositionSurface"}</Link>{"> PositionDefinitions { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code><Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"? GetPosition(int iterations, float maxAngleFromUpDot)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ChunkPositions`:

[`ChunkPositionSurface.chunkPositions`](/game-api/types/alta-world/chunkpositionsurface#m-chunkpositions), [`LocationChunk.positions`](/game-api/types/alta-world/locationchunk#m-positions), [`LocationChunk.Positions`](/game-api/types/alta-world/locationchunk#m-positions-2).
