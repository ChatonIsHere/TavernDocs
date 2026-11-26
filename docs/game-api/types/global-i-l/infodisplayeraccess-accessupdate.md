---
title: "InfoDisplayerAccess.AccessUpdate"
description: "Handler for InfoDisplayerAccess changes (EnabledUpdated, TextUpdated); gets the access asset that changed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InfoDisplayerAccess.AccessUpdate

A **delegate** in `Root.Township`, no namespace.

Handler for `InfoDisplayerAccess` changes (`EnabledUpdated`, `TextUpdated`); gets the access asset that changed.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InfoDisplayerAccess`](/game-api/types/global-i-l/infodisplayeraccess)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AccessUpdate(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-i-l/infodisplayeraccess">{"InfoDisplayerAccess"}</Link>{" access, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-i-l/infodisplayeraccess">{"InfoDisplayerAccess"}</Link>{" access)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `AccessUpdate`:

[`InfoDisplayerAccess.EnabledUpdated`](/game-api/types/global-i-l/infodisplayeraccess#m-enabledupdated), [`InfoDisplayerAccess.TextUpdated`](/game-api/types/global-i-l/infodisplayeraccess#m-textupdated).
