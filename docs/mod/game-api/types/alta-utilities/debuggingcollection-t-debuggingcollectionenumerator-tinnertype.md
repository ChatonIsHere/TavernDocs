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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Nested in** [`DebuggingCollection<T>`](/mod/game-api/types/alta-utilities/debuggingcollection-t)
- **Inherits or implements** `IEnumerator<TInnerType>`, `IEnumerator`, `IDisposable`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DebuggingCollectionEnumerator(IEnumerator<TInnerType> enumerator, Action enumerationFinishedCallback)"}</code> | <span className="api-desc">Creates a `DebuggingCollection` from `enumerator` and `enumerationFinishedCallback`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enumerationfinishedcallback" /><code>{"private Action enumerationFinishedCallback"}</code> | <span className="api-desc">Called when enumeration ends. The collection uses it to forget this enumerator.</span> |
| <Link id="m-internalenumerator" /><code>{"private IEnumerator<TInnerType> internalEnumerator"}</code> | <span className="api-desc">The wrapped collection's enumerator.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"TInnerType Current { get; }"}</code> | <span className="api-desc">The current item of the wrapped enumerator.</span> |
| <Link id="m-isenumerating" /><code>{"bool IsEnumerating { get; private set; }"}</code> | <span className="api-desc">True until `MoveNext` returns false.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-system-collections-ienumerator-current" /><code>{"private object System.Collections.IEnumerator.Current { get; }"}</code> | <span className="api-desc">Non-generic `Current`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Disposes the wrapped enumerator.</span> |
| <Link id="m-movenext" /><code>{"bool MoveNext()"}</code> | <span className="api-desc">Advances the wrapped enumerator and calls the finished callback at the end.</span> |
| <Link id="m-reset" /><code>{"void Reset()"}</code> | <span className="api-desc">Resets the wrapped enumerator.</span> |

## Used in

Members of other types that take, return or hold a `DebuggingCollectionEnumerator&lt;TInnerType>`:

<div className="api-used-in">

[`DebuggingCollection<T>.enumerator`](/mod/game-api/types/alta-utilities/debuggingcollection-t#m-enumerator).

</div>
