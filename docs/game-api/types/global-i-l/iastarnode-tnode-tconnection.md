---
title: "IAStarNode<TNode, TConnection>"
description: "A node the A pathfinder can search."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAStarNode&lt;TNode, TConnection&gt;

An **interface** in `Root.Township`, no namespace.

A node the A* pathfinder can search.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`Node<TNode, TPath>`](/game-api/types/alta-world-generation/node-tnode-tpath)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | Display name of the node. |
| <Link id="m-workingnode" /><code><Link to="/game-api/types/global-a-b/astarworkingnode-tnode-tconnection">{"AStarWorkingNode"}</Link>{"<TNode, TConnection> WorkingNode { get; set; }"}</code> | Search state the pathfinder stores on the node during a search. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculateheuristic" /><code>{"float CalculateHeuristic(TNode target)"}</code> | Estimated cost from this node to the target. |
| <Link id="m-getconnectionsforastar" /><code>{"ICollection<TConnection> GetConnectionsForAStar()"}</code> | Links leading out of this node. |
