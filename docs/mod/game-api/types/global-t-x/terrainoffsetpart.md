---
title: "TerrainOffsetPart"
description: "Generation part that raises or lowers the terrain height in a circle around it, using curves for offset and blend by distance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TerrainOffsetPart

A **class** in `Root.Township`, the global namespace.

Generation part that raises or lowers the terrain height in a circle around it, using curves for offset and blend by distance.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`GeneratablePart`](/mod/game-api/types/global-e-h/generatablepart)
- **Attributes** `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TerrainOffsetPart()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-offset" /><code>{"private AnimationCurve offset"}</code> | <span className="api-desc">Height offset by distance from the centre (0 to 1 across the radius).</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Radius of the affected area.</span> |
| <Link id="m-weight" /><code>{"private AnimationCurve weight"}</code> | <span className="api-desc">How strongly the new height is blended in, by distance.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatestatic" /><code>{"override void GenerateStatic("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | <span className="api-desc">When allowed to modify terrain, blends heights in the radius towards this position's height plus `offset`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws the radius as a green circle.</span> |

</details>
