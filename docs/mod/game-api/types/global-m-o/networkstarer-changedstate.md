---
title: "NetworkStarer.ChangedState"
description: "Handler for NetworkStarer.ChangedTurning: true when the body starts turning to face the target, false when it stops."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkStarer.ChangedState

A **delegate** in `Root.Township`, the global namespace.

Handler for `NetworkStarer.ChangedTurning`: true when the body starts turning to face the target, false when it stops.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`NetworkStarer`](/mod/game-api/types/global-m-o/networkstarer)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChangedState(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(bool newState, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke(bool newState)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `ChangedState`:

<div className="api-used-in">

[`NetworkStarer.ChangedTurning`](/mod/game-api/types/global-m-o/networkstarer#m-changedturning).

</div>
