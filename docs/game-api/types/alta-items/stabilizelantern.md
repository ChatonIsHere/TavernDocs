---
title: "StabilizeLantern"
description: "class StabilizeLantern in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StabilizeLantern

A **class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`StabilizeJointContainer`](/game-api/types/alta-items/stabilizejointcontainer)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StabilizeLantern()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-baseanchor" /><code>{"private Vector3 baseAnchor"}</code> |
| <Link id="m-baseconnectedanchor" /><code>{"private Vector3 baseConnectedAnchor"}</code> |
| <Link id="m-colliderstokeeponphysical" /><code>{"private Collider[] collidersToKeepOnPhysical"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-docked" /><code>{"protected override void Docked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-undocked" /><code>{"protected override void Undocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-dockdocked" /><code>{"private void DockDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-dockundocked" /><code>{"private void DockUndocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-setcollidersignore" /><code>{"private void SetCollidersIgnore("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickupToIgnore, bool isIgnoring)"}</code> |

</details>
