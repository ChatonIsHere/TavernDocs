---
title: "LiquidTypeChangedHandler"
description: "Handler for ILiquidContainer.ContainedLiquidChanged: gets the old and new liquid content."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidTypeChangedHandler

A **delegate** in `Root.Township`, `Alta.Liquid`.

Handler for `ILiquidContainer.ContainedLiquidChanged`: gets the old and new liquid content.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidTypeChangedHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldType, "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newType, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldType, "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newType)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `LiquidTypeChangedHandler`:

<div className="api-used-in">

[`ILiquidContainer.ContainedLiquidChanged`](/mod/game-api/types/alta-stats-effects/iliquidcontainer#m-containedliquidchanged), [`LiquidContainer.ContainedLiquidChanged`](/mod/game-api/types/alta-stats-effects/liquidcontainer#m-containedliquidchanged), [`StaticLiquidContainer.ContainedLiquidChanged`](/mod/game-api/types/alta-stats-effects/staticliquidcontainer#m-containedliquidchanged).

</div>
