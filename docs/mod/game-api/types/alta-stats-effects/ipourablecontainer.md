---
title: "IPourableContainer"
description: "A liquid container that can pour, implemented by PourableContainer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPourableContainer

An **interface** in `Root.Township`, `Alta.Liquid`.

A liquid container that can pour, implemented by `PourableContainer`. Pouring particles report hits through it so liquid moves into the container they land in.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Derived types** [`PourableContainer`](/mod/game-api/types/alta-stats-effects/pourablecontainer)
- **Documented in** [Liquids](/mod/game-api/game-systems/liquids)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-internalcontainer" /><code><Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" InternalContainer { get; }"}</code> | The liquid container this pours from. |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> | Whether pouring is on; when false, pouring hits are not detected. |
| <Link id="m-issubmergedinothercontainer" /><code>{"bool IsSubmergedInOtherContainer { get; set; }"}</code> | Set by `LiquidContainerTrigger` while dipped in another container's liquid; stops pouring. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-registerpouringparticlehit" /><code>{"void RegisterPouringParticleHit("}<Link to="/mod/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container)"}</code> | Called when a pouring particle lands in another container, counting it as a pour target. |

## Used in

Members of other types that take, return or hold a `IPourableContainer`:

[`LiquidContainerTrigger.handledPourableLiquidContainers`](/mod/game-api/types/alta-stats-effects/liquidcontainertrigger#m-handledpourableliquidcontainers), [`LiquidPouringParticlesMarker.Pourable`](/mod/game-api/types/alta-stats-effects/liquidpouringparticlesmarker#m-pourable), [`PouringParticles.PourableContainer`](/mod/game-api/types/alta-stats-effects/pouringparticles#m-pourablecontainer), [`PouringParticles.SetupForPourableContainer`](/mod/game-api/types/alta-stats-effects/pouringparticles#m-setupforpourablecontainer), [`LiquidGradualDrinker.pourableContainerDrinkingFrom`](/mod/game-api/types/global-i-l/liquidgradualdrinker#m-pourablecontainerdrinkingfrom).
