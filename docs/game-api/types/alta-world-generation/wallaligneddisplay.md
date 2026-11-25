---
title: "WallAlignedDisplay"
description: "class WallAlignedDisplay in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WallAlignedDisplay

A **class** in `Root.Township`, `Alta.Caves.Displays`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`BasicObjectDisplay`](/game-api/types/alta-world-generation/basicobjectdisplay)
- **Nested types** [`Point`](/game-api/types/alta-world-generation/wallaligneddisplay-point)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WallAlignedDisplay()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-checkpoints" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/wallaligneddisplay-point">{"WallAlignedDisplay.Point"}</Link>{"> checkPoints"}</code> |  |
| <Link id="m-checkradius" /><code>{"private float checkRadius"}</code> |  |
| <Link id="m-floor" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floor"}</code> |  |
| <Link id="m-flooroffset" /><code>{"private float floorOffset"}</code> |  |
| <Link id="m-floorplan" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" floorPlan"}</code> |  |
| <Link id="m-floorplanlayer" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floorPlanLayer"}</code> |  |
| <Link id="m-floorplany" /><code>{"private int floorPlanY"}</code> |  |
| <Link id="m-floorthreshold" /><code>{"private float floorThreshold"}</code> |  |
| <Link id="m-hitmask" /><code>{"private LayerMask hitMask"}</code> |  |
| <Link id="m-minimumdistance" /><code>{"private float minimumDistance"}</code> |  |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-renderinternal" /><code>{"protected override IEnumerator RenderInternal() (iterator)"}</code> |  |
| <Link id="m-spawn" /><code>{"protected override void Spawn(int seed, int spawnSeed, int prefabIndex, int x, int z, float value, ref int index)"}</code> |  |
