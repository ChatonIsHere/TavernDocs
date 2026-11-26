---
title: "CountTracker<T>"
description: "Reference-counted set: tracks how many times each item was added and reports when one first appears or is fully removed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CountTracker&lt;T&gt;

A **class** in `Root.Township`, the global namespace.

Reference-counted set: tracks how many times each item was added and reports when one first appears or is fully removed.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `IEnumerable<T>`, `IEnumerable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CountTracker(IEqualityComparer<T> comparer = null)"}</code> | Creates a `CountTracker` from `comparer`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-counts" /><code>{"private Dictionary<T, int> counts"}</code> | Count per item. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of distinct items held. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add(T item)"}</code> | Adds one to the item's count. Returns true if it was not there before. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Removes every item and count. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<T> GetEnumerator()"}</code> | Enumerates the distinct items. |
| <Link id="m-remove" /><code>{"bool Remove(T item)"}</code> | Takes one from the item's count. Returns true when it reaches zero and is removed. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Enumerates the distinct items. |

</details>

## Used in

Members of other types that take, return or hold a `CountTracker&lt;T>`:

[`MemoizeHashsetCountTracker<TIn, TOut>.counter`](/mod/game-api/types/global-m-o/memoizehashsetcounttracker-tin-tout#m-counter).
