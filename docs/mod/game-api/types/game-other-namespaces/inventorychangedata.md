---
title: "InventoryChangeData"
description: "Payload of the ConsoleEvents.InventoryChanged console event, raised on the server by PickupEventStreamLogger when a player picks up, drops, docks or hands..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InventoryChangeData

A **class** in `Root.Township`, `ATT.PlayerStates`.

Payload of the `ConsoleEvents.InventoryChanged` console event, raised on the server by `PickupEventStreamLogger` when a player picks up, drops, docks or hands over an item.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Documented in** [Console events](/mod/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InventoryChangeData()"}</code> | <span className="api-desc">Creates an `InventoryChangeData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-changetype" /><code><Link to="/mod/game-api/types/game-other-namespaces/inventorychangetype">{"InventoryChangeType"}</Link>{" ChangeType"}</code> | <span className="api-desc">What happened to the item, such as a pickup or drop (`InventoryChangeType`).</span> |
| <Link id="m-destinationuser" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" DestinationUser"}</code> | <span className="api-desc">The player who received the item, when it went to another player; otherwise null.</span> |
| <Link id="m-inventorytype" /><code><Link to="/mod/game-api/types/game-other-namespaces/inventorytype">{"InventoryType"}</Link>{" "}<Link to="/mod/game-api/types/game-other-namespaces/inventorytype">{"InventoryType"}</Link></code> | <span className="api-desc">Where the item went or came from, such as the world or a player's inventory.</span> |
| <Link id="m-itemhash" /><code>{"uint? ItemHash"}</code> | <span className="api-desc">Prefab hash of the item, or of the pouch's contents for a pouch; null if unknown.</span> |
| <Link id="m-itemname" /><code>{"string ItemName"}</code> | <span className="api-desc">Display name of the item, or of the pouch's contents for a pouch.</span> |
| <Link id="m-material" /><code>{"string Material"}</code> | <span className="api-desc">Name of the item's physical material, if it has one.</span> |
| <Link id="m-quantity" /><code>{"int Quantity"}</code> | <span className="api-desc">How many of the item changed hands.</span> |
| <Link id="m-savestring" /><code>{"string SaveString"}</code> | <span className="api-desc">The item entity's full save, as a string, or empty if there is no entity.</span> |
| <Link id="m-user" /><code><Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" User"}</code> | <span className="api-desc">The player who did the action.</span> |

## Used in

Members of other types that take, return or hold a `InventoryChangeData`:

<div className="api-used-in">

[`ConsoleEvents.InventoryChanged`](/mod/game-api/types/alta-console/consoleevents#m-inventorychanged).

</div>
