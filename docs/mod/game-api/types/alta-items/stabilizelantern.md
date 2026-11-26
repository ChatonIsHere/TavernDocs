---
title: "StabilizeLantern"
description: "StabilizeJointContainer for lanterns."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StabilizeLantern

A **class** in `Root.Township`, `Alta.Inventory`.

`StabilizeJointContainer` for lanterns. In a physical dock it joins the lantern to the dock's root rigidbody and passes grabs through to the root pickup.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`StabilizeJointContainer`](/mod/game-api/types/alta-items/stabilizejointcontainer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StabilizeLantern()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseanchor" /><code>{"private Vector3 baseAnchor"}</code> | Joint anchor saved before docking. |
| <Link id="m-baseconnectedanchor" /><code>{"private Vector3 baseConnectedAnchor"}</code> | Joint connected anchor saved before docking. |
| <Link id="m-colliderstokeeponphysical" /><code>{"private Collider[] collidersToKeepOnPhysical"}</code> | Colliders handed to the root pickup while in a physical dock. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-docked" /><code>{"protected override void Docked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | In a physical dock, connects the joint to the root rigidbody, moves the kept colliders to the root pickup and follows its docking. |
| <Link id="m-undocked" /><code>{"protected override void Undocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Undoes `Docked`: restores the joint anchors and colliders and unhooks the root pickup. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dockdocked" /><code>{"private void DockDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | When the root pickup is docked, adds it to this pickup's `ForwardTo`. |
| <Link id="m-dockundocked" /><code>{"private void DockUndocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | When the root pickup is undocked, removes it from `ForwardTo`. |
| <Link id="m-setcollidersignore" /><code>{"private void SetCollidersIgnore("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickupToIgnore, bool isIgnoring)"}</code> | Turns collision on or off between the kept colliders and another pickup's colliders. |

</details>
