---
title: "WoodcutTreeNodeBakerLod0Only"
description: "Node baker that only bakes LOD 0."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WoodcutTreeNodeBakerLod0Only

A **class** in `Root.Township`, `Alta.Woodcutting`.

Node baker that only bakes LOD 0. Use the shared `Instance`.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`WoodcutTreeNodeBaker`](/mod/game-api/types/alta-crafting/woodcuttreenodebaker)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WoodcutTreeNodeBakerLod0Only()"}</code> | <span className="api-desc">Creates a `WoodcutTreeNodeBakerLod0Only` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-crafting/woodcuttreenodebakerlod0only">{"WoodcutTreeNodeBakerLod0Only"}</Link>{" Instance { get; }"}</code> | <span className="api-desc">Shared instance.</span> |
| <Link id="m-maxlods" /><code>{"override int MaxLods { get; }"}</code> | <span className="api-desc">1.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlodcount" /><code>{"override int GetLodCount("}<Link to="/mod/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item)"}</code> | <span className="api-desc">Always 1.</span> |
