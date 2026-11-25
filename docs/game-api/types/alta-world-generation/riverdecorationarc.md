---
title: "RiverDecorationArc"
description: "class RiverDecorationArc in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverDecorationArc

A **class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`IRiverDecorationSegment`](/game-api/types/alta-world-generation/iriverdecorationsegment)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RiverDecorationArc(Vector2 center, float radius, float radiansStart, float priorLinear, float priorAngle, float angle)"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-angle" /><code>{"private float angle"}</code> |
| <Link id="m-center" /><code>{"private Vector2 center"}</code> |
| <Link id="m-priorangle" /><code>{"private float priorAngle"}</code> |
| <Link id="m-priorlinear" /><code>{"private float priorLinear"}</code> |
| <Link id="m-radiansstart" /><code>{"private float radiansStart"}</code> |
| <Link id="m-radius" /><code>{"private float radius"}</code> |

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
