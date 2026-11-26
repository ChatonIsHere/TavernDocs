---
title: "ICircle"
description: "A circle in 3D space: a centre, a radius and the direction it faces."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICircle

An **interface** in `Root.Township`, the global namespace.

A circle in 3D space: a centre, a radius and the direction it faces.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`PulleyBeltHelper.Circle`](/mod/game-api/types/global-p/pulleybelthelper-circle), [`Turnable`](/mod/game-api/types/global-t-x/turnable)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-face" /><code>{"Vector3 Face { get; }"}</code> | Direction the circle faces (its normal). |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> | Centre of the circle. |
| <Link id="m-radius" /><code>{"float Radius { get; }"}</code> | Radius of the circle. |

## Used in

Members of other types that take, return or hold a `ICircle`:

[`PulleyBeltHelper.EvaluateOptions`](/mod/game-api/types/global-p/pulleybelthelper#m-evaluateoptions), [`PulleyBeltHelper.exterior`](/mod/game-api/types/global-p/pulleybelthelper#m-exterior), [`PulleyBeltHelper.GetExterior`](/mod/game-api/types/global-p/pulleybelthelper#m-getexterior), [`PulleyBeltHelper.GetRope`](/mod/game-api/types/global-p/pulleybelthelper#m-getrope), [`PulleyBeltHelper.GetWorkingRadius`](/mod/game-api/types/global-p/pulleybelthelper#m-getworkingradius).
