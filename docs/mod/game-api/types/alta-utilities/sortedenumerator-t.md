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
| <Link id="m-ctor" /><code>{"SortedEnumerator(T[] list)"}</code> | Creates a `SortedEnumerator` from `list`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-sortedlist" /><code>{"T[] sortedList"}</code> | The array being enumerated. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"private int position"}</code> | Current index, -1 before the start. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"T Current { get; }"}</code> | Item at the current position. Throws `InvalidOperationException` before the first `MoveNext` or past the end. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-system-collections-ienumerator-current" /><code>{"private object System.Collections.IEnumerator.Current { get; }"}</code> | Non-generic `Current`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Drops the array. |
| <Link id="m-movenext" /><code>{"bool MoveNext()"}</code> | Moves to the next item. False once past the end. |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Goes back to before the first item. |

## Used in

Members of other types that take, return or hold a `SortedEnumerator&lt;T>`:

[`SortedList<T>.GetEnumerator`](/mod/game-api/types/alta-utilities/sortedlist-t#m-getenumerator-2).
