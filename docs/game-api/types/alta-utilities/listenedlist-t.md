---
title: "ListenedList<T>"
description: "class ListenedList<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ListenedList&lt;T&gt;

A **class** in `Root.Township`, `Alta.Utilities`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`IListenedList<T>`](/game-api/types/alta-utilities/ilistenedlist-t), `IEnumerable<T>`, `IEnumerable`, `ICollection<T>`
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ListenedList()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-list" /><code>{"private List<T> list"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |  |
| <Link id="m-item" /><code>{"T this[int index] { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemadded" /><code>{"event "}<Link to="/game-api/types/alta-utilities/listitemchangedhandler-t">{"ListItemChangedHandler"}</Link>{"<T> ItemAdded"}</code> |  |
| <Link id="m-itemremoved" /><code>{"event "}<Link to="/game-api/types/alta-utilities/listitemchangedhandler-t">{"ListItemChangedHandler"}</Link>{"<T> ItemRemoved"}</code> |  |
| <Link id="m-targetchanged" /><code>{"event "}<Link to="/game-api/types/alta-utilities/targetchangedhandler-t">{"TargetChangedHandler"}</Link>{"<T> TargetChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(T item)"}</code> |  |
| <Link id="m-addrange" /><code>{"void AddRange(IEnumerable<T> items)"}</code> |  |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-contains" /><code>{"bool Contains(T item)"}</code> |  |
| <Link id="m-copyto" /><code>{"void CopyTo(T[] array, int arrayIndex)"}</code> |  |
| <Link id="m-getenumerator" /><code>{"IEnumerator<T> GetEnumerator()"}</code> |  |
| <Link id="m-remove" /><code>{"bool Remove(T item)"}</code> |  |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ListenedList&lt;T>`:

[`TimberBlock.chiselledPieces`](/game-api/types/alta-crafting/timberblock#m-chiselledpieces).
