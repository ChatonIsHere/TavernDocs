---
title: "Filter"
description: "Delegate for a veto check: handlers set isVaild to false to block something."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Filter

A **delegate** in `Root.Township`, no namespace.

Delegate for a veto check: handlers set `isVaild` to false to block something. Used by `PumpingMechanism.CanPump`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Filter(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(ref bool isVaild, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref bool isVaild, IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(ref bool isVaild)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `Filter`:

[`PumpingMechanism.CanPump`](/game-api/types/global-p/pumpingmechanism#m-canpump).
