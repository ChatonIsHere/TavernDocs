---
title: "DebuggingCollection<T>"
description: "class DebuggingCollection<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebuggingCollection&lt;T&gt;

A **class** in `Root.Township`, `Alta.Utilities`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `IEnumerable`, `ICollection<T>`, `IEnumerable<T>`
- **Nested types** [`DebuggingCollectionEnumerator<TInnerType>`](/game-api/types/alta-utilities/debuggingcollection-t-debuggingcollectionenumerator-tinnertype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DebuggingCollection(ICollection<T> internalCollection)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-enumerator" /><code>{"private "}<Link to="/game-api/types/alta-utilities/debuggingcollection-t-debuggingcollectionenumerator-tinnertype">{"DebuggingCollection"}</Link>{"<T, T> enumerator"}</code> |  |
| <Link id="m-internalcollection" /><code>{"private ICollection<T> internalCollection"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |  |
| <Link id="m-isreadonly" /><code>{"bool IsReadOnly { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(T item)"}</code> |  |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-contains" /><code>{"bool Contains(T item)"}</code> |  |
| <Link id="m-copyto" /><code>{"void CopyTo(T[] array, int arrayIndex)"}</code> |  |
| <Link id="m-getenumerator" /><code>{"IEnumerator GetEnumerator()"}</code> |  |
| <Link id="m-remove" /><code>{"bool Remove(T item)"}</code> |  |
| <Link id="m-checkforenumerationviolation" /><code>{"private void CheckForEnumerationViolation()"}</code> |  |
| <Link id="m-removeenumerator" /><code>{"private void RemoveEnumerator()"}</code> |  |
