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
| <Link id="m-ctor" /><code>{"WoodcutTreeBakingHandler()"}</code> | <span className="api-desc">Creates a `WoodcutTreeBakingHandler` with default values.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colors" /><code>{"private static List<Color> colors"}</code> | <span className="api-desc">Shared colour list used while baking.</span> |
| <Link id="m-indices" /><code>{"private static List<int>[] indices"}</code> | <span className="api-desc">Shared index lists per LOD.</span> |
| <Link id="m-normals" /><code>{"private static List<Vector3>[] normals"}</code> | <span className="api-desc">Shared normal lists per LOD.</span> |
| <Link id="m-sourcecolors" /><code>{"private static List<Color> sourceColors"}</code> | <span className="api-desc">Shared colour list used while patching colours.</span> |
| <Link id="m-sourceindices" /><code>{"private static List<int> sourceIndices"}</code> | <span className="api-desc">Scratch index list for one source mesh.</span> |
| <Link id="m-sourcenormals" /><code>{"private static List<Vector3> sourceNormals"}</code> | <span className="api-desc">Scratch normal list for one source mesh.</span> |
| <Link id="m-sourceuvs" /><code>{"private static List<Vector2> sourceUvs"}</code> | <span className="api-desc">Scratch UV list for one source mesh.</span> |
| <Link id="m-sourcevertices" /><code>{"private static List<Vector3> sourceVertices"}</code> | <span className="api-desc">Scratch vertex list for one source mesh.</span> |
| <Link id="m-uvs" /><code>{"private static List<Vector2>[] uvs"}</code> | <span className="api-desc">Shared UV lists per LOD.</span> |
| <Link id="m-vertices" /><code>{"private static List<Vector3>[] vertices"}</code> | <span className="api-desc">Shared vertex lists per LOD.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"static void Bake(Matrix4x4 originInverse, IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{"> entries, "}<Link to="/mod/game-api/types/alta-crafting/woodcuttreebakeraccess-t">{"WoodcutTreeBakerAccess"}</Link>{"<"}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{"> access, MeshRenderer[] renderers, Mesh[] meshes)"}</code> | <span className="api-desc">Merges each entry's LOD meshes into one mesh per LOD in the origin's local space, optionally copying adjusted vertex colours, and sets materials.</span> |
| <Link id="m-createmeshes" /><code>{"static void CreateMeshes(ref Mesh[] meshes, MeshFilter[] filters, int limit = -1)"}</code> | <span className="api-desc">Creates the mesh array once, up to `limit` or one per filter, and assigns each mesh to its filter.</span> |
| <Link id="m-finishmodifycolors" /><code>{"static void FinishModifyColors(Mesh damagedLod)"}</code> | <span className="api-desc">Writes the edited colour list back to the mesh.</span> |
| <Link id="m-modifycolors" /><code>{"static void ModifyColors(Mesh damagedLod, "}<Link to="/mod/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta">{"ColorModelCore"}</Link>{"<"}<Link to="/mod/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/mod/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/mod/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/mod/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> core, int offset)"}</code> | <span className="api-desc">Writes one node's colours into the colour list starting at its vertex offset.</span> |
| <Link id="m-startmodifycolors" /><code>{"static void StartModifyColors(Mesh damagedLod)"}</code> | <span className="api-desc">Loads the mesh's colours into the shared list, padded to the vertex count.</span> |
