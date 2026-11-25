---
title: "CountTracker<T>"
description: "class CountTracker<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CountTracker&lt;T&gt;

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `IEnumerable<T>`, `IEnumerable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CountTracker(IEqualityComparer<T> comparer = null)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-counts" /><code>{"private Dictionary<T, int> counts"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add(T item)"}</code> |  |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-getenumerator" /><code>{"IEnumerator<T> GetEnumerator()"}</code> |  |
| <Link id="m-remove" /><code>{"bool Remove(T item)"}</code> |  |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |  |

## Used in

Members of other types that take, return or hold a `CountTracker&lt;T>`:

[`MemoizeHashsetCountTracker<TIn, TOut>.counter`](/game-api/types/global-m-o/memoizehashsetcounttracker-tin-tout#m-counter).
