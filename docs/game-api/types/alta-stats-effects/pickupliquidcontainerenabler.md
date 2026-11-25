---
title: "PickupLiquidContainerEnabler"
description: "Links a pickup to its container, pouring and surface, and filters what can be added."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupLiquidContainerEnabler

A **class** in `Root.Township`, `Alta.Liquid`.

Links a pickup to its container, pouring and surface, and filters what can be added.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`DockingElibility`](/game-api/types/alta-stats-effects/pickupliquidcontainerenabler-dockingelibility)
- **Documented in** [Liquids](/game-api/game-systems/liquids)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupLiquidContainerEnabler()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidcontainer">{"LiquidContainer"}</Link>{" container"}</code> |  |
| <Link id="m-dockingelibilitywhenfull" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/pickupliquidcontainerenabler-dockingelibility">{"PickupLiquidContainerEnabler.DockingElibility"}</Link>{" dockingElibilityWhenFull"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-pourable" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/pourablecontainer">{"PourableContainer"}</Link>{" pourable"}</code> |  |
| <Link id="m-surfacevisual" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/liquidsurfacevisual">{"LiquidSurfaceVisual"}</Link>{" surfaceVisual"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-filterliquidadding" /><code>{"private void FilterLiquidAdding("}<Link to="/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquidData, ref bool result)"}</code> |  |
| <Link id="m-filterliquiddocking" /><code>{"private void FilterLiquidDocking("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> |  |
| <Link id="m-handledockedliquidcontainer" /><code>{"private void HandleDockedLiquidContainer("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-shouldliquidbeenabled" /><code>{"private bool ShouldLiquidBeEnabled()"}</code> |  |
