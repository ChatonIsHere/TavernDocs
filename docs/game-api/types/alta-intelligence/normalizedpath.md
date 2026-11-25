---
title: "NormalizedPath"
description: "A path's corners and length, for NormalizedMove."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NormalizedPath

A **internal struct** in `Root.Township`, `Alta.Pathfinding`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A path's corners and length, for `NormalizedMove`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Documented in** [Movement and pathfinding](/game-api/creatures/movement-and-pathfinding)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NormalizedPath(Vector3 origin, List<Vector3> points)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code>{"Vector3 target"}</code> |  |
| <Link id="m-totallength" /><code>{"float totalLength"}</code> |  |
| <Link id="m-lengths" /><code>{"private float[] lengths"}</code> |  |
| <Link id="m-points" /><code>{"private Vector3[] points"}</code> |  |
| <Link id="m-pointslength" /><code>{"private int pointsLength"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"Vector3 GetPosition(float progress, ref bool isFinished)"}</code> |  |

## Used in

Members of other types that take, return or hold a `NormalizedPath`:

[`Walker.normalizedPath`](/game-api/types/alta-intelligence/walker#m-normalizedpath).
