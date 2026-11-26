---
title: "Path<TNode, TPath>"
description: "A one-way connection between two nodes in the forest graph, used for A search."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Path&lt;TNode, TPath&gt;

A **class** in `Root.Township`, `Alta.Forests`.

A one-way connection between two nodes in the forest graph, used for A* search. `Path` adds edge and side information.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`IAStarConnection<TNode, TPath>`](/game-api/types/global-i-l/iastarconnection-tnode-tconnection)
- **Derived types** [`Path`](/game-api/types/alta-world-generation/path), [`RiverPath`](/game-api/types/alta-world-generation/riverpath)
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Path(TNode from, TNode to, float length)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cost" /><code>{"float Cost { get; private set; }"}</code> | The path's cost, its length when built from an edge. |
| <Link id="m-direction" /><code>{"Vector2 Direction { get; }"}</code> | The vector from `From` to `To` divided by `Cost`; a unit vector when the cost is the length. |
| <Link id="m-from" /><code>{"TNode From { get; private set; }"}</code> | Start node. |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> | Whether the path can be used. Always true in this build. |
| <Link id="m-to" /><code>{"TNode To { get; private set; }"}</code> | End node. |
| <Link id="m-vector" /><code>{"Vector2 Vector { get; }"}</code> | The 2D vector from `From` to `To`. |
