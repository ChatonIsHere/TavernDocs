---
title: "AStar<TNode, TConnection>"
description: "Generic A path search over any node and connection types that implement the A interfaces."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AStar&lt;TNode, TConnection&gt;

A **static class** in `Root.Township`, no namespace.

Generic A* path search over any node and connection types that implement the A* interfaces. Search state is stored on each node's `WorkingNode`, so don't run two searches over the same nodes at once.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-iswithinnodes" /><code>{"static bool IsWithinNodes(TNode start, TNode end, int count, "}<Link to="/game-api/types/global-a-b/astartravelcondition-tnode-tconnection">{"AStarTravelCondition"}</Link>{"<TNode, TConnection> travelCondition = null)"}</code> | True if the end can be reached from the start within the given number of steps. |
| <Link id="m-pathfind" /><code>{"static bool Pathfind(TNode start, "}<Link to="/game-api/types/global-a-b/astardestinationcondition-tnode-tconnection">{"AStarDestinationCondition"}</Link>{"<TNode, TConnection> condition, out List<TConnection> path, out TNode end, out float distance, "}<Link to="/game-api/types/global-a-b/astartravelcondition-tnode-tconnection">{"AStarTravelCondition"}</Link>{"<TNode, TConnection> travelCondition = null, bool isTracingBack = true, int maxNodeCount = -1)"}</code> | Finds the cheapest path to a target node, a set of possible ends (with heuristic), or any node passing a condition (no heuristic). Skips disabled connections. |
| <Link id="m-pathfind-2" /><code>{"static bool Pathfind(TNode start, ICollection<TNode> possibleEnd, out List<TConnection> path, out TNode end, out float distance, "}<Link to="/game-api/types/global-a-b/astartravelcondition-tnode-tconnection">{"AStarTravelCondition"}</Link>{"<TNode, TConnection> travelCondition = null, bool isTracingBack = true, int maxNodeCount = -1)"}</code> | Finds the cheapest path to a target node, a set of possible ends (with heuristic), or any node passing a condition (no heuristic). Skips disabled connections. |
| <Link id="m-pathfind-3" /><code>{"static List<TConnection> Pathfind(TNode start, TNode end, "}<Link to="/game-api/types/global-a-b/astartravelcondition-tnode-tconnection">{"AStarTravelCondition"}</Link>{"<TNode, TConnection> travelCondition = null)"}</code> | Finds the cheapest path to a target node, a set of possible ends (with heuristic), or any node passing a condition (no heuristic). Skips disabled connections. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-traceback" /><code>{"private static List<TConnection> TraceBack(bool isTracingBack, Dictionary<TNode, TConnection> from, TNode current, out float distance)"}</code> | Walks back from the end to build the connection list and total cost, or just the cost. |

</details>
