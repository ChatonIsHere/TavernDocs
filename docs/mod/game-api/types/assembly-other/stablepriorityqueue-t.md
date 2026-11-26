---
title: "StablePriorityQueue<T>"
description: "Fast fixed-size priority queue of StablePriorityQueueNode items with float priorities."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StablePriorityQueue&lt;T&gt;

A **class** in `Alta.Timing.Runtime`, `Alta.Timing.PriorityQueue`.

Fast fixed-size priority queue of `StablePriorityQueueNode` items with float priorities. Equal priorities come out in the order they went in. No safety checks: queuing past `MaxSize`, or passing a node that is not in this queue, breaks it.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** [`IFixedSizePriorityQueue<T, float>`](/mod/game-api/types/assembly-other/ifixedsizepriorityqueue-titem-intpriority), [`IPriorityQueue<T, float>`](/mod/game-api/types/assembly-other/ipriorityqueue-titem-intpriority), `IEnumerable<T>`, `IEnumerable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StablePriorityQueue(int maxNodes)"}</code> | <span className="api-desc">Creates a `StablePriorityQueue` from `maxNodes`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nodes" /><code>{"private T[] _nodes"}</code> | <span className="api-desc">The heap array; slot 0 is unused.</span> |
| <Link id="m-numnodes" /><code>{"private int _numNodes"}</code> | <span className="api-desc">Number of queued nodes.</span> |
| <Link id="m-numnodeseverenqueued" /><code>{"private long _numNodesEverEnqueued"}</code> | <span className="api-desc">Counter used to stamp each node's insertion order.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">Number of queued nodes.</span> |
| <Link id="m-first" /><code>{"T First { get; }"}</code> | <span className="api-desc">The node `Dequeue` would return, or null if empty.</span> |
| <Link id="m-maxsize" /><code>{"int MaxSize { get; }"}</code> | <span className="api-desc">Capacity of the queue.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Empties the queue.</span> |
| <Link id="m-contains" /><code>{"bool Contains(T node)"}</code> | <span className="api-desc">True if the node sits in this queue at its `QueueIndex`.</span> |
| <Link id="m-dequeue" /><code>{"T Dequeue()"}</code> | <span className="api-desc">Removes and returns the node with the lowest priority value. No empty check.</span> |
| <Link id="m-enqueue" /><code>{"void Enqueue(T node, float priority)"}</code> | <span className="api-desc">Adds a node with a priority and stamps its insertion order. No capacity check.</span> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<T> GetEnumerator() (iterator)"}</code> | <span className="api-desc">Goes through the queued nodes in heap order (not sorted).</span> |
| <Link id="m-isvalidqueue" /><code>{"bool IsValidQueue()"}</code> | <span className="api-desc">Debug check that the heap order holds.</span> |
| <Link id="m-remove" /><code>{"void Remove(T node)"}</code> | <span className="api-desc">Removes a node from anywhere in the queue.</span> |
| <Link id="m-resize" /><code>{"void Resize(int maxNodes)"}</code> | <span className="api-desc">Changes the capacity, keeping the queued nodes.</span> |
| <Link id="m-updatepriority" /><code>{"void UpdatePriority(T node, float priority)"}</code> | <span className="api-desc">Changes a queued node's priority and re-sorts it.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cascadedown" /><code>{"private void CascadeDown(T node)"}</code> | <span className="api-desc">Moves a node down the heap until its children have lower priority.</span> |
| <Link id="m-cascadeup" /><code>{"private void CascadeUp(T node)"}</code> | <span className="api-desc">Moves a node up the heap until its parent has higher priority.</span> |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Goes through the queued nodes in heap order (not sorted).</span> |
| <Link id="m-hashigherpriority" /><code>{"private bool HasHigherPriority(T higher, T lower)"}</code> | <span className="api-desc">True if the first node should come out before the second: lower priority, or equal and queued earlier.</span> |
| <Link id="m-onnodeupdated" /><code>{"private void OnNodeUpdated(T node)"}</code> | <span className="api-desc">Moves a node up or down after its priority changed.</span> |

</details>
