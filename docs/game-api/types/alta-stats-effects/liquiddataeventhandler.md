---
title: "LiquidDataEventHandler"
description: "delegate LiquidDataEventHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidDataEventHandler

A **delegate** in `Root.Township`, `Alta.Liquid`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LiquidDataEventHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" data, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" data)"}</code> |

## Used in

Members of other types that take, return or hold a `LiquidDataEventHandler`:

[`LiquidSurfaceVisual.LiquidChanged`](/game-api/types/alta-stats-effects/liquidsurfacevisual#m-liquidchanged).
