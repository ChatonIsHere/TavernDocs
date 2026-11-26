---
title: "QuadTriangulationToolLogic.Triangle"
description: "Private triangle used by QuadTriangulationToolLogic, holding vertex indices and positions plus its normal and centroid."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuadTriangulationToolLogic.Triangle

A **private struct** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private triangle used by `QuadTriangulationToolLogic`, holding vertex indices and positions plus its normal and centroid.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Nested in** [`QuadTriangulationToolLogic`](/game-api/types/global-q-r/quadtriangulationtoollogic)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Triangle(Vector3[] vertices, int[] triangles, int start)"}</code> |
| <Link id="m-ctor-2" /><code>{"Triangle(List<Vector3> sharedVertices, List<Vector3> uniqueVertices, List<int> sharedIndices, List<int> uniqueIndices, int index)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-centroid" /><code>{"Vector3 centroid"}</code> | Centre point of the triangle. |
| <Link id="m-indices" /><code>{"int[] indices"}</code> | The three vertex indices. |
| <Link id="m-normal" /><code>{"Vector3 normal"}</code> | Face normal from the winding order. |
| <Link id="m-vertices" /><code>{"Vector3[] vertices"}</code> | The three vertex positions. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinverted" /><code>{"static void GetInverted(ref "}<Link to="/game-api/types/global-q-r/quadtriangulationtoollogic-triangle">{"QuadTriangulationToolLogic.Triangle"}</Link>{" abc, ref "}<Link to="/game-api/types/global-q-r/quadtriangulationtoollogic-triangle">{"QuadTriangulationToolLogic.Triangle"}</Link>{" def)"}</code> | Re-splits a quad's two triangles along the other diagonal and makes them face outward. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-flip" /><code>{"private static "}<Link to="/game-api/types/global-q-r/quadtriangulationtoollogic-triangle">{"QuadTriangulationToolLogic.Triangle"}</Link>{" Flip("}<Link to="/game-api/types/global-q-r/quadtriangulationtoollogic-triangle">{"QuadTriangulationToolLogic.Triangle"}</Link>{" original)"}</code> | Returns the triangle with reversed winding and normal. |
| <Link id="m-split" /><code>{"private static void Split("}<Link to="/game-api/types/global-q-r/quadtriangulationtoollogic-triangle">{"QuadTriangulationToolLogic.Triangle"}</Link>{" from, "}<Link to="/game-api/types/global-q-r/quadtriangulationtoollogic-triangle">{"QuadTriangulationToolLogic.Triangle"}</Link>{" other, List<int> sharedIndices, List<int> uniqueIndices, List<Vector3> sharedVertices, List<Vector3> uniqueVertices)"}</code> | Sorts the other triangle's vertices into ones shared with this triangle and ones unique to it. |

</details>
