---
title: "PointerEventHandler"
description: "Handler for Pointer.TargetChanged, given the pointer, the collider it points at and whether that target is valid."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PointerEventHandler

A **delegate** in `Root.Township`, no namespace.

Handler for `Pointer.TargetChanged`, given the pointer, the collider it points at and whether that target is valid.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PointerEventHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-p/pointer">{"Pointer"}</Link>{" pointer, Collider collider, bool isValid, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-p/pointer">{"Pointer"}</Link>{" pointer, Collider collider, bool isValid)"}</code> |

## Used in

Members of other types that take, return or hold a `PointerEventHandler`:

[`Pointer.TargetChanged`](/game-api/types/global-p/pointer#m-targetchanged).
