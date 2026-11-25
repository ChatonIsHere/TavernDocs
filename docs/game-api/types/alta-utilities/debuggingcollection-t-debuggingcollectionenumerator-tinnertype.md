---
title: "DebuggingCollection<T>.DebuggingCollectionEnumerator<TInnerType>"
description: "class DebuggingCollection<T>.DebuggingCollectionEnumerator<TInnerType> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebuggingCollection&lt;T&gt;.DebuggingCollectionEnumerator&lt;TInnerType&gt;

A **class** in `Root.Township`, `Alta.Utilities`.

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

| Member |
| --- |
| <Link id="m-enumerationfinishedcallback" /><code>{"private Action enumerationFinishedCallback"}</code> |
| <Link id="m-internalenumerator" /><code>{"private IEnumerator<TInnerType> internalEnumerator"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-current" /><code>{"TInnerType Current { get; }"}</code> |
| <Link id="m-isenumerating" /><code>{"bool IsEnumerating { get; private set; }"}</code> |

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

Members of other types that take, return or hold a `DebuggingCollectionEnumerator&lt;TInnerType>`:

[`DebuggingCollection<T>.enumerator`](/game-api/types/alta-utilities/debuggingcollection-t#m-enumerator).
