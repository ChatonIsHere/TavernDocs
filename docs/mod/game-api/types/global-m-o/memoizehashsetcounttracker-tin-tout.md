---
title: "MemoizeHashsetCountTracker<TIn, TOut>"
description: "A set of inputs mapped to outputs through a cached function, with a reference count per output."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MemoizeHashsetCountTracker&lt;TIn, TOut&gt;

A **class** in `Root.Township`, the global namespace.

A set of inputs mapped to outputs through a cached function, with a reference count per output. Raises events when an output first appears and when its last input goes.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `IEnumerable<TOut>`, `IEnumerable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MemoizeHashsetCountTracker("}<Link to="/mod/game-api/types/global-m-o/memoizehashset-tin-tout-evaluate">{"MemoizeHashset"}</Link>{"<TIn, TOut> evaluate, IEqualityComparer<TIn> inputComparer = null, IEqualityComparer<TOut> outputComparer = null)"}</code> | Creates a `MemoizeHashsetCountTracker` from `evaluate`, `inputComparer` and `outputComparer`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-counter" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/counttracker-t">{"CountTracker"}</Link>{"<TOut> counter"}</code> | Reference count per output. |
| <Link id="m-hashset" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/memoizehashset-tin-tout">{"MemoizeHashset"}</Link>{"<TIn, TOut> hashset"}</code> | Inputs and their cached outputs. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of distinct outputs. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-firstadded" /><code>{"event Action<TOut> FirstAdded"}</code> | Raised when an output gets its first input. |
| <Link id="m-lastremoved" /><code>{"event Action<TOut> LastRemoved"}</code> | Raised when an output loses its last input. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add(TIn input, out TOut result)"}</code> | Adds an input and gives its output. True, and `FirstAdded` raised, only if the output is new. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties the set without raising events. |
| <Link id="m-remove" /><code>{"bool Remove(TIn input, out TOut result)"}</code> | Removes an input. True, and `LastRemoved` raised, only if its output has no inputs left. |
| <Link id="m-removeandclear" /><code>{"void RemoveAndClear()"}</code> | Raises `LastRemoved` for every output, then empties the set. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Enumerates the distinct outputs. |

</details>

## Used in

Members of other types that take, return or hold a `MemoizeHashsetCountTracker&lt;TIn, TOut>`:

[`VolumeTrigger.effectHandlers`](/mod/game-api/types/global-t-x/volumetrigger#m-effecthandlers), [`VolumeTrigger.pickups`](/mod/game-api/types/global-t-x/volumetrigger#m-pickups), [`VolumeTrigger.players`](/mod/game-api/types/global-t-x/volumetrigger#m-players), [`VolumeTrigger.rigidbodies`](/mod/game-api/types/global-t-x/volumetrigger#m-rigidbodies).
