---
title: "MainMenuShopInterface"
description: "class MainMenuShopInterface in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuShopInterface

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`LoggedInTool`](/game-api/types/global-i-l/loggedintool)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MainMenuShopInterface()"}</code> |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-account" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/shopaccountinfo">{"ShopAccountInfo"}</Link>{" account"}</code> |
| <Link id="m-accountbalance" /><code>{"private int accountBalance"}</code> |
| <Link id="m-accountbalancetext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" accountBalanceText"}</code> |
| <Link id="m-customizationmanager" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" customizationManager"}</code> |
| <Link id="m-depositdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" depositDock"}</code> |
| <Link id="m-inversethrottleinteraction" /><code>{"private bool inverseThrottleInteraction"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-presetsmanager" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresetsmanager">{"CosmeticPresetsManager"}</Link>{" presetsManager"}</code> |
| <Link id="m-shopitempositions" /><code>{"private Transform[] shopItemPositions"}</code> |
| <Link id="m-shopitemprefab" /><code>{"private "}<Link to="/game-api/types/alta-customization/mainmenushopitem">{"MainMenuShopItem"}</Link>{" shopItemPrefab"}</code> |
| <Link id="m-spawneditems" /><code>{"private List<"}<Link to="/game-api/types/alta-customization/mainmenushopitem">{"MainMenuShopItem"}</Link>{"> spawnedItems"}</code> |
| <Link id="m-talemhash" /><code>{"private uint talemHash"}</code> |
| <Link id="m-talemitem" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" talemItem"}</code> |
| <Link id="m-talempickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" talemPickup"}</code> |
| <Link id="m-throttleinteractable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" throttleInteractable"}</code> |
| <Link id="m-withdrawdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" withdrawDock"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-movetofromwithdraw" /><code>{"void MoveToFromWithdraw(int movement)"}</code> |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-destroydocked" /><code>{"private void DestroyDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-dockfilter" /><code>{"private void DockFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> |
| <Link id="m-itempurchased" /><code>{"private void ItemPurchased(uint purchasable)"}</code> |
| <Link id="m-spawnitem" /><code>{"private "}<Link to="/game-api/types/alta-customization/mainmenushopitem">{"MainMenuShopItem"}</Link>{" SpawnItem()"}</code> |

</details>
