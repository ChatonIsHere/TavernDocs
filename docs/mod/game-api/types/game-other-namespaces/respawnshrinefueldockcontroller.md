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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RespawnShrineFuelDockController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pickupdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" pickupDock"}</code> | <span className="api-desc">Dock players put fuel into.</span> |
| <Link id="m-poweredrespawnshrine" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/poweredrespawnshrine">{"PoweredRespawnShrine"}</Link>{" poweredRespawnShrine"}</code> | <span className="api-desc">The shrine that gets the fuel.</span> |
| <Link id="m-refundlocation" /><code>{"private Transform refundLocation"}</code> | <span className="api-desc">Where extra fuel items are placed.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-systemsettings" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemsettings">{"IRespawnSystemSettings"}</Link>{" SystemSettings { get; }"}</code> | <span className="api-desc">The global `RespawnSystemSettings`.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addfueltopickupdock" /><code>{"private void AddFuelToPickupDock(int fuelQuantityToAdd, Guid shrineId)"}</code> | <span className="api-desc">Spawns the shrine's fuel resource and docks a quantity of it. Not called in this build.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the dock's quantity changes.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the dock's quantity changes.</span> |
| <Link id="m-onquantitychanged" /><code>{"private void OnQuantityChanged()"}</code> | <span className="api-desc">Server: undocks the extra if the shrine would overfill, otherwise adds the docked amount as fuel and destroys the items.</span> |
| <Link id="m-refundextraitems" /><code>{"private bool RefundExtraItems("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int quantityToRefund)"}</code> | <span className="api-desc">Undocks the given quantity and moves it to the refund point. Returns false if there was nothing to refund.</span> |

</details>
