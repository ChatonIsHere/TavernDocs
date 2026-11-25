---
title: "ListenedList<T>"
description: "A list that raises events when items are added or removed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ListenedList&lt;T&gt;

A **class** in `Root.Township`, `Alta.Utilities`.

A list that raises events when items are added or removed. Adding through the `ICollection` interface is refused with an error.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`IListenedList<T>`](/game-api/types/alta-utilities/ilistenedlist-t), `IEnumerable<T>`, `IEnumerable`, `ICollection<T>`
- **Attributes** `DefaultMember`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ListenedList()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-list" /><code>{"private List<T> list"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |  |
| <Link id="m-item" /><code>{"T this[int index] { get; }"}</code> | Read-only access by index. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemadded" /><code>{"event "}<Link to="/game-api/types/alta-utilities/listitemchangedhandler-t">{"ListItemChangedHandler"}</Link>{"<T> ItemAdded"}</code> | Raised after an item is added. |
| <Link id="m-itemremoved" /><code>{"event "}<Link to="/game-api/types/alta-utilities/listitemchangedhandler-t">{"ListItemChangedHandler"}</Link>{"<T> ItemRemoved"}</code> | Raised after `Remove`, even if the item was not in the list. |
| <Link id="m-targetchanged" /><code>{"event "}<Link to="/game-api/types/alta-utilities/targetchangedhandler-t">{"TargetChangedHandler"}</Link>{"<T> TargetChanged"}</code> | Declared for the interface but never raised by this class. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(T item)"}</code> | Adds an item and raises `ItemAdded`. |
| <Link id="m-addrange" /><code>{"void AddRange(IEnumerable<T> items)"}</code> | Adds several items and raises `ItemAdded` for each. |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Removes items one at a time, raising `ItemRemoved` for each. |
| <Link id="m-contains" /><code>{"bool Contains(T item)"}</code> |  |
| <Link id="m-copyto" /><code>{"void CopyTo(T[] array, int arrayIndex)"}</code> | Copies the items into an array from the given index. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<T> GetEnumerator()"}</code> |  |
| <Link id="m-remove" /><code>{"bool Remove(T item)"}</code> | Removes an item, raises `ItemRemoved` and returns whether it was found. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ListenedList&lt;T>`:

[`TimberBlock.chiselledPieces`](/game-api/types/alta-crafting/timberblock#m-chiselledpieces).
