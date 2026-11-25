---
title: "FastPriorityQueue<T>"
description: "class FastPriorityQueue<T> in Alta.Timing.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FastPriorityQueue&lt;T&gt;

A **class** in `Alta.Timing.Runtime`, `Alta.Timing.PriorityQueue`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** [`IFixedSizePriorityQueue<T, float>`](/game-api/types/assembly-other/ifixedsizepriorityqueue-titem-intpriority), [`IPriorityQueue<T, float>`](/game-api/types/assembly-other/ipriorityqueue-titem-intpriority), `IEnumerable<T>`, `IEnumerable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FastPriorityQueue(int maxNodes)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-nodes" /><code>{"private T[] _nodes"}</code> |
| <Link id="m-numnodes" /><code>{"private int _numNodes"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |
| <Link id="m-first" /><code>{"T First { get; }"}</code> |
| <Link id="m-last" /><code>{"T Last { get; }"}</code> |
| <Link id="m-maxsize" /><code>{"int MaxSize { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |
| <Link id="m-contains" /><code>{"bool Contains(T node)"}</code> |
| <Link id="m-dequeue" /><code>{"T Dequeue()"}</code> |
| <Link id="m-enqueue" /><code>{"void Enqueue(T node, float priority)"}</code> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<T> GetEnumerator() (iterator)"}</code> |
| <Link id="m-isvalidqueue" /><code>{"bool IsValidQueue()"}</code> |
| <Link id="m-remove" /><code>{"void Remove(T node)"}</code> |
| <Link id="m-resize" /><code>{"void Resize(int maxNodes)"}</code> |
| <Link id="m-updatepriority" /><code>{"void UpdatePriority(T node, float priority)"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-cascadedown" /><code>{"private void CascadeDown(T node)"}</code> |
| <Link id="m-cascadeup" /><code>{"private void CascadeUp(T node)"}</code> |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |
| <Link id="m-hashigherorequalpriority" /><code>{"private bool HasHigherOrEqualPriority(T higher, T lower)"}</code> |
| <Link id="m-hashigherpriority" /><code>{"private bool HasHigherPriority(T higher, T lower)"}</code> |
| <Link id="m-onnodeupdated" /><code>{"private void OnNodeUpdated(T node)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `FastPriorityQueue&lt;T>`:

[`StatEffectShellAnimator.animationQueue`](/game-api/types/alta-player/stateffectshellanimator#m-animationqueue).
