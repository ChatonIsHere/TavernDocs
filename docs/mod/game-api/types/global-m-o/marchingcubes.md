---
title: "MarchingCubes"
description: "Static marching cubes mesher: turns a cell of eight density values into triangles at an iso level."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MarchingCubes

A **static class** in `Root.Township`, the global namespace.

Static marching cubes mesher: turns a cell of eight density values into triangles at an iso level. Used by the cave `MarchingCubesPlugin`.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested types** [`GridCell`](/mod/game-api/types/global-m-o/marchingcubes-gridcell), [`Point4`](/mod/game-api/types/global-m-o/marchingcubes-point4), [`Triangle`](/mod/game-api/types/global-m-o/marchingcubes-triangle)

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-edgemapstable" /><code>{"private static int[] edgeMapsTable"}</code> | Lookup of which cube edges the surface crosses for each corner pattern. |
| <Link id="m-edgeoffsets" /><code>{"private static "}<Link to="/mod/game-api/types/global-m-o/marchingcubes-point4">{"MarchingCubes.Point4"}</Link>{"[] edgeOffsets"}</code> | For each of the 12 edges, its offset and axis as a `Point4`, used as a vertex key. |
| <Link id="m-tritable" /><code>{"private static int[,] triTable"}</code> | Lookup of the triangles to build for each corner pattern, ended by -1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-polygonise" /><code>{"static void Polygonise("}<Link to="/mod/game-api/types/global-m-o/marchingcubes-gridcell">{"MarchingCubes.GridCell"}</Link>{" grid, float isolevel, List<"}<Link to="/mod/game-api/types/global-m-o/marchingcubes-triangle">{"MarchingCubes.Triangle"}</Link>{"> triangles, Vector3[] vertlist)"}</code> | Adds the triangles for one grid cell to `triangles`, with edge keys so shared vertices can be merged. |
| <Link id="m-vertexinterp" /><code>{"static Vector3 VertexInterp(float isolevel, Vector3 p1, Vector3 p2, float valp1, float valp2)"}</code> | Returns the point between two corners where the density crosses the iso level. |
