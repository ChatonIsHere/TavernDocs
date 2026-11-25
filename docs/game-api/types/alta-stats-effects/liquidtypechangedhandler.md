---
title: "LiquidTypeChangedHandler"
description: "delegate LiquidTypeChangedHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidTypeChangedHandler

A **delegate** in `Root.Township`, `Alta.Liquid`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LiquidTypeChangedHandler(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldType, "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newType, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" oldType, "}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" newType)"}</code> |  |

## Used in

Members of other types that take, return or hold a `LiquidTypeChangedHandler`:

[`ILiquidContainer.ContainedLiquidChanged`](/game-api/types/alta-stats-effects/iliquidcontainer#m-containedliquidchanged), [`LiquidContainer.ContainedLiquidChanged`](/game-api/types/alta-stats-effects/liquidcontainer#m-containedliquidchanged), [`StaticLiquidContainer.ContainedLiquidChanged`](/game-api/types/alta-stats-effects/staticliquidcontainer#m-containedliquidchanged).
