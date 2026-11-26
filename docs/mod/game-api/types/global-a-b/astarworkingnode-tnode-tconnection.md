---
title: "AStarWorkingNode<TNode, TConnection>"
description: "Per-node scratch data that AStar keeps while it searches: best cost so far and step count."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AStarWorkingNode&lt;TNode, TConnection&gt;

A **class** in `Root.Township`, the global namespace.

Per-node scratch data that `AStar` keeps while it searches: best cost so far and step count.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AStarWorkingNode(TNode node)"}</code> | <span className="api-desc">Creates an `AStarWorkingNode` from `node`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-aproximatetotalcost" /><code>{"float AproximateTotalCost { get; set; }"}</code> | <span className="api-desc">Cost used to sort the open list. `AStar` sets it to the same value as `LowestCost` (no heuristic is added).</span> |
| <Link id="m-lowestcost" /><code>{"float LowestCost { get; set; }"}</code> | <span className="api-desc">Lowest path cost found so far from the start node to this node.</span> |
| <Link id="m-node" /><code>{"TNode Node { get; set; }"}</code> | <span className="api-desc">The graph node this working data belongs to.</span> |
| <Link id="m-nodescount" /><code>{"int NodesCount { get; set; }"}</code> | <span className="api-desc">Number of steps from the start node on the best path so far. Checked against `maxNodeCount`.</span> |

## Used in

Members of other types that take, return or hold a `AStarWorkingNode&lt;TNode, TConnection>`:

<div className="api-used-in">

[`IAStarNode<TNode, TConnection>.WorkingNode`](/mod/game-api/types/global-i-l/iastarnode-tnode-tconnection#m-workingnode).

</div>
