---
title: "SplineProfile"
description: "A preset of river mesh settings that a RamSpline can load (from the R.A.M."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplineProfile

A **class** in `Root.Township`, the global namespace.

A preset of river mesh settings that a `RamSpline` can load (from the R.A.M. river tool).

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplineProfile()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-flowflat" /><code>{"AnimationCurve flowFlat"}</code> | Flow speed across the river's width where the surface is flat. |
| <Link id="m-flowwaterfall" /><code>{"AnimationCurve flowWaterfall"}</code> | Flow speed across the width on steep parts. Blended with `flowFlat` by surface slope. |
| <Link id="m-maxval" /><code>{"float maxVal"}</code> | Shapes how vertices are spread over the right half of the width. |
| <Link id="m-meshcurve" /><code>{"AnimationCurve meshCurve"}</code> | Cross-section curve of the river surface across its width. |
| <Link id="m-minval" /><code>{"float minVal"}</code> | Shapes how vertices are spread over the left half of the width. |
| <Link id="m-splinematerial" /><code>{"Material splineMaterial"}</code> | Material for the generated river mesh. |
| <Link id="m-triangledensity" /><code>{"float triangleDensity"}</code> | Step along each spline segment, as a fraction. Smaller values give more triangles. |
| <Link id="m-uvrotation" /><code>{"bool uvRotation"}</code> | Whether the UVs are rotated. |
| <Link id="m-uvscale" /><code>{"float uvScale"}</code> | Scale of the UVs along the river. |
| <Link id="m-vertsinshape" /><code>{"int vertsInShape"}</code> | Number of vertices across the river's width. |

## Used in

Members of other types that take, return or hold a `SplineProfile`:

[`RamSpline.currentProfile`](/mod/game-api/types/global-q-r/ramspline#m-currentprofile), [`RamSpline.oldProfile`](/mod/game-api/types/global-q-r/ramspline#m-oldprofile).
