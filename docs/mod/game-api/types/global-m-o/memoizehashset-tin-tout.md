---
title: "MemoizeHashset<TIn, TOut>"
description: "A cache that runs an evaluate function once per input and keeps only the inputs it accepted, with their results."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MemoizeHashset&lt;TIn, TOut&gt;

A **class** in `Root.Township`, the global namespace.

A cache that runs an evaluate function once per input and keeps only the inputs it accepted, with their results.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested types** [`Evaluate`](/mod/game-api/types/global-m-o/memoizehashset-tin-tout-evaluate)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code><Link to="/mod/game-api/types/global-m-o/memoizehashset-tin-tout-evaluate">{"MemoizeHashset"}</Link>{"("}<Link to="/mod/game-api/types/global-m-o/memoizehashset-tin-tout-evaluate">{"MemoizeHashset"}</Link>{"<TIn, TOut> evaluate, IEqualityComparer<TIn> comparer = null)"}</code> | Creates a `MemoizeHashset` from `evaluate` and `comparer`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluate" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/memoizehashset-tin-tout-evaluate">{"MemoizeHashset"}</Link>{"<TIn, TOut> evaluate"}</code> | The function that decides if an input is kept and works out its result. |
| <Link id="m-lookup" /><code>{"private Dictionary<TIn, TOut> lookup"}</code> | The stored inputs and their results, using the comparer passed to the constructor. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add(TIn input, out TOut result)"}</code> | Runs the evaluate function for a new input and stores the result if it returns true. Returns false for inputs already stored or rejected. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Empties the cache. |
| <Link id="m-get" /><code>{"bool Get(TIn input, out TOut result)"}</code> | Looks up a stored result without running the evaluate function. |
| <Link id="m-remove" /><code>{"bool Remove(TIn input, out TOut result)"}</code> | Takes an input out of the cache and returns its stored result. |

## Used in

Members of other types that take, return or hold a `MemoizeHashset&lt;TIn, TOut>`:

[`MemoizeHashsetCountTracker<TIn, TOut>.hashset`](/mod/game-api/types/global-m-o/memoizehashsetcounttracker-tin-tout#m-hashset).
