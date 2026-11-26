---
title: "TargetChangedHandler<T>"
description: "Callback for when a ForwardedList<T> switches the list it forwards to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TargetChangedHandler&lt;T&gt;

A **delegate** in `Root.Township`, `Alta.Utilities`.

Callback for when a `ForwardedList<T>` switches the list it forwards to. Gets the forwarded list plus the old and new target lists.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TargetChangedHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-utilities/forwardedlist-t">{"ForwardedList"}</Link>{"<T> list, "}<Link to="/mod/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> oldTarget, "}<Link to="/mod/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> newTarget, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-utilities/forwardedlist-t">{"ForwardedList"}</Link>{"<T> list, "}<Link to="/mod/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> oldTarget, "}<Link to="/mod/game-api/types/alta-utilities/ilistenedlist-t">{"IListenedList"}</Link>{"<T> newTarget)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `TargetChangedHandler&lt;T>`:

<div className="api-used-in">

[`ForwardedList<T>.TargetChanged`](/mod/game-api/types/alta-utilities/forwardedlist-t#m-targetchanged), [`IListenedList<T>.TargetChanged`](/mod/game-api/types/alta-utilities/ilistenedlist-t#m-targetchanged), [`ListenedList<T>.TargetChanged`](/mod/game-api/types/alta-utilities/listenedlist-t#m-targetchanged).

</div>
