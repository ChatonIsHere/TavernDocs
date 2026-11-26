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
| <Link id="m-ctor" /><code>{"FastPriorityQueueTimeSpan(int maxNodes)"}</code> | Creates a `FastPriorityQueueTimeSpan` from `maxNodes`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nodes" /><code>{"private T[] _nodes"}</code> | Heap array. Slot 0 is unused. |
| <Link id="m-numnodes" /><code>{"private int _numNodes"}</code> | Backing field for `Count`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of nodes in the queue. |
| <Link id="m-first" /><code>{"T First { get; }"}</code> | The earliest node, without removing it. |
| <Link id="m-maxsize" /><code>{"int MaxSize { get; }"}</code> | How many nodes the queue can hold. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties the queue without resizing it. |
| <Link id="m-contains" /><code>{"bool Contains(T node)"}</code> | True if the node is in this queue, checked through its stored index. |
| <Link id="m-dequeue" /><code>{"T Dequeue()"}</code> | Removes and returns the earliest node. Does not check for an empty queue. |
| <Link id="m-enqueue" /><code>{"void Enqueue(T node, TimeSpan priority)"}</code> | Adds a node with a time. Does not check for a full queue or a node already queued. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<T> GetEnumerator() (iterator)"}</code> | Enumerates nodes in heap order, not time order. |
| <Link id="m-isvalidqueue" /><code>{"bool IsValidQueue()"}</code> | Debug check that every parent comes before its children. |
| <Link id="m-remove" /><code>{"void Remove(T node)"}</code> | Removes a node from anywhere in the queue. |
| <Link id="m-resize" /><code>{"void Resize(int maxNodes)"}</code> | Changes the capacity, dropping nodes beyond the new size. |
| <Link id="m-updatepriority" /><code>{"void UpdatePriority(T node, TimeSpan priority)"}</code> | Changes a queued node's time and moves it to its new place. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cascadedown" /><code>{"private void CascadeDown(T node)"}</code> | Moves a node down the heap until both children are later. |
| <Link id="m-cascadeup" /><code>{"private void CascadeUp(T node)"}</code> | Moves a node up the heap past later parents. |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Enumerates nodes in heap order, not time order. |
| <Link id="m-hashigherorequalpriority" /><code>{"private bool HasHigherOrEqualPriority(T higher, T lower)"}</code> | True if the first node's time is earlier or equal. |
| <Link id="m-hashigherpriority" /><code>{"private bool HasHigherPriority(T higher, T lower)"}</code> | True if the first node's time is strictly earlier. |
| <Link id="m-onnodeupdated" /><code>{"private void OnNodeUpdated(T node)"}</code> | Moves a node up or down after its time changed. |

</details>

## Used in

Members of other types that take, return or hold a `FastPriorityQueueTimeSpan&lt;T>`:

[`Timeline.entries`](/mod/game-api/types/assembly-other/timeline#m-entries).
