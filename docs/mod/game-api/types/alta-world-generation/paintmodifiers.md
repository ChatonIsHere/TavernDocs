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
| <Link id="m-ctor" /><code>{"PaintModifiers()"}</code> | Creates a `PaintModifiers` with default values. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isforced" /><code>{"private bool isForced"}</code> | When true, overwrites the layers instead of only raising them. |
| <Link id="m-layer1" /><code>{"private int layer1"}</code> | First splat layer index. |
| <Link id="m-layer1strength" /><code>{"private float layer1Strength"}</code> | Strength of the first layer at a full score. |
| <Link id="m-layer2" /><code>{"private int layer2"}</code> | Second splat layer index. |
| <Link id="m-layer2strength" /><code>{"private float layer2Strength"}</code> | Strength of the second layer at a full score. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"void Apply(ref "}<Link to="/mod/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{" data, float score)"}</code> | Writes both layers into the splat data at their strength times the score; unless forced, only where that's stronger than what's there. |

## Used in

Members of other types that take, return or hold a `PaintModifiers`:

[`SplatPaintSet.paintModifiers`](/mod/game-api/types/alta-world-generation/splatpaintset#m-paintmodifiers), [`SplatPaintSet.PaintModifiers`](/mod/game-api/types/alta-world-generation/splatpaintset#m-paintmodifiers-2).
