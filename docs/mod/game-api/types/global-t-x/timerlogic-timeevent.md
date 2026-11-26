---
title: "TimerLogic.TimeEvent"
description: "Callback with whether the timer is now active."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimerLogic.TimeEvent

A **protected delegate** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Callback with whether the timer is now active. Type of the protected `timerToggle` event on `TimerLogic`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TimerLogic`](/mod/game-api/types/global-t-x/timerlogic)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimeEvent(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(bool timerActive, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(bool timerActive)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `TimeEvent`:

[`TimerLogic.timerToggle`](/mod/game-api/types/global-t-x/timerlogic#m-timertoggle).
