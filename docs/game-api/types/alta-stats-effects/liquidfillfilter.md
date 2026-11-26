---
title: "LiquidFillFilter"
description: "Handler for ILiquidContainer.AddFilter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidFillFilter

A **delegate** in `Root.Township`, `Alta.Liquid`.

Handler for `ILiquidContainer.AddFilter`. `CanAddTo` starts with true and any handler can set the `ref bool` to false to refuse the liquid.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LiquidFillFilter(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquidData, ref bool result, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref bool result, IAsyncResult __result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquidData, ref bool result)"}</code> |

## Used in

Members of other types that take, return or hold a `LiquidFillFilter`:

[`ILiquidContainer.AddFilter`](/game-api/types/alta-stats-effects/iliquidcontainer#m-addfilter), [`LiquidContainer.AddFilter`](/game-api/types/alta-stats-effects/liquidcontainer#m-addfilter), [`StaticLiquidContainer.AddFilter`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-addfilter).
