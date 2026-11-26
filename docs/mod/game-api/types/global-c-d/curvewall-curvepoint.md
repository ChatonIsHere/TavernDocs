---
title: "CurveWall.CurvePoint"
description: "One node of a CurveWall Bezier spline: a position and its back and forward handles, both relative to the position."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CurveWall.CurvePoint

A **class** in `Root.Township`, the global namespace.

One node of a `CurveWall` Bezier spline: a position and its back and forward handles, both relative to the position.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Nested in** [`CurveWall`](/mod/game-api/types/global-c-d/curvewall)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CurvePoint()"}</code> | <span className="api-desc">Creates a `CurveWall.CurvePoint` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleback" /><code>{"private Vector3 handleBack"}</code> | <span className="api-desc">Backing field for `HandleBack`.</span> |
| <Link id="m-handleforward" /><code>{"private Vector3 handleForward"}</code> | <span className="api-desc">Backing field for `HandleForward`.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Backing field for `Position`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handleback-2" /><code>{"Vector3 HandleBack { get; set; }"}</code> | <span className="api-desc">Handle offset toward the previous node.</span> |
| <Link id="m-handleforward-2" /><code>{"Vector3 HandleForward { get; set; }"}</code> | <span className="api-desc">Handle offset toward the next node.</span> |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; set; }"}</code> | <span className="api-desc">Node position.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculatepoint" /><code>{"Vector3 CalculatePoint("}<Link to="/mod/game-api/types/global-c-d/curvewall-curvepoint">{"CurveWall.CurvePoint"}</Link>{" next, float time)"}</code> | <span className="api-desc">Returns the point on the cubic Bezier segment from this node to the next at the given time (0 to 1).</span> |

## Used in

Members of other types that take, return or hold a `CurvePoint`:

<div className="api-used-in">

[`CurveWall.splineNodes`](/mod/game-api/types/global-c-d/curvewall#m-splinenodes), [`CurveWall.SplineNodes`](/mod/game-api/types/global-c-d/curvewall#m-splinenodes-2).

</div>
