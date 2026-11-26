---
title: "SplineCylinder"
description: "Builds a tube mesh along a BezierSpline (such as a rope or pipe) and gives it a matching MeshCollider."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplineCylinder

A **class** in `Root.Township`, `Alta.Bezier`.

Builds a tube mesh along a `BezierSpline` (such as a rope or pipe) and gives it a matching `MeshCollider`. Also runs on headless servers, so the collider exists there.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`SplineDisplay`](/game-api/types/alta-utilities/splinedisplay)
- **Attributes** `RequireComponent`, `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplineCylinder()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-edges" /><code>{"private int edges"}</code> | Number of sides around the tube; 6 by default. |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | The `MeshFilter` the mesh is written to. |
| <Link id="m-isusingsmartsegmentcount" /><code>{"private bool isUsingSmartSegmentCount"}</code> | When on, each curve gets more segments the more it bends, instead of a fixed `segments` count. |
| <Link id="m-normaloffset" /><code>{"private float normalOffset"}</code> | Sideways offset of the tube from the spline. |
| <Link id="m-normalup" /><code>{"private Vector3 normalUp"}</code> | Up direction used to work out the tube's sideways axes. |
| <Link id="m-radius" /><code>{"private AnimationCurve radius"}</code> | Tube radius along the spline, from 0 (start) to 1 (end). |
| <Link id="m-segments" /><code>{"private int segments"}</code> | Number of segments along the spline when smart segments are off. Overwritten with the total when they are on. |
| <Link id="m-smartsegmentminimum" /><code>{"private float smartSegmentMinimum"}</code> | Fewest segments per curve with smart segments. |
| <Link id="m-smartsegmentratiomultiplier" /><code>{"private float smartSegmentRatioMultiplier"}</code> | How many extra segments a curve gets per unit of bend (path length over straight distance). |
| <Link id="m-uvstretch" /><code>{"private float uvStretch"}</code> | Length of spline per unit of texture V; higher stretches the texture. |
| <Link id="m-yoffset" /><code>{"private float yOffset"}</code> | Fixed upward offset of the whole tube. |
| <Link id="m-ypointoffset" /><code>{"private AnimationCurve yPointOffset"}</code> | Upward offset along the spline, from 0 (start) to 1 (end). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isheadlessonly" /><code>{"protected override bool IsHeadlessOnly { get; }"}</code> | False, so the tube is generated on headless servers too (the base class skips them when this is true). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateinternal" /><code>{"protected override void GenerateInternal()"}</code> | Samples the spline, builds a ring of vertices at each point and writes the tube mesh, then adds the collider. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addcollider" /><code>{"private void AddCollider(Mesh mesh)"}</code> | Sets the mesh on the object's `MeshCollider`, adding one if missing. |

</details>
