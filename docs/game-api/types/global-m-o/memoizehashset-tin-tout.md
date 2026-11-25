---
title: "MemoizeHashset<TIn, TOut>"
description: "class MemoizeHashset<TIn, TOut> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MemoizeHashset&lt;TIn, TOut&gt;

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested types** [`Evaluate`](/game-api/types/global-m-o/memoizehashset-tin-tout-evaluate)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code><Link to="/game-api/types/global-m-o/memoizehashset-tin-tout-evaluate">{"MemoizeHashset"}</Link>{"("}<Link to="/game-api/types/global-m-o/memoizehashset-tin-tout-evaluate">{"MemoizeHashset"}</Link>{"<TIn, TOut> evaluate, IEqualityComparer<TIn> comparer = null)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-evaluate" /><code>{"private "}<Link to="/game-api/types/global-m-o/memoizehashset-tin-tout-evaluate">{"MemoizeHashset"}</Link>{"<TIn, TOut> evaluate"}</code> |
| <Link id="m-lookup" /><code>{"private Dictionary<TIn, TOut> lookup"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-add" /><code>{"bool Add(TIn input, out TOut result)"}</code> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |
| <Link id="m-get" /><code>{"bool Get(TIn input, out TOut result)"}</code> |
| <Link id="m-remove" /><code>{"bool Remove(TIn input, out TOut result)"}</code> |

## Used in

Members of other types that take, return or hold a `MemoizeHashset&lt;TIn, TOut>`:

[`MemoizeHashsetCountTracker<TIn, TOut>.hashset`](/game-api/types/global-m-o/memoizehashsetcounttracker-tin-tout#m-hashset).
