---
title: "TriangleVisibilityUtility"
description: "static class TriangleVisibilityUtility in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriangleVisibilityUtility

A **static class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested types** [`RenderingHandler`](/game-api/types/global-t-x/trianglevisibilityutility-renderinghandler)

## Methods

| Member |
| --- |
| <Link id="m-calculateoccludedtriangles" /><code>{"static void CalculateOccludedTriangles(Mesh mesh, int renderResolution, List<"}<Link to="/game-api/types/global-q-r/removingtriangle">{"RemovingTriangle"}</Link>{"> trianglesToRemove, Func<Vector3, bool> validateVertex = null, IEnumerable<Vector3> additionalCheckPoints = null, Func<Vector3, Vector3, Vector3, bool> triangleValidation = null)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkvisibilityaroundaxis" /><code>{"private static bool CheckVisibilityAroundAxis(float distance, "}<Link to="/game-api/types/global-t-x/trianglevisibilityutility-renderinghandler">{"TriangleVisibilityUtility.RenderingHandler"}</Link>{" renderingParameters, Vector3 center, Vector3 planeVector, ref Vector3 normalDirection, Quaternion axisRotation)"}</code> |
| <Link id="m-raycastforvertices" /><code>{"private static void RaycastForVertices(Func<Vector3, bool> validateVertex, List<Vector3> vertices, List<Vector3> normals, bool hasNormals, bool[] checks, int layer, bool[] nonValid, Vector3 additionalPoint)"}</code> |
| <Link id="m-rotations" /><code>{"private static IEnumerable<Quaternion> Rotations() (iterator)"}</code> |

</details>
