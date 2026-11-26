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
| <Link id="m-ctor" /><code>{"PickupLiquidContainerEnabler()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-container" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidcontainer">{"LiquidContainer"}</Link>{" container"}</code> | <span className="api-desc">The liquid container on this pickup.</span> |
| <Link id="m-dockingelibilitywhenfull" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/pickupliquidcontainerenabler-dockingelibility">{"PickupLiquidContainerEnabler.DockingElibility"}</Link>{" dockingElibilityWhenFull"}</code> | <span className="api-desc">Which docks a non-empty container may go in: none, physical only (default), or all.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The pickup that holds the container.</span> |
| <Link id="m-pourable" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/pourablecontainer">{"PourableContainer"}</Link>{" pourable"}</code> | <span className="api-desc">Optional pourable turned off while docked out of sight.</span> |
| <Link id="m-surfacevisual" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/liquidsurfacevisual">{"LiquidSurfaceVisual"}</Link>{" surfaceVisual"}</code> | <span className="api-desc">Optional liquid surface visual turned off while docked out of sight.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the pickup's dock and undock events, its dock filter, and the container's add filter.</span> |
| <Link id="m-filterliquidadding" /><code>{"private void FilterLiquidAdding("}<Link to="/mod/game-api/types/alta-stats-effects/liquiddata">{"LiquidData"}</Link>{" liquidData, ref bool result)"}</code> | <span className="api-desc">Blocks adding liquid to a docked container unless `dockingElibilityWhenFull` allows that dock.</span> |
| <Link id="m-filterliquiddocking" /><code>{"private void FilterLiquidDocking("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, ref bool result)"}</code> | <span className="api-desc">Blocks docking a container with liquid in it unless `dockingElibilityWhenFull` allows that dock.</span> |
| <Link id="m-handledockedliquidcontainer" /><code>{"private void HandleDockedLiquidContainer("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">On dock or undock, turns the container, pourable and surface visual on only if it holds liquid and is loose or in a physical dock.</span> |
| <Link id="m-shouldliquidbeenabled" /><code>{"private bool ShouldLiquidBeEnabled()"}</code> | <span className="api-desc">True when the pickup is in a dock whose settings count it as physical.</span> |

</details>
