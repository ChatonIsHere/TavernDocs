---
title: "MarchingCubes.Triangle"
description: "A triangle produced by Polygonise."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MarchingCubes.Triangle

A **class** in `Root.Township`, the global namespace.

A triangle produced by `Polygonise`.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`MarchingCubes`](/mod/game-api/types/global-m-o/marchingcubes)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Triangle()"}</code> | <span className="api-desc">Creates a `MarchingCubes.Triangle` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-point4s" /><code><Link to="/mod/game-api/types/global-m-o/marchingcubes-point4">{"MarchingCubes.Point4"}</Link>{"[] point4s"}</code> | <span className="api-desc">Edge key for each vertex (cell coordinate plus edge), so cave meshes can share vertices.</span> |
| <Link id="m-points" /><code>{"Vector3[] points"}</code> | <span className="api-desc">The three vertex positions.</span> |

## Used in

Members of other types that take, return or hold a `Triangle`:

<div className="api-used-in">

[`MarchingCubes.Polygonise`](/mod/game-api/types/global-m-o/marchingcubes#m-polygonise).

</div>
