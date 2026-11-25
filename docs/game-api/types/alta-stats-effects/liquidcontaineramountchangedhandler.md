---
title: "LiquidContainerAmountChangedHandler"
description: "delegate LiquidContainerAmountChangedHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidContainerAmountChangedHandler

A **delegate** in `Root.Township`, `Alta.Liquid`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidContainerAmountChangedHandler(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container, int oldLevel, int newLevel)"}</code> |  |

## Used in

Members of other types that take, return or hold a `LiquidContainerAmountChangedHandler`:

[`ILiquidContainer.ContentLevelChanged`](/game-api/types/alta-stats-effects/iliquidcontainer#m-contentlevelchanged), [`LiquidContainer.ContentLevelChanged`](/game-api/types/alta-stats-effects/liquidcontainer#m-contentlevelchanged), [`StaticLiquidContainer.ContentLevelChanged`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-contentlevelchanged).
