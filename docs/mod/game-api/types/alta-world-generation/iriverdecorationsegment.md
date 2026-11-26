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
| <Link id="m-iswaterfall" /><code>{"bool IsWaterfall { get; }"}</code> | <span className="api-desc">True if this segment is a waterfall.</span> |
| <Link id="m-referencepoint" /><code>{"Vector2 ReferencePoint { get; }"}</code> | <span className="api-desc">A 2D point the segment is anchored at (the start, for a straight line).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"void DrawGizmos(float radius)"}</code> | <span className="api-desc">Editor: draws the segment at the given distance from the river centre.</span> |
| <Link id="m-getpointcount" /><code>{"int GetPointCount(float radius, float interval)"}</code> | <span className="api-desc">How many decoration points `GetPoints` returns for this offset and spacing.</span> |
| <Link id="m-getpoints" /><code>{"IEnumerable<Vector2> GetPoints(float radius, float interval)"}</code> | <span className="api-desc">Decoration points along the segment, offset sideways by the radius and spaced by the interval.</span> |

## Used in

Members of other types that take, return or hold a `IRiverDecorationSegment`:

<div className="api-used-in">

[`RiverGenerator.edgeSegments`](/mod/game-api/types/alta-world-generation/rivergenerator#m-edgesegments), [`RiverGenerator.EdgeSegments`](/mod/game-api/types/alta-world-generation/rivergenerator#m-edgesegments-2), [`RiverGenerator.segments`](/mod/game-api/types/alta-world-generation/rivergenerator#m-segments), [`RiverGenerator.Segments`](/mod/game-api/types/alta-world-generation/rivergenerator#m-segments-2), [`RiverNode.EvaluateEdgeInformation`](/mod/game-api/types/alta-world-generation/rivernode#m-evaluateedgeinformation), [`RiverNode.EvaluateSegmentInformation`](/mod/game-api/types/alta-world-generation/rivernode#m-evaluatesegmentinformation).

</div>
