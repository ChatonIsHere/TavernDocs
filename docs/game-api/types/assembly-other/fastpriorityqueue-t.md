---
title: "FastPriorityQueue<T>"
description: "Fixed size binary heap of nodes with a float priority, lowest value first."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FastPriorityQueue&lt;T&gt;

A **class** in `Alta.Timing.Runtime`, `Alta.Timing.PriorityQueue`.

Fixed size binary heap of nodes with a float priority, lowest value first. Nodes store their own index, and there are no safety checks.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IFixedSizePriorityQueue<T, float>`](/game-api/types/assembly-other/ifixedsizepriorityqueue-titem-intpriority), [`IPriorityQueue<T, float>`](/game-api/types/assembly-other/ipriorityqueue-titem-intpriority), `IEnumerable<T>`, `IEnumerable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FastPriorityQueue(int maxNodes)"}</code> |

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
| <Link id="m-first" /><code>{"T First { get; }"}</code> | The node with the lowest priority value, without removing it. |
| <Link id="m-last" /><code>{"T Last { get; }"}</code> | Returns the node at array slot `Count - 1`, which is just a heap slot, not the lowest priority node. |
| <Link id="m-maxsize" /><code>{"int MaxSize { get; }"}</code> | How many nodes the queue can hold. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties the queue without resizing it. |
| <Link id="m-contains" /><code>{"bool Contains(T node)"}</code> | True if the node is in this queue, checked through its stored index. |
| <Link id="m-dequeue" /><code>{"T Dequeue()"}</code> | Removes and returns the node with the lowest priority value. Does not check for an empty queue. |
| <Link id="m-enqueue" /><code>{"void Enqueue(T node, float priority)"}</code> | Adds a node with a priority. Does not check for a full queue or a node already queued. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<T> GetEnumerator() (iterator)"}</code> | Enumerates nodes in heap order, not priority order. |
| <Link id="m-isvalidqueue" /><code>{"bool IsValidQueue()"}</code> | Debug check that every parent comes before its children. |
| <Link id="m-remove" /><code>{"void Remove(T node)"}</code> | Removes a node from anywhere in the queue. |
| <Link id="m-resize" /><code>{"void Resize(int maxNodes)"}</code> | Changes the capacity, dropping nodes beyond the new size. |
| <Link id="m-updatepriority" /><code>{"void UpdatePriority(T node, float priority)"}</code> | Changes a queued node's priority and moves it to its new place. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cascadedown" /><code>{"private void CascadeDown(T node)"}</code> | Moves a node down the heap until both children have lower priority. |
| <Link id="m-cascadeup" /><code>{"private void CascadeUp(T node)"}</code> | Moves a node up the heap past parents with lower priority. |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Enumerates nodes in heap order, not priority order. |
| <Link id="m-hashigherorequalpriority" /><code>{"private bool HasHigherOrEqualPriority(T higher, T lower)"}</code> | True if the first node's priority value is lower or equal. |
| <Link id="m-hashigherpriority" /><code>{"private bool HasHigherPriority(T higher, T lower)"}</code> | True if the first node's priority value is strictly lower. |
| <Link id="m-onnodeupdated" /><code>{"private void OnNodeUpdated(T node)"}</code> | Moves a node up or down after its priority changed. |

</details>

## Used in

Members of other types that take, return or hold a `FastPriorityQueue&lt;T>`:

[`StatEffectShellAnimator.animationQueue`](/game-api/types/alta-player/stateffectshellanimator#m-animationqueue).
