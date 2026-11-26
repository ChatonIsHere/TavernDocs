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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`BasicObjectDisplay`](/game-api/types/alta-world-generation/basicobjectdisplay)
- **Nested types** [`Point`](/game-api/types/alta-world-generation/wallaligneddisplay-point)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WallAlignedDisplay()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkpoints" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/wallaligneddisplay-point">{"WallAlignedDisplay.Point"}</Link>{"> checkPoints"}</code> | Precomputed offsets, directions and weights used to sense walls. |
| <Link id="m-checkradius" /><code>{"private float checkRadius"}</code> | Radius in cells to look for walls. |
| <Link id="m-floor" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floor"}</code> | The floor plugin's layer, used to find floor height. |
| <Link id="m-flooroffset" /><code>{"private float floorOffset"}</code> | Height offset added to the floor height. |
| <Link id="m-floorplan" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" floorPlan"}</code> | Plugin whose layer marks solid areas (walls). |
| <Link id="m-floorplanlayer" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floorPlanLayer"}</code> | This chunk's layer for `floorPlan`. |
| <Link id="m-floorplany" /><code>{"private int floorPlanY"}</code> | Y slice of the floor plan layer to read. |
| <Link id="m-floorthreshold" /><code>{"private float floorThreshold"}</code> | Floor layer value below which a cell counts as open. |
| <Link id="m-hitmask" /><code>{"private LayerMask hitMask"}</code> | Layers the wall raycast can hit. |
| <Link id="m-minimumdistance" /><code>{"private float minimumDistance"}</code> | Half the length of the raycast that must hit a wall; 0 skips the check. |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> | Total wall weight needed before an object is placed. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Builds the list of check offsets within `checkRadius`, each weighted by closeness. |
| <Link id="m-renderinternal" /><code>{"protected override IEnumerator RenderInternal() (iterator)"}</code> | Gets the floor plan and floor layers, then spawns at every non-zero cell. |
| <Link id="m-spawn" /><code>{"protected override void Spawn(int seed, int spawnSeed, int prefabIndex, int x, int z, float value, ref int index)"}</code> | Sums weighted wall directions around the cell; if above `threshold` (and the raycast finds a wall), spawns the object facing that way at floor height. |
