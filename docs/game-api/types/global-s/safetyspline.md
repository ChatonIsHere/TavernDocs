---
title: "SafetySpline"
description: "Forest generation part that adds a terrain spline along the side of a path edge where the ground drops away, probably as a safety barrier."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SafetySpline

A **class** in `Root.Township`, no namespace.

Forest generation part that adds a terrain spline along the side of a path edge where the ground drops away, probably as a safety barrier.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`TerrainSpline`](/game-api/types/global-t-x/terrainspline)
- **Attributes** `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SafetySpline()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-extraradius" /><code>{"private float extraRadius"}</code> | Extra sideways distance beyond the edge's average radius for the spline. Default 2. |
| <Link id="m-fallminimum" /><code>{"private float fallMinimum"}</code> | Height drop needed on a side before the spline is added there. Default 10. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatestatic" /><code>{"override void GenerateStatic("}<Link to="/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | Checks the neighbouring paths at both ends of the edge and builds the spline offset to each side where the drop exceeds `fallMinimum`. |
