---
title: "AStarDestinationCondition<TNode, TConnection>"
description: "Callback passed to AStar.Pathfind that returns true when a node is an acceptable end point for the search."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AStarDestinationCondition&lt;TNode, TConnection&gt;

A **delegate** in `Root.Township`, no namespace.

Callback passed to `AStar.Pathfind` that returns true when a node is an acceptable end point for the search.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AStarDestinationCondition(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(TNode node, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual bool EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual bool Invoke(TNode node)"}</code> |

## Used in

Members of other types that take, return or hold a `AStarDestinationCondition&lt;TNode, TConnection>`:

[`AStar<TNode, TConnection>.Pathfind`](/game-api/types/global-a-b/astar-tnode-tconnection#m-pathfind).
