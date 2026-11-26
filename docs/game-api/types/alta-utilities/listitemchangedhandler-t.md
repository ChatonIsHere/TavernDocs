---
title: "ListItemChangedHandler<T>"
description: "Callback for an IListenedList<T> ItemAdded and ItemRemoved events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ListItemChangedHandler&lt;T&gt;

A **delegate** in `Root.Township`, `Alta.Utilities`.

Callback for an `IListenedList<T>` `ItemAdded` and `ItemRemoved` events. Gets the list and the item.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ListItemChangedHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> list, T item, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> list, T item)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `ListItemChangedHandler&lt;T>`:

[`ForwardedList<T>.ItemAdded`](/game-api/types/alta-utilities/forwardedlist-t#m-itemadded), [`ForwardedList<T>.ItemRemoved`](/game-api/types/alta-utilities/forwardedlist-t#m-itemremoved), [`IListenedList<T>.ItemAdded`](/game-api/types/alta-utilities/ilistenedlist-t#m-itemadded), [`IListenedList<T>.ItemRemoved`](/game-api/types/alta-utilities/ilistenedlist-t#m-itemremoved), [`ListenedList<T>.ItemAdded`](/game-api/types/alta-utilities/listenedlist-t#m-itemadded), [`ListenedList<T>.ItemRemoved`](/game-api/types/alta-utilities/listenedlist-t#m-itemremoved).
