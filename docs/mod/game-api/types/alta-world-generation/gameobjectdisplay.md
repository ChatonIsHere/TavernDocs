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
| <Link id="m-ctor" /><code>{"GameObjectDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-floor" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floor"}</code> | <span className="api-desc">The floor plugin's layer, when `isUsingFloorLayer` is set.</span> |
| <Link id="m-floorthreshold" /><code>{"private float floorThreshold"}</code> | <span className="api-desc">Floor layer value below which a cell counts as open, used to find the floor height.</span> |
| <Link id="m-isorientedwithface" /><code>{"private bool isOrientedWithFace"}</code> | <span className="api-desc">If set, objects are rotated to the surface normal found by the raycast.</span> |
| <Link id="m-isorientedwithfaceupforced" /><code>{"private bool isOrientedWithFaceUpForced"}</code> | <span className="api-desc">With face orientation, skips the extra 90 degree tilt.</span> |
| <Link id="m-isracastdown" /><code>{"private bool isRacastDown"}</code> | <span className="api-desc">Raycast down if set, otherwise up.</span> |
| <Link id="m-israycasted" /><code>{"private bool isRaycasted"}</code> | <span className="api-desc">If set, raycasts to find the surface and drops the spawn if nothing is hit.</span> |
| <Link id="m-isrotationrandom" /><code>{"private bool isRotationRandom"}</code> | <span className="api-desc">If set, uses a fully random rotation instead of a random Y rotation.</span> |
| <Link id="m-isscaleuniform" /><code>{"private bool isScaleUniform"}</code> | <span className="api-desc">If set, the random scale variation is the same on all axes.</span> |
| <Link id="m-isusingfloorlayer" /><code>{"private bool isUsingFloorLayer"}</code> | <span className="api-desc">If set, lifts the spawn to the floor height read from the floor plugin's layer.</span> |
| <Link id="m-maxscale" /><code>{"private float maxScale"}</code> | <span className="api-desc">Scale at a cell value of 1; ignored for networked prefabs.</span> |
| <Link id="m-minscale" /><code>{"private float minScale"}</code> | <span className="api-desc">Scale at a cell value of 0; ignored for networked prefabs.</span> |
| <Link id="m-offset" /><code>{"private float offset"}</code> | <span className="api-desc">Height offset added to the spawn position (and above the raycast hit).</span> |
| <Link id="m-offsetxz" /><code>{"private float offsetXZ"}</code> | <span className="api-desc">Declared but not read in this file; the random XZ offset uses a fixed radius of up to 1.</span> |
| <Link id="m-orientationweight" /><code>{"private float orientationWeight"}</code> | <span className="api-desc">Blend between a random Y rotation (0) and the surface orientation (1).</span> |
| <Link id="m-raycastdistance" /><code>{"private float rayCastDistance"}</code> | <span className="api-desc">Maximum raycast length.</span> |
| <Link id="m-raycastmask" /><code>{"private LayerMask raycastMask"}</code> | <span className="api-desc">Layers the raycast can hit.</span> |
| <Link id="m-scalevariation" /><code>{"private float scaleVariation"}</code> | <span className="api-desc">Random scale change, as a fraction up or down.</span> |
| <Link id="m-ynormalmaximum" /><code>{"private float yNormalMaximum"}</code> | <span className="api-desc">Highest allowed Y of the hit normal.</span> |
| <Link id="m-ynormalminimum" /><code>{"private float yNormalMinimum"}</code> | <span className="api-desc">Lowest allowed Y of the hit normal.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-renderinternal" /><code>{"protected override IEnumerator RenderInternal() (iterator)"}</code> | <span className="api-desc">Gets the floor layer if used, then spawns at every non-zero cell.</span> |
| <Link id="m-spawn" /><code>{"protected override void Spawn(int seed, int spawnSeed, int spawnIndex, int x, int z, float value, ref int index)"}</code> | <span className="api-desc">Works out position, rotation and scale for one cell (floor, raycast and slope checks included) and spawns the object.</span> |
