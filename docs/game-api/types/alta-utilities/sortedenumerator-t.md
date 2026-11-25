---
title: "SortedEnumerator<T>"
description: "class SortedEnumerator<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SortedEnumerator&lt;T&gt;

A **class** in `Root.Township`, `Alta.Utilities`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `IEnumerator<T>`, `IEnumerator`, `IDisposable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SortedEnumerator(T[] list)"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-sortedlist" /><code>{"T[] sortedList"}</code> |

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-position" /><code>{"private int position"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-current" /><code>{"T Current { get; }"}</code> |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-system-collections-ienumerator-current" /><code>{"private object System.Collections.IEnumerator.Current { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |
| <Link id="m-movenext" /><code>{"bool MoveNext()"}</code> |
| <Link id="m-reset" /><code>{"void Reset()"}</code> |

## Used in

Members of other types that take, return or hold a `SortedEnumerator&lt;T>`:

[`SortedList<T>.GetEnumerator`](/game-api/types/alta-utilities/sortedlist-t#m-getenumerator-2).
