---
title: "AStar<TNode, TConnection>"
description: "static class AStar<TNode, TConnection> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AStar&lt;TNode, TConnection&gt;

A **static class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-iswithinnodes" /><code>{"static bool IsWithinNodes(TNode start, TNode end, int count, "}<Link to="/game-api/types/global-a-b/astartravelcondition-tnode-tconnection">{"AStarTravelCondition"}</Link>{"<TNode, TConnection> travelCondition = null)"}</code> |  |
| <Link id="m-pathfind" /><code>{"static bool Pathfind(TNode start, "}<Link to="/game-api/types/global-a-b/astardestinationcondition-tnode-tconnection">{"AStarDestinationCondition"}</Link>{"<TNode, TConnection> condition, out List<TConnection> path, out TNode end, out float distance, "}<Link to="/game-api/types/global-a-b/astartravelcondition-tnode-tconnection">{"AStarTravelCondition"}</Link>{"<TNode, TConnection> travelCondition = null, bool isTracingBack = true, int maxNodeCount = -1)"}</code> |  |
| <Link id="m-pathfind-2" /><code>{"static bool Pathfind(TNode start, ICollection<TNode> possibleEnd, out List<TConnection> path, out TNode end, out float distance, "}<Link to="/game-api/types/global-a-b/astartravelcondition-tnode-tconnection">{"AStarTravelCondition"}</Link>{"<TNode, TConnection> travelCondition = null, bool isTracingBack = true, int maxNodeCount = -1)"}</code> |  |
| <Link id="m-pathfind-3" /><code>{"static List<TConnection> Pathfind(TNode start, TNode end, "}<Link to="/game-api/types/global-a-b/astartravelcondition-tnode-tconnection">{"AStarTravelCondition"}</Link>{"<TNode, TConnection> travelCondition = null)"}</code> |  |
| <Link id="m-traceback" /><code>{"private static List<TConnection> TraceBack(bool isTracingBack, Dictionary<TNode, TConnection> from, TNode current, out float distance)"}</code> |  |
