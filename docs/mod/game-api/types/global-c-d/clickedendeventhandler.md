---
title: "ClickedEndEventHandler"
description: "Callback for a controller action ending, with the player input and whether it ended because the action was disabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClickedEndEventHandler

A **delegate** in `Root.Township`, the global namespace.

Callback for a controller action ending, with the player input and whether it ended because the action was disabled.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClickedEndEventHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput, bool isDisabling, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput, bool isDisabling)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `ClickedEndEventHandler`:

[`ControllerAction.Ended`](/mod/game-api/types/global-c-d/controlleraction#m-ended), [`ControllerActionProxy.Ended`](/mod/game-api/types/global-c-d/controlleractionproxy#m-ended), [`IControllerAction.Ended`](/mod/game-api/types/global-i-l/icontrolleraction#m-ended).
