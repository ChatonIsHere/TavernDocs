---
title: "BezierControlPointMode"
description: "How a bezier spline keeps neighbouring control points in line: free, aligned or mirrored."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BezierControlPointMode

An **enum** in `Root.Township`, the global namespace.

How a bezier spline keeps neighbouring control points in line: free, aligned or mirrored.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)

## Values

| Member |
| --- |
| <Link id="m-aligned" /><code>{"Aligned = 1"}</code> |
| <Link id="m-free" /><code>{"Free = 0"}</code> |
| <Link id="m-mirrored" /><code>{"Mirrored = 2"}</code> |

## Used in

Members of other types that take, return or hold a `BezierControlPointMode`:

[`BezierSpline.GetControlPointMode`](/mod/game-api/types/alta-utilities/bezierspline#m-getcontrolpointmode), [`BezierSpline.modes`](/mod/game-api/types/alta-utilities/bezierspline#m-modes), [`BezierSpline.SetControlPointMode`](/mod/game-api/types/alta-utilities/bezierspline#m-setcontrolpointmode).
