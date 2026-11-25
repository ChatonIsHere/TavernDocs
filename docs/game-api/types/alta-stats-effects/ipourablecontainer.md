---
title: "IPourableContainer"
description: "interface IPourableContainer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPourableContainer

An **interface** in `Root.Township`, `Alta.Liquid`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Derived types** [`PourableContainer`](/game-api/types/alta-stats-effects/pourablecontainer)
- **Documented in** [Liquids](/game-api/game-systems/liquids)

## Properties

| Member |
| --- |
| <Link id="m-internalcontainer" /><code><Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" InternalContainer { get; }"}</code> |
| <Link id="m-isactive" /><code>{"bool IsActive { get; set; }"}</code> |
| <Link id="m-issubmergedinothercontainer" /><code>{"bool IsSubmergedInOtherContainer { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-registerpouringparticlehit" /><code>{"void RegisterPouringParticleHit("}<Link to="/game-api/types/alta-stats-effects/iliquidcontainer">{"ILiquidContainer"}</Link>{" container)"}</code> |

## Used in

Members of other types that take, return or hold a `IPourableContainer`:

[`LiquidContainerTrigger.handledPourableLiquidContainers`](/game-api/types/alta-stats-effects/liquidcontainertrigger#m-handledpourableliquidcontainers), [`LiquidPouringParticlesMarker.Pourable`](/game-api/types/alta-stats-effects/liquidpouringparticlesmarker#m-pourable), [`PouringParticles.PourableContainer`](/game-api/types/alta-stats-effects/pouringparticles#m-pourablecontainer), [`PouringParticles.SetupForPourableContainer`](/game-api/types/alta-stats-effects/pouringparticles#m-setupforpourablecontainer), [`LiquidGradualDrinker.pourableContainerDrinkingFrom`](/game-api/types/global-i-l/liquidgradualdrinker#m-pourablecontainerdrinkingfrom).
