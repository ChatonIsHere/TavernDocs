---
title: "IRiverDecorationSegment"
description: "One piece of a river's path (a straight line or a bend) that the river generator places bank decorations along."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IRiverDecorationSegment

An **interface** in `Root.Township`, `Alta.Forests`.

One piece of a river's path (a straight line or a bend) that the river generator places bank decorations along.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`RiverDecorationArc`](/mod/game-api/types/alta-world-generation/riverdecorationarc), [`RiverDecorationLine`](/mod/game-api/types/alta-world-generation/riverdecorationline)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iswaterfall" /><code>{"bool IsWaterfall { get; }"}</code> | True if this segment is a waterfall. |
| <Link id="m-referencepoint" /><code>{"Vector2 ReferencePoint { get; }"}</code> | A 2D point the segment is anchored at (the start, for a straight line). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"void DrawGizmos(float radius)"}</code> | Editor: draws the segment at the given distance from the river centre. |
| <Link id="m-getpointcount" /><code>{"int GetPointCount(float radius, float interval)"}</code> | How many decoration points `GetPoints` returns for this offset and spacing. |
| <Link id="m-getpoints" /><code>{"IEnumerable<Vector2> GetPoints(float radius, float interval)"}</code> | Decoration points along the segment, offset sideways by the radius and spaced by the interval. |

## Used in

Members of other types that take, return or hold a `IRiverDecorationSegment`:

[`RiverGenerator.edgeSegments`](/mod/game-api/types/alta-world-generation/rivergenerator#m-edgesegments), [`RiverGenerator.EdgeSegments`](/mod/game-api/types/alta-world-generation/rivergenerator#m-edgesegments-2), [`RiverGenerator.segments`](/mod/game-api/types/alta-world-generation/rivergenerator#m-segments), [`RiverGenerator.Segments`](/mod/game-api/types/alta-world-generation/rivergenerator#m-segments-2), [`RiverNode.EvaluateEdgeInformation`](/mod/game-api/types/alta-world-generation/rivernode#m-evaluateedgeinformation), [`RiverNode.EvaluateSegmentInformation`](/mod/game-api/types/alta-world-generation/rivernode#m-evaluatesegmentinformation).
