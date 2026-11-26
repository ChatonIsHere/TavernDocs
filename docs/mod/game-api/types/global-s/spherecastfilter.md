---
title: "SphereCastFilter"
description: "Forest spawn modifier asset that scales a point's spawn weight by whether there are colliders within a radius of it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SphereCastFilter

A **class** in `Root.Township`, the global namespace.

Forest spawn modifier asset that scales a point's spawn weight by whether there are colliders within a radius of it.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`SpawnModifierPointNormal`](/mod/game-api/types/global-s/spawnmodifierpointnormal)
- **Derived types** [`SphereCastFilter.Create`](/mod/game-api/types/global-s/spherecastfilter-create)
- **Nested types** [`Create`](/mod/game-api/types/global-s/spherecastfilter-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SphereCastFilter()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hitmultiplier" /><code>{"private float hitMultiplier"}</code> | Weight multiplier when something is found. 0 by default, so nearby colliders block spawning. |
| <Link id="m-layercheck" /><code>{"private LayerMask layerCheck"}</code> | Layers the sphere check looks at. |
| <Link id="m-missmultiplier" /><code>{"private float missMultiplier"}</code> | Weight multiplier when nothing is found. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Radius of the sphere check. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{" point, ref float weight)"}</code> | Checks a sphere at the point and multiplies the weight by `hitMultiplier` or `missMultiplier`. |
