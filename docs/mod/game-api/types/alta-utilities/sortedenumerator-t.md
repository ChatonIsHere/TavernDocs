---
title: "SortedEnumerator<T>"
description: "Enumerator over an array snapshot, returned by SortedList."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SortedEnumerator&lt;T&gt;

A **class** in `Root.Township`, `Alta.Utilities`.

Enumerator over an array snapshot, returned by `SortedList`.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `IEnumerator<T>`, `IEnumerator`, `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SortedEnumerator(T[] list)"}</code> | <span className="api-desc">Creates a `SortedEnumerator` from `list`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-sortedlist" /><code>{"T[] sortedList"}</code> | <span className="api-desc">The array being enumerated.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"private int position"}</code> | <span className="api-desc">Current index, -1 before the start.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"T Current { get; }"}</code> | <span className="api-desc">Item at the current position. Throws `InvalidOperationException` before the first `MoveNext` or past the end.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-system-collections-ienumerator-current" /><code>{"private object System.Collections.IEnumerator.Current { get; }"}</code> | <span className="api-desc">Non-generic `Current`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Drops the array.</span> |
| <Link id="m-movenext" /><code>{"bool MoveNext()"}</code> | <span className="api-desc">Moves to the next item. False once past the end.</span> |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | <span className="api-desc">Goes back to before the first item.</span> |

## Used in

Members of other types that take, return or hold a `SortedEnumerator&lt;T>`:

<div className="api-used-in">

[`SortedList<T>.GetEnumerator`](/mod/game-api/types/alta-utilities/sortedlist-t#m-getenumerator-2).

</div>
