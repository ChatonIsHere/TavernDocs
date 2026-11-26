---
title: "GameObjectDisplay"
description: "Cave chunk display that places objects (networked prefabs or static pieces) at non-zero cells of its layer, with hashed offset, rotation and scale, optional..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameObjectDisplay

A **class** in `Root.Township`, `Alta.Caves.Displays`.

Cave chunk display that places objects (networked prefabs or static pieces) at non-zero cells of its layer, with hashed offset, rotation and scale, optional floor height and raycast.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`BasicObjectDisplay`](/mod/game-api/types/alta-world-generation/basicobjectdisplay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GameObjectDisplay()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-floor" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floor"}</code> | The floor plugin's layer, when `isUsingFloorLayer` is set. |
| <Link id="m-floorthreshold" /><code>{"private float floorThreshold"}</code> | Floor layer value below which a cell counts as open, used to find the floor height. |
| <Link id="m-isorientedwithface" /><code>{"private bool isOrientedWithFace"}</code> | If set, objects are rotated to the surface normal found by the raycast. |
| <Link id="m-isorientedwithfaceupforced" /><code>{"private bool isOrientedWithFaceUpForced"}</code> | With face orientation, skips the extra 90 degree tilt. |
| <Link id="m-isracastdown" /><code>{"private bool isRacastDown"}</code> | Raycast down if set, otherwise up. |
| <Link id="m-israycasted" /><code>{"private bool isRaycasted"}</code> | If set, raycasts to find the surface and drops the spawn if nothing is hit. |
| <Link id="m-isrotationrandom" /><code>{"private bool isRotationRandom"}</code> | If set, uses a fully random rotation instead of a random Y rotation. |
| <Link id="m-isscaleuniform" /><code>{"private bool isScaleUniform"}</code> | If set, the random scale variation is the same on all axes. |
| <Link id="m-isusingfloorlayer" /><code>{"private bool isUsingFloorLayer"}</code> | If set, lifts the spawn to the floor height read from the floor plugin's layer. |
| <Link id="m-maxscale" /><code>{"private float maxScale"}</code> | Scale at a cell value of 1; ignored for networked prefabs. |
| <Link id="m-minscale" /><code>{"private float minScale"}</code> | Scale at a cell value of 0; ignored for networked prefabs. |
| <Link id="m-offset" /><code>{"private float offset"}</code> | Height offset added to the spawn position (and above the raycast hit). |
| <Link id="m-offsetxz" /><code>{"private float offsetXZ"}</code> | Declared but not read in this file; the random XZ offset uses a fixed radius of up to 1. |
| <Link id="m-orientationweight" /><code>{"private float orientationWeight"}</code> | Blend between a random Y rotation (0) and the surface orientation (1). |
| <Link id="m-raycastdistance" /><code>{"private float rayCastDistance"}</code> | Maximum raycast length. |
| <Link id="m-raycastmask" /><code>{"private LayerMask raycastMask"}</code> | Layers the raycast can hit. |
| <Link id="m-scalevariation" /><code>{"private float scaleVariation"}</code> | Random scale change, as a fraction up or down. |
| <Link id="m-ynormalmaximum" /><code>{"private float yNormalMaximum"}</code> | Highest allowed Y of the hit normal. |
| <Link id="m-ynormalminimum" /><code>{"private float yNormalMinimum"}</code> | Lowest allowed Y of the hit normal. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Does nothing. |
| <Link id="m-renderinternal" /><code>{"protected override IEnumerator RenderInternal() (iterator)"}</code> | Gets the floor layer if used, then spawns at every non-zero cell. |
| <Link id="m-spawn" /><code>{"protected override void Spawn(int seed, int spawnSeed, int spawnIndex, int x, int z, float value, ref int index)"}</code> | Works out position, rotation and scale for one cell (floor, raycast and slope checks included) and spawns the object. |
