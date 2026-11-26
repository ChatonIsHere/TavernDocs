---
title: "LiquidDataEventHandler"
description: "Handler for an event that passes LiquidData."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidDataEventHandler

A **delegate** in `Root.Township`, `Alta.Liquid`.

Handler for an event that passes `LiquidData`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidDataEventHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" data, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" data)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `LiquidDataEventHandler`:

[`LiquidSurfaceVisual.LiquidChanged`](/game-api/types/alta-stats-effects/liquidsurfacevisual#m-liquidchanged).
