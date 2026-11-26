---
title: "PaintModifiers"
description: "Spawn modifier that paints up to two terrain splat layers, scaled by a 0 to 1 score."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PaintModifiers

A **class** in `Root.Township`, `Alta.Forests`.

Spawn modifier that paints up to two terrain splat layers, scaled by a 0 to 1 score.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`SpawnModifiers`](/mod/game-api/types/alta-world-generation/spawnmodifiers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PaintModifiers()"}</code> | <span className="api-desc">Creates a `PaintModifiers` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isforced" /><code>{"private bool isForced"}</code> | <span className="api-desc">When true, overwrites the layers instead of only raising them.</span> |
| <Link id="m-layer1" /><code>{"private int layer1"}</code> | <span className="api-desc">First splat layer index.</span> |
| <Link id="m-layer1strength" /><code>{"private float layer1Strength"}</code> | <span className="api-desc">Strength of the first layer at a full score.</span> |
| <Link id="m-layer2" /><code>{"private int layer2"}</code> | <span className="api-desc">Second splat layer index.</span> |
| <Link id="m-layer2strength" /><code>{"private float layer2Strength"}</code> | <span className="api-desc">Strength of the second layer at a full score.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply(ref "}<Link to="/mod/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{" data, float score)"}</code> | <span className="api-desc">Writes both layers into the splat data at their strength times the score; unless forced, only where that's stronger than what's there.</span> |

## Used in

Members of other types that take, return or hold a `PaintModifiers`:

<div className="api-used-in">

[`SplatPaintSet.paintModifiers`](/mod/game-api/types/alta-world-generation/splatpaintset#m-paintmodifiers), [`SplatPaintSet.PaintModifiers`](/mod/game-api/types/alta-world-generation/splatpaintset#m-paintmodifiers-2).

</div>
