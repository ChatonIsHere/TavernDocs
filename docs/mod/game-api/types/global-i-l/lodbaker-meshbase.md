---
title: "LODBaker.MeshBase"
description: "Mesh builder used by LODBaker.Bake."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LODBaker.MeshBase

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Mesh builder used by `LODBaker.Bake`. Collects the meshes that share one material into one combined mesh with its own renderer.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`LODBaker`](/mod/game-api/types/global-i-l/lodbaker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MeshBase()"}</code> | <span className="api-desc">Creates a `LODBaker.MeshBase` with default values.</span> |

## Fields

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colors" /><code>{"private List<Color> colors"}</code> | <span className="api-desc">Combined vertex colours.</span> |
| <Link id="m-needscolor" /><code>{"private bool needsColor"}</code> | <span className="api-desc">Set when any added mesh had vertex colours.</span> |
| <Link id="m-needsuv" /><code>{"private bool needsUV"}</code> | <span className="api-desc">Set when any added mesh had UV channel 0.</span> |
| <Link id="m-needsuv2" /><code>{"private bool needsUV2"}</code> | <span className="api-desc">Set when any added mesh had UV channel 1.</span> |
| <Link id="m-needsuv4" /><code>{"private bool needsUV4"}</code> | <span className="api-desc">Set when any added mesh had UV channel 3.</span> |
| <Link id="m-normals" /><code>{"private List<Vector3> normals"}</code> | <span className="api-desc">Combined normals.</span> |
| <Link id="m-triangles" /><code>{"private List<int> triangles"}</code> | <span className="api-desc">Combined triangle indices, offset for each added mesh.</span> |
| <Link id="m-uv2s" /><code>{"private List<Vector4> uv2s"}</code> | <span className="api-desc">Combined UV channel 1.</span> |
| <Link id="m-uv4s" /><code>{"private List<Vector4> uv4s"}</code> | <span className="api-desc">Combined UV channel 3.</span> |
| <Link id="m-uvs" /><code>{"private List<Vector4> uvs"}</code> | <span className="api-desc">Combined UV channel 0.</span> |
| <Link id="m-vertices" /><code>{"private List<Vector3> vertices"}</code> | <span className="api-desc">Combined vertices.</span> |
| <Link id="m-workingcolors" /><code>{"private static List<Color> workingColors"}</code> | <span className="api-desc">Shared scratch list for reading colours.</span> |
| <Link id="m-workingint" /><code>{"private static List<int> workingInt"}</code> | <span className="api-desc">Shared scratch list for reading triangles.</span> |
| <Link id="m-workingnormals" /><code>{"private static List<Vector3> workingNormals"}</code> | <span className="api-desc">Shared scratch list for reading normals.</span> |
| <Link id="m-workinguv" /><code>{"private static List<Vector4> workingUV"}</code> | <span className="api-desc">Shared scratch list for reading UVs.</span> |
| <Link id="m-workingvertices" /><code>{"private static List<Vector3> workingVertices"}</code> | <span className="api-desc">Shared scratch list for reading vertices.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addmesh" /><code>{"void AddMesh(Mesh mesh, Matrix4x4 convertion)"}</code> | <span className="api-desc">Appends a mesh transformed by a matrix: vertices, normals, UV channels 0, 1 and 3, colours and triangles.</span> |
| <Link id="m-getrenderer" /><code>{"Renderer GetRenderer(Material material)"}</code> | <span className="api-desc">Builds the combined mesh and returns a `MeshRenderer` for it on a new GameObject with the given material.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addrange" /><code>{"private void AddRange<T>(List<T> source, List<T> destination, int count, ref bool need)"}</code> | <span className="api-desc">Copies a channel's data, or pads it with defaults when the mesh lacks it, and flags the channel as used if present.</span> |

</details>
