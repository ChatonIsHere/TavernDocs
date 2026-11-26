---
title: "LodMeshJoiner"
description: "Static helper that merges all renderers of each LOD level in a prefab's LODGroup into one mesh per level, keeping skinning data when present."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LodMeshJoiner

A **static class** in `Root.Township`, the global namespace.

Static helper that merges all renderers of each LOD level in a prefab's `LODGroup` into one mesh per level, keeping skinning data when present. Used by `CombinedMeshSource`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)

## Fields

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bindposes" /><code>{"private static List<Matrix4x4> bindPoses"}</code> | <span className="api-desc">Shared buffer for the joined mesh's bind poses.</span> |
| <Link id="m-boneweights" /><code>{"private static List<BoneWeight> boneWeights"}</code> | <span className="api-desc">Shared buffer for the joined mesh's bone weights.</span> |
| <Link id="m-colors" /><code>{"private static List<Color> colors"}</code> | <span className="api-desc">Shared buffer for the joined mesh's vertex colours; black is filled in for meshes without colours.</span> |
| <Link id="m-normals" /><code>{"private static List<Vector3> normals"}</code> | <span className="api-desc">Shared buffer for the joined mesh's normals.</span> |
| <Link id="m-tangents" /><code>{"private static List<Vector4> tangents"}</code> | <span className="api-desc">Shared buffer for the joined mesh's tangents.</span> |
| <Link id="m-triangles" /><code>{"private static List<int> triangles"}</code> | <span className="api-desc">Shared buffer for the joined mesh's triangle indices.</span> |
| <Link id="m-uv" /><code>{"private static List<Vector2> uv"}</code> | <span className="api-desc">Shared buffer for the joined mesh's first UV channel.</span> |
| <Link id="m-vertices" /><code>{"private static List<Vector3> vertices"}</code> | <span className="api-desc">Shared buffer for the joined mesh's vertices.</span> |
| <Link id="m-workingbindposes" /><code>{"private static List<Matrix4x4> workingBindPoses"}</code> | <span className="api-desc">Scratch buffer for one source mesh's bind poses.</span> |
| <Link id="m-workingboneweights" /><code>{"private static List<BoneWeight> workingBoneWeights"}</code> | <span className="api-desc">Scratch buffer for one source mesh's bone weights.</span> |
| <Link id="m-workingcolors" /><code>{"private static List<Color> workingColors"}</code> | <span className="api-desc">Scratch buffer for one source mesh's colours.</span> |
| <Link id="m-workingnormals" /><code>{"private static List<Vector3> workingNormals"}</code> | <span className="api-desc">Scratch buffer for one source mesh's normals.</span> |
| <Link id="m-workingtangents" /><code>{"private static List<Vector4> workingTangents"}</code> | <span className="api-desc">Scratch buffer for one source mesh's tangents.</span> |
| <Link id="m-workingtriangles" /><code>{"private static List<int> workingTriangles"}</code> | <span className="api-desc">Scratch buffer for one source mesh's triangles.</span> |
| <Link id="m-workinguv" /><code>{"private static List<Vector2> workingUv"}</code> | <span className="api-desc">Scratch buffer for one source mesh's UVs.</span> |
| <Link id="m-workingvertices" /><code>{"private static List<Vector3> workingVertices"}</code> | <span className="api-desc">Scratch buffer for one source mesh's vertices.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-batch" /><code>{"static void Batch(GameObject prefab, ref Mesh[] meshes, Transform[] bones)"}</code> | <span className="api-desc">Sorts the prefab's renderers by LOD level and builds or refills one joined mesh per level into `meshes`, remapped to `bones`.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getlodlevel" /><code>{"private static int GetLODLevel(LOD[] lods, Renderer renderer)"}</code> | <span className="api-desc">Returns the LOD level a renderer belongs to, or -1 if it is not in the group.</span> |
| <Link id="m-joinmeshes" /><code>{"private static void JoinMeshes(Transform origin, int lod, List<Renderer> renderers, ref Mesh mesh, Transform[] bones)"}</code> | <span className="api-desc">Combines one LOD level's renderers into a single mesh in the prefab's local space, merging bind poses and bone weights for skinned meshes.</span> |

</details>
