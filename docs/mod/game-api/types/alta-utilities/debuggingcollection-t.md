---
title: "DebuggingCollection<T>"
description: "Collection wrapper that logs an error with a stack trace when it is changed during enumeration, so you can find the code that did it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebuggingCollection&lt;T&gt;

A **class** in `Root.Township`, `Alta.Utilities`.

Collection wrapper that logs an error with a stack trace when it is changed during enumeration, so you can find the code that did it.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `IEnumerable`, `ICollection<T>`, `IEnumerable<T>`
- **Nested types** [`DebuggingCollectionEnumerator<TInnerType>`](/mod/game-api/types/alta-utilities/debuggingcollection-t-debuggingcollectionenumerator-tinnertype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DebuggingCollection(ICollection<T> internalCollection)"}</code> | Creates a `DebuggingCollection` from `internalCollection`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enumerator" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/debuggingcollection-t-debuggingcollectionenumerator-tinnertype">{"DebuggingCollection"}</Link>{"<T, T> enumerator"}</code> | The latest enumerator handed out. |
| <Link id="m-internalcollection" /><code>{"private ICollection<T> internalCollection"}</code> | The wrapped collection. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Item count of the wrapped collection. |
| <Link id="m-isreadonly" /><code>{"bool IsReadOnly { get; }"}</code> | Read-only flag of the wrapped collection. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(T item)"}</code> | Adds to the wrapped collection. Logs an error first if an enumeration is running. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Clears the wrapped collection. Logs an error first if an enumeration is running. |
| <Link id="m-contains" /><code>{"bool Contains(T item)"}</code> | Passes through to the wrapped collection. |
| <Link id="m-copyto" /><code>{"void CopyTo(T[] array, int arrayIndex)"}</code> | Passes through to the wrapped collection. |
| <Link id="m-getenumerator" /><code>{"IEnumerator GetEnumerator()"}</code> | Returns a tracking enumerator over the wrapped collection. Only the latest one handed out is watched. |
| <Link id="m-remove" /><code>{"bool Remove(T item)"}</code> | Removes from the wrapped collection. Logs an error first if an enumeration is running. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforenumerationviolation" /><code>{"private void CheckForEnumerationViolation()"}</code> | Logs an error with a stack trace if the latest enumerator is still running. |
| <Link id="m-removeenumerator" /><code>{"private void RemoveEnumerator()"}</code> | Callback that stops tracking once enumeration reaches the end. |

</details>
