---
title: "IPriorityQueue<TItem, TPriority>"
description: "Common interface of the priority queues in this namespace (a copy of the BlueRaja priority queue library)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPriorityQueue&lt;TItem, TPriority&gt;

An **interface** in `Alta.Timing.Runtime`, `Alta.Timing.PriorityQueue`.

Common interface of the priority queues in this namespace (a copy of the BlueRaja priority queue library). The lowest priority value comes out first.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `IEnumerable<TItem>`, `IEnumerable`
- **Derived types** [`FastPriorityQueue<T>`](/mod/game-api/types/assembly-other/fastpriorityqueue-t), [`FastPriorityQueueTimeSpan<T>`](/mod/game-api/types/assembly-other/fastpriorityqueuetimespan-t), [`GenericPriorityQueue<TItem, TPriority>`](/mod/game-api/types/assembly-other/genericpriorityqueue-titem-tpriority), [`IFixedSizePriorityQueue<TItem, TPriority>`](/mod/game-api/types/assembly-other/ifixedsizepriorityqueue-titem-intpriority), [`SimplePriorityQueue<TItem, TPriority>`](/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority), [`StablePriorityQueue<T>`](/mod/game-api/types/assembly-other/stablepriorityqueue-t)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of queued items. |
| <Link id="m-first" /><code>{"TItem First { get; }"}</code> | The item that `Dequeue` would return, without removing it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties the queue. |
| <Link id="m-contains" /><code>{"bool Contains(TItem node)"}</code> | True if the item is queued. |
| <Link id="m-dequeue" /><code>{"TItem Dequeue()"}</code> | Removes and returns the item with the lowest priority value. |
| <Link id="m-enqueue" /><code>{"void Enqueue(TItem node, TPriority priority)"}</code> | Adds an item with a priority. |
| <Link id="m-remove" /><code>{"void Remove(TItem node)"}</code> | Removes a queued item from anywhere in the queue. |
| <Link id="m-updatepriority" /><code>{"void UpdatePriority(TItem node, TPriority priority)"}</code> | Changes a queued item's priority and moves it to its new place. |
