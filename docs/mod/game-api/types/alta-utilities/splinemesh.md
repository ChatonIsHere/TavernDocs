---
title: "SplineMesh"
description: "Spline display that builds a strip mesh (a wall or fence-like profile) along its parent BezierSpline and gives it a matching MeshCollider."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplineMesh

A **class** in `Root.Township`, `Alta.Bezier`.

Spline display that builds a strip mesh (a wall or fence-like profile) along its parent `BezierSpline` and gives it a matching `MeshCollider`. Generates on the server too.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`SplineDisplay`](/mod/game-api/types/alta-utilities/splinedisplay)
- **Attributes** `RequireComponent`, `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplineMesh()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | <span className="api-desc">The `MeshFilter` that holds the generated mesh.</span> |
| <Link id="m-halfwidthbottom" /><code>{"private float halfWidthBottom"}</code> | <span className="api-desc">Half the strip's width at its base.</span> |
| <Link id="m-halfwidthtop" /><code>{"private float halfWidthTop"}</code> | <span className="api-desc">Half the strip's width at its top.</span> |
| <Link id="m-height" /><code>{"private float height"}</code> | <span className="api-desc">Height of the strip above the spline.</span> |
| <Link id="m-isgeneratingbottom" /><code>{"private bool isGeneratingBottom"}</code> | <span className="api-desc">If set, also builds the bottom faces.</span> |
| <Link id="m-isusingsmartsegmentcount" /><code>{"private bool isUsingSmartSegmentCount"}</code> | <span className="api-desc">If set, the segment count per curve is worked out from how much it bends instead of using `segments`.</span> |
| <Link id="m-normaloffset" /><code>{"private float normalOffset"}</code> | <span className="api-desc">Sideways offset of the strip from the spline.</span> |
| <Link id="m-normalup" /><code>{"private Vector3 normalUp"}</code> | <span className="api-desc">Up direction used to build the strip's cross section.</span> |
| <Link id="m-segments" /><code>{"private int segments"}</code> | <span className="api-desc">Number of segments along the whole spline; overwritten when smart segment count is on.</span> |
| <Link id="m-smartsegmentminimum" /><code>{"private float smartSegmentMinimum"}</code> | <span className="api-desc">Smart segment count: minimum segments per curve.</span> |
| <Link id="m-smartsegmentratiomultiplier" /><code>{"private float smartSegmentRatioMultiplier"}</code> | <span className="api-desc">Smart segment count: extra segments per unit of curve length over straight-line length.</span> |
| <Link id="m-uvbottomend" /><code>{"private float uvBottomEnd"}</code> | <span className="api-desc">V coordinate for the bottom edge on one side.</span> |
| <Link id="m-uvbottomstart" /><code>{"private float uvBottomStart"}</code> | <span className="api-desc">V coordinate for the bottom edge on the other side.</span> |
| <Link id="m-uvstretch" /><code>{"private float uvStretch"}</code> | <span className="api-desc">World distance covered by one unit of U along the strip.</span> |
| <Link id="m-uvtopend" /><code>{"private float uvTopEnd"}</code> | <span className="api-desc">V coordinate for the top edge on one side.</span> |
| <Link id="m-uvtopstart" /><code>{"private float uvTopStart"}</code> | <span className="api-desc">V coordinate for the top edge on the other side.</span> |
| <Link id="m-yoffset" /><code>{"private float yOffset"}</code> | <span className="api-desc">Vertical offset of the whole strip along `normalUp`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isheadlessonly" /><code>{"protected override bool IsHeadlessOnly { get; }"}</code> | <span className="api-desc">Returns false, so this mesh is generated on a headless server as well (for its collider).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateinternal" /><code>{"protected override void GenerateInternal()"}</code> | <span className="api-desc">Samples the spline, builds the vertices, UVs and triangles of the strip and its end caps, then updates the collider.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addcollider" /><code>{"private void AddCollider(Mesh mesh)"}</code> | <span className="api-desc">Adds a `MeshCollider` if missing and sets its mesh to the generated one.</span> |

</details>
