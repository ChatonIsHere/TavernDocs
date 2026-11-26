---
title: "LodMeshJoiner"
description: "static class LodMeshJoiner in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LodMeshJoiner

A **static class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-bindposes" /><code>{"private static List<Matrix4x4> bindPoses"}</code> |
| <Link id="m-boneweights" /><code>{"private static List<BoneWeight> boneWeights"}</code> |
| <Link id="m-colors" /><code>{"private static List<Color> colors"}</code> |
| <Link id="m-normals" /><code>{"private static List<Vector3> normals"}</code> |
| <Link id="m-tangents" /><code>{"private static List<Vector4> tangents"}</code> |
| <Link id="m-triangles" /><code>{"private static List<int> triangles"}</code> |
| <Link id="m-uv" /><code>{"private static List<Vector2> uv"}</code> |
| <Link id="m-vertices" /><code>{"private static List<Vector3> vertices"}</code> |
| <Link id="m-workingbindposes" /><code>{"private static List<Matrix4x4> workingBindPoses"}</code> |
| <Link id="m-workingboneweights" /><code>{"private static List<BoneWeight> workingBoneWeights"}</code> |
| <Link id="m-workingcolors" /><code>{"private static List<Color> workingColors"}</code> |
| <Link id="m-workingnormals" /><code>{"private static List<Vector3> workingNormals"}</code> |
| <Link id="m-workingtangents" /><code>{"private static List<Vector4> workingTangents"}</code> |
| <Link id="m-workingtriangles" /><code>{"private static List<int> workingTriangles"}</code> |
| <Link id="m-workinguv" /><code>{"private static List<Vector2> workingUv"}</code> |
| <Link id="m-workingvertices" /><code>{"private static List<Vector3> workingVertices"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-batch" /><code>{"static void Batch(GameObject prefab, ref Mesh[] meshes, Transform[] bones)"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-getlodlevel" /><code>{"private static int GetLODLevel(LOD[] lods, Renderer renderer)"}</code> |
| <Link id="m-joinmeshes" /><code>{"private static void JoinMeshes(Transform origin, int lod, List<Renderer> renderers, ref Mesh mesh, Transform[] bones)"}</code> |

</details>
