---
title: "OldVisibilityTest"
description: "Older tool that finds mesh triangles that can't be seen from outside, using raycasts and test renders, so they can be removed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OldVisibilityTest

A **static class** in `Root.Township`, the global namespace.

Older tool that finds mesh triangles that can't be seen from outside, using raycasts and test renders, so they can be removed.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculateoccludedtriangles" /><code>{"static void CalculateOccludedTriangles(Mesh mesh, int renderResolution, List<"}<Link to="/mod/game-api/types/global-q-r/removingtriangle">{"RemovingTriangle"}</Link>{"> trianglesToRemove, Func<Vector3, bool> validateVertex = null, IEnumerable<Vector3> additionalCheckPoints = null, Func<Vector3, Vector3, Vector3, bool> triangleValidation = null)"}</code> | Fills a list with triangles that are hidden from every test direction and extra check point. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkvisibility" /><code>{"private static bool CheckVisibility(int renderResolution, float distance, RenderTexture renderTexture, Material downscaleMaterial, List<RenderTexture> downscalingRTs, Texture2D extraction, Vector3 center, Vector3 normalDirection, Camera camera)"}</code> | Renders one triangle from a point and returns whether any of it shows. |
| <Link id="m-checkvisibility-2" /><code>{"private static bool CheckVisibility(int renderResolution, Vector3 position, RenderTexture renderTexture, Material downscaleMaterial, List<RenderTexture> downscalingRTs, Texture2D extraction, Vector3 normalDirection, Camera camera)"}</code> | Renders one triangle from a point and returns whether any of it shows. |
| <Link id="m-rotations" /><code>{"private static IEnumerable<Quaternion> Rotations() (iterator)"}</code> | The test view directions: six axes plus eight diagonals. |

</details>
