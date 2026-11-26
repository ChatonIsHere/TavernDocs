---
title: "MeshUtility"
description: "Internal static helpers that bake many transformed copies of a mesh into one mesh."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeshUtility

A **internal static class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal static helpers that bake many transformed copies of a mesh into one mesh. `StorageOrganizer` uses it for stacked items in storage.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colors" /><code>{"private static List<Color> colors"}</code> | <span className="api-desc">Shared buffer for output colours.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-normals" /><code>{"private static List<Vector3> normals"}</code> | <span className="api-desc">Shared buffer for output normals.</span> |
| <Link id="m-triangles" /><code>{"private static List<int> triangles"}</code> | <span className="api-desc">Shared buffer for output triangles.</span> |
| <Link id="m-uv2s" /><code>{"private static List<Vector4> uv2s"}</code> | <span className="api-desc">Shared buffer for output UV channel 3.</span> |
| <Link id="m-uvs" /><code>{"private static List<Vector4> uvs"}</code> | <span className="api-desc">Shared buffer for output UV channel 0.</span> |
| <Link id="m-vertices" /><code>{"private static List<Vector3> vertices"}</code> | <span className="api-desc">Shared buffer for output vertices.</span> |
| <Link id="m-workingcolors" /><code>{"private static List<Color> workingColors"}</code> | <span className="api-desc">Scratch buffer for the input mesh's colours.</span> |
| <Link id="m-workingnormals" /><code>{"private static List<Vector3> workingNormals"}</code> | <span className="api-desc">Scratch buffer for the input mesh's normals.</span> |
| <Link id="m-workingtriangles" /><code>{"private static List<int> workingTriangles"}</code> | <span className="api-desc">Scratch buffer for the input mesh's triangles.</span> |
| <Link id="m-workinguv2s" /><code>{"private static List<Vector4> workingUV2s"}</code> | <span className="api-desc">Scratch buffer for the input mesh's UV channel 3.</span> |
| <Link id="m-workinguvs" /><code>{"private static List<Vector4> workingUVs"}</code> | <span className="api-desc">Scratch buffer for the input mesh's UV channel 0.</span> |
| <Link id="m-workingvertices" /><code>{"private static List<Vector3> workingVertices"}</code> | <span className="api-desc">Scratch buffer for the input mesh's vertices.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bakecollisionmesh" /><code>{"static Mesh BakeCollisionMesh(Mesh mesh, Matrix4x4[] transforms, int copies)"}</code> | <span className="api-desc">Returns a new mesh of `copies` transformed copies with positions and triangles only.</span> |
| <Link id="m-bakemesh" /><code>{"static Mesh BakeMesh(Mesh mesh, Matrix4x4[] transforms, int copies)"}</code> | <span className="api-desc">Returns a new read-only mesh of `copies` transformed copies, with normals, colours and UVs.</span> |
| <Link id="m-bakestaticmeshcount" /><code>{"static void BakeStaticMeshCount(ref Mesh output, Mesh input, Matrix4x4[] transforms, int copies)"}</code> | <span className="api-desc">Grows or shrinks `output` in place so it holds `copies` copies of `input`, adding or trimming only the difference.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatedata" /><code>{"private static void UpdateData(Mesh mesh)"}</code> | <span className="api-desc">Loads a mesh's data into the working buffers. Nothing calls it.</span> |

</details>
