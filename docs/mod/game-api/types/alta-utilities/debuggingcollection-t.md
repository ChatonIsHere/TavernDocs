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
| <Link id="m-ctor" /><code>{"DebuggingCollection(ICollection<T> internalCollection)"}</code> | <span className="api-desc">Creates a `DebuggingCollection` from `internalCollection`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enumerator" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/debuggingcollection-t-debuggingcollectionenumerator-tinnertype">{"DebuggingCollection"}</Link>{"<T, T> enumerator"}</code> | <span className="api-desc">The latest enumerator handed out.</span> |
| <Link id="m-internalcollection" /><code>{"private ICollection<T> internalCollection"}</code> | <span className="api-desc">The wrapped collection.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">Item count of the wrapped collection.</span> |
| <Link id="m-isreadonly" /><code>{"bool IsReadOnly { get; }"}</code> | <span className="api-desc">Read-only flag of the wrapped collection.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(T item)"}</code> | <span className="api-desc">Adds to the wrapped collection. Logs an error first if an enumeration is running.</span> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Clears the wrapped collection. Logs an error first if an enumeration is running.</span> |
| <Link id="m-contains" /><code>{"bool Contains(T item)"}</code> | <span className="api-desc">Passes through to the wrapped collection.</span> |
| <Link id="m-copyto" /><code>{"void CopyTo(T[] array, int arrayIndex)"}</code> | <span className="api-desc">Passes through to the wrapped collection.</span> |
| <Link id="m-getenumerator" /><code>{"IEnumerator GetEnumerator()"}</code> | <span className="api-desc">Returns a tracking enumerator over the wrapped collection. Only the latest one handed out is watched.</span> |
| <Link id="m-remove" /><code>{"bool Remove(T item)"}</code> | <span className="api-desc">Removes from the wrapped collection. Logs an error first if an enumeration is running.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkforenumerationviolation" /><code>{"private void CheckForEnumerationViolation()"}</code> | <span className="api-desc">Logs an error with a stack trace if the latest enumerator is still running.</span> |
| <Link id="m-removeenumerator" /><code>{"private void RemoveEnumerator()"}</code> | <span className="api-desc">Callback that stops tracking once enumeration reaches the end.</span> |

</details>
