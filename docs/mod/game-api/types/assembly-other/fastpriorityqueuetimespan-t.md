---
title: "FastPriorityQueueTimeSpan<T>"
description: "Copy of FastPriorityQueue that uses a TimeSpan priority, earliest first."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FastPriorityQueueTimeSpan&lt;T&gt;

A **class** in `Alta.Timing.Runtime`, `Alta.Timing.PriorityQueue`.

Copy of `FastPriorityQueue` that uses a `TimeSpan` priority, earliest first. `Timeline` uses it to order its scheduled calls.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IFixedSizePriorityQueue<T, TimeSpan>`](/mod/game-api/types/assembly-other/ifixedsizepriorityqueue-titem-intpriority), [`IPriorityQueue<T, TimeSpan>`](/mod/game-api/types/assembly-other/ipriorityqueue-titem-intpriority), `IEnumerable<T>`, `IEnumerable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FastPriorityQueueTimeSpan(int maxNodes)"}</code> | <span className="api-desc">Creates a `FastPriorityQueueTimeSpan` from `maxNodes`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nodes" /><code>{"private T[] _nodes"}</code> | <span className="api-desc">Heap array. Slot 0 is unused.</span> |
| <Link id="m-numnodes" /><code>{"private int _numNodes"}</code> | <span className="api-desc">Backing field for `Count`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">Number of nodes in the queue.</span> |
| <Link id="m-first" /><code>{"T First { get; }"}</code> | <span className="api-desc">The earliest node, without removing it.</span> |
| <Link id="m-maxsize" /><code>{"int MaxSize { get; }"}</code> | <span className="api-desc">How many nodes the queue can hold.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Empties the queue without resizing it.</span> |
| <Link id="m-contains" /><code>{"bool Contains(T node)"}</code> | <span className="api-desc">True if the node is in this queue, checked through its stored index.</span> |
| <Link id="m-dequeue" /><code>{"T Dequeue()"}</code> | <span className="api-desc">Removes and returns the earliest node. Does not check for an empty queue.</span> |
| <Link id="m-enqueue" /><code>{"void Enqueue(T node, TimeSpan priority)"}</code> | <span className="api-desc">Adds a node with a time. Does not check for a full queue or a node already queued.</span> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<T> GetEnumerator() (iterator)"}</code> | <span className="api-desc">Enumerates nodes in heap order, not time order.</span> |
| <Link id="m-isvalidqueue" /><code>{"bool IsValidQueue()"}</code> | <span className="api-desc">Debug check that every parent comes before its children.</span> |
| <Link id="m-remove" /><code>{"void Remove(T node)"}</code> | <span className="api-desc">Removes a node from anywhere in the queue.</span> |
| <Link id="m-resize" /><code>{"void Resize(int maxNodes)"}</code> | <span className="api-desc">Changes the capacity, dropping nodes beyond the new size.</span> |
| <Link id="m-updatepriority" /><code>{"void UpdatePriority(T node, TimeSpan priority)"}</code> | <span className="api-desc">Changes a queued node's time and moves it to its new place.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cascadedown" /><code>{"private void CascadeDown(T node)"}</code> | <span className="api-desc">Moves a node down the heap until both children are later.</span> |
| <Link id="m-cascadeup" /><code>{"private void CascadeUp(T node)"}</code> | <span className="api-desc">Moves a node up the heap past later parents.</span> |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Enumerates nodes in heap order, not time order.</span> |
| <Link id="m-hashigherorequalpriority" /><code>{"private bool HasHigherOrEqualPriority(T higher, T lower)"}</code> | <span className="api-desc">True if the first node's time is earlier or equal.</span> |
| <Link id="m-hashigherpriority" /><code>{"private bool HasHigherPriority(T higher, T lower)"}</code> | <span className="api-desc">True if the first node's time is strictly earlier.</span> |
| <Link id="m-onnodeupdated" /><code>{"private void OnNodeUpdated(T node)"}</code> | <span className="api-desc">Moves a node up or down after its time changed.</span> |

</details>

## Used in

Members of other types that take, return or hold a `FastPriorityQueueTimeSpan&lt;T>`:

<div className="api-used-in">

[`Timeline.entries`](/mod/game-api/types/assembly-other/timeline#m-entries).

</div>
