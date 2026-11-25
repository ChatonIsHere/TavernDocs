---
title: "RiverDecorationLine"
description: "class RiverDecorationLine in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverDecorationLine

A **class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`IRiverDecorationSegment`](/game-api/types/alta-world-generation/iriverdecorationsegment)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RiverDecorationLine(Vector2 start, Vector2 direction, float priorLinear, float priorAngle, float length, float density)"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-density" /><code>{"private float density"}</code> |
| <Link id="m-direction" /><code>{"private Vector2 direction"}</code> |
| <Link id="m-length" /><code>{"private float length"}</code> |
| <Link id="m-priorangle" /><code>{"private float priorAngle"}</code> |
| <Link id="m-priorlinear" /><code>{"private float priorLinear"}</code> |
| <Link id="m-start" /><code>{"private Vector2 start"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-iswaterfall" /><code>{"bool IsWaterfall { get; set; }"}</code> |
| <Link id="m-referencepoint" /><code>{"Vector2 ReferencePoint { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-drawgizmos" /><code>{"void DrawGizmos(float radius)"}</code> |
| <Link id="m-getpointcount" /><code>{"int GetPointCount(float radius, float interval)"}</code> |
| <Link id="m-getpoints" /><code>{"IEnumerable<Vector2> GetPoints(float radius, float interval) (iterator)"}</code> |
