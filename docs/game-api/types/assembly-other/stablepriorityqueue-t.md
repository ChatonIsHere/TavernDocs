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

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IFixedSizePriorityQueue<T, float>`](/game-api/types/assembly-other/ifixedsizepriorityqueue-titem-intpriority), [`IPriorityQueue<T, float>`](/game-api/types/assembly-other/ipriorityqueue-titem-intpriority), `IEnumerable<T>`, `IEnumerable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StablePriorityQueue(int maxNodes)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nodes" /><code>{"private T[] _nodes"}</code> | The heap array; slot 0 is unused. |
| <Link id="m-numnodes" /><code>{"private int _numNodes"}</code> | Number of queued nodes. |
| <Link id="m-numnodeseverenqueued" /><code>{"private long _numNodesEverEnqueued"}</code> | Counter used to stamp each node's insertion order. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of queued nodes. |
| <Link id="m-first" /><code>{"T First { get; }"}</code> | The node `Dequeue` would return, or null if empty. |
| <Link id="m-maxsize" /><code>{"int MaxSize { get; }"}</code> | Capacity of the queue. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties the queue. |
| <Link id="m-contains" /><code>{"bool Contains(T node)"}</code> | True if the node sits in this queue at its `QueueIndex`. |
| <Link id="m-dequeue" /><code>{"T Dequeue()"}</code> | Removes and returns the node with the lowest priority value. No empty check. |
| <Link id="m-enqueue" /><code>{"void Enqueue(T node, float priority)"}</code> | Adds a node with a priority and stamps its insertion order. No capacity check. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<T> GetEnumerator() (iterator)"}</code> | Goes through the queued nodes in heap order (not sorted). |
| <Link id="m-isvalidqueue" /><code>{"bool IsValidQueue()"}</code> | Debug check that the heap order holds. |
| <Link id="m-remove" /><code>{"void Remove(T node)"}</code> | Removes a node from anywhere in the queue. |
| <Link id="m-resize" /><code>{"void Resize(int maxNodes)"}</code> | Changes the capacity, keeping the queued nodes. |
| <Link id="m-updatepriority" /><code>{"void UpdatePriority(T node, float priority)"}</code> | Changes a queued node's priority and re-sorts it. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cascadedown" /><code>{"private void CascadeDown(T node)"}</code> | Moves a node down the heap until its children have lower priority. |
| <Link id="m-cascadeup" /><code>{"private void CascadeUp(T node)"}</code> | Moves a node up the heap until its parent has higher priority. |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Goes through the queued nodes in heap order (not sorted). |
| <Link id="m-hashigherpriority" /><code>{"private bool HasHigherPriority(T higher, T lower)"}</code> | True if the first node should come out before the second: lower priority, or equal and queued earlier. |
| <Link id="m-onnodeupdated" /><code>{"private void OnNodeUpdated(T node)"}</code> | Moves a node up or down after its priority changed. |

</details>
