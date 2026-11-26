---
title: "PickupActionData"
description: "Plain data about one pickup inventory action: who did it, what pickup, how many and where it went."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupActionData

A **struct** in `Root.Township`, `Alta.Inventory.Pickups.Scripts`.

Plain data about one pickup inventory action: who did it, what pickup, how many and where it went.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-changetype" /><code><Link to="/mod/game-api/types/game-other-namespaces/inventorychangetype">{"InventoryChangeType"}</Link>{" ChangeType"}</code> | The kind of inventory change. |
| <Link id="m-destinationuser" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" DestinationUser"}</code> | The user the pickup went to, if any. |
| <Link id="m-interactor" /><code><Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link></code> | The interactor that did the action. |
| <Link id="m-inventorytype" /><code><Link to="/mod/game-api/types/game-other-namespaces/inventorytype">{"InventoryType"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/inventorytype">{"InventoryType"}</Link></code> | The inventory the change affected. |
| <Link id="m-pickup" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link></code> | The pickup involved. |
| <Link id="m-quantity" /><code>{"int Quantity"}</code> | How many items moved. |

## Used in

Members of other types that take, return or hold a `PickupActionData`:

[`PickupEventStreamLogger.LogInventoryChangeWithConsoleEvents`](/mod/game-api/types/alta-items/pickupeventstreamlogger#m-loginventorychangewithconsoleevents).
