---
title: "IAStarNode<TNode, TConnection>"
description: "interface IAStarNode<TNode, TConnection> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAStarNode&lt;TNode, TConnection&gt;

An **interface** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`Node<TNode, TPath>`](/game-api/types/alta-world-generation/node-tnode-tpath)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> |  |
| <Link id="m-workingnode" /><code><Link to="/game-api/types/global-a-b/astarworkingnode-tnode-tconnection">{"AStarWorkingNode"}</Link>{"<TNode, TConnection> WorkingNode { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculateheuristic" /><code>{"float CalculateHeuristic(TNode target)"}</code> |  |
| <Link id="m-getconnectionsforastar" /><code>{"ICollection<TConnection> GetConnectionsForAStar()"}</code> |  |
