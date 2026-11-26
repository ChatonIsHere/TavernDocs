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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapChunkDisplay`](/mod/game-api/types/alta-world-generation/mapchunkdisplay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConstrainedSpawnerDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basequantitytospawn" /><code>{"private int baseQuantityToSpawn"}</code> | <span className="api-desc">Starting number of prefabs to spawn per chunk before constraints change it.</span> |
| <Link id="m-constrains" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/spawnconstrain">{"SpawnConstrain"}</Link>{"[] constrains"}</code> | <span className="api-desc">Checks that can change the quantity or cancel spawning for this chunk.</span> |
| <Link id="m-floorthreshold" /><code>{"private float floorThreshold"}</code> | <span className="api-desc">Floor layer value below which a cell counts as open, used to find the floor height.</span> |
| <Link id="m-hasidentityrotation" /><code>{"private bool hasIdentityRotation"}</code> | <span className="api-desc">If set, spawned objects are not rotated.</span> |
| <Link id="m-isorientedwithface" /><code>{"private bool isOrientedWithFace"}</code> | <span className="api-desc">If set, objects are rotated to the surface normal found by the raycast.</span> |
| <Link id="m-isorientedwithfaceupforced" /><code>{"private bool isOrientedWithFaceUpForced"}</code> | <span className="api-desc">With face orientation, skips the extra 90 degree tilt so the object's forward points along the normal.</span> |
| <Link id="m-israycastdown" /><code>{"private bool isRaycastDown"}</code> | <span className="api-desc">Raycast down if set, otherwise up.</span> |
| <Link id="m-israycasted" /><code>{"private bool isRaycasted"}</code> | <span className="api-desc">If set, raycasts to find the surface and drops the spawn if nothing is hit.</span> |
| <Link id="m-isrotationrandom" /><code>{"private bool isRotationRandom"}</code> | <span className="api-desc">If set, uses a fully random rotation instead of a random Y rotation.</span> |
| <Link id="m-isusingfloorlayer" /><code>{"private bool isUsingFloorLayer"}</code> | <span className="api-desc">If set, lifts the spawn to the floor height read from the floor plugin's layer.</span> |
| <Link id="m-offset" /><code>{"private float offset"}</code> | <span className="api-desc">Height offset added to the spawn position (and above the raycast hit).</span> |
| <Link id="m-orientationweight" /><code>{"private float orientationWeight"}</code> | <span className="api-desc">Blend between a random Y rotation (0) and the surface orientation (1).</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | <span className="api-desc">The networked prefab to spawn.</span> |
| <Link id="m-raycastdistance" /><code>{"private float raycastDistance"}</code> | <span className="api-desc">Maximum raycast length.</span> |
| <Link id="m-raycastmask" /><code>{"private LayerMask raycastMask"}</code> | <span className="api-desc">Layers the raycast can hit.</span> |
| <Link id="m-ynormalmaximum" /><code>{"private float yNormalMaximum"}</code> | <span className="api-desc">Highest allowed Y of the hit normal; steeper or flatter surfaces are skipped.</span> |
| <Link id="m-ynormalminimum" /><code>{"private float yNormalMinimum"}</code> | <span className="api-desc">Lowest allowed Y of the hit normal.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-render" /><code>{"override IEnumerator Render() (iterator)"}</code> | <span className="api-desc">Server: runs the constraints to get a quantity, then spawns at non-zero cells until the quantity runs out.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"private bool Spawn("}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, "}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floor, int renderIndex, int x, int z, float value, ref int index)"}</code> | <span className="api-desc">Works out a hashed position and rotation for a cell, optionally raycasts to the surface and checks its slope, then spawns the prefab in the generator's chunk.</span> |

</details>
