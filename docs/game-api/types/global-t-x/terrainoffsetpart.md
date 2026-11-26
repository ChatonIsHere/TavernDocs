---
title: "TerrainOffsetPart"
description: "Generation part that raises or lowers the terrain height in a circle around it, using curves for offset and blend by distance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TerrainOffsetPart

A **class** in `Root.Township`, no namespace.

Generation part that raises or lowers the terrain height in a circle around it, using curves for offset and blend by distance.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`GeneratablePart`](/game-api/types/global-e-h/generatablepart)
- **Attributes** `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TerrainOffsetPart()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-offset" /><code>{"private AnimationCurve offset"}</code> | Height offset by distance from the centre (0 to 1 across the radius). |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Radius of the affected area. |
| <Link id="m-weight" /><code>{"private AnimationCurve weight"}</code> | How strongly the new height is blended in, by distance. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatestatic" /><code>{"override void GenerateStatic("}<Link to="/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | When allowed to modify terrain, blends heights in the radius towards this position's height plus `offset`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws the radius as a green circle. |

</details>
