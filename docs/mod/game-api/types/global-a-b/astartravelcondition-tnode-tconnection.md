---
title: "AStarTravelCondition<TNode, TConnection>"
description: "Filter passed to AStar.Pathfind: returns whether the path may use a given connection."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AStarTravelCondition&lt;TNode, TConnection&gt;

A **delegate** in `Root.Township`, the global namespace.

Filter passed to `AStar.Pathfind`: returns whether the path may use a given connection.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AStarTravelCondition(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(TConnection connection, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual bool EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual bool Invoke(TConnection connection)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `AStarTravelCondition&lt;TNode, TConnection>`:

[`AStar<TNode, TConnection>.IsWithinNodes`](/mod/game-api/types/global-a-b/astar-tnode-tconnection#m-iswithinnodes), [`AStar<TNode, TConnection>.Pathfind`](/mod/game-api/types/global-a-b/astar-tnode-tconnection#m-pathfind).
