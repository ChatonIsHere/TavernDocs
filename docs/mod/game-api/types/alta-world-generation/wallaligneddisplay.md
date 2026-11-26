---
title: "WallAlignedDisplay"
description: "Cave chunk display that places objects along walls, facing away from nearby solid cells of a floor plan layer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WallAlignedDisplay

A **class** in `Root.Township`, `Alta.Caves.Displays`.

Cave chunk display that places objects along walls, facing away from nearby solid cells of a floor plan layer.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`BasicObjectDisplay`](/mod/game-api/types/alta-world-generation/basicobjectdisplay)
- **Nested types** [`Point`](/mod/game-api/types/alta-world-generation/wallaligneddisplay-point)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WallAlignedDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkpoints" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/wallaligneddisplay-point">{"WallAlignedDisplay.Point"}</Link>{"> checkPoints"}</code> | <span className="api-desc">Precomputed offsets, directions and weights used to sense walls.</span> |
| <Link id="m-checkradius" /><code>{"private float checkRadius"}</code> | <span className="api-desc">Radius in cells to look for walls.</span> |
| <Link id="m-floor" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floor"}</code> | <span className="api-desc">The floor plugin's layer, used to find floor height.</span> |
| <Link id="m-flooroffset" /><code>{"private float floorOffset"}</code> | <span className="api-desc">Height offset added to the floor height.</span> |
| <Link id="m-floorplan" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" floorPlan"}</code> | <span className="api-desc">Plugin whose layer marks solid areas (walls).</span> |
| <Link id="m-floorplanlayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floorPlanLayer"}</code> | <span className="api-desc">This chunk's layer for `floorPlan`.</span> |
| <Link id="m-floorplany" /><code>{"private int floorPlanY"}</code> | <span className="api-desc">Y slice of the floor plan layer to read.</span> |
| <Link id="m-floorthreshold" /><code>{"private float floorThreshold"}</code> | <span className="api-desc">Floor layer value below which a cell counts as open.</span> |
| <Link id="m-hitmask" /><code>{"private LayerMask hitMask"}</code> | <span className="api-desc">Layers the wall raycast can hit.</span> |
| <Link id="m-minimumdistance" /><code>{"private float minimumDistance"}</code> | <span className="api-desc">Half the length of the raycast that must hit a wall; 0 skips the check.</span> |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> | <span className="api-desc">Total wall weight needed before an object is placed.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Builds the list of check offsets within `checkRadius`, each weighted by closeness.</span> |
| <Link id="m-renderinternal" /><code>{"protected override IEnumerator RenderInternal() (iterator)"}</code> | <span className="api-desc">Gets the floor plan and floor layers, then spawns at every non-zero cell.</span> |
| <Link id="m-spawn" /><code>{"protected override void Spawn(int seed, int spawnSeed, int prefabIndex, int x, int z, float value, ref int index)"}</code> | <span className="api-desc">Sums weighted wall directions around the cell; if above `threshold` (and the raycast finds a wall), spawns the object facing that way at floor height.</span> |
