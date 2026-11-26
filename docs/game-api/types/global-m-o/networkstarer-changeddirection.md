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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ChangedDirection(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(int newDirection, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(int newDirection)"}</code> |

## Used in

Members of other types that take, return or hold a `ChangedDirection`:

[`NetworkStarer.ChangedTurningDirection`](/game-api/types/global-m-o/networkstarer#m-changedturningdirection).
