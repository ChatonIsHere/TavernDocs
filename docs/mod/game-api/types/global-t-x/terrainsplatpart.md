---
title: "TerrainSplatPart"
description: "Generation part that paints a terrain texture in a circle around it, fading by distance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TerrainSplatPart

A **class** in `Root.Township`, the global namespace.

Generation part that paints a terrain texture in a circle around it, fading by distance. Skipped on headless servers.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`GeneratablePart`](/mod/game-api/types/global-e-h/generatablepart)
- **Attributes** `AddComponentMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TerrainSplatPart()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-islayer1" /><code>{"private bool isLayer1"}</code> | <span className="api-desc">Whether to paint splat layer 1.</span> |
| <Link id="m-islayer2" /><code>{"private bool isLayer2"}</code> | <span className="api-desc">Whether to paint splat layer 2.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Radius of the painted area.</span> |
| <Link id="m-strength" /><code>{"private AnimationCurve strength"}</code> | <span className="api-desc">Paint strength by distance from the centre.</span> |
| <Link id="m-texture" /><code>{"private int texture"}</code> | <span className="api-desc">Index of the terrain texture to paint.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generatestatic" /><code>{"override void GenerateStatic("}<Link to="/mod/game-api/types/global-e-h/generationcore">{"GenerationCore"}</Link>{" core, bool isModifyingTerrain)"}</code> | <span className="api-desc">When allowed to modify terrain (and not headless), sets the texture on the chosen splat layers where it's stronger than what's there.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws the radius as a red circle.</span> |

</details>
