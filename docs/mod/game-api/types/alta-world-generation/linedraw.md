---
title: "LineDraw"
description: "Static helpers that draw into a map chunk layer: thick 2D lines for corridors and 3D cylinders for tunnels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LineDraw

A **static class** in `Root.Township`, `Alta.Caves.PluginParts`.

Static helpers that draw into a map chunk layer: thick 2D lines for corridors and 3D cylinders for tunnels.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cylinder3d" /><code>{"static void Cylinder3D("}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, Vector3 start, Vector3 end, AnimationCurve radius, AnimationCurve value, "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" operation, "}<Link to="/mod/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" noise = null, float scale = 0.1, float variation = 0.1)"}</code> | Applies a value curve to cells within a radius curve of a line segment, with optional simplex noise on the edge. |
| <Link id="m-thickline2d" /><code>{"static void ThickLine2D("}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, "}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" manMade, int yIndex, int startX, int startY, int endX, int endY, float width, float lineThreshold, int value)"}</code> | Draws a thick line of `value` on one Y slice, also marking each written cell in the man-made layer. |
