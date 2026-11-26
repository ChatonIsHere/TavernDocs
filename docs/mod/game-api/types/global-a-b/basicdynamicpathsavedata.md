---
title: "BasicDynamicPathSaveData"
description: "Save data for BasicDynamicPath (version 1): enough to find the forest and edge again."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicDynamicPathSaveData

A **class** in `Root.Township`, the global namespace.

Save data for `BasicDynamicPath` (version 1): enough to find the forest and edge again.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`NewSaveData<BasicDynamicPath, BasicDynamicPathSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`BasicDynamicPath`](/mod/game-api/types/global-a-b/basicdynamicpath), [`BasicDynamicPathSaveData`](/mod/game-api/types/global-a-b/basicdynamicpathsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicDynamicPathSaveData()"}</code> | <span className="api-desc">Creates a `BasicDynamicPathSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fromindex" /><code>{"int fromIndex"}</code> | <span className="api-desc">Index of the edge's start node.</span> |
| <Link id="m-fromposition" /><code>{"Vector2 fromPosition"}</code> | <span className="api-desc">2D position of the edge's start node, used to find the forest generator.</span> |
| <Link id="m-toindex" /><code>{"int toIndex"}</code> | <span className="api-desc">Index of the edge's end node.</span> |
