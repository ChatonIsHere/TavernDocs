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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`WoodcutTreeNodeBaker`](/mod/game-api/types/alta-crafting/woodcuttreenodebaker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutTreeDamagedNodeBaker()"}</code> | <span className="api-desc">Creates a `WoodcutTreeDamagedNodeBaker` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-crafting/woodcuttreedamagednodebaker">{"WoodcutTreeDamagedNodeBaker"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">Shared instance.</span> |
| <Link id="m-iscopyingcolors" /><code>{"override bool IsCopyingColors { get; }"}</code> | <span className="api-desc">True, so baked meshes carry the node's damage colours.</span> |
| <Link id="m-maxlods" /><code>{"override int MaxLods { get; }"}</code> | <span className="api-desc">1.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlodcount" /><code>{"override int GetLodCount("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item)"}</code> | <span className="api-desc">Always 1.</span> |
| <Link id="m-getmaterial" /><code>{"override Material GetMaterial("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item, int index)"}</code> | <span className="api-desc">The species' physical material for channel A.</span> |
| <Link id="m-isvalid" /><code>{"override bool IsValid("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item, int lod)"}</code> | <span className="api-desc">Always true.</span> |
