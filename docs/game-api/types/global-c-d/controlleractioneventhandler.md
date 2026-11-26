---
title: "ControllerActionEventHandler"
description: "Handler for a ControllerActionProxy's Enabled and Disabled events, given the proxy."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerActionEventHandler

A **delegate** in `Root.Township`, no namespace.

Handler for a `ControllerActionProxy`'s `Enabled` and `Disabled` events, given the proxy.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerActionEventHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-c-d/controlleractionproxy">{"ControllerActionProxy"}</Link>{" controllerAction, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-c-d/controlleractionproxy">{"ControllerActionProxy"}</Link>{" controllerAction)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `ControllerActionEventHandler`:

[`ControllerActionProxy.Disabled`](/game-api/types/global-c-d/controlleractionproxy#m-disabled), [`ControllerActionProxy.Enabled`](/game-api/types/global-c-d/controlleractionproxy#m-enabled).
