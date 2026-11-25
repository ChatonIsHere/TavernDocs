---
title: "ClickedEventHandler"
description: "delegate ClickedEventHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClickedEventHandler

A **delegate** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClickedEventHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> |

## Used in

Members of other types that take, return or hold a `ClickedEventHandler`:

[`ControllerAction.Started`](/game-api/types/global-c-d/controlleraction#m-started), [`ControllerActionProxy.Started`](/game-api/types/global-c-d/controlleractionproxy#m-started), [`IControllerAction.Started`](/game-api/types/global-i-l/icontrolleraction#m-started), [`InputSource.Pressed`](/game-api/types/global-i-l/inputsource#m-pressed), [`InputSource.Unpressed`](/game-api/types/global-i-l/inputsource#m-unpressed).
