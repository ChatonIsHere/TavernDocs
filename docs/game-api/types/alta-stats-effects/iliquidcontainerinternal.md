---
title: "ILiquidContainerInternal"
description: "interface ILiquidContainerInternal in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILiquidContainerInternal

An **interface** in `Root.Township`, `Alta.Liquid`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Derived types** [`LiquidContainer`](/game-api/types/alta-stats-effects/liquidcontainer), [`StaticLiquidContainer`](/game-api/types/alta-stats-effects/staticliquidcontainer)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-outtransition" /><code><Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" OutTransition { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addliquid" /><code>{"bool AddLiquid("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" containedLiquid, int amount, bool isForced = false)"}</code> |  |
| <Link id="m-addliquidintransition" /><code>{"void AddLiquidInTransition("}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" liquidTransition)"}</code> |  |
| <Link id="m-removeliquid" /><code>{"bool RemoveLiquid(int amount, bool isForced = false)"}</code> |  |
| <Link id="m-removeliquidintransition" /><code>{"void RemoveLiquidInTransition("}<Link to="/game-api/types/alta-stats-effects/liquidtransition">{"LiquidTransition"}</Link>{" liquidTransition)"}</code> |  |
| <Link id="m-setcontent" /><code>{"void SetContent("}<Link to="/game-api/types/alta-stats-effects/liquidcontent">{"LiquidContent"}</Link>{" stewLiquidContent)"}</code> |  |
