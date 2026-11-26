---
title: "LiquidContainerAmountChangedHandler"
description: "Handler for ILiquidContainer.ContentLevelChanged: gets the container and its old and new content levels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidContainerAmountChangedHandler

A **delegate** in `Root.Township`, `Alta.Liquid`.

Handler for `ILiquidContainer.ContentLevelChanged`: gets the container and its old and new content levels.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidContainerAmountChangedHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `LiquidContainerAmountChangedHandler`:

[`ILiquidContainer.ContentLevelChanged`](/game-api/types/alta-stats-effects/iliquidcontainer#m-contentlevelchanged), [`LiquidContainer.ContentLevelChanged`](/game-api/types/alta-stats-effects/liquidcontainer#m-contentlevelchanged), [`StaticLiquidContainer.ContentLevelChanged`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-contentlevelchanged).
