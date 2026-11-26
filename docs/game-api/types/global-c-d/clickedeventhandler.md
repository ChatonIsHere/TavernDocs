---
title: "ClickedEventHandler"
description: "Callback for when a controller action starts, given the PlayerInput it came from."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClickedEventHandler

A **delegate** in `Root.Township`, no namespace.

Callback for when a controller action starts, given the `PlayerInput` it came from.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClickedEventHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `ClickedEventHandler`:

[`ControllerAction.Started`](/game-api/types/global-c-d/controlleraction#m-started), [`ControllerActionProxy.Started`](/game-api/types/global-c-d/controlleractionproxy#m-started), [`IControllerAction.Started`](/game-api/types/global-i-l/icontrolleraction#m-started), [`InputSource.Pressed`](/game-api/types/global-i-l/inputsource#m-pressed), [`InputSource.Unpressed`](/game-api/types/global-i-l/inputsource#m-unpressed).
