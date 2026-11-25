---
title: "WoodcutTreeBakingHandler"
description: "class WoodcutTreeBakingHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTreeBakingHandler

A **class** in `Root.Township`, `Alta.Woodcutting`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutTreeBakingHandler()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colors" /><code>{"private static List<Color> colors"}</code> |  |
| <Link id="m-indices" /><code>{"private static List<int>[] indices"}</code> |  |
| <Link id="m-normals" /><code>{"private static List<Vector3>[] normals"}</code> |  |
| <Link id="m-sourcecolors" /><code>{"private static List<Color> sourceColors"}</code> |  |
| <Link id="m-sourceindices" /><code>{"private static List<int> sourceIndices"}</code> |  |
| <Link id="m-sourcenormals" /><code>{"private static List<Vector3> sourceNormals"}</code> |  |
| <Link id="m-sourceuvs" /><code>{"private static List<Vector2> sourceUvs"}</code> |  |
| <Link id="m-sourcevertices" /><code>{"private static List<Vector3> sourceVertices"}</code> |  |
| <Link id="m-uvs" /><code>{"private static List<Vector2>[] uvs"}</code> |  |
| <Link id="m-vertices" /><code>{"private static List<Vector3>[] vertices"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"static void Bake(Matrix4x4 originInverse, IEnumerable<"}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{"> entries, "}<Link to="/game-api/types/alta-crafting/woodcuttreebakeraccess-t">{"WoodcutTreeBakerAccess"}</Link>{"<"}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{"> access, MeshRenderer[] renderers, Mesh[] meshes)"}</code> |  |
| <Link id="m-createmeshes" /><code>{"static void CreateMeshes(ref Mesh[] meshes, MeshFilter[] filters, int limit = -1)"}</code> |  |
| <Link id="m-finishmodifycolors" /><code>{"static void FinishModifyColors(Mesh damagedLod)"}</code> |  |
| <Link id="m-modifycolors" /><code>{"static void ModifyColors(Mesh damagedLod, "}<Link to="/game-api/types/global-c-d/colormodelcore-tr-tg-tb-ta">{"ColorModelCore"}</Link>{"<"}<Link to="/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/game-api/types/global-m-o/nullcolormodelpoint">{"NullColorModelPoint"}</Link>{", "}<Link to="/game-api/types/global-t-x/woodcutpointdata">{"WoodcutPointData"}</Link>{"> core, int offset)"}</code> |  |
| <Link id="m-startmodifycolors" /><code>{"static void StartModifyColors(Mesh damagedLod)"}</code> |  |
