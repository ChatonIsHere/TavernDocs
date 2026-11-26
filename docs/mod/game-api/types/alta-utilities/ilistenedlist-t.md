---
title: "IListenedList<T>"
description: "A read-only view of a list that raises events when items are added or removed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IListenedList&lt;T&gt;

An **interface** in `Root.Township`, `Alta.Utilities`.

A read-only view of a list that raises events when items are added or removed. `ListenedList<T>` and `ForwardedList<T>` implement it.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `IEnumerable<T>`, `IEnumerable`
- **Derived types** [`ForwardedList<T>`](/mod/game-api/types/alta-utilities/forwardedlist-t), [`ListenedList<T>`](/mod/game-api/types/alta-utilities/listenedlist-t)
- **Attributes** `DefaultMember`

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of items. |
| <Link id="m-internal" /><code>{"List<T> Internal { get; }"}</code> | The underlying `List<T>`. Changing it directly raises no events. |
| <Link id="m-item" /><code>{"T this[int index] { get; }"}</code> | The item at an index. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itemadded" /><code>{"event "}<Link to="/mod/game-api/types/alta-utilities/listitemchangedhandler-t">{"ListItemChangedHandler"}</Link>{"<T> ItemAdded"}</code> | Raised after an item is added. |
| <Link id="m-itemremoved" /><code>{"event "}<Link to="/mod/game-api/types/alta-utilities/listitemchangedhandler-t">{"ListItemChangedHandler"}</Link>{"<T> ItemRemoved"}</code> | Raised after an item is removed. `ListenedList` raises it even if the item was not there. |
| <Link id="m-targetchanged" /><code>{"event "}<Link to="/mod/game-api/types/alta-utilities/targetchangedhandler-t">{"TargetChangedHandler"}</Link>{"<T> TargetChanged"}</code> | Raised by a `ForwardedList` when it switches to another list. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code>{"bool Contains(T item)"}</code> | True if the item is in the list. |

## Used in

Members of other types that take, return or hold a `IListenedList&lt;T>`:

[`RecipePlacer.ValidateDefinition`](/mod/game-api/types/alta-crafting/recipeplacer#m-validatedefinition), [`TimberBlock.ChiselledPieces`](/mod/game-api/types/alta-crafting/timberblock#m-chiselledpieces-2), [`ForwardedList<T>.Add`](/mod/game-api/types/alta-utilities/forwardedlist-t#m-add), [`ForwardedList<T>.ParentTargetChanged`](/mod/game-api/types/alta-utilities/forwardedlist-t#m-parenttargetchanged), [`ForwardedList<T>.Remove`](/mod/game-api/types/alta-utilities/forwardedlist-t#m-remove), [`ForwardedList<T>.SetTarget`](/mod/game-api/types/alta-utilities/forwardedlist-t#m-settarget), [`ForwardedList<T>.target`](/mod/game-api/types/alta-utilities/forwardedlist-t#m-target), [`ForwardedList<T>.Target`](/mod/game-api/types/alta-utilities/forwardedlist-t#m-target-2), [`ListItemChangedHandler<T>.BeginInvoke`](/mod/game-api/types/alta-utilities/listitemchangedhandler-t#m-begininvoke), [`ListItemChangedHandler<T>.Invoke`](/mod/game-api/types/alta-utilities/listitemchangedhandler-t#m-invoke), [`TargetChangedHandler<T>.BeginInvoke`](/mod/game-api/types/alta-utilities/targetchangedhandler-t#m-begininvoke), [`TargetChangedHandler<T>.Invoke`](/mod/game-api/types/alta-utilities/targetchangedhandler-t#m-invoke).
