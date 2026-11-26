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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`WoodcutTreeNodeBaker`](/game-api/types/alta-crafting/woodcuttreenodebaker)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WoodcutTreeNodeBakerLod0Only()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-crafting/woodcuttreenodebakerlod0only">{"WoodcutTreeNodeBakerLod0Only"}</Link>{" Instance { get; }"}</code> | Shared instance. |
| <Link id="m-maxlods" /><code>{"override int MaxLods { get; }"}</code> | 1. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlodcount" /><code>{"override int GetLodCount("}<Link to="/game-api/types/alta-crafting/woodcuttree-mapnode">{"WoodcutTree.MapNode"}</Link>{" item)"}</code> | Always 1. |
