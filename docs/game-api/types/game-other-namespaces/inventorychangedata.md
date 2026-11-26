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

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Documented in** [Console events](/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InventoryChangeData()"}</code> | Creates an `InventoryChangeData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-changetype" /><code><Link to="/game-api/types/game-other-namespaces/inventorychangetype">{"InventoryChangeType"}</Link>{" ChangeType"}</code> | What happened to the item, such as a pickup or drop (`InventoryChangeType`). |
| <Link id="m-destinationuser" /><code><Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" DestinationUser"}</code> | The player who received the item, when it went to another player; otherwise null. |
| <Link id="m-inventorytype" /><code><Link to="/game-api/types/game-other-namespaces/inventorytype">{"InventoryType"}</Link>{" "}<Link to="/game-api/types/game-other-namespaces/inventorytype">{"InventoryType"}</Link></code> | Where the item went or came from, such as the world or a player's inventory. |
| <Link id="m-itemhash" /><code>{"uint? ItemHash"}</code> | Prefab hash of the item, or of the pouch's contents for a pouch; null if unknown. |
| <Link id="m-itemname" /><code>{"string ItemName"}</code> | Display name of the item, or of the pouch's contents for a pouch. |
| <Link id="m-material" /><code>{"string Material"}</code> | Name of the item's physical material, if it has one. |
| <Link id="m-quantity" /><code>{"int Quantity"}</code> | How many of the item changed hands. |
| <Link id="m-savestring" /><code>{"string SaveString"}</code> | The item entity's full save, as a string, or empty if there is no entity. |
| <Link id="m-user" /><code><Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" User"}</code> | The player who did the action. |

## Used in

Members of other types that take, return or hold a `InventoryChangeData`:

[`ConsoleEvents.InventoryChanged`](/game-api/types/alta-console/consoleevents#m-inventorychanged).
