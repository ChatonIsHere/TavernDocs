---
title: "PopulationRaycast"
description: "Asset with raycast settings for placing population spawns on the ground."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationRaycast

A **class** in `Root.Township`, `Alta.Populations`.

Asset with raycast settings for placing population spawns on the ground. `RadialPopulationArea` uses it.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`HashedGeneralValue<PopulationRaycast>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`PopulationRaycast`](/mod/game-api/types/alta-world-generation/populationraycast), [`PopulationRaycast.Create`](/mod/game-api/types/alta-world-generation/populationraycast-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/populationraycast-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationRaycast()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-groundlayers" /><code>{"private LayerMask groundLayers"}</code> | Layers that count as ground. |
| <Link id="m-maxacceptableangledot" /><code>{"private float maxAcceptableAngleDot"}</code> | Minimum up component of the hit normal; -1 turns the slope check off. |
| <Link id="m-minimumraycastdistance" /><code>{"private float minimumRaycastDistance"}</code> | Hits closer than this to the ray start are rejected (default 9). |
| <Link id="m-raycastfinishheight" /><code>{"private float raycastFinishHeight"}</code> | Height where the ray ends (default -5). |
| <Link id="m-raycaststartheight" /><code>{"private float raycastStartHeight"}</code> | Height the ray starts from (default 10). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-try" /><code><Link to="/mod/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"? Try(Vector3 position, Vector3 direction)"}</code> | Raycasts for ground and returns the hit point and normal if far enough and flat enough. As decompiled, the ray start ignores `position`. |

## Used in

Members of other types that take, return or hold a `PopulationRaycast`:

[`RadialPopulationArea.raycastTest`](/mod/game-api/types/alta-world-generation/radialpopulationarea#m-raycasttest).
