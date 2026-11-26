---
title: "BasicDynamicPathSaveData"
description: "Save data for BasicDynamicPath (version 1): enough to find the forest and edge again."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicDynamicPathSaveData

A **class** in `Root.Township`, no namespace.

Save data for `BasicDynamicPath` (version 1): enough to find the forest and edge again.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NewSaveData<BasicDynamicPath, BasicDynamicPathSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`BasicDynamicPath`](/game-api/types/global-a-b/basicdynamicpath), [`BasicDynamicPathSaveData`](/game-api/types/global-a-b/basicdynamicpathsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BasicDynamicPathSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fromindex" /><code>{"int fromIndex"}</code> | Index of the edge's start node. |
| <Link id="m-fromposition" /><code>{"Vector2 fromPosition"}</code> | 2D position of the edge's start node, used to find the forest generator. |
| <Link id="m-toindex" /><code>{"int toIndex"}</code> | Index of the edge's end node. |
