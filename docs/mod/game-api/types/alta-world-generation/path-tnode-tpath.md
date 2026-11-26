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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`IAStarConnection<TNode, TPath>`](/mod/game-api/types/global-i-l/iastarconnection-tnode-tconnection)
- **Derived types** [`Path`](/mod/game-api/types/alta-world-generation/path), [`RiverPath`](/mod/game-api/types/alta-world-generation/riverpath)
- **Documented in** [Forest](/mod/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Path(TNode from, TNode to, float length)"}</code> | <span className="api-desc">Creates a `Path` from `from`, `to` and `length`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cost" /><code>{"float Cost { get; private set; }"}</code> | <span className="api-desc">The path's cost, its length when built from an edge.</span> |
| <Link id="m-direction" /><code>{"Vector2 Direction { get; }"}</code> | <span className="api-desc">The vector from `From` to `To` divided by `Cost`; a unit vector when the cost is the length.</span> |
| <Link id="m-from" /><code>{"TNode From { get; private set; }"}</code> | <span className="api-desc">Start node.</span> |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> | <span className="api-desc">Whether the path can be used. Always true in this build.</span> |
| <Link id="m-to" /><code>{"TNode To { get; private set; }"}</code> | <span className="api-desc">End node.</span> |
| <Link id="m-vector" /><code>{"Vector2 Vector { get; }"}</code> | <span className="api-desc">The 2D vector from `From` to `To`.</span> |
