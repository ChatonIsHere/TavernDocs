---
title: "AStarTravelCondition<TNode, TConnection>"
description: "delegate AStarTravelCondition<TNode, TConnection> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AStarTravelCondition&lt;TNode, TConnection&gt;

A **delegate** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AStarTravelCondition(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(TConnection connection, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual bool EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual bool Invoke(TConnection connection)"}</code> |

## Used in

Members of other types that take, return or hold a `AStarTravelCondition&lt;TNode, TConnection>`:

[`AStar<TNode, TConnection>.IsWithinNodes`](/game-api/types/global-a-b/astar-tnode-tconnection#m-iswithinnodes), [`AStar<TNode, TConnection>.Pathfind`](/game-api/types/global-a-b/astar-tnode-tconnection#m-pathfind).
