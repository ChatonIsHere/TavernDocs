---
title: "PickupLiquidContainerEnabler"
description: "Controls whether a liquid container item can dock while full and keeps its liquid, pouring and surface visual off while it is in a non-physical dock (such..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupLiquidContainerEnabler

A **class** in `Root.Township`, `Alta.Liquid`.

Controls whether a liquid container item can dock while full and keeps its liquid, pouring and surface visual off while it is in a non-physical dock (such as an inventory slot).

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`DockingElibility`](/mod/game-api/types/alta-stats-effects/pickupliquidcontainerenabler-dockingelibility)
- **Documented in** [Liquids](/mod/game-api/game-systems/liquids)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupLiquidContainerEnabler()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontainer">{"LiquidContainer"}</Link>{" container"}</code> | The liquid container on this pickup. |
| <Link id="m-dockingelibilitywhenfull" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/pickupliquidcontainerenabler-dockingelibility">{"PickupLiquidContainerEnabler.DockingElibility"}</Link>{" dockingElibilityWhenFull"}</code> | Which docks a non-empty container may go in: none, physical only (default), or all. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The pickup that holds the container. |
| <Link id="m-pourable" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/pourablecontainer">{"PourableContainer"}</Link>{" pourable"}</code> | Optional pourable turned off while docked out of sight. |
| <Link id="m-surfacevisual" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidsurfacevisual">{"LiquidSurfaceVisual"}</Link>{" surfaceVisual"}</code> | Optional liquid surface visual turned off while docked out of sight. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the pickup's dock and undock events, its dock filter, and the container's add filter. |
| <Link id="m-filterliquidadding" /><code>{"private void FilterLiquidAdding("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquidData, ref bool result)"}</code> | Blocks adding liquid to a docked container unless `dockingElibilityWhenFull` allows that dock. |
| <Link id="m-filterliquiddocking" /><code>{"private void FilterLiquidDocking("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> | Blocks docking a container with liquid in it unless `dockingElibilityWhenFull` allows that dock. |
| <Link id="m-handledockedliquidcontainer" /><code>{"private void HandleDockedLiquidContainer("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | On dock or undock, turns the container, pourable and surface visual on only if it holds liquid and is loose or in a physical dock. |
| <Link id="m-shouldliquidbeenabled" /><code>{"private bool ShouldLiquidBeEnabled()"}</code> | True when the pickup is in a dock whose settings count it as physical. |

</details>
