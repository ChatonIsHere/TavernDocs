---
title: "MarchingCubes.Point4"
description: "An integer grid point with a fourth value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MarchingCubes.Point4

A **struct** in `Root.Township`, the global namespace.

An integer grid point with a fourth value. In the marching cubes edge table `w` picks the edge axis (probably).

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`MarchingCubes`](/mod/game-api/types/global-m-o/marchingcubes)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Point4(int x, int y, int z, int w)"}</code> | <span className="api-desc">Creates a `MarchingCubes.Point4` from `x`, `y`, `z` and `w`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-w" /><code>{"int w"}</code> | <span className="api-desc">Fourth value; 0 to 2 in the edge offset table.</span> |
| <Link id="m-x" /><code>{"int x"}</code> | <span className="api-desc">X coordinate.</span> |
| <Link id="m-y" /><code>{"int y"}</code> | <span className="api-desc">Y coordinate.</span> |
| <Link id="m-z" /><code>{"int z"}</code> | <span className="api-desc">Z coordinate.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-equals" /><code>{"override bool Equals(object obj)"}</code> | <span className="api-desc">True when all four values match.</span> |
| <Link id="m-gethashcode" /><code>{"override int GetHashCode()"}</code> | <span className="api-desc">Hash of all four values.</span> |
| <Link id="m-op-addition" /><code>{"static "}<Link to="/mod/game-api/types/global-m-o/marchingcubes-point4">{"MarchingCubes.Point4"}</Link>{" op_Addition("}<Link to="/mod/game-api/types/global-m-o/marchingcubes-point4">{"MarchingCubes.Point4"}</Link>{" first, "}<Link to="/mod/game-api/types/global-m-o/marchingcubes-point4">{"MarchingCubes.Point4"}</Link>{" second)"}</code> | <span className="api-desc">Adds each value.</span> |

## Used in

Members of other types that take, return or hold a `Point4`:

<div className="api-used-in">

[`MarchingCubes.edgeOffsets`](/mod/game-api/types/global-m-o/marchingcubes#m-edgeoffsets), [`MarchingCubes.GridCell.coordinate`](/mod/game-api/types/global-m-o/marchingcubes-gridcell#m-coordinate), [`MarchingCubes.Triangle.point4s`](/mod/game-api/types/global-m-o/marchingcubes-triangle#m-point4s).

</div>
