---
title: "RiverDecorationLine"
description: "A straight piece of a river's decoration outline, used to place decorations at even spacing along the bank."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverDecorationLine

A **class** in `Root.Township`, `Alta.Forests`.

A straight piece of a river's decoration outline, used to place decorations at even spacing along the bank.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`IRiverDecorationSegment`](/game-api/types/alta-world-generation/iriverdecorationsegment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverDecorationLine(Vector2 start, Vector2 direction, float priorLinear, float priorAngle, float length, float density)"}</code> | Creates a `RiverDecorationLine` from `start`, `direction`, `priorLinear`, `priorAngle`, `length` and `density`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-density" /><code>{"private float density"}</code> | Multiplier on the spacing between points. |
| <Link id="m-direction" /><code>{"private Vector2 direction"}</code> | Unit direction of the line. |
| <Link id="m-length" /><code>{"private float length"}</code> | Length of the line. |
| <Link id="m-priorangle" /><code>{"private float priorAngle"}</code> | Total turn of earlier segments, used so spacing carries on across segments. |
| <Link id="m-priorlinear" /><code>{"private float priorLinear"}</code> | Total straight length of earlier segments, used so spacing carries on across segments. |
| <Link id="m-start" /><code>{"private Vector2 start"}</code> | Start point of the line. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iswaterfall" /><code>{"bool IsWaterfall { get; set; }"}</code> | Whether this segment is part of a waterfall. |
| <Link id="m-referencepoint" /><code>{"Vector2 ReferencePoint { get; }"}</code> | The line's start point. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"void DrawGizmos(float radius)"}</code> | Draws a gizmo line for the segment, shifted sideways by the radius. |
| <Link id="m-getpointcount" /><code>{"int GetPointCount(float radius, float interval)"}</code> | How many points `GetPoints` returns for this radius offset and spacing. |
| <Link id="m-getpoints" /><code>{"IEnumerable<Vector2> GetPoints(float radius, float interval) (iterator)"}</code> | Evenly spaced points along the line, shifted sideways by the radius, lined up with earlier segments. |
