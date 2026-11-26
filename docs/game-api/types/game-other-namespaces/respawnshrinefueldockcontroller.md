---
title: "RespawnShrineFuelDockController"
description: "Server: turns fuel items docked into a powered shrine's pickup dock into shrine fuel, and pushes out anything over the cap."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnShrineFuelDockController

A **class** in `Root.Township`, `ATT.Respawn`.

Server: turns fuel items docked into a powered shrine's pickup dock into shrine fuel, and pushes out anything over the cap.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnShrineFuelDockController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pickupdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" pickupDock"}</code> | Dock players put fuel into. |
| <Link id="m-poweredrespawnshrine" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/poweredrespawnshrine">{"PoweredRespawnShrine"}</Link>{" poweredRespawnShrine"}</code> | The shrine that gets the fuel. |
| <Link id="m-refundlocation" /><code>{"private Transform refundLocation"}</code> | Where extra fuel items are placed. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-systemsettings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/irespawnsystemsettings">{"IRespawnSystemSettings"}</Link>{" SystemSettings { get; }"}</code> | The global `RespawnSystemSettings`. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addfueltopickupdock" /><code>{"private void AddFuelToPickupDock(int fuelQuantityToAdd, Guid shrineId)"}</code> | Spawns the shrine's fuel resource and docks a quantity of it. Not called in this build. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the dock's quantity changes. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the dock's quantity changes. |
| <Link id="m-onquantitychanged" /><code>{"private void OnQuantityChanged()"}</code> | Server: undocks the extra if the shrine would overfill, otherwise adds the docked amount as fuel and destroys the items. |
| <Link id="m-refundextraitems" /><code>{"private bool RefundExtraItems("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int quantityToRefund)"}</code> | Undocks the given quantity and moves it to the refund point. Returns false if there was nothing to refund. |

</details>
