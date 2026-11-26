---
title: "InventoryChangeType"
description: "Kind of inventory change in the pickup event stream log: pickup, drop, dock or undock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InventoryChangeType

An **enum** in `Root.Township`, `ATT.PlayerStates`.

Kind of inventory change in the pickup event stream log: pickup, drop, dock or undock.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Values

| Member |
| --- |
| <Link id="m-dock" /><code>{"Dock = 2"}</code> |
| <Link id="m-drop" /><code>{"Drop = 1"}</code> |
| <Link id="m-pickup" /><code>{"Pickup = 0"}</code> |
| <Link id="m-undock" /><code>{"Undock = 3"}</code> |

## Used in

Members of other types that take, return or hold a `InventoryChangeType`:

<div className="api-used-in">

[`PickupActionData.ChangeType`](/mod/game-api/types/alta-items/pickupactiondata#m-changetype), [`InventoryChangeData.ChangeType`](/mod/game-api/types/game-other-namespaces/inventorychangedata#m-changetype).

</div>
