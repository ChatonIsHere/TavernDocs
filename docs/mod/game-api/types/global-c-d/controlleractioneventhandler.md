---
title: "ControllerActionEventHandler"
description: "Handler for a ControllerActionProxy's Enabled and Disabled events, given the proxy."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerActionEventHandler

A **delegate** in `Root.Township`, the global namespace.

Handler for a `ControllerActionProxy`'s `Enabled` and `Disabled` events, given the proxy.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerActionEventHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-c-d/controlleractionproxy">{"ControllerActionProxy"}</Link>{" controllerAction, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/global-c-d/controlleractionproxy">{"ControllerActionProxy"}</Link>{" controllerAction)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `ControllerActionEventHandler`:

<div className="api-used-in">

[`ControllerActionProxy.Disabled`](/mod/game-api/types/global-c-d/controlleractionproxy#m-disabled), [`ControllerActionProxy.Enabled`](/mod/game-api/types/global-c-d/controlleractionproxy#m-enabled).

</div>
