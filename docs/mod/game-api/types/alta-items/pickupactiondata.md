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
| <Link id="m-changetype" /><code><Link to="/mod/game-api/types/game-other-namespaces/inventorychangetype">{"InventoryChangeType"}</Link>{" ChangeType"}</code> | <span className="api-desc">The kind of inventory change.</span> |
| <Link id="m-destinationuser" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" DestinationUser"}</code> | <span className="api-desc">The user the pickup went to, if any.</span> |
| <Link id="m-interactor" /><code><Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link></code> | <span className="api-desc">The interactor that did the action.</span> |
| <Link id="m-inventorytype" /><code><Link to="/mod/game-api/types/game-other-namespaces/inventorytype">{"InventoryType"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/inventorytype">{"InventoryType"}</Link></code> | <span className="api-desc">The inventory the change affected.</span> |
| <Link id="m-pickup" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link></code> | <span className="api-desc">The pickup involved.</span> |
| <Link id="m-quantity" /><code>{"int Quantity"}</code> | <span className="api-desc">How many items moved.</span> |

## Used in

Members of other types that take, return or hold a `PickupActionData`:

<div className="api-used-in">

[`PickupEventStreamLogger.LogInventoryChangeWithConsoleEvents`](/mod/game-api/types/alta-items/pickupeventstreamlogger#m-loginventorychangewithconsoleevents).

</div>
