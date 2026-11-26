---
title: "IFixedSizePriorityQueue<TItem, TPriority>"
description: "Internal interface for priority queues with a fixed capacity that has to be resized by hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IFixedSizePriorityQueue&lt;TItem, TPriority&gt;

An **internal interface** in `Alta.Timing.Runtime`, `Alta.Timing.PriorityQueue`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal interface for priority queues with a fixed capacity that has to be resized by hand.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IPriorityQueue<TItem, TPriority>`](/mod/game-api/types/assembly-other/ipriorityqueue-titem-intpriority), `IEnumerable<TItem>`, `IEnumerable`
- **Derived types** [`FastPriorityQueue<T>`](/mod/game-api/types/assembly-other/fastpriorityqueue-t), [`FastPriorityQueueTimeSpan<T>`](/mod/game-api/types/assembly-other/fastpriorityqueuetimespan-t), [`GenericPriorityQueue<TItem, TPriority>`](/mod/game-api/types/assembly-other/genericpriorityqueue-titem-tpriority), [`StablePriorityQueue<T>`](/mod/game-api/types/assembly-other/stablepriorityqueue-t)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-maxsize" /><code>{"int MaxSize { get; }"}</code> | <span className="api-desc">How many nodes fit before the queue must be resized.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resize" /><code>{"void Resize(int maxNodes)"}</code> | <span className="api-desc">Changes the capacity, keeping the queued nodes.</span> |
