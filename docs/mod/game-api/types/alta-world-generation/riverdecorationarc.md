---
title: "RiverDecorationArc"
description: "A curved piece of a river's decoration outline, used to place decorations at even spacing along the bank."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverDecorationArc

A **class** in `Root.Township`, `Alta.Forests`.

A curved piece of a river's decoration outline, used to place decorations at even spacing along the bank.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`IRiverDecorationSegment`](/mod/game-api/types/alta-world-generation/iriverdecorationsegment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverDecorationArc(Vector2 center, float radius, float radiansStart, float priorLinear, float priorAngle, float angle)"}</code> | <span className="api-desc">Creates a `RiverDecorationArc` from `center`, `radius`, `radiansStart`, `priorLinear`, `priorAngle` and `angle`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angle" /><code>{"private float angle"}</code> | <span className="api-desc">How far the arc turns, in radians.</span> |
| <Link id="m-center" /><code>{"private Vector2 center"}</code> | <span className="api-desc">Centre of the arc.</span> |
| <Link id="m-priorangle" /><code>{"private float priorAngle"}</code> | <span className="api-desc">Total turn of earlier segments, used so spacing carries on across segments.</span> |
| <Link id="m-priorlinear" /><code>{"private float priorLinear"}</code> | <span className="api-desc">Total straight length of earlier segments, used so spacing carries on across segments.</span> |
| <Link id="m-radiansstart" /><code>{"private float radiansStart"}</code> | <span className="api-desc">Angle the arc starts at, in radians.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">The arc's base radius, added to the offset passed in.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iswaterfall" /><code>{"bool IsWaterfall { get; set; }"}</code> | <span className="api-desc">Whether this segment is part of a waterfall.</span> |
| <Link id="m-referencepoint" /><code>{"Vector2 ReferencePoint { get; }"}</code> | <span className="api-desc">The arc's centre.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"void DrawGizmos(float radius)"}</code> | <span className="api-desc">Draws a gizmo line between the arc's start and end at the given radius offset.</span> |
| <Link id="m-getpointcount" /><code>{"int GetPointCount(float radius, float interval)"}</code> | <span className="api-desc">How many points `GetPoints` returns for this radius offset and spacing.</span> |
| <Link id="m-getpoints" /><code>{"IEnumerable<Vector2> GetPoints(float radius, float interval) (iterator)"}</code> | <span className="api-desc">Evenly spaced points along the arc at the given radius offset, lined up with the distance of earlier segments.</span> |
