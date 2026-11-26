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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`IRiverDecorationSegment`](/mod/game-api/types/alta-world-generation/iriverdecorationsegment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverDecorationLine(Vector2 start, Vector2 direction, float priorLinear, float priorAngle, float length, float density)"}</code> | <span className="api-desc">Creates a `RiverDecorationLine` from `start`, `direction`, `priorLinear`, `priorAngle`, `length` and `density`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-density" /><code>{"private float density"}</code> | <span className="api-desc">Multiplier on the spacing between points.</span> |
| <Link id="m-direction" /><code>{"private Vector2 direction"}</code> | <span className="api-desc">Unit direction of the line.</span> |
| <Link id="m-length" /><code>{"private float length"}</code> | <span className="api-desc">Length of the line.</span> |
| <Link id="m-priorangle" /><code>{"private float priorAngle"}</code> | <span className="api-desc">Total turn of earlier segments, used so spacing carries on across segments.</span> |
| <Link id="m-priorlinear" /><code>{"private float priorLinear"}</code> | <span className="api-desc">Total straight length of earlier segments, used so spacing carries on across segments.</span> |
| <Link id="m-start" /><code>{"private Vector2 start"}</code> | <span className="api-desc">Start point of the line.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iswaterfall" /><code>{"bool IsWaterfall { get; set; }"}</code> | <span className="api-desc">Whether this segment is part of a waterfall.</span> |
| <Link id="m-referencepoint" /><code>{"Vector2 ReferencePoint { get; }"}</code> | <span className="api-desc">The line's start point.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"void DrawGizmos(float radius)"}</code> | <span className="api-desc">Draws a gizmo line for the segment, shifted sideways by the radius.</span> |
| <Link id="m-getpointcount" /><code>{"int GetPointCount(float radius, float interval)"}</code> | <span className="api-desc">How many points `GetPoints` returns for this radius offset and spacing.</span> |
| <Link id="m-getpoints" /><code>{"IEnumerable<Vector2> GetPoints(float radius, float interval) (iterator)"}</code> | <span className="api-desc">Evenly spaced points along the line, shifted sideways by the radius, lined up with earlier segments.</span> |
