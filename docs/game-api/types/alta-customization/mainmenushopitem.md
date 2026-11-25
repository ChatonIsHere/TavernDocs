---
title: "MainMenuShopItem"
description: "class MainMenuShopItem in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuShopItem

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MainMenuShopItem()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-center" /><code>{"private Transform center"}</code> |  |
| <Link id="m-costtext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" costText"}</code> |  |
| <Link id="m-depositdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" depositDock"}</code> |  |
| <Link id="m-internalsize" /><code>{"private Vector3 internalSize"}</code> |  |
| <Link id="m-item" /><code>{"private "}<Link to="/game-api/types/alta-customization/purchasable">{"Purchasable"}</Link>{" item"}</code> |  |
| <Link id="m-itemhash" /><code>{"private uint itemHash"}</code> |  |
| <Link id="m-itemname" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" itemName"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-maxobjectsize" /><code>{"private float maxObjectSize"}</code> |  |
| <Link id="m-numberfont" /><code>{"private "}<Link to="/game-api/types/global-t-x/textfont">{"TextFont"}</Link>{" numberFont"}</code> |  |
| <Link id="m-shopitem" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{" shopItem"}</code> |  |
| <Link id="m-successfullpurchase" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" successfullPurchase"}</code> |  |
| <Link id="m-textfont" /><code>{"private "}<Link to="/game-api/types/global-t-x/textfont">{"TextFont"}</Link>{" textFont"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itempurchased" /><code>{"event Action<uint> ItemPurchased"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempttobuy" /><code>{"async void AttemptToBuy()"}</code> |  |
| <Link id="m-setup" /><code>{"async void Setup("}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session, "}<Link to="/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{" shopItem)"}</code> |  |
| <Link id="m-additem" /><code>{"private Transform AddItem("}<Link to="/game-api/types/alta-customization/purchasable">{"Purchasable"}</Link>{" item)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |

## Used in

Members of other types that take, return or hold a `MainMenuShopItem`:

[`MainMenuShopInterface.shopItemPrefab`](/game-api/types/alta-customization/mainmenushopinterface#m-shopitemprefab), [`MainMenuShopInterface.spawnedItems`](/game-api/types/alta-customization/mainmenushopinterface#m-spawneditems), [`MainMenuShopInterface.SpawnItem`](/game-api/types/alta-customization/mainmenushopinterface#m-spawnitem).
