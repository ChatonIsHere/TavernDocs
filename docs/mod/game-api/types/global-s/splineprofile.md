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
| <Link id="m-ctor" /><code>{"SplineProfile()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-flowflat" /><code>{"AnimationCurve flowFlat"}</code> | <span className="api-desc">Flow speed across the river's width where the surface is flat.</span> |
| <Link id="m-flowwaterfall" /><code>{"AnimationCurve flowWaterfall"}</code> | <span className="api-desc">Flow speed across the width on steep parts. Blended with `flowFlat` by surface slope.</span> |
| <Link id="m-maxval" /><code>{"float maxVal"}</code> | <span className="api-desc">Shapes how vertices are spread over the right half of the width.</span> |
| <Link id="m-meshcurve" /><code>{"AnimationCurve meshCurve"}</code> | <span className="api-desc">Cross-section curve of the river surface across its width.</span> |
| <Link id="m-minval" /><code>{"float minVal"}</code> | <span className="api-desc">Shapes how vertices are spread over the left half of the width.</span> |
| <Link id="m-splinematerial" /><code>{"Material splineMaterial"}</code> | <span className="api-desc">Material for the generated river mesh.</span> |
| <Link id="m-triangledensity" /><code>{"float triangleDensity"}</code> | <span className="api-desc">Step along each spline segment, as a fraction. Smaller values give more triangles.</span> |
| <Link id="m-uvrotation" /><code>{"bool uvRotation"}</code> | <span className="api-desc">Whether the UVs are rotated.</span> |
| <Link id="m-uvscale" /><code>{"float uvScale"}</code> | <span className="api-desc">Scale of the UVs along the river.</span> |
| <Link id="m-vertsinshape" /><code>{"int vertsInShape"}</code> | <span className="api-desc">Number of vertices across the river's width.</span> |

## Used in

Members of other types that take, return or hold a `SplineProfile`:

<div className="api-used-in">

[`RamSpline.currentProfile`](/mod/game-api/types/global-q-r/ramspline#m-currentprofile), [`RamSpline.oldProfile`](/mod/game-api/types/global-q-r/ramspline#m-oldprofile).

</div>
