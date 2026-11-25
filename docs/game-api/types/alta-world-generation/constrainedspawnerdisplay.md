---
title: "ConstrainedSpawnerDisplay"
description: "class ConstrainedSpawnerDisplay in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConstrainedSpawnerDisplay

A **class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapChunkDisplay`](/game-api/types/alta-world-generation/mapchunkdisplay)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConstrainedSpawnerDisplay()"}</code> |

## Fields

<details>
<summary>17 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-basequantitytospawn" /><code>{"private int baseQuantityToSpawn"}</code> |
| <Link id="m-constrains" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/spawnconstrain">{"SpawnConstrain"}</Link>{"[] constrains"}</code> |
| <Link id="m-floorthreshold" /><code>{"private float floorThreshold"}</code> |
| <Link id="m-hasidentityrotation" /><code>{"private bool hasIdentityRotation"}</code> |
| <Link id="m-isorientedwithface" /><code>{"private bool isOrientedWithFace"}</code> |
| <Link id="m-isorientedwithfaceupforced" /><code>{"private bool isOrientedWithFaceUpForced"}</code> |
| <Link id="m-israycastdown" /><code>{"private bool isRaycastDown"}</code> |
| <Link id="m-israycasted" /><code>{"private bool isRaycasted"}</code> |
| <Link id="m-isrotationrandom" /><code>{"private bool isRotationRandom"}</code> |
| <Link id="m-isusingfloorlayer" /><code>{"private bool isUsingFloorLayer"}</code> |
| <Link id="m-offset" /><code>{"private float offset"}</code> |
| <Link id="m-orientationweight" /><code>{"private float orientationWeight"}</code> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> |
| <Link id="m-raycastdistance" /><code>{"private float raycastDistance"}</code> |
| <Link id="m-raycastmask" /><code>{"private LayerMask raycastMask"}</code> |
| <Link id="m-ynormalmaximum" /><code>{"private float yNormalMaximum"}</code> |
| <Link id="m-ynormalminimum" /><code>{"private float yNormalMinimum"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-render" /><code>{"override IEnumerator Render() (iterator)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-spawn" /><code>{"private bool Spawn("}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, "}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floor, int renderIndex, int x, int z, float value, ref int index)"}</code> |

</details>
