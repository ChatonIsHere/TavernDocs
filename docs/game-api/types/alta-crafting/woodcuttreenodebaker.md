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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`WoodcutTreeBakerAccess<WoodcutTree.MapNode>`](/game-api/types/alta-crafting/woodcuttreebakeraccess-t)
- **Derived types** [`WoodcutTreeDamagedNodeBaker`](/game-api/types/alta-crafting/woodcuttreedamagednodebaker), [`WoodcutTreeNodeBakerLod0Only`](/game-api/types/alta-crafting/woodcuttreenodebakerlod0only)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutTreeNodeBaker()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-crafting/woodcuttreenodebaker">{"WoodcutTreeNodeBaker"}</Link>{" Instance { get; }"}</code> | The shared baker. |
| <Link id="m-maxlods" /><code>{"override int MaxLods { get; }"}</code> | Always 3. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlodcount" /><code>{"override int GetLodCount("}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item)"}</code> | Number of meshes the node's model has. |
| <Link id="m-getmaterial" /><code>{"override Material GetMaterial("}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item, int index)"}</code> | The tree species' non-atlased material. Logs and returns null if tree or species is missing. |
| <Link id="m-getmesh" /><code>{"override Mesh GetMesh("}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item, int lod)"}</code> | The node model's mesh for a LOD. |
| <Link id="m-getname" /><code>{"override string GetName("}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item)"}</code> | Name of the node's model. |
| <Link id="m-gettransform" /><code>{"override Transform GetTransform("}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item)"}</code> | Transform of the node's model. |
| <Link id="m-isvalid" /><code>{"override bool IsValid("}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item, int lod)"}</code> | False for LOD 0 when the model's colour is off. Other LODs are always valid. |
