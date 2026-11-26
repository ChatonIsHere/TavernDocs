---
title: "WoodcutTreeBakingHandler"
description: "Static helpers that merge tree node meshes into combined LOD meshes and patch vertex colours in a baked mesh."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTreeBakingHandler

A **class** in `Root.Township`, `Alta.Woodcutting`.

Static helpers that merge tree node meshes into combined LOD meshes and patch vertex colours in a baked mesh. Used by `WoodcutTreeBaker`.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutTreeBakingHandler()"}</code> | Creates a `WoodcutTreeBakingHandler` with default values. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colors" /><code>{"private static List<Color> colors"}</code> | Shared colour list used while baking. |
| <Link id="m-indices" /><code>{"private static List<int>[] indices"}</code> | Shared index lists per LOD. |
| <Link id="m-normals" /><code>{"private static List<Vector3>[] normals"}</code> | Shared normal lists per LOD. |
| <Link id="m-sourcecolors" /><code>{"private static List<Color> sourceColors"}</code> | Shared colour list used while patching colours. |
| <Link id="m-sourceindices" /><code>{"private static List<int> sourceIndices"}</code> | Scratch index list for one source mesh. |
| <Link id="m-sourcenormals" /><code>{"private static List<Vector3> sourceNormals"}</code> | Scratch normal list for one source mesh. |
| <Link id="m-sourceuvs" /><code>{"private static List<Vector2> sourceUvs"}</code> | Scratch UV list for one source mesh. |
| <Link id="m-sourcevertices" /><code>{"private static List<Vector3> sourceVertices"}</code> | Scratch vertex list for one source mesh. |
| <Link id="m-uvs" /><code>{"private static List<Vector2>[] uvs"}</code> | Shared UV lists per LOD. |
| <Link id="m-vertices" /><code>{"private static List<Vector3>[] vertices"}</code> | Shared vertex lists per LOD. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"static void Bake(Matrix4x4 originInverse, IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{"> entries, "}<Link to="/mod/game-api/types/alta-crafting/woodcuttreebakeraccess-t">{"WoodcutTreeBakerAccess"}</Link>{"<"}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{"> access, MeshRenderer[] renderers, Mesh[] meshes)"}</code> | Merges each entry's LOD meshes into one mesh per LOD in the origin's local space, optionally copying adjusted vertex colours, and sets materials. |
| <Link id="m-createmeshes" /><code>{"static void CreateMeshes(ref Mesh[] meshes, MeshFilter[] filters, int limit = -1)"}</code> | Creates the mesh array once, up to `limit` or one per filter, and assigns each mesh to its filter. |
| <Link id="m-finishmodifycolors" /><code>{"static void FinishModifyColors(Mesh damagedLod)"}</code> | Writes the edited colour list back to the mesh. |
| <Link id="m-modifycolors" /><code>{"static void ModifyColors(Mesh damagedLod, "}<Link to="/mod/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta">{"ColorModelCore"}</Link>{"<"}<Link to="/mod/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/mod/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/mod/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/mod/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> core, int offset)"}</code> | Writes one node's colours into the colour list starting at its vertex offset. |
| <Link id="m-startmodifycolors" /><code>{"static void StartModifyColors(Mesh damagedLod)"}</code> | Loads the mesh's colours into the shared list, padded to the vertex count. |
