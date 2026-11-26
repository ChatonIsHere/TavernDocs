---
title: "MarchingCubes.GridCell"
description: "One cube of the marching cubes grid: its eight corners and their density values."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MarchingCubes.GridCell

A **class** in `Root.Township`, the global namespace.

One cube of the marching cubes grid: its eight corners and their density values. Passed to `Polygonise`.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`MarchingCubes`](/mod/game-api/types/global-m-o/marchingcubes)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GridCell()"}</code> | Creates a `MarchingCubes.GridCell` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-coordinate" /><code><Link to="/mod/game-api/types/global-m-o/marchingcubes-point4">{"MarchingCubes.Point4"}</Link>{" coordinate"}</code> | Grid coordinate of the cell, used to key shared edge vertices. |
| <Link id="m-points" /><code>{"Vector3[] points"}</code> | World positions of the eight corners. |
| <Link id="m-values" /><code>{"float[] values"}</code> | Density value at each corner, compared to the iso level. |

## Used in

Members of other types that take, return or hold a `GridCell`:

[`MarchingCubes.Polygonise`](/mod/game-api/types/global-m-o/marchingcubes#m-polygonise).
