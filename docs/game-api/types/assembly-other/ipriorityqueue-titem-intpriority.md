---
title: "IPriorityQueue<TItem, TPriority>"
description: "interface IPriorityQueue<TItem, TPriority> in Alta.Timing.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPriorityQueue&lt;TItem, TPriority&gt;

An **interface** in `Alta.Timing.Runtime`, `Alta.Timing.PriorityQueue`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `IEnumerable<TItem>`, `IEnumerable`
- **Derived types** [`FastPriorityQueue<T>`](/game-api/types/assembly-other/fastpriorityqueue-t), [`FastPriorityQueueTimeSpan<T>`](/game-api/types/assembly-other/fastpriorityqueuetimespan-t), [`GenericPriorityQueue<TItem, TPriority>`](/game-api/types/assembly-other/genericpriorityqueue-titem-tpriority), [`IFixedSizePriorityQueue<TItem, TPriority>`](/game-api/types/assembly-other/ifixedsizepriorityqueue-titem-intpriority), [`SimplePriorityQueue<TItem, TPriority>`](/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority), [`StablePriorityQueue<T>`](/game-api/types/assembly-other/stablepriorityqueue-t)

## Properties

| Member |
| --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |
| <Link id="m-first" /><code>{"TItem First { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |
| <Link id="m-contains" /><code>{"bool Contains(TItem node)"}</code> |
| <Link id="m-dequeue" /><code>{"TItem Dequeue()"}</code> |
| <Link id="m-enqueue" /><code>{"void Enqueue(TItem node, TPriority priority)"}</code> |
| <Link id="m-remove" /><code>{"void Remove(TItem node)"}</code> |
| <Link id="m-updatepriority" /><code>{"void UpdatePriority(TItem node, TPriority priority)"}</code> |
