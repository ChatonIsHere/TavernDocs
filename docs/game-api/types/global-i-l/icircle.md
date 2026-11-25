---
title: "ICircle"
description: "A circle in 3D space: a centre, a radius and the direction it faces."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICircle

An **interface** in `Root.Township`, no namespace.

A circle in 3D space: a centre, a radius and the direction it faces.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`PulleyBeltHelper.Circle`](/game-api/types/global-p/pulleybelthelper-circle), [`Turnable`](/game-api/types/global-t-x/turnable)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-face" /><code>{"Vector3 Face { get; }"}</code> | Direction the circle faces (its normal). |
| <Link id="m-position" /><code>{"Vector3 Position { get; }"}</code> | Centre of the circle. |
| <Link id="m-radius" /><code>{"float Radius { get; }"}</code> | Radius of the circle. |

## Used in

Members of other types that take, return or hold a `ICircle`:

[`PulleyBeltHelper.EvaluateOptions`](/game-api/types/global-p/pulleybelthelper#m-evaluateoptions), [`PulleyBeltHelper.exterior`](/game-api/types/global-p/pulleybelthelper#m-exterior), [`PulleyBeltHelper.GetExterior`](/game-api/types/global-p/pulleybelthelper#m-getexterior), [`PulleyBeltHelper.GetRope`](/game-api/types/global-p/pulleybelthelper#m-getrope), [`PulleyBeltHelper.GetWorkingRadius`](/game-api/types/global-p/pulleybelthelper#m-getworkingradius).
