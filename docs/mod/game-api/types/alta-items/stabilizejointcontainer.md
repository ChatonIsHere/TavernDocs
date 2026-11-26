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
| <Link id="m-ctor" /><code>{"StabilizeJointContainer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-heldscaler" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/curvescaler">{"CurveScaler"}</Link>{" heldScaler"}</code> | Visual scaled on while the container is held. |
| <Link id="m-storage" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/curvescaler">{"CurveScaler"}</Link>{" storage"}</code> | Storage visual hidden while docked. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-docked" /><code>{"protected override void Docked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Shrinks and hides the storage visual, then runs the base dock handling. |
| <Link id="m-starthandlingtopositionchanges" /><code>{"protected override void StartHandlingToPositionChanges("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Scales up the held visual, then starts the base handling. |
| <Link id="m-stophandlingtopositionchanges" /><code>{"protected override void StopHandlingToPositionChanges("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Scales down the held visual unless docked, then stops the base handling. |
| <Link id="m-undocked" /><code>{"protected override void Undocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Shows the storage visual again, then runs the base undock handling. |
