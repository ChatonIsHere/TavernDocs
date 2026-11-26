---
title: "NetworkStarer.ChangedDirection"
description: "Handler for NetworkStarer.ChangedTurningDirection: the side the body is turning towards (1 or -1), or 0 when it stops."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkStarer.ChangedDirection

A **delegate** in `Root.Township`, no namespace.

Handler for `NetworkStarer.ChangedTurningDirection`: the side the body is turning towards (1 or -1), or 0 when it stops.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`NetworkStarer`](/game-api/types/global-m-o/networkstarer)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChangedDirection(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(int newDirection, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(int newDirection)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `ChangedDirection`:

[`NetworkStarer.ChangedTurningDirection`](/game-api/types/global-m-o/networkstarer#m-changedturningdirection).
