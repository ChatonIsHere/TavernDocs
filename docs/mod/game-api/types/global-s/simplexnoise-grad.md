---
title: "SimplexNoise.Grad"
description: "A gradient vector for SimplexNoise (3D, with w used only for 4D noise)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimplexNoise.Grad

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A gradient vector for `SimplexNoise` (3D, with `w` used only for 4D noise). Private to that class.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Nested in** [`SimplexNoise`](/mod/game-api/types/global-s/simplexnoise)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Grad(double x, double y, double z)"}</code> | Creates a `SimplexNoise.Grad` from `x`, `y`, `z` and `w`. |
| <Link id="m-ctor-2" /><code>{"Grad(double x, double y, double z, double w)"}</code> | Creates a `SimplexNoise.Grad` from `x`, `y`, `z` and `w`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-w" /><code>{"double w"}</code> | Fourth component, 0 for 3D gradients. |
| <Link id="m-x" /><code>{"double x"}</code> | X part of the gradient vector. |
| <Link id="m-y" /><code>{"double y"}</code> | Y part of the gradient vector. |
| <Link id="m-z" /><code>{"double z"}</code> | Z part of the gradient vector. |

## Used in

Members of other types that take, return or hold a `Grad`:

[`SimplexNoise.dot`](/mod/game-api/types/global-s/simplexnoise#m-dot), [`SimplexNoise.grad3`](/mod/game-api/types/global-s/simplexnoise#m-grad3), [`SimplexNoise.grad4`](/mod/game-api/types/global-s/simplexnoise#m-grad4).
