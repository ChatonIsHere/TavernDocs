---
title: "IAStarConnection<TNode, TConnection>"
description: "A link between two nodes for the A pathfinder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAStarConnection&lt;TNode, TConnection&gt;

An **interface** in `Root.Township`, the global namespace.

A link between two nodes for the A* pathfinder.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`Path<TNode, TPath>`](/mod/game-api/types/alta-world-generation/path-tnode-tpath)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cost" /><code>{"float Cost { get; }"}</code> | Cost of crossing this link. |
| <Link id="m-from" /><code>{"TNode From { get; }"}</code> | Node the link starts at. |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; }"}</code> | Whether the link can be used right now. |
| <Link id="m-to" /><code>{"TNode To { get; }"}</code> | Node the link leads to. |
