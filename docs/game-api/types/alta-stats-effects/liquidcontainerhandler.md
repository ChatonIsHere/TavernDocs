---
title: "LiquidContainerHandler"
description: "Handler for ILiquidContainer.TotalAmountShownChanged: gets the container."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidContainerHandler

A **delegate** in `Root.Township`, `Alta.Liquid`.

Handler for `ILiquidContainer.TotalAmountShownChanged`: gets the container.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LiquidContainerHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container)"}</code> |

## Used in

Members of other types that take, return or hold a `LiquidContainerHandler`:

[`ILiquidContainer.TotalAmountShownChanged`](/game-api/types/alta-stats-effects/iliquidcontainer#m-totalamountshownchanged), [`LiquidContainer.TotalAmountShownChanged`](/game-api/types/alta-stats-effects/liquidcontainer#m-totalamountshownchanged), [`StaticLiquidContainer.TotalAmountShownChanged`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-totalamountshownchanged).
