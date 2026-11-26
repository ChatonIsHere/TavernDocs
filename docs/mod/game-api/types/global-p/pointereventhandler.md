---
title: "PointerEventHandler"
description: "Handler for Pointer.TargetChanged, given the pointer, the collider it points at and whether that target is valid."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PointerEventHandler

A **delegate** in `Root.Township`, the global namespace.

Handler for `Pointer.TargetChanged`, given the pointer, the collider it points at and whether that target is valid.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PointerEventHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-p/pointer">{"Pointer"}</Link>{" pointer, Collider collider, bool isValid, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/global-p/pointer">{"Pointer"}</Link>{" pointer, Collider collider, bool isValid)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `PointerEventHandler`:

[`Pointer.TargetChanged`](/mod/game-api/types/global-p/pointer#m-targetchanged).
