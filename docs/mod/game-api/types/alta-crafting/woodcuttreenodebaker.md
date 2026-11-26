---
title: "WoodcutTreeNodeBaker"
description: "Reads meshes and materials from woodcut tree nodes for the tree baker."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTreeNodeBaker

A **class** in `Root.Township`, `Alta.Woodcutting`.

Reads meshes and materials from woodcut tree nodes for the tree baker. Use the shared `Instance`. Build-time tooling.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`WoodcutTreeBakerAccess<WoodcutTree.MapNode>`](/mod/game-api/types/alta-crafting/woodcuttreebakeraccess-t)
- **Derived types** [`WoodcutTreeDamagedNodeBaker`](/mod/game-api/types/alta-crafting/woodcuttreedamagednodebaker), [`WoodcutTreeNodeBakerLod0Only`](/mod/game-api/types/alta-crafting/woodcuttreenodebakerlod0only)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutTreeNodeBaker()"}</code> | <span className="api-desc">Creates a `WoodcutTreeNodeBaker` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-crafting/woodcuttreenodebaker">{"WoodcutTreeNodeBaker"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">The shared baker.</span> |
| <Link id="m-maxlods" /><code>{"override int MaxLods { get; }"}</code> | <span className="api-desc">Always 3.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlodcount" /><code>{"override int GetLodCount("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item)"}</code> | <span className="api-desc">Number of meshes the node's model has.</span> |
| <Link id="m-getmaterial" /><code>{"override Material GetMaterial("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item, int index)"}</code> | <span className="api-desc">The tree species' non-atlased material. Logs and returns null if tree or species is missing.</span> |
| <Link id="m-getmesh" /><code>{"override Mesh GetMesh("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item, int lod)"}</code> | <span className="api-desc">The node model's mesh for a LOD.</span> |
| <Link id="m-getname" /><code>{"override string GetName("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item)"}</code> | <span className="api-desc">Name of the node's model.</span> |
| <Link id="m-gettransform" /><code>{"override Transform GetTransform("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item)"}</code> | <span className="api-desc">Transform of the node's model.</span> |
| <Link id="m-isvalid" /><code>{"override bool IsValid("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item, int lod)"}</code> | <span className="api-desc">False for LOD 0 when the model's colour is off. Other LODs are always valid.</span> |
