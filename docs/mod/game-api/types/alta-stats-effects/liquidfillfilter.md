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

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidFillFilter(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquidData, ref bool result, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref bool result, IAsyncResult __result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquidData, ref bool result)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `LiquidFillFilter`:

<div className="api-used-in">

[`ILiquidContainer.AddFilter`](/mod/game-api/types/alta-stats-effects/iliquidcontainer#m-addfilter), [`LiquidContainer.AddFilter`](/mod/game-api/types/alta-stats-effects/liquidcontainer#m-addfilter), [`StaticLiquidContainer.AddFilter`](/mod/game-api/types/alta-stats-effects/staticliquidcontainer#m-addfilter).

</div>
