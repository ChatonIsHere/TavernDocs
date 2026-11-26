---
title: "PickupEventStreamLogger"
description: "Server: reports pickup, drop, dock and undock actions to the console InventoryChanged event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupEventStreamLogger

A **static class** in `Root.Township`, `Alta.Inventory.Pickups.Scripts`.

Server: reports pickup, drop, dock and undock actions to the console `InventoryChanged` event. Skipped in local test scenes.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-trylogdockedevent" /><code>{"static void TryLogDockedEvent("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int quantity)"}</code> | Reports an item docked, as player or world inventory depending on the dock's owner. |
| <Link id="m-trylogdropevent" /><code>{"static void TryLogDropEvent("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int quantity)"}</code> | Reports an item dropped into the world. |
| <Link id="m-trylogpickupevent" /><code>{"static void TryLogPickupEvent("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int quantity)"}</code> | Reports an item picked up from the world. |
| <Link id="m-trylogundockevent" /><code>{"static void TryLogUndockEvent("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int quantity)"}</code> | Reports an item undocked, as player or world inventory depending on the dock's owner. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-caninvokelog" /><code>{"private static bool CanInvokeLog("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int quantity)"}</code> | True only on a real server, for a network initialized pickup and a non-zero quantity. |
| <Link id="m-getitemhash" /><code>{"private static uint? GetItemHash(bool isPouch, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" pouchItem, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" pickupItem)"}</code> | Hash of the item, or the pouch's item for a pouch. |
| <Link id="m-getitemname" /><code>{"private static string GetItemName(bool isPouch, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" pouchItem, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" pickupItem)"}</code> | Name of the item, or the pouch's item for a pouch. |
| <Link id="m-getphysicalmaterial" /><code>{"private static string GetPhysicalMaterial(bool isPouch, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | The pickup's physical material as a string; empty for pouches. |
| <Link id="m-getsavestring" /><code>{"private static string GetSaveString("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | The entity's save as a string. |
| <Link id="m-getuserinfofromdock" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" GetUserInfoFromDock("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | The user info of the player who owns a dock, or null. |
| <Link id="m-getuserinfofrominteractor" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" GetUserInfoFromInteractor("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | The player user info behind an interactor, or null. |
| <Link id="m-loginventorychangewithconsoleevents" /><code>{"private static void LogInventoryChangeWithConsoleEvents("}<Link to="/mod/game-api/types/alta-items/pickupactiondata">{"PickupActionData"}</Link>{" pickupAction)"}</code> | Fills an `InventoryChangeData` (user, item, material, quantity, save string) and fires the console event. Only when the interactor is a player. |

</details>
