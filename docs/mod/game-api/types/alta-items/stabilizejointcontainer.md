---
title: "StabilizeJointContainer"
description: "StabilizePickupJoint for jointed containers (bags): also scales a held visual and hides the storage visual while docked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StabilizeJointContainer

A **class** in `Root.Township`, `Alta.Inventory`.

`StabilizePickupJoint` for jointed containers (bags): also scales a held visual and hides the storage visual while docked.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`StabilizePickupJoint`](/mod/game-api/types/alta-items/stabilizepickupjoint)
- **Derived types** [`StabilizeLantern`](/mod/game-api/types/alta-items/stabilizelantern)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StabilizeJointContainer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-heldscaler" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/curvescaler">{"CurveScaler"}</Link>{" heldScaler"}</code> | <span className="api-desc">Visual scaled on while the container is held.</span> |
| <Link id="m-storage" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/curvescaler">{"CurveScaler"}</Link>{" storage"}</code> | <span className="api-desc">Storage visual hidden while docked.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-docked" /><code>{"protected override void Docked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Shrinks and hides the storage visual, then runs the base dock handling.</span> |
| <Link id="m-starthandlingtopositionchanges" /><code>{"protected override void StartHandlingToPositionChanges("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Scales up the held visual, then starts the base handling.</span> |
| <Link id="m-stophandlingtopositionchanges" /><code>{"protected override void StopHandlingToPositionChanges("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Scales down the held visual unless docked, then stops the base handling.</span> |
| <Link id="m-undocked" /><code>{"protected override void Undocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Shows the storage visual again, then runs the base undock handling.</span> |
