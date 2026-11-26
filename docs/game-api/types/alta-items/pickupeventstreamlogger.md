---
title: "PickupEventStreamLogger"
description: "static class PickupEventStreamLogger in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupEventStreamLogger

A **static class** in `Root.Township`, `Alta.Inventory.Pickups.Scripts`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-trylogdockedevent" /><code>{"static void TryLogDockedEvent("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int quantity)"}</code> |
| <Link id="m-trylogdropevent" /><code>{"static void TryLogDropEvent("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int quantity)"}</code> |
| <Link id="m-trylogpickupevent" /><code>{"static void TryLogPickupEvent("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int quantity)"}</code> |
| <Link id="m-trylogundockevent" /><code>{"static void TryLogUndockEvent("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int quantity)"}</code> |

<details>
<summary>8 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-caninvokelog" /><code>{"private static bool CanInvokeLog("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, int quantity)"}</code> |
| <Link id="m-getitemhash" /><code>{"private static uint? GetItemHash(bool isPouch, "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" pouchItem, "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" pickupItem)"}</code> |
| <Link id="m-getitemname" /><code>{"private static string GetItemName(bool isPouch, "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" pouchItem, "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" pickupItem)"}</code> |
| <Link id="m-getphysicalmaterial" /><code>{"private static string GetPhysicalMaterial(bool isPouch, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |
| <Link id="m-getsavestring" /><code>{"private static string GetSaveString("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |
| <Link id="m-getuserinfofromdock" /><code>{"private static "}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" GetUserInfoFromDock("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-getuserinfofrominteractor" /><code>{"private static "}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" GetUserInfoFromInteractor("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-loginventorychangewithconsoleevents" /><code>{"private static void LogInventoryChangeWithConsoleEvents("}<Link to="/game-api/types/alta-items/pickupactiondata">{"PickupActionData"}</Link>{" pickupAction)"}</code> |

</details>
