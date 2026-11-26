---
title: "DebuggingCollection<T>.DebuggingCollectionEnumerator<TInnerType>"
description: "Enumerator for DebuggingCollection that tracks whether enumeration is under way, so the collection can log changes made while iterating."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebuggingCollection&lt;T&gt;.DebuggingCollectionEnumerator&lt;TInnerType&gt;

A **class** in `Root.Township`, `Alta.Utilities`.

Enumerator for `DebuggingCollection` that tracks whether enumeration is under way, so the collection can log changes made while iterating.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Nested in** [`DebuggingCollection<T>`](/game-api/types/alta-utilities/debuggingcollection-t)
- **Inherits or implements** `IEnumerator<TInnerType>`, `IEnumerator`, `IDisposable`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DebuggingCollectionEnumerator(IEnumerator<TInnerType> enumerator, Action enumerationFinishedCallback)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enumerationfinishedcallback" /><code>{"private Action enumerationFinishedCallback"}</code> | Called when enumeration ends. The collection uses it to forget this enumerator. |
| <Link id="m-internalenumerator" /><code>{"private IEnumerator<TInnerType> internalEnumerator"}</code> | The wrapped collection's enumerator. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"TInnerType Current { get; }"}</code> | The current item of the wrapped enumerator. |
| <Link id="m-isenumerating" /><code>{"bool IsEnumerating { get; private set; }"}</code> | True until `MoveNext` returns false. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-system-collections-ienumerator-current" /><code>{"private object System.Collections.IEnumerator.Current { get; }"}</code> | Non-generic `Current`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Disposes the wrapped enumerator. |
| <Link id="m-movenext" /><code>{"bool MoveNext()"}</code> | Advances the wrapped enumerator and calls the finished callback at the end. |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | Resets the wrapped enumerator. |

## Used in

Members of other types that take, return or hold a `DebuggingCollectionEnumerator&lt;TInnerType>`:

[`DebuggingCollection<T>.enumerator`](/game-api/types/alta-utilities/debuggingcollection-t#m-enumerator).
