---
title: "MarchingCubes.Point4"
description: "An integer grid point with a fourth value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MarchingCubes.Point4

A **struct** in `Root.Township`, no namespace.

An integer grid point with a fourth value. In the marching cubes edge table `w` picks the edge axis (probably).

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`MarchingCubes`](/game-api/types/global-m-o/marchingcubes)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Point4(int x, int y, int z, int w)"}</code> | Creates a `MarchingCubes.Point4` from `x`, `y`, `z` and `w`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-w" /><code>{"int w"}</code> | Fourth value; 0 to 2 in the edge offset table. |
| <Link id="m-x" /><code>{"int x"}</code> | X coordinate. |
| <Link id="m-y" /><code>{"int y"}</code> | Y coordinate. |
| <Link id="m-z" /><code>{"int z"}</code> | Z coordinate. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | True when all four values match. |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | Hash of all four values. |
| <Link id="m-op-addition" /><code>{"static "}<Link to="/game-api/types/global-m-o/marchingcubes-point4">{"MarchingCubes.Point4"}</Link>{" op_Addition("}<Link to="/game-api/types/global-m-o/marchingcubes-point4">{"MarchingCubes.Point4"}</Link>{" first, "}<Link to="/game-api/types/global-m-o/marchingcubes-point4">{"MarchingCubes.Point4"}</Link>{" second)"}</code> | Adds each value. |

## Used in

Members of other types that take, return or hold a `Point4`:

[`MarchingCubes.edgeOffsets`](/game-api/types/global-m-o/marchingcubes#m-edgeoffsets), [`MarchingCubes.GridCell.coordinate`](/game-api/types/global-m-o/marchingcubes-gridcell#m-coordinate), [`MarchingCubes.Triangle.point4s`](/game-api/types/global-m-o/marchingcubes-triangle#m-point4s).
