---
title: "ILiquidContainerInternal"
description: "The internal side of a liquid container, used by the pouring code to change its contents directly."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILiquidContainerInternal

An **interface** in `Root.Township`, `Alta.Liquid`.

The internal side of a liquid container, used by the pouring code to change its contents directly.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Derived types** [`LiquidContainer`](/game-api/types/alta-stats-effects/liquidcontainer), [`StaticLiquidContainer`](/game-api/types/alta-stats-effects/staticliquidcontainer)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-outtransition" /><code><Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" OutTransition { get; }"}</code> | The pour currently leaving this container, if any. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addliquid" /><code>{"bool AddLiquid("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" containedLiquid, int amount, bool isForced = false)"}</code> | Adds an amount of a liquid. Returns whether it worked. |
| <Link id="m-addliquidintransition" /><code>{"void AddLiquidInTransition("}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" liquidTransition)"}</code> | Starts receiving liquid from a pour in progress. |
| <Link id="m-removeliquid" /><code>{"bool RemoveLiquid(int amount, bool isForced = false)"}</code> | Removes an amount. Returns whether it worked. |
| <Link id="m-removeliquidintransition" /><code>{"void RemoveLiquidInTransition("}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" liquidTransition)"}</code> | Stops receiving from a pour in progress. |
| <Link id="m-setcontent" /><code>{"void SetContent("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" stewLiquidContent)"}</code> | Replaces what liquid the container holds. |
