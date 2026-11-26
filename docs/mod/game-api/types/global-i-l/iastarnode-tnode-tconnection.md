---
title: "IAStarNode<TNode, TConnection>"
description: "A node the A pathfinder can search."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IAStarNode&lt;TNode, TConnection&gt;

An **interface** in `Root.Township`, the global namespace.

A node the A* pathfinder can search.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`Node<TNode, TPath>`](/mod/game-api/types/alta-world-generation/node-tnode-tpath)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string Name { get; }"}</code> | <span className="api-desc">Display name of the node.</span> |
| <Link id="m-workingnode" /><code><Link to="/mod/game-api/types/global-a-b/astarworkingnode-tnode-tconnection">{"AStarWorkingNode"}</Link>{"<TNode, TConnection> WorkingNode { get; set; }"}</code> | <span className="api-desc">Search state the pathfinder stores on the node during a search.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculateheuristic" /><code>{"float CalculateHeuristic(TNode target)"}</code> | <span className="api-desc">Estimated cost from this node to the target.</span> |
| <Link id="m-getconnectionsforastar" /><code>{"ICollection<TConnection> GetConnectionsForAStar()"}</code> | <span className="api-desc">Links leading out of this node.</span> |
