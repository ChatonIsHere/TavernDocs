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
| <Link id="m-ctor" /><code>{"NormalizedPath(Vector3 origin, List<Vector3> points)"}</code> | Creates a `NormalizedPath` from `origin` and `points`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code>{"Vector3 target"}</code> | The last point of the path. |
| <Link id="m-totallength" /><code>{"float totalLength"}</code> | Total length of all segments. |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lengths" /><code>{"private float[] lengths"}</code> | Length of each segment. |
| <Link id="m-points" /><code>{"private Vector3[] points"}</code> | The path's points, starting with the origin. |
| <Link id="m-pointslength" /><code>{"private int pointsLength"}</code> | Number of segments. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"Vector3 GetPosition(float progress, ref bool isFinished)"}</code> | Returns the point at the given share of the path's length; past 1 it returns the end and sets `isFinished`. |

## Used in

Members of other types that take, return or hold a `NormalizedPath`:

[`Walker.normalizedPath`](/mod/game-api/types/alta-intelligence/walker#m-normalizedpath).
