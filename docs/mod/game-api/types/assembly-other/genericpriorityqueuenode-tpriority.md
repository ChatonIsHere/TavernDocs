---
title: "GenericPriorityQueueNode<TPriority>"
description: "Base class for items in a GenericPriorityQueue, with any comparable priority type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericPriorityQueueNode&lt;TPriority&gt;

A **class** in `Alta.Timing.Runtime`, `Alta.Timing.PriorityQueue`.

Base class for items in a `GenericPriorityQueue`, with any comparable priority type.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`SimplePriorityQueue<TItem, TPriority>.SimpleNode`](/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority-simplenode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericPriorityQueueNode()"}</code> | <span className="api-desc">Creates a `GenericPriorityQueueNode` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-insertionindex" /><code>{"long InsertionIndex { get; internal set; }"}</code> | <span className="api-desc">Order in which the node was queued, used to break ties so equal priorities come out first in, first out.</span> |
| <Link id="m-priority" /><code>{"TPriority Priority { get; protected internal set; }"}</code> | <span className="api-desc">The priority the node was queued with.</span> |
| <Link id="m-queueindex" /><code>{"int QueueIndex { get; internal set; }"}</code> | <span className="api-desc">The node's slot in the queue's heap array.</span> |
