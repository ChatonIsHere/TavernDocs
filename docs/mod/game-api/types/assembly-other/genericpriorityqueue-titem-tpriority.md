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
| <Link id="m-ctor" /><code>{"GenericPriorityQueue(int maxNodes)"}</code> | <span className="api-desc">Creates a `GenericPriorityQueue` from `maxNodes` and `comparer`.</span> |
| <Link id="m-ctor-2" /><code>{"GenericPriorityQueue(int maxNodes, IComparer<TPriority> comparer)"}</code> | <span className="api-desc">Creates a `GenericPriorityQueue` from `maxNodes` and `comparer`.</span> |
| <Link id="m-ctor-3" /><code>{"GenericPriorityQueue(int maxNodes, Comparison<TPriority> comparer)"}</code> | <span className="api-desc">Creates a `GenericPriorityQueue` from `maxNodes` and `comparer`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-comparer" /><code>{"private readonly Comparison<TPriority> _comparer"}</code> | <span className="api-desc">Comparison used for priorities. Defaults to `Comparer.Default`.</span> |
| <Link id="m-nodes" /><code>{"private TItem[] _nodes"}</code> | <span className="api-desc">Heap array. Slot 0 is unused.</span> |
| <Link id="m-numnodes" /><code>{"private int _numNodes"}</code> | <span className="api-desc">Backing field for `Count`.</span> |
| <Link id="m-numnodeseverenqueued" /><code>{"private long _numNodesEverEnqueued"}</code> | <span className="api-desc">Counter for insertion order, used to break ties.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">Number of nodes in the queue.</span> |
| <Link id="m-first" /><code>{"TItem First { get; }"}</code> | <span className="api-desc">The first node, without removing it.</span> |
| <Link id="m-maxsize" /><code>{"int MaxSize { get; }"}</code> | <span className="api-desc">How many nodes the queue can hold.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Empties the queue without resizing it.</span> |
| <Link id="m-contains" /><code>{"bool Contains(TItem node)"}</code> | <span className="api-desc">True if the node is in this queue, checked through its stored index.</span> |
| <Link id="m-dequeue" /><code>{"TItem Dequeue()"}</code> | <span className="api-desc">Removes and returns the first node. Does not check for an empty queue.</span> |
| <Link id="m-enqueue" /><code>{"void Enqueue(TItem node, TPriority priority)"}</code> | <span className="api-desc">Adds a node with a priority and stamps its insertion order. No full or duplicate checks.</span> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<TItem> GetEnumerator() (iterator)"}</code> | <span className="api-desc">Enumerates nodes in heap order, not priority order.</span> |
| <Link id="m-isvalidqueue" /><code>{"bool IsValidQueue()"}</code> | <span className="api-desc">Debug check that every parent comes before its children.</span> |
| <Link id="m-remove" /><code>{"void Remove(TItem node)"}</code> | <span className="api-desc">Removes a node from anywhere in the queue.</span> |
| <Link id="m-resize" /><code>{"void Resize(int maxNodes)"}</code> | <span className="api-desc">Changes the capacity, dropping nodes beyond the new size.</span> |
| <Link id="m-updatepriority" /><code>{"void UpdatePriority(TItem node, TPriority priority)"}</code> | <span className="api-desc">Changes a queued node's priority and moves it to its new place.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cascadedown" /><code>{"private void CascadeDown(TItem node)"}</code> | <span className="api-desc">Moves a node down the heap until both children come after it.</span> |
| <Link id="m-cascadeup" /><code>{"private void CascadeUp(TItem node)"}</code> | <span className="api-desc">Moves a node up the heap past parents that come after it.</span> |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Enumerates nodes in heap order, not priority order.</span> |
| <Link id="m-hashigherpriority" /><code>{"private bool HasHigherPriority(TItem higher, TItem lower)"}</code> | <span className="api-desc">True if the first node's priority compares lower, or equal and it was enqueued earlier.</span> |
| <Link id="m-onnodeupdated" /><code>{"private void OnNodeUpdated(TItem node)"}</code> | <span className="api-desc">Moves a node up or down after its priority changed.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GenericPriorityQueue&lt;TItem, TPriority>`:

<div className="api-used-in">

[`SimplePriorityQueue<TItem, TPriority>._queue`](/mod/game-api/types/assembly-other/simplepriorityqueue-titem-tpriority#m-queue).

</div>
