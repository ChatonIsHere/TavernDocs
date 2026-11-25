---
title: "MemoizeHashsetCountTracker<TIn, TOut>"
description: "class MemoizeHashsetCountTracker<TIn, TOut> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MemoizeHashsetCountTracker&lt;TIn, TOut&gt;

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `IEnumerable<TOut>`, `IEnumerable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MemoizeHashsetCountTracker("}<Link to="/game-api/types/global-m-o/memoizehashset-tin-tout-evaluate">{"MemoizeHashset"}</Link>{"<TIn, TOut> evaluate, IEqualityComparer<TIn> inputComparer = null, IEqualityComparer<TOut> outputComparer = null)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-counter" /><code>{"private "}<Link to="/game-api/types/global-c-d/counttracker-t">{"CountTracker"}</Link>{"<TOut> counter"}</code> |
| <Link id="m-hashset" /><code>{"private "}<Link to="/game-api/types/global-m-o/memoizehashset-tin-tout">{"MemoizeHashset"}</Link>{"<TIn, TOut> hashset"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-firstadded" /><code>{"event Action<TOut> FirstAdded"}</code> |
| <Link id="m-lastremoved" /><code>{"event Action<TOut> LastRemoved"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-add" /><code>{"bool Add(TIn input, out TOut result)"}</code> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |
| <Link id="m-remove" /><code>{"bool Remove(TIn input, out TOut result)"}</code> |
| <Link id="m-removeandclear" /><code>{"void RemoveAndClear()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-getenumerator" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `MemoizeHashsetCountTracker&lt;TIn, TOut>`:

[`VolumeTrigger.effectHandlers`](/game-api/types/global-t-x/volumetrigger#m-effecthandlers), [`VolumeTrigger.pickups`](/game-api/types/global-t-x/volumetrigger#m-pickups), [`VolumeTrigger.players`](/game-api/types/global-t-x/volumetrigger#m-players), [`VolumeTrigger.rigidbodies`](/game-api/types/global-t-x/volumetrigger#m-rigidbodies).
