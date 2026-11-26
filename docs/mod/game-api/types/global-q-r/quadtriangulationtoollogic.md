---
title: "QuadTriangulationToolLogic"
description: "Static mesh tool that turns a quad submesh into triangles, flipping quad splits that would face the wrong way."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# QuadTriangulationToolLogic

A **static class** in `Root.Township`, the global namespace.

Static mesh tool that turns a quad submesh into triangles, flipping quad splits that would face the wrong way. Probably editor or import tooling.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Nested types** [`Triangle`](/mod/game-api/types/global-q-r/quadtriangulationtoollogic-triangle)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculatechanges" /><code>{"static bool CalculateChanges(Mesh meshToTriangulate, out int targetSubMesh, out int[] triangles)"}</code> | <span className="api-desc">Finds the first quad submesh and fixes each quad's two triangles where they fold inward. Returns true if anything changed.</span> |
| <Link id="m-checkfixtriangulation" /><code>{"static void CheckFixTriangulation(Mesh mesh)"}</code> | <span className="api-desc">Fixes and merges the quad submesh if needed, or just switches submesh 0 from quads to triangles.</span> |
| <Link id="m-mergetriangulatedmesh" /><code>{"static void MergeTriangulatedMesh(Mesh meshToTriangulate, int targetSubMesh, int[] triangles)"}</code> | <span className="api-desc">Appends the new triangles to another submesh and removes the old quad submesh, or replaces it if there is no other.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getsafebasesubmesh" /><code>{"private static bool GetSafeBaseSubMesh(Mesh mesh, int targetSubMesh, out int baseSubMeshIndex)"}</code> | <span className="api-desc">Picks another submesh to merge the triangles into. Returns false if there is only one.</span> |

</details>
