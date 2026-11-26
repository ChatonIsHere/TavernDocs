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
| <Link id="m-ctor" /><code>{"RiverDecorationArc(Vector2 center, float radius, float radiansStart, float priorLinear, float priorAngle, float angle)"}</code> | Creates a `RiverDecorationArc` from `center`, `radius`, `radiansStart`, `priorLinear`, `priorAngle` and `angle`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angle" /><code>{"private float angle"}</code> | How far the arc turns, in radians. |
| <Link id="m-center" /><code>{"private Vector2 center"}</code> | Centre of the arc. |
| <Link id="m-priorangle" /><code>{"private float priorAngle"}</code> | Total turn of earlier segments, used so spacing carries on across segments. |
| <Link id="m-priorlinear" /><code>{"private float priorLinear"}</code> | Total straight length of earlier segments, used so spacing carries on across segments. |
| <Link id="m-radiansstart" /><code>{"private float radiansStart"}</code> | Angle the arc starts at, in radians. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | The arc's base radius, added to the offset passed in. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iswaterfall" /><code>{"bool IsWaterfall { get; set; }"}</code> | Whether this segment is part of a waterfall. |
| <Link id="m-referencepoint" /><code>{"Vector2 ReferencePoint { get; }"}</code> | The arc's centre. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"void DrawGizmos(float radius)"}</code> | Draws a gizmo line between the arc's start and end at the given radius offset. |
| <Link id="m-getpointcount" /><code>{"int GetPointCount(float radius, float interval)"}</code> | How many points `GetPoints` returns for this radius offset and spacing. |
| <Link id="m-getpoints" /><code>{"IEnumerable<Vector2> GetPoints(float radius, float interval) (iterator)"}</code> | Evenly spaced points along the arc at the given radius offset, lined up with the distance of earlier segments. |
