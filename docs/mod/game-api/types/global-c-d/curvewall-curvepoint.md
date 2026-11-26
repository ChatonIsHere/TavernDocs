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
| <Link id="m-ctor" /><code>{"CurvePoint()"}</code> | Creates a `CurveWall.CurvePoint` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handleback" /><code>{"private Vector3 handleBack"}</code> | Backing field for `HandleBack`. |
| <Link id="m-handleforward" /><code>{"private Vector3 handleForward"}</code> | Backing field for `HandleForward`. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Backing field for `Position`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handleback-2" /><code>{"Vector3 HandleBack { get; set; }"}</code> | Handle offset toward the previous node. |
| <Link id="m-handleforward-2" /><code>{"Vector3 HandleForward { get; set; }"}</code> | Handle offset toward the next node. |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; set; }"}</code> | Node position. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculatepoint" /><code>{"Vector3 CalculatePoint("}<Link to="/mod/game-api/types/global-c-d/curvewall-curvepoint">{"CurveWall.CurvePoint"}</Link>{" next, float time)"}</code> | Returns the point on the cubic Bezier segment from this node to the next at the given time (0 to 1). |

## Used in

Members of other types that take, return or hold a `CurvePoint`:

[`CurveWall.splineNodes`](/mod/game-api/types/global-c-d/curvewall#m-splinenodes), [`CurveWall.SplineNodes`](/mod/game-api/types/global-c-d/curvewall#m-splinenodes-2).
