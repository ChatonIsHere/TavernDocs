---
title: "GenericPriorityQueue<TItem, TPriority>"
description: "Fixed size binary heap with any comparable priority."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericPriorityQueue&lt;TItem, TPriority&gt;

A **class** in `Alta.Timing.Runtime`, `Alta.Timing.PriorityQueue`.

Fixed size binary heap with any comparable priority. Ties go to whichever node was enqueued first, so equal priorities come out in order.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IFixedSizePriorityQueue<TItem, TPriority>`](/mod/game-api/types/assembly-other/ifixedsizepriorityqueue-titem-intpriority), [`IPriorityQueue<TItem, TPriority>`](/mod/game-api/types/assembly-other/ipriorityqueue-titem-intpriority), `IEnumerable<TItem>`, `IEnumerable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericPriorityQueue(int maxNodes)"}</code> | Creates a `GenericPriorityQueue` from `maxNodes` and `comparer`. |
| <Link id="m-ctor-2" /><code>{"GenericPriorityQueue(int maxNodes, IComparer<TPriority> comparer)"}</code> | Creates a `GenericPriorityQueue` from `maxNodes` and `comparer`. |
| <Link id="m-ctor-3" /><code>{"GenericPriorityQueue(int maxNodes, Comparison<TPriority> comparer)"}</code> | Creates a `GenericPriorityQueue` from `maxNodes` and `comparer`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-comparer" /><code>{"private readonly Comparison<TPriority> _comparer"}</code> | Comparison used for priorities. Defaults to `Comparer.Default`. |
| <Link id="m-nodes" /><code>{"private TItem[] _nodes"}</code> | Heap array. Slot 0 is unused. |
| <Link id="m-numnodes" /><code>{"private int _numNodes"}</code> | Backing field for `Count`. |
| <Link id="m-numnodeseverenqueued" /><code>{"private long _numNodesEverEnqueued"}</code> | Counter for insertion order, used to break ties. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of nodes in the queue. |
| <Link id="m-first" /><code>{"TItem First { get; }"}</code> | The first node, without removing it. |
| <Link id="m-maxsize" /><code>{"int MaxSize { get; }"}</code> | How many nodes the queue can hold. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties the queue without resizing it. |
| <Link id="m-contains" /><code>{"bool Contains(TItem node)"}</code> | True if the node is in this queue, checked through its stored index. |
| <Link id="m-dequeue" /><code>{"TItem Dequeue()"}</code> | Removes and returns the first node. Does not check for an empty queue. |
| <Link id="m-enqueue" /><code>{"void Enqueue(TItem node, TPriority priority)"}</code> | Adds a node with a priority and stamps its insertion order. No full or duplicate checks. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<TItem> GetEnumerator() (iterator)"}</code> | Enumerates nodes in heap order, not priority order. |
| <Link id="m-isvalidqueue" /><code>{"bool IsValidQueue()"}</code> | Debug check that every parent comes before its children. |
| <Link id="m-remove" /><code>{"void Remove(TItem node)"}</code> | Removes a node from anywhere in the queue. |
| <Link id="m-resize" /><code>{"void Resize(int maxNodes)"}</code> | Changes the capacity, dropping nodes beyond the new size. |
| <Link id="m-updatepriority" /><code>{"void UpdatePriority(TItem node, TPriority priority)"}</code> | Changes a queued node's priority and moves it to its new place. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cascadedown" /><code>{"private void CascadeDown(TItem node)"}</code> | Moves a node down the heap until both children come after it. |
| <Link id="m-cascadeup" /><code>{"private void CascadeUp(TItem node)"}</code> | Moves a node up the heap past parents that come after it. |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Enumerates nodes in heap order, not priority order. |
| <Link id="m-hashigherpriority" /><code>{"private bool HasHigherPriority(TItem higher, TItem lower)"}</code> | True if the first node's priority compares lower, or equal and it was enqueued earlier. |
| <Link id="m-onnodeupdated" /><code>{"private void OnNodeUpdated(TItem node)"}</code> | Moves a node up or down after its priority changed. |

</details>

## Used in

Members of other types that take, return or hold a `GenericPriorityQueue&lt;TItem, TPriority>`:

[`SimplePriorityQueue<TItem, TPriority>._queue`](/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority#m-queue).
