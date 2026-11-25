---
title: "ListItemChangedHandler<T>"
description: "delegate ListItemChangedHandler<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ListItemChangedHandler&lt;T&gt;

A **delegate** in `Root.Township`, `Alta.Utilities`.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ListItemChangedHandler(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> list, T item, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> list, T item)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ListItemChangedHandler&lt;T>`:

[`ForwardedList<T>.ItemAdded`](/game-api/types/alta-utilities/forwardedlist-t#m-itemadded), [`ForwardedList<T>.ItemRemoved`](/game-api/types/alta-utilities/forwardedlist-t#m-itemremoved), [`IListenedList<T>.ItemAdded`](/game-api/types/alta-utilities/ilistenedlist-t#m-itemadded), [`IListenedList<T>.ItemRemoved`](/game-api/types/alta-utilities/ilistenedlist-t#m-itemremoved), [`ListenedList<T>.ItemAdded`](/game-api/types/alta-utilities/listenedlist-t#m-itemadded), [`ListenedList<T>.ItemRemoved`](/game-api/types/alta-utilities/listenedlist-t#m-itemremoved).
