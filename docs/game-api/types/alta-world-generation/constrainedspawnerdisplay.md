---
title: "ConstrainedSpawnerDisplay"
description: "Cave chunk display that spawns a networked prefab at cells of its layer with a value above zero, limited by a quantity and a list of SpawnConstrain checks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConstrainedSpawnerDisplay

A **class** in `Root.Township`, `Alta.Caves`.

Cave chunk display that spawns a networked prefab at cells of its layer with a value above zero, limited by a quantity and a list of `SpawnConstrain` checks. Server only.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapChunkDisplay`](/game-api/types/alta-world-generation/mapchunkdisplay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConstrainedSpawnerDisplay()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basequantitytospawn" /><code>{"private int baseQuantityToSpawn"}</code> | Starting number of prefabs to spawn per chunk before constraints change it. |
| <Link id="m-constrains" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/spawnconstrain">{"SpawnConstrain"}</Link>{"[] constrains"}</code> | Checks that can change the quantity or cancel spawning for this chunk. |
| <Link id="m-floorthreshold" /><code>{"private float floorThreshold"}</code> | Floor layer value below which a cell counts as open, used to find the floor height. |
| <Link id="m-hasidentityrotation" /><code>{"private bool hasIdentityRotation"}</code> | If set, spawned objects are not rotated. |
| <Link id="m-isorientedwithface" /><code>{"private bool isOrientedWithFace"}</code> | If set, objects are rotated to the surface normal found by the raycast. |
| <Link id="m-isorientedwithfaceupforced" /><code>{"private bool isOrientedWithFaceUpForced"}</code> | With face orientation, skips the extra 90 degree tilt so the object's forward points along the normal. |
| <Link id="m-israycastdown" /><code>{"private bool isRaycastDown"}</code> | Raycast down if set, otherwise up. |
| <Link id="m-israycasted" /><code>{"private bool isRaycasted"}</code> | If set, raycasts to find the surface and drops the spawn if nothing is hit. |
| <Link id="m-isrotationrandom" /><code>{"private bool isRotationRandom"}</code> | If set, uses a fully random rotation instead of a random Y rotation. |
| <Link id="m-isusingfloorlayer" /><code>{"private bool isUsingFloorLayer"}</code> | If set, lifts the spawn to the floor height read from the floor plugin's layer. |
| <Link id="m-offset" /><code>{"private float offset"}</code> | Height offset added to the spawn position (and above the raycast hit). |
| <Link id="m-orientationweight" /><code>{"private float orientationWeight"}</code> | Blend between a random Y rotation (0) and the surface orientation (1). |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | The networked prefab to spawn. |
| <Link id="m-raycastdistance" /><code>{"private float raycastDistance"}</code> | Maximum raycast length. |
| <Link id="m-raycastmask" /><code>{"private LayerMask raycastMask"}</code> | Layers the raycast can hit. |
| <Link id="m-ynormalmaximum" /><code>{"private float yNormalMaximum"}</code> | Highest allowed Y of the hit normal; steeper or flatter surfaces are skipped. |
| <Link id="m-ynormalminimum" /><code>{"private float yNormalMinimum"}</code> | Lowest allowed Y of the hit normal. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Does nothing. |
| <Link id="m-render" /><code>{"override IEnumerator Render() (iterator)"}</code> | Server: runs the constraints to get a quantity, then spawns at non-zero cells until the quantity runs out. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"private bool Spawn("}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, "}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floor, int renderIndex, int x, int z, float value, ref int index)"}</code> | Works out a hashed position and rotation for a cell, optionally raycasts to the surface and checks its slope, then spawns the prefab in the generator's chunk. |

</details>
