---
title: "RespawnShrineFuelDockController"
description: "class RespawnShrineFuelDockController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnShrineFuelDockController

A **class** in `Root.Township`, `ATT.Respawn`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RespawnShrineFuelDockController()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-pickupdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" pickupDock"}</code> |
| <Link id="m-poweredrespawnshrine" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/poweredrespawnshrine">{"PoweredRespawnShrine"}</Link>{" poweredRespawnShrine"}</code> |
| <Link id="m-refundlocation" /><code>{"private Transform refundLocation"}</code> |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-systemsettings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/irespawnsystemsettings">{"IRespawnSystemSettings"}</Link>{" SystemSettings { get; }"}</code> |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-addfueltopickupdock" /><code>{"private void AddFuelToPickupDock(int fuelQuantityToAdd, Guid shrineId)"}</code> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-onquantitychanged" /><code>{"private void OnQuantityChanged()"}</code> |
| <Link id="m-refundextraitems" /><code>{"private bool RefundExtraItems("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int quantityToRefund)"}</code> |

</details>
