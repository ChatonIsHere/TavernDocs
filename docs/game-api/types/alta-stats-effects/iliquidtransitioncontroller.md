---
title: "ILiquidTransitionController"
description: "Marker for whatever is driving a liquid transition (pouring or gradual drinking)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILiquidTransitionController

An **interface** in `Root.Township`, `Alta.Liquid`.

Marker for whatever is driving a liquid transition (pouring or gradual drinking). `LiquidTransition` uses it to track who controls it. `PourableContainer` and `LiquidGradualDrinker` implement it.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Derived types** [`PourableContainer`](/game-api/types/alta-stats-effects/pourablecontainer), [`LiquidGradualDrinker`](/game-api/types/global-i-l/liquidgradualdrinker)

## Used in

Members of other types that take, return or hold a `ILiquidTransitionController`:

[`LiquidTransition.currentController`](/game-api/types/alta-stats-effects/liquidtransition#m-currentcontroller), [`LiquidTransition.ProgressTransition`](/game-api/types/alta-stats-effects/liquidtransition#m-progresstransition), [`LiquidTransition.ResetAndRemoveReceivingContainer`](/game-api/types/alta-stats-effects/liquidtransition#m-resetandremovereceivingcontainer), [`LiquidTransition.SetTarget`](/game-api/types/alta-stats-effects/liquidtransition#m-settarget).
