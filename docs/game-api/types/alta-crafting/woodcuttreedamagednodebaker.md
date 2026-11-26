---
title: "WoodcutTreeDamagedNodeBaker"
description: "Node baker for chopped trunk pieces: one LOD, copies vertex colours, and uses the species' physical material channel A."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTreeDamagedNodeBaker

A **class** in `Root.Township`, `Alta.Woodcutting`.

Node baker for chopped trunk pieces: one LOD, copies vertex colours, and uses the species' physical material channel A. Use the shared `Instance`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`WoodcutTreeNodeBaker`](/game-api/types/alta-crafting/woodcuttreenodebaker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutTreeDamagedNodeBaker()"}</code> | Creates a `WoodcutTreeDamagedNodeBaker` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-crafting/woodcuttreedamagednodebaker">{"WoodcutTreeDamagedNodeBaker"}</Link>{" Instance { get; }"}</code> | Shared instance. |
| <Link id="m-iscopyingcolors" /><code>{"override bool IsCopyingColors { get; }"}</code> | True, so baked meshes carry the node's damage colours. |
| <Link id="m-maxlods" /><code>{"override int MaxLods { get; }"}</code> | 1. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlodcount" /><code>{"override int GetLodCount("}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item)"}</code> | Always 1. |
| <Link id="m-getmaterial" /><code>{"override Material GetMaterial("}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item, int index)"}</code> | The species' physical material for channel A. |
| <Link id="m-isvalid" /><code>{"override bool IsValid("}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item, int lod)"}</code> | Always true. |
