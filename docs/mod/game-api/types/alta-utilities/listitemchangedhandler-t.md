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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ListItemChangedHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> list, T item, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> list, T item)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `ListItemChangedHandler&lt;T>`:

<div className="api-used-in">

[`ForwardedList<T>.ItemAdded`](/mod/game-api/types/alta-utilities/forwardedlist-t#m-itemadded), [`ForwardedList<T>.ItemRemoved`](/mod/game-api/types/alta-utilities/forwardedlist-t#m-itemremoved), [`IListenedList<T>.ItemAdded`](/mod/game-api/types/alta-utilities/ilistenedlist-t#m-itemadded), [`IListenedList<T>.ItemRemoved`](/mod/game-api/types/alta-utilities/ilistenedlist-t#m-itemremoved), [`ListenedList<T>.ItemAdded`](/mod/game-api/types/alta-utilities/listenedlist-t#m-itemadded), [`ListenedList<T>.ItemRemoved`](/mod/game-api/types/alta-utilities/listenedlist-t#m-itemremoved).

</div>
