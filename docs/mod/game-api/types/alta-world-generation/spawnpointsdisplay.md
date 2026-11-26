---
title: "SpawnPointsDisplay"
description: "Map generator display that turns a chunk layer's non-zero cells into spawn points for one population and hands them to the ecosystem."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnPointsDisplay

A **class** in `Root.Township`, `Alta.Populations`.

Map generator display that turns a chunk layer's non-zero cells into spawn points for one population and hands them to the ecosystem. Server only (`Render` does nothing on clients).

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapChunkDisplay`](/mod/game-api/types/alta-world-generation/mapchunkdisplay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnPointsDisplay()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-floorthreshold" /><code>{"private float floorThreshold"}</code> | Floor layer value at or below which a height level counts as open, used to lift the point to the first open level. |
| <Link id="m-hasidentityrotation" /><code>{"private bool hasIdentityRotation"}</code> | If true, spawn points always face the default rotation. |
| <Link id="m-isorientedwithface" /><code>{"private bool isOrientedWithFace"}</code> | If true (and the point is raycasted), the point is rotated to match the surface normal it hit. |
| <Link id="m-isorientedwithfaceupforced" /><code>{"private bool isOrientedWithFaceUpForced"}</code> | When orienting with the hit surface, skips the extra 90 degree tilt that would otherwise be applied. |
| <Link id="m-israycastdown" /><code>{"private bool isRaycastDown"}</code> | Raycast direction: down if true, up if false. |
| <Link id="m-israycasted" /><code>{"private bool isRaycasted"}</code> | If true, each point is raycast onto geometry and dropped if nothing is hit or the surface slope is out of range. |
| <Link id="m-isrotationrandom" /><code>{"private bool isRotationRandom"}</code> | If true, uses a fully random rotation instead of a random yaw (when not identity or face oriented). |
| <Link id="m-isusingfloorlayer" /><code>{"private bool isUsingFloorLayer"}</code> | If true, reads the render generator's floor layer to set each point's height. |
| <Link id="m-offset" /><code>{"private float offset"}</code> | Height offset added to each point, and added again above the raycast hit point. |
| <Link id="m-orientationweight" /><code>{"private float orientationWeight"}</code> | How much face orientation wins over a random yaw (1 is fully aligned to the surface). |
| <Link id="m-raycastdistance" /><code>{"private float raycastDistance"}</code> | Length of the placement raycast. |
| <Link id="m-raycastmask" /><code>{"private LayerMask raycastMask"}</code> | Layers the placement raycast hits. |
| <Link id="m-spawnpointindex" /><code>{"private int spawnPointIndex"}</code> | Running index given to each accepted spawn point, reset to -1 at the start of `Render`. |
| <Link id="m-spawnposition" /><code>{"private Vector3 spawnPosition"}</code> | Scratch position of the point being placed. |
| <Link id="m-spawnrotation" /><code>{"private Quaternion spawnRotation"}</code> | Scratch rotation of the point being placed. |
| <Link id="m-spawnseed" /><code>{"private int spawnSeed"}</code> | Hashed seed for the current point. Computed but not passed on to the spawn point. |
| <Link id="m-targetpopulation" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" targetPopulation"}</code> | Population definition whose hash the spawn points are registered under. |
| <Link id="m-ynormalmaximum" /><code>{"private float yNormalMaximum"}</code> | Highest allowed Y of the hit surface normal; points on flatter ground are rejected. |
| <Link id="m-ynormalminimum" /><code>{"private float yNormalMinimum"}</code> | Lowest allowed Y of the hit surface normal; points on steeper ground are rejected. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Does nothing. |
| <Link id="m-render" /><code>{"override IEnumerator Render() (iterator)"}</code> | Server: walks the layer's non-zero cells, makes a spawn point for each, then passes the list to the layer streamer's `Ecosystem.SetPoints` with the population's hash. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" Spawn("}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, "}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floor, int renderIndex, int x, int z, float value, ref int index)"}</code> | Places one spawn point for a cell: random jitter, floor height, optional raycast and normal check, and rotation. Returns null if rejected. |

</details>
