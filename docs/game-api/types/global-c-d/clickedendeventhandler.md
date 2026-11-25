---
title: "ClickedEndEventHandler"
description: "delegate ClickedEndEventHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClickedEndEventHandler

A **delegate** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClickedEndEventHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput, bool isDisabling, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput, bool isDisabling)"}</code> |

## Used in

Members of other types that take, return or hold a `ClickedEndEventHandler`:

[`ControllerAction.Ended`](/game-api/types/global-c-d/controlleraction#m-ended), [`ControllerActionProxy.Ended`](/game-api/types/global-c-d/controlleractionproxy#m-ended), [`IControllerAction.Ended`](/game-api/types/global-i-l/icontrolleraction#m-ended).
