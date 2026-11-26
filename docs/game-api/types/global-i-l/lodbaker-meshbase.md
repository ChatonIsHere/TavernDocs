---
title: "LODBaker.MeshBase"
description: "Mesh builder used by LODBaker.Bake."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LODBaker.MeshBase

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Mesh builder used by `LODBaker.Bake`. Collects the meshes that share one material into one combined mesh with its own renderer.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`LODBaker`](/game-api/types/global-i-l/lodbaker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MeshBase()"}</code> | Creates a `LODBaker.MeshBase` with default values. |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colors" /><code>{"private List<Color> colors"}</code> | Combined vertex colours. |
| <Link id="m-needscolor" /><code>{"private bool needsColor"}</code> | Set when any added mesh had vertex colours. |
| <Link id="m-needsuv" /><code>{"private bool needsUV"}</code> | Set when any added mesh had UV channel 0. |
| <Link id="m-needsuv2" /><code>{"private bool needsUV2"}</code> | Set when any added mesh had UV channel 1. |
| <Link id="m-needsuv4" /><code>{"private bool needsUV4"}</code> | Set when any added mesh had UV channel 3. |
| <Link id="m-normals" /><code>{"private List<Vector3> normals"}</code> | Combined normals. |
| <Link id="m-triangles" /><code>{"private List<int> triangles"}</code> | Combined triangle indices, offset for each added mesh. |
| <Link id="m-uv2s" /><code>{"private List<Vector4> uv2s"}</code> | Combined UV channel 1. |
| <Link id="m-uv4s" /><code>{"private List<Vector4> uv4s"}</code> | Combined UV channel 3. |
| <Link id="m-uvs" /><code>{"private List<Vector4> uvs"}</code> | Combined UV channel 0. |
| <Link id="m-vertices" /><code>{"private List<Vector3> vertices"}</code> | Combined vertices. |
| <Link id="m-workingcolors" /><code>{"private static List<Color> workingColors"}</code> | Shared scratch list for reading colours. |
| <Link id="m-workingint" /><code>{"private static List<int> workingInt"}</code> | Shared scratch list for reading triangles. |
| <Link id="m-workingnormals" /><code>{"private static List<Vector3> workingNormals"}</code> | Shared scratch list for reading normals. |
| <Link id="m-workinguv" /><code>{"private static List<Vector4> workingUV"}</code> | Shared scratch list for reading UVs. |
| <Link id="m-workingvertices" /><code>{"private static List<Vector3> workingVertices"}</code> | Shared scratch list for reading vertices. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addmesh" /><code>{"void AddMesh(Mesh mesh, Matrix4x4 convertion)"}</code> | Appends a mesh transformed by a matrix: vertices, normals, UV channels 0, 1 and 3, colours and triangles. |
| <Link id="m-getrenderer" /><code>{"Renderer GetRenderer(Material material)"}</code> | Builds the combined mesh and returns a `MeshRenderer` for it on a new GameObject with the given material. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addrange" /><code>{"private void AddRange<T>(List<T> source, List<T> destination, int count, ref bool need)"}</code> | Copies a channel's data, or pads it with defaults when the mesh lacks it, and flags the channel as used if present. |

</details>
