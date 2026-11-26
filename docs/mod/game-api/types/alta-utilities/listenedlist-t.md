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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`IListenedList<T>`](/mod/game-api/types/alta-utilities/ilistenedlist-t), `IEnumerable<T>`, `IEnumerable`, `ICollection<T>`
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ListenedList()"}</code> | <span className="api-desc">Creates a `ListenedList` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-list" /><code>{"private List<T> list"}</code> | <span className="api-desc">The inner list. Other code reaches it through `IListenedList.Internal`, which skips the events.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">Number of items in the list.</span> |
| <Link id="m-item" /><code>{"T this[int index] { get; }"}</code> | <span className="api-desc">Read-only access by index.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemadded" /><code>{"event "}<Link to="/mod/game-api/types/alta-utilities/listitemchangedhandler-t">{"ListItemChangedHandler"}</Link>{"<T> ItemAdded"}</code> | <span className="api-desc">Raised after an item is added.</span> |
| <Link id="m-itemremoved" /><code>{"event "}<Link to="/mod/game-api/types/alta-utilities/listitemchangedhandler-t">{"ListItemChangedHandler"}</Link>{"<T> ItemRemoved"}</code> | <span className="api-desc">Raised after `Remove`, even if the item was not in the list.</span> |
| <Link id="m-targetchanged" /><code>{"event "}<Link to="/mod/game-api/types/alta-utilities/targetchangedhandler-t">{"TargetChangedHandler"}</Link>{"<T> TargetChanged"}</code> | <span className="api-desc">Declared for the interface but never raised by this class.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add(T item)"}</code> | <span className="api-desc">Adds an item and raises `ItemAdded`.</span> |
| <Link id="m-addrange" /><code>{"void AddRange(IEnumerable<T> items)"}</code> | <span className="api-desc">Adds several items and raises `ItemAdded` for each.</span> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Removes items one at a time, raising `ItemRemoved` for each.</span> |
| <Link id="m-contains" /><code>{"bool Contains(T item)"}</code> | <span className="api-desc">True if the item is in the list.</span> |
| <Link id="m-copyto" /><code>{"void CopyTo(T[] array, int arrayIndex)"}</code> | <span className="api-desc">Copies the items into an array from the given index.</span> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<T> GetEnumerator()"}</code> | <span className="api-desc">Enumerates the inner list, so changing the list while looping throws.</span> |
| <Link id="m-remove" /><code>{"bool Remove(T item)"}</code> | <span className="api-desc">Removes an item, raises `ItemRemoved` and returns whether it was found.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Enumerates the inner list, so changing the list while looping throws.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ListenedList&lt;T>`:

<div className="api-used-in">

[`TimberBlock.chiselledPieces`](/mod/game-api/types/alta-crafting/timberblock#m-chiselledpieces).

</div>
