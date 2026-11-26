---
title: "QuadTriangulationToolLogic.Triangle"
description: "Private triangle used by QuadTriangulationToolLogic, holding vertex indices and positions plus its normal and centroid."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuadTriangulationToolLogic.Triangle

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private triangle used by `QuadTriangulationToolLogic`, holding vertex indices and positions plus its normal and centroid.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Nested in** [`QuadTriangulationToolLogic`](/mod/game-api/types/global-q-r/quadtriangulationtoollogic)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Triangle(Vector3[] vertices, int[] triangles, int start)"}</code> | <span className="api-desc">Creates a `QuadTriangulationToolLogic.Triangle` from `sharedVertices`, `uniqueVertices`, `sharedIndices`, `uniqueIndices` and `index`.</span> |
| <Link id="m-ctor-2" /><code>{"Triangle(List<Vector3> sharedVertices, List<Vector3> uniqueVertices, List<int> sharedIndices, List<int> uniqueIndices, int index)"}</code> | <span className="api-desc">Creates a `QuadTriangulationToolLogic.Triangle` from `sharedVertices`, `uniqueVertices`, `sharedIndices`, `uniqueIndices` and `index`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-centroid" /><code>{"Vector3 centroid"}</code> | <span className="api-desc">Centre point of the triangle.</span> |
| <Link id="m-indices" /><code>{"int[] indices"}</code> | <span className="api-desc">The three vertex indices.</span> |
| <Link id="m-normal" /><code>{"Vector3 normal"}</code> | <span className="api-desc">Face normal from the winding order.</span> |
| <Link id="m-vertices" /><code>{"Vector3[] vertices"}</code> | <span className="api-desc">The three vertex positions.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getinverted" /><code>{"static void GetInverted(ref "}<Link to="/mod/game-api/types/global-q-r/quadtriangulationtoollogic-triangle">{"QuadTriangulationToolLogic.Triangle"}</Link>{" abc, ref "}<Link to="/mod/game-api/types/global-q-r/quadtriangulationtoollogic-triangle">{"QuadTriangulationToolLogic.Triangle"}</Link>{" def)"}</code> | <span className="api-desc">Re-splits a quad's two triangles along the other diagonal and makes them face outward.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-flip" /><code>{"private static "}<Link to="/mod/game-api/types/global-q-r/quadtriangulationtoollogic-triangle">{"QuadTriangulationToolLogic.Triangle"}</Link>{" Flip("}<Link to="/mod/game-api/types/global-q-r/quadtriangulationtoollogic-triangle">{"QuadTriangulationToolLogic.Triangle"}</Link>{" original)"}</code> | <span className="api-desc">Returns the triangle with reversed winding and normal.</span> |
| <Link id="m-split" /><code>{"private static void Split("}<Link to="/mod/game-api/types/global-q-r/quadtriangulationtoollogic-triangle">{"QuadTriangulationToolLogic.Triangle"}</Link>{" from, "}<Link to="/mod/game-api/types/global-q-r/quadtriangulationtoollogic-triangle">{"QuadTriangulationToolLogic.Triangle"}</Link>{" other, List<int> sharedIndices, List<int> uniqueIndices, List<Vector3> sharedVertices, List<Vector3> uniqueVertices)"}</code> | <span className="api-desc">Sorts the other triangle's vertices into ones shared with this triangle and ones unique to it.</span> |

</details>
