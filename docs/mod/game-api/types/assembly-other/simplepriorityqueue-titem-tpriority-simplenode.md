---
title: "SimplePriorityQueue<TItem, TPriority>.SimpleNode"
description: "Internal node that wraps one item in SimplePriorityQueue so it can sit in the underlying generic queue."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimplePriorityQueue&lt;TItem, TPriority&gt;.SimpleNode

A **private class** in `Alta.Timing.Runtime`, `Alta.Timing.PriorityQueue`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal node that wraps one item in `SimplePriorityQueue` so it can sit in the underlying generic queue.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Nested in** [`SimplePriorityQueue<TItem, TPriority>`](/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority)
- **Inherits or implements** [`GenericPriorityQueueNode<TPriority>`](/mod/game-api/types/assembly-other/genericpriorityqueuenode-tpriority)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimpleNode(TItem data)"}</code> | Creates a `SimplePriorityQueue` from `data`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"TItem Data { get; private set; }"}</code> | The queued item. |

## Used in

Members of other types that take, return or hold a `SimpleNode`:

[`SimplePriorityQueue<TItem, TPriority>._itemToNodesCache`](/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority#m-itemtonodescache), [`SimplePriorityQueue<TItem, TPriority>._nullNodesCache`](/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority#m-nullnodescache), [`SimplePriorityQueue<TItem, TPriority>._queue`](/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority#m-queue), [`SimplePriorityQueue<TItem, TPriority>.AddToNodeCache`](/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority#m-addtonodecache), [`SimplePriorityQueue<TItem, TPriority>.EnqueueNoLockOrCache`](/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority#m-enqueuenolockorcache), [`SimplePriorityQueue<TItem, TPriority>.GetExistingNode`](/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority#m-getexistingnode), [`SimplePriorityQueue<TItem, TPriority>.RemoveFromNodeCache`](/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority#m-removefromnodecache).
