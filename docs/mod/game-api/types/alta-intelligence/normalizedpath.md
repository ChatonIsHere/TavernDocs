---
title: "NormalizedPath"
description: "Internal helper for Walker: a navigation path from the agent's position through the nav corners, measured so a position can be found by progress from 0 to 1."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NormalizedPath

A **internal struct** in `Root.Township`, `Alta.Pathfinding`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal helper for `Walker`: a navigation path from the agent's position through the nav corners, measured so a position can be found by progress from 0 to 1.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Documented in** [Movement and pathfinding](/mod/game-api/creatures/movement-and-pathfinding)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NormalizedPath(Vector3 origin, List<Vector3> points)"}</code> | <span className="api-desc">Creates a `NormalizedPath` from `origin` and `points`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code>{"Vector3 target"}</code> | <span className="api-desc">The last point of the path.</span> |
| <Link id="m-totallength" /><code>{"float totalLength"}</code> | <span className="api-desc">Total length of all segments.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lengths" /><code>{"private float[] lengths"}</code> | <span className="api-desc">Length of each segment.</span> |
| <Link id="m-points" /><code>{"private Vector3[] points"}</code> | <span className="api-desc">The path's points, starting with the origin.</span> |
| <Link id="m-pointslength" /><code>{"private int pointsLength"}</code> | <span className="api-desc">Number of segments.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"Vector3 GetPosition(float progress, ref bool isFinished)"}</code> | <span className="api-desc">Returns the point at the given share of the path's length; past 1 it returns the end and sets `isFinished`.</span> |

## Used in

Members of other types that take, return or hold a `NormalizedPath`:

<div className="api-used-in">

[`Walker.normalizedPath`](/mod/game-api/types/alta-intelligence/walker#m-normalizedpath).

</div>
