---
title: "SpawnAreaDisplay"
description: "A cave generation display that registers its layer as spawn space for chosen populations, then picks spawn points in it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnAreaDisplay

A **class** in `Root.Township`, `Alta.Populations`.

A cave generation display that registers its layer as spawn space for chosen populations, then picks spawn points in it. Server only.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapChunkDisplay`](/game-api/types/alta-world-generation/mapchunkdisplay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnAreaDisplay()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-floorthreshold" /><code>{"private float floorThreshold"}</code> | Serialized but not read by this class. |
| <Link id="m-hasidentityrotation" /><code>{"private bool hasIdentityRotation"}</code> | Spawn with no rotation (default true). Overrides the random and face orientation options. |
| <Link id="m-isorientedwithface" /><code>{"private bool isOrientedWithFace"}</code> | Rotate the spawn to match the surface the raycast hit. |
| <Link id="m-isorientedwithfaceupforced" /><code>{"private bool isOrientedWithFaceUpForced"}</code> | When set, skips the 90 degree tilt, so the spawn's forward (not its up) points along the surface normal. |
| <Link id="m-israycastdown" /><code>{"private bool isRaycastDown"}</code> | Raycast downwards (default) or upwards. |
| <Link id="m-israycasted" /><code>{"private bool isRaycasted"}</code> | Raycast from the picked point to find a surface to spawn on. |
| <Link id="m-isrotationrandom" /><code>{"private bool isRotationRandom"}</code> | Use a fully random rotation instead of a random turn around Y. |
| <Link id="m-isusingfloorlayer" /><code>{"private bool isUsingFloorLayer"}</code> | Use the chunk's floor layer to raise the spawn height. |
| <Link id="m-offset" /><code>{"private float offset"}</code> | Height offset for the spawn point, also added above the raycast hit. |
| <Link id="m-orientationweight" /><code>{"private float orientationWeight"}</code> | Blend between a random Y turn (0) and the full surface orientation (1). |
| <Link id="m-raycastdistance" /><code>{"private float raycastDistance"}</code> | How far to raycast (default 4). |
| <Link id="m-raycastmask" /><code>{"private LayerMask raycastMask"}</code> | Layers the raycast hits. |
| <Link id="m-spawnpointindex" /><code>{"private int spawnPointIndex"}</code> | Counter giving each spawn point an index. |
| <Link id="m-spawnposition" /><code>{"private Vector3 spawnPosition"}</code> | Position of the last spawn point picked. |
| <Link id="m-spawnrotation" /><code>{"private Quaternion spawnRotation"}</code> | Rotation of the last spawn point picked. |
| <Link id="m-spawnseed" /><code>{"private int spawnSeed"}</code> | Seed worked out for the last spawn point; not passed on. |
| <Link id="m-targetpopulations" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{"[] targetPopulations"}</code> | Populations that may spawn in this display's area. |
| <Link id="m-ynormalmaximum" /><code>{"private float yNormalMaximum"}</code> | Highest surface normal Y the raycast hit may have. |
| <Link id="m-ynormalminimum" /><code>{"private float yNormalMinimum"}</code> | Lowest surface normal Y the raycast hit may have. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Does nothing. |
| <Link id="m-render" /><code>{"override IEnumerator Render() (iterator)"}</code> | Server: registers this display's layer (and floor layer if used) as spawn information for each target population in the chunk's ecosystem. |
| <Link id="m-spawn" /><code><Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" Spawn("}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, "}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floor, int x, int z)"}</code> | Picks a spawn point near a layer cell, with optional raycast to a surface and rotation rules. Returns null if the raycast misses or the slope is out of range. |

## Used in

Members of other types that take, return or hold a `SpawnAreaDisplay`:

[`CavePopulationSpawnInformation.CavePopulationSpawnInformation`](/game-api/types/alta-world-generation/cavepopulationspawninformation#m-ctor), [`CavePopulationSpawnInformation.display`](/game-api/types/alta-world-generation/cavepopulationspawninformation#m-display).
