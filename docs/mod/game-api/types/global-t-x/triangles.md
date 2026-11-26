---
title: "Triangles"
description: "2D triangle helpers: signed area, point in triangle tests, and ear-clipping triangulation of a polygon."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Triangles

A **static class** in `Root.Township`, the global namespace.

2D triangle helpers: signed area, point in triangle tests, and ear-clipping triangulation of a polygon.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-area" /><code>{"static float Area(Vector2 a, Vector2 b, Vector2 c)"}</code> | <span className="api-desc">Signed area of a triangle or of a polygon's points. Positive means counter-clockwise.</span> |
| <Link id="m-area-2" /><code>{"static float Area(Vector2[] points)"}</code> | <span className="api-desc">Signed area of a triangle or of a polygon's points. Positive means counter-clockwise.</span> |
| <Link id="m-iswithin" /><code>{"static bool IsWithin(Vector2 point, Vector2 a, Vector2 b, Vector2 c, out float s, out float t)"}</code> | <span className="api-desc">Whether a point is in a triangle, also giving its barycentric `s` and `t`.</span> |
| <Link id="m-triangulate" /><code>{"static int[] Triangulate(Vector2[] points)"}</code> | <span className="api-desc">Ear-clips a simple polygon into triangle indices, optionally giving its area. Returns what it managed if the polygon is bad.</span> |
| <Link id="m-triangulate-2" /><code>{"static int[] Triangulate(Vector2[] points, out float area)"}</code> | <span className="api-desc">Ear-clips a simple polygon into triangle indices, optionally giving its area. Returns what it managed if the polygon is bad.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-insidetriangle" /><code>{"private static bool InsideTriangle(Vector2 A, Vector2 B, Vector2 C, Vector2 P)"}</code> | <span className="api-desc">Whether a point is inside a triangle (edges count). Used by `Snip`.</span> |
| <Link id="m-snip" /><code>{"private static bool Snip(Vector2[] points, int u, int v, int w, int n, int[] V)"}</code> | <span className="api-desc">Whether the three given corners form an ear that can be cut off during triangulation.</span> |

</details>
