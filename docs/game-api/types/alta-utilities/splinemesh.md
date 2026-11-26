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

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`SplineDisplay`](/game-api/types/alta-utilities/splinedisplay)
- **Attributes** `RequireComponent`, `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplineMesh()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | The `MeshFilter` that holds the generated mesh. |
| <Link id="m-halfwidthbottom" /><code>{"private float halfWidthBottom"}</code> | Half the strip's width at its base. |
| <Link id="m-halfwidthtop" /><code>{"private float halfWidthTop"}</code> | Half the strip's width at its top. |
| <Link id="m-height" /><code>{"private float height"}</code> | Height of the strip above the spline. |
| <Link id="m-isgeneratingbottom" /><code>{"private bool isGeneratingBottom"}</code> | If set, also builds the bottom faces. |
| <Link id="m-isusingsmartsegmentcount" /><code>{"private bool isUsingSmartSegmentCount"}</code> | If set, the segment count per curve is worked out from how much it bends instead of using `segments`. |
| <Link id="m-normaloffset" /><code>{"private float normalOffset"}</code> | Sideways offset of the strip from the spline. |
| <Link id="m-normalup" /><code>{"private Vector3 normalUp"}</code> | Up direction used to build the strip's cross section. |
| <Link id="m-segments" /><code>{"private int segments"}</code> | Number of segments along the whole spline; overwritten when smart segment count is on. |
| <Link id="m-smartsegmentminimum" /><code>{"private float smartSegmentMinimum"}</code> | Smart segment count: minimum segments per curve. |
| <Link id="m-smartsegmentratiomultiplier" /><code>{"private float smartSegmentRatioMultiplier"}</code> | Smart segment count: extra segments per unit of curve length over straight-line length. |
| <Link id="m-uvbottomend" /><code>{"private float uvBottomEnd"}</code> | V coordinate for the bottom edge on one side. |
| <Link id="m-uvbottomstart" /><code>{"private float uvBottomStart"}</code> | V coordinate for the bottom edge on the other side. |
| <Link id="m-uvstretch" /><code>{"private float uvStretch"}</code> | World distance covered by one unit of U along the strip. |
| <Link id="m-uvtopend" /><code>{"private float uvTopEnd"}</code> | V coordinate for the top edge on one side. |
| <Link id="m-uvtopstart" /><code>{"private float uvTopStart"}</code> | V coordinate for the top edge on the other side. |
| <Link id="m-yoffset" /><code>{"private float yOffset"}</code> | Vertical offset of the whole strip along `normalUp`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isheadlessonly" /><code>{"protected override bool IsHeadlessOnly { get; }"}</code> | Returns false, so this mesh is generated on a headless server as well (for its collider). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateinternal" /><code>{"protected override void GenerateInternal()"}</code> | Samples the spline, builds the vertices, UVs and triangles of the strip and its end caps, then updates the collider. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addcollider" /><code>{"private void AddCollider(Mesh mesh)"}</code> | Adds a `MeshCollider` if missing and sets its mesh to the generated one. |

</details>
