---
title: "GenericPriorityQueue<TItem, TPriority>"
description: "class GenericPriorityQueue<TItem, TPriority> in Alta.Timing.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericPriorityQueue&lt;TItem, TPriority&gt;

A **class** in `Alta.Timing.Runtime`, `Alta.Timing.PriorityQueue`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IFixedSizePriorityQueue<TItem, TPriority>`](/game-api/types/assembly-other/ifixedsizepriorityqueue-titem-intpriority), [`IPriorityQueue<TItem, TPriority>`](/game-api/types/assembly-other/ipriorityqueue-titem-intpriority), `IEnumerable<TItem>`, `IEnumerable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericPriorityQueue(int maxNodes)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"GenericPriorityQueue(int maxNodes, IComparer<TPriority> comparer)"}</code> |  |
| <Link id="m-ctor-3" /><code>{"GenericPriorityQueue(int maxNodes, Comparison<TPriority> comparer)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-comparer" /><code>{"private readonly Comparison<TPriority> _comparer"}</code> |  |
| <Link id="m-nodes" /><code>{"private TItem[] _nodes"}</code> |  |
| <Link id="m-numnodes" /><code>{"private int _numNodes"}</code> |  |
| <Link id="m-numnodeseverenqueued" /><code>{"private long _numNodesEverEnqueued"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |  |
| <Link id="m-first" /><code>{"TItem First { get; }"}</code> |  |
| <Link id="m-maxsize" /><code>{"int MaxSize { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-contains" /><code>{"bool Contains(TItem node)"}</code> |  |
| <Link id="m-dequeue" /><code>{"TItem Dequeue()"}</code> |  |
| <Link id="m-enqueue" /><code>{"void Enqueue(TItem node, TPriority priority)"}</code> |  |
| <Link id="m-getenumerator" /><code>{"IEnumerator<TItem> GetEnumerator() (iterator)"}</code> |  |
| <Link id="m-isvalidqueue" /><code>{"bool IsValidQueue()"}</code> |  |
| <Link id="m-remove" /><code>{"void Remove(TItem node)"}</code> |  |
| <Link id="m-resize" /><code>{"void Resize(int maxNodes)"}</code> |  |
| <Link id="m-updatepriority" /><code>{"void UpdatePriority(TItem node, TPriority priority)"}</code> |  |
| <Link id="m-cascadedown" /><code>{"private void CascadeDown(TItem node)"}</code> |  |
| <Link id="m-cascadeup" /><code>{"private void CascadeUp(TItem node)"}</code> |  |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |  |
| <Link id="m-hashigherpriority" /><code>{"private bool HasHigherPriority(TItem higher, TItem lower)"}</code> |  |
| <Link id="m-onnodeupdated" /><code>{"private void OnNodeUpdated(TItem node)"}</code> |  |

## Used in

Members of other types that take, return or hold a `GenericPriorityQueue&lt;TItem, TPriority>`:

[`SimplePriorityQueue<TItem, TPriority>._queue`](/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority#m-queue).
