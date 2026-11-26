---
title: "NetworkStarer.ChangedDirection"
description: "Handler for NetworkStarer.ChangedTurningDirection: the side the body is turning towards (1 or -1), or 0 when it stops."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkStarer.ChangedDirection

A **delegate** in `Root.Township`, the global namespace.

Handler for `NetworkStarer.ChangedTurningDirection`: the side the body is turning towards (1 or -1), or 0 when it stops.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`NetworkStarer`](/mod/game-api/types/global-m-o/networkstarer)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChangedDirection(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(int newDirection, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(int newDirection)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `ChangedDirection`:

<div className="api-used-in">

[`NetworkStarer.ChangedTurningDirection`](/mod/game-api/types/global-m-o/networkstarer#m-changedturningdirection).

</div>
