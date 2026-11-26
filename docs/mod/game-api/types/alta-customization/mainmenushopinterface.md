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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`LoggedInTool`](/mod/game-api/types/global-i-l/loggedintool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MainMenuShopInterface()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-account" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/shopaccountinfo">{"ShopAccountInfo"}</Link>{" account"}</code> | <span className="api-desc">Shop account info from the last login.</span> |
| <Link id="m-accountbalance" /><code>{"private int accountBalance"}</code> | <span className="api-desc">Local count of Talem still in the account (not withdrawn).</span> |
| <Link id="m-accountbalancetext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" accountBalanceText"}</code> | <span className="api-desc">Text showing the balance.</span> |
| <Link id="m-customizationmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" customizationManager"}</code> | <span className="api-desc">Customization manager whose session is passed to shop items.</span> |
| <Link id="m-depositdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" depositDock"}</code> | <span className="api-desc">Dock that takes Talem back into the balance.</span> |
| <Link id="m-inversethrottleinteraction" /><code>{"private bool inverseThrottleInteraction"}</code> | <span className="api-desc">Flips the sign of throttle movement. Default true.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-presetsmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticpresetsmanager">{"CosmeticPresetsManager"}</Link>{" presetsManager"}</code> | <span className="api-desc">Presets manager told to recheck storage after purchases.</span> |
| <Link id="m-shopitempositions" /><code>{"private Transform[] shopItemPositions"}</code> | <span className="api-desc">Transforms where shop items are placed, one per item.</span> |
| <Link id="m-shopitemprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/mainmenushopitem">{"MainMenuShopItem"}</Link>{" shopItemPrefab"}</code> | <span className="api-desc">Prefab for each shop item.</span> |
| <Link id="m-spawneditems" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-customization/mainmenushopitem">{"MainMenuShopItem"}</Link>{"> spawnedItems"}</code> | <span className="api-desc">Shop items spawned so far.</span> |
| <Link id="m-talemhash" /><code>{"private uint talemHash"}</code> | <span className="api-desc">Serialized hash for the Talem item. Not read in this file.</span> |
| <Link id="m-talemitem" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" talemItem"}</code> | <span className="api-desc">Item asset for Talem coins.</span> |
| <Link id="m-talempickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" talemPickup"}</code> | <span className="api-desc">Talem prefab spawned into the withdraw dock.</span> |
| <Link id="m-throttleinteractable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" throttleInteractable"}</code> | <span className="api-desc">Throttle control for withdrawing. Not read in this file.</span> |
| <Link id="m-withdrawdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" withdrawDock"}</code> | <span className="api-desc">Dock that holds withdrawn Talem.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-movetofromwithdraw" /><code>{"void MoveToFromWithdraw(int movement)"}</code> | <span className="api-desc">Moves an amount between the local balance and the withdraw dock's Talem stack, spawning or destroying the stack as needed. Local only, no API call.</span> |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> | <span className="api-desc">Clears stray Talem and old items, fetches the balance and spawns an item for each shop entry.</span> |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | <span className="api-desc">Does nothing.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the deposit dock's filter and docked events.</span> |
| <Link id="m-destroydocked" /><code>{"private void DestroyDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">When a Talem stack is docked in the deposit dock, moves its amount back to the balance and destroys it.</span> |
| <Link id="m-dockfilter" /><code>{"private void DockFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> | <span className="api-desc">Lets only Talem into the deposit dock.</span> |
| <Link id="m-itempurchased" /><code>{"private void ItemPurchased(uint purchasable)"}</code> | <span className="api-desc">Asks the presets manager to recheck storage use after a purchase.</span> |
| <Link id="m-spawnitem" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/mainmenushopitem">{"MainMenuShopItem"}</Link>{" SpawnItem()"}</code> | <span className="api-desc">Instantiates a shop item and listens for its purchase.</span> |

</details>
