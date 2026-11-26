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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapChunkDisplay`](/mod/game-api/types/alta-world-generation/mapchunkdisplay)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnAreaDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-floorthreshold" /><code>{"private float floorThreshold"}</code> | <span className="api-desc">Serialized but not read by this class.</span> |
| <Link id="m-hasidentityrotation" /><code>{"private bool hasIdentityRotation"}</code> | <span className="api-desc">Spawn with no rotation (default true). Overrides the random and face orientation options.</span> |
| <Link id="m-isorientedwithface" /><code>{"private bool isOrientedWithFace"}</code> | <span className="api-desc">Rotate the spawn to match the surface the raycast hit.</span> |
| <Link id="m-isorientedwithfaceupforced" /><code>{"private bool isOrientedWithFaceUpForced"}</code> | <span className="api-desc">When set, skips the 90 degree tilt, so the spawn's forward (not its up) points along the surface normal.</span> |
| <Link id="m-israycastdown" /><code>{"private bool isRaycastDown"}</code> | <span className="api-desc">Raycast downwards (default) or upwards.</span> |
| <Link id="m-israycasted" /><code>{"private bool isRaycasted"}</code> | <span className="api-desc">Raycast from the picked point to find a surface to spawn on.</span> |
| <Link id="m-isrotationrandom" /><code>{"private bool isRotationRandom"}</code> | <span className="api-desc">Use a fully random rotation instead of a random turn around Y.</span> |
| <Link id="m-isusingfloorlayer" /><code>{"private bool isUsingFloorLayer"}</code> | <span className="api-desc">Use the chunk's floor layer to raise the spawn height.</span> |
| <Link id="m-offset" /><code>{"private float offset"}</code> | <span className="api-desc">Height offset for the spawn point, also added above the raycast hit.</span> |
| <Link id="m-orientationweight" /><code>{"private float orientationWeight"}</code> | <span className="api-desc">Blend between a random Y turn (0) and the full surface orientation (1).</span> |
| <Link id="m-raycastdistance" /><code>{"private float raycastDistance"}</code> | <span className="api-desc">How far to raycast (default 4).</span> |
| <Link id="m-raycastmask" /><code>{"private LayerMask raycastMask"}</code> | <span className="api-desc">Layers the raycast hits.</span> |
| <Link id="m-spawnpointindex" /><code>{"private int spawnPointIndex"}</code> | <span className="api-desc">Counter giving each spawn point an index.</span> |
| <Link id="m-spawnposition" /><code>{"private Vector3 spawnPosition"}</code> | <span className="api-desc">Position of the last spawn point picked.</span> |
| <Link id="m-spawnrotation" /><code>{"private Quaternion spawnRotation"}</code> | <span className="api-desc">Rotation of the last spawn point picked.</span> |
| <Link id="m-spawnseed" /><code>{"private int spawnSeed"}</code> | <span className="api-desc">Seed worked out for the last spawn point; not passed on.</span> |
| <Link id="m-targetpopulations" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{"[] targetPopulations"}</code> | <span className="api-desc">Populations that may spawn in this display's area.</span> |
| <Link id="m-ynormalmaximum" /><code>{"private float yNormalMaximum"}</code> | <span className="api-desc">Highest surface normal Y the raycast hit may have.</span> |
| <Link id="m-ynormalminimum" /><code>{"private float yNormalMinimum"}</code> | <span className="api-desc">Lowest surface normal Y the raycast hit may have.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-render" /><code>{"override IEnumerator Render() (iterator)"}</code> | <span className="api-desc">Server: registers this display's layer (and floor layer if used) as spawn information for each target population in the chunk's ecosystem.</span> |
| <Link id="m-spawn" /><code><Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" Spawn("}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, "}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floor, int x, int z)"}</code> | <span className="api-desc">Picks a spawn point near a layer cell, with optional raycast to a surface and rotation rules. Returns null if the raycast misses or the slope is out of range.</span> |

## Used in

Members of other types that take, return or hold a `SpawnAreaDisplay`:

<div className="api-used-in">

[`CavePopulationSpawnInformation.CavePopulationSpawnInformation`](/mod/game-api/types/alta-world-generation/cavepopulationspawninformation#m-ctor), [`CavePopulationSpawnInformation.display`](/mod/game-api/types/alta-world-generation/cavepopulationspawninformation#m-display).

</div>
