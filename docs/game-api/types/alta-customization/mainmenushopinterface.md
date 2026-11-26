---
title: "MainMenuShopInterface"
description: "Main menu shop: shows shop items and lets the player take Talem coins out of and back into their account balance."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuShopInterface

A **class** in `Root.Township`, `Alta.Customization`.

Main menu shop: shows shop items and lets the player take Talem coins out of and back into their account balance. Uses the Alta shop API; client side.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`LoggedInTool`](/game-api/types/global-i-l/loggedintool)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MainMenuShopInterface()"}</code> |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-account" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/shopaccountinfo">{"ShopAccountInfo"}</Link>{" account"}</code> | Shop account info from the last login. |
| <Link id="m-accountbalance" /><code>{"private int accountBalance"}</code> | Local count of Talem still in the account (not withdrawn). |
| <Link id="m-accountbalancetext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" accountBalanceText"}</code> | Text showing the balance. |
| <Link id="m-customizationmanager" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" customizationManager"}</code> | Customization manager whose session is passed to shop items. |
| <Link id="m-depositdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" depositDock"}</code> | Dock that takes Talem back into the balance. |
| <Link id="m-inversethrottleinteraction" /><code>{"private bool inverseThrottleInteraction"}</code> | Flips the sign of throttle movement. Default true. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-presetsmanager" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresetsmanager">{"CosmeticPresetsManager"}</Link>{" presetsManager"}</code> | Presets manager told to recheck storage after purchases. |
| <Link id="m-shopitempositions" /><code>{"private Transform[] shopItemPositions"}</code> | Transforms where shop items are placed, one per item. |
| <Link id="m-shopitemprefab" /><code>{"private "}<Link to="/game-api/types/alta-customization/mainmenushopitem">{"MainMenuShopItem"}</Link>{" shopItemPrefab"}</code> | Prefab for each shop item. |
| <Link id="m-spawneditems" /><code>{"private List<"}<Link to="/game-api/types/alta-customization/mainmenushopitem">{"MainMenuShopItem"}</Link>{"> spawnedItems"}</code> | Shop items spawned so far. |
| <Link id="m-talemhash" /><code>{"private uint talemHash"}</code> | Serialized hash for the Talem item. Not read in this file. |
| <Link id="m-talemitem" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" talemItem"}</code> | Item asset for Talem coins. |
| <Link id="m-talempickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" talemPickup"}</code> | Talem prefab spawned into the withdraw dock. |
| <Link id="m-throttleinteractable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" throttleInteractable"}</code> | Throttle control for withdrawing. Not read in this file. |
| <Link id="m-withdrawdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" withdrawDock"}</code> | Dock that holds withdrawn Talem. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-movetofromwithdraw" /><code>{"void MoveToFromWithdraw(int movement)"}</code> | Moves an amount between the local balance and the withdraw dock's Talem stack, spawning or destroying the stack as needed. Local only, no API call. |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> | Clears stray Talem and old items, fetches the balance and spawns an item for each shop entry. |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | Does nothing. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the deposit dock's filter and docked events. |
| <Link id="m-destroydocked" /><code>{"private void DestroyDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | When a Talem stack is docked in the deposit dock, moves its amount back to the balance and destroys it. |
| <Link id="m-dockfilter" /><code>{"private void DockFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | Lets only Talem into the deposit dock. |
| <Link id="m-itempurchased" /><code>{"private void ItemPurchased(uint purchasable)"}</code> | Asks the presets manager to recheck storage use after a purchase. |
| <Link id="m-spawnitem" /><code>{"private "}<Link to="/game-api/types/alta-customization/mainmenushopitem">{"MainMenuShopItem"}</Link>{" SpawnItem()"}</code> | Instantiates a shop item and listens for its purchase. |

</details>
