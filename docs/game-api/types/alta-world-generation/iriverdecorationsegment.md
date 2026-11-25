---
title: "IRiverDecorationSegment"
description: "interface IRiverDecorationSegment in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRiverDecorationSegment

An **interface** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`RiverDecorationArc`](/game-api/types/alta-world-generation/riverdecorationarc), [`RiverDecorationLine`](/game-api/types/alta-world-generation/riverdecorationline)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iswaterfall" /><code>{"bool IsWaterfall { get; }"}</code> |  |
| <Link id="m-referencepoint" /><code>{"Vector2 ReferencePoint { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"void DrawGizmos(float radius)"}</code> |  |
| <Link id="m-getpointcount" /><code>{"int GetPointCount(float radius, float interval)"}</code> |  |
| <Link id="m-getpoints" /><code>{"IEnumerable<Vector2> GetPoints(float radius, float interval)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IRiverDecorationSegment`:

[`RiverGenerator.edgeSegments`](/game-api/types/alta-world-generation/rivergenerator#m-edgesegments), [`RiverGenerator.EdgeSegments`](/game-api/types/alta-world-generation/rivergenerator#m-edgesegments-2), [`RiverGenerator.segments`](/game-api/types/alta-world-generation/rivergenerator#m-segments), [`RiverGenerator.Segments`](/game-api/types/alta-world-generation/rivergenerator#m-segments-2), [`RiverNode.EvaluateEdgeInformation`](/game-api/types/alta-world-generation/rivernode#m-evaluateedgeinformation), [`RiverNode.EvaluateSegmentInformation`](/game-api/types/alta-world-generation/rivernode#m-evaluatesegmentinformation).
