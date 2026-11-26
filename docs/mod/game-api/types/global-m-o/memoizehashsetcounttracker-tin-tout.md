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
| <Link id="m-ctor" /><code>{"MemoizeHashsetCountTracker("}<Link to="/mod/game-api/types/global-m-o/memoizehashset-tin-tout-evaluate">{"MemoizeHashset"}</Link>{"<TIn, TOut> evaluate, IEqualityComparer<TIn> inputComparer = null, IEqualityComparer<TOut> outputComparer = null)"}</code> | <span className="api-desc">Creates a `MemoizeHashsetCountTracker` from `evaluate`, `inputComparer` and `outputComparer`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-counter" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/counttracker-t">{"CountTracker"}</Link>{"<TOut> counter"}</code> | <span className="api-desc">Reference count per output.</span> |
| <Link id="m-hashset" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/memoizehashset-tin-tout">{"MemoizeHashset"}</Link>{"<TIn, TOut> hashset"}</code> | <span className="api-desc">Inputs and their cached outputs.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">Number of distinct outputs.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-firstadded" /><code>{"event Action<TOut> FirstAdded"}</code> | <span className="api-desc">Raised when an output gets its first input.</span> |
| <Link id="m-lastremoved" /><code>{"event Action<TOut> LastRemoved"}</code> | <span className="api-desc">Raised when an output loses its last input.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add(TIn input, out TOut result)"}</code> | <span className="api-desc">Adds an input and gives its output. True, and `FirstAdded` raised, only if the output is new.</span> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Empties the set without raising events.</span> |
| <Link id="m-remove" /><code>{"bool Remove(TIn input, out TOut result)"}</code> | <span className="api-desc">Removes an input. True, and `LastRemoved` raised, only if its output has no inputs left.</span> |
| <Link id="m-removeandclear" /><code>{"void RemoveAndClear()"}</code> | <span className="api-desc">Raises `LastRemoved` for every output, then empties the set.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Enumerates the distinct outputs.</span> |

</details>

## Used in

Members of other types that take, return or hold a `MemoizeHashsetCountTracker&lt;TIn, TOut>`:

<div className="api-used-in">

[`VolumeTrigger.effectHandlers`](/mod/game-api/types/global-t-x/volumetrigger#m-effecthandlers), [`VolumeTrigger.pickups`](/mod/game-api/types/global-t-x/volumetrigger#m-pickups), [`VolumeTrigger.players`](/mod/game-api/types/global-t-x/volumetrigger#m-players), [`VolumeTrigger.rigidbodies`](/mod/game-api/types/global-t-x/volumetrigger#m-rigidbodies).

</div>
