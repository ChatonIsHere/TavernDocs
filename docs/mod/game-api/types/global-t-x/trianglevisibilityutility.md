---
title: "TriangleVisibilityUtility"
description: "Editor-time mesh tool that finds triangles which can never be seen, using raycasts and small offscreen renders."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriangleVisibilityUtility

A **static class** in `Root.Township`, the global namespace.

Editor-time mesh tool that finds triangles which can never be seen, using raycasts and small offscreen renders. `StaticObjectCombiner` uses it to strip hidden faces from combined meshes.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested types** [`RenderingHandler`](/mod/game-api/types/global-t-x/trianglevisibilityutility-renderinghandler)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculateoccludedtriangles" /><code>{"static void CalculateOccludedTriangles(Mesh mesh, int renderResolution, List<"}<Link to="/mod/game-api/types/global-q-r/removingtriangle">{"RemovingTriangle"}</Link>{"> trianglesToRemove, Func<Vector3, bool> validateVertex = null, IEnumerable<Vector3> additionalCheckPoints = null, Func<Vector3, Vector3, Vector3, bool> triangleValidation = null)"}</code> | <span className="api-desc">Fills a list with the mesh's triangles that no vertex raycast or test render from around the mesh can see.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkvisibilityaroundaxis" /><code>{"private static bool CheckVisibilityAroundAxis(float distance, "}<Link to="/mod/game-api/types/global-t-x/trianglevisibilityutility-renderinghandler">{"TriangleVisibilityUtility.RenderingHandler"}</Link>{" renderingParameters, Vector3 center, Vector3 planeVector, ref Vector3 normalDirection, Quaternion axisRotation)"}</code> | <span className="api-desc">Tilts the view direction and tries 8 angles around the triangle's normal; returns true if none of them sees the triangle.</span> |
| <Link id="m-raycastforvertices" /><code>{"private static void RaycastForVertices(Func<Vector3, bool> validateVertex, List<Vector3> vertices, List<Vector3> normals, bool hasNormals, bool[] checks, int layer, bool[] nonValid, Vector3 additionalPoint)"}</code> | <span className="api-desc">Marks vertices that a raycast from the given point reaches unblocked, so their triangles are kept.</span> |
| <Link id="m-rotations" /><code>{"private static IEnumerable<Quaternion> Rotations() (iterator)"}</code> | <span className="api-desc">The 14 view directions used for raycasting: 6 axis directions and 8 diagonals.</span> |

</details>
