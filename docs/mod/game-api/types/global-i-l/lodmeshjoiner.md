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

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bindposes" /><code>{"private static List<Matrix4x4> bindPoses"}</code> | Shared buffer for the joined mesh's bind poses. |
| <Link id="m-boneweights" /><code>{"private static List<BoneWeight> boneWeights"}</code> | Shared buffer for the joined mesh's bone weights. |
| <Link id="m-colors" /><code>{"private static List<Color> colors"}</code> | Shared buffer for the joined mesh's vertex colours; black is filled in for meshes without colours. |
| <Link id="m-normals" /><code>{"private static List<Vector3> normals"}</code> | Shared buffer for the joined mesh's normals. |
| <Link id="m-tangents" /><code>{"private static List<Vector4> tangents"}</code> | Shared buffer for the joined mesh's tangents. |
| <Link id="m-triangles" /><code>{"private static List<int> triangles"}</code> | Shared buffer for the joined mesh's triangle indices. |
| <Link id="m-uv" /><code>{"private static List<Vector2> uv"}</code> | Shared buffer for the joined mesh's first UV channel. |
| <Link id="m-vertices" /><code>{"private static List<Vector3> vertices"}</code> | Shared buffer for the joined mesh's vertices. |
| <Link id="m-workingbindposes" /><code>{"private static List<Matrix4x4> workingBindPoses"}</code> | Scratch buffer for one source mesh's bind poses. |
| <Link id="m-workingboneweights" /><code>{"private static List<BoneWeight> workingBoneWeights"}</code> | Scratch buffer for one source mesh's bone weights. |
| <Link id="m-workingcolors" /><code>{"private static List<Color> workingColors"}</code> | Scratch buffer for one source mesh's colours. |
| <Link id="m-workingnormals" /><code>{"private static List<Vector3> workingNormals"}</code> | Scratch buffer for one source mesh's normals. |
| <Link id="m-workingtangents" /><code>{"private static List<Vector4> workingTangents"}</code> | Scratch buffer for one source mesh's tangents. |
| <Link id="m-workingtriangles" /><code>{"private static List<int> workingTriangles"}</code> | Scratch buffer for one source mesh's triangles. |
| <Link id="m-workinguv" /><code>{"private static List<Vector2> workingUv"}</code> | Scratch buffer for one source mesh's UVs. |
| <Link id="m-workingvertices" /><code>{"private static List<Vector3> workingVertices"}</code> | Scratch buffer for one source mesh's vertices. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-batch" /><code>{"static void Batch(GameObject prefab, ref Mesh[] meshes, Transform[] bones)"}</code> | Sorts the prefab's renderers by LOD level and builds or refills one joined mesh per level into `meshes`, remapped to `bones`. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getlodlevel" /><code>{"private static int GetLODLevel(LOD[] lods, Renderer renderer)"}</code> | Returns the LOD level a renderer belongs to, or -1 if it is not in the group. |
| <Link id="m-joinmeshes" /><code>{"private static void JoinMeshes(Transform origin, int lod, List<Renderer> renderers, ref Mesh mesh, Transform[] bones)"}</code> | Combines one LOD level's renderers into a single mesh in the prefab's local space, merging bind poses and bone weights for skinned meshes. |

</details>
