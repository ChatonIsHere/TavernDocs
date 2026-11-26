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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`SplineDisplay`](/mod/game-api/types/alta-utilities/splinedisplay)
- **Attributes** `RequireComponent`, `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplineCylinder()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-edges" /><code>{"private int edges"}</code> | <span className="api-desc">Number of sides around the tube; 6 by default.</span> |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | <span className="api-desc">The `MeshFilter` the mesh is written to.</span> |
| <Link id="m-isusingsmartsegmentcount" /><code>{"private bool isUsingSmartSegmentCount"}</code> | <span className="api-desc">When on, each curve gets more segments the more it bends, instead of a fixed `segments` count.</span> |
| <Link id="m-normaloffset" /><code>{"private float normalOffset"}</code> | <span className="api-desc">Sideways offset of the tube from the spline.</span> |
| <Link id="m-normalup" /><code>{"private Vector3 normalUp"}</code> | <span className="api-desc">Up direction used to work out the tube's sideways axes.</span> |
| <Link id="m-radius" /><code>{"private AnimationCurve radius"}</code> | <span className="api-desc">Tube radius along the spline, from 0 (start) to 1 (end).</span> |
| <Link id="m-segments" /><code>{"private int segments"}</code> | <span className="api-desc">Number of segments along the spline when smart segments are off. Overwritten with the total when they are on.</span> |
| <Link id="m-smartsegmentminimum" /><code>{"private float smartSegmentMinimum"}</code> | <span className="api-desc">Fewest segments per curve with smart segments.</span> |
| <Link id="m-smartsegmentratiomultiplier" /><code>{"private float smartSegmentRatioMultiplier"}</code> | <span className="api-desc">How many extra segments a curve gets per unit of bend (path length over straight distance).</span> |
| <Link id="m-uvstretch" /><code>{"private float uvStretch"}</code> | <span className="api-desc">Length of spline per unit of texture V; higher stretches the texture.</span> |
| <Link id="m-yoffset" /><code>{"private float yOffset"}</code> | <span className="api-desc">Fixed upward offset of the whole tube.</span> |
| <Link id="m-ypointoffset" /><code>{"private AnimationCurve yPointOffset"}</code> | <span className="api-desc">Upward offset along the spline, from 0 (start) to 1 (end).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isheadlessonly" /><code>{"protected override bool IsHeadlessOnly { get; }"}</code> | <span className="api-desc">False, so the tube is generated on headless servers too (the base class skips them when this is true).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generateinternal" /><code>{"protected override void GenerateInternal()"}</code> | <span className="api-desc">Samples the spline, builds a ring of vertices at each point and writes the tube mesh, then adds the collider.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addcollider" /><code>{"private void AddCollider(Mesh mesh)"}</code> | <span className="api-desc">Sets the mesh on the object's `MeshCollider`, adding one if missing.</span> |

</details>
