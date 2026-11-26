---
title: "MainMenuShopItem"
description: "Client: one item on the main menu shop shelf."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuShopItem

A **class** in `Root.Township`, `Alta.Customization`.

Client: one item on the main menu shop shelf. Shows the item and its price from the shop API, and buys it when enough currency are put in its deposit dock.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MainMenuShopItem()"}</code> |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-center" /><code>{"private Transform center"}</code> | Where the preview items are placed. |
| <Link id="m-costtext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" costText"}</code> | Text showing the price, or "Owned". |
| <Link id="m-depositdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" depositDock"}</code> | Dock the player puts currency in to pay. |
| <Link id="m-internalsize" /><code>{"private Vector3 internalSize"}</code> | Size of the box around `center` that a cosmetic set's items are scattered in at random. |
| <Link id="m-item" /><code>{"private "}<Link to="/game-api/types/alta-customization/purchasable">{"Purchasable"}</Link>{" item"}</code> | The `Purchasable` this slot sells, loaded in `Setup`. |
| <Link id="m-itemhash" /><code>{"private uint itemHash"}</code> | Hash of the shop item's SKU, used to look up the `Purchasable`. |
| <Link id="m-itemname" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" itemName"}</code> | Text showing the item's display name. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-maxobjectsize" /><code>{"private float maxObjectSize"}</code> | Largest size a preview item is scaled to. |
| <Link id="m-numberfont" /><code>{"private "}<Link to="/game-api/types/global-t-x/textfont">{"TextFont"}</Link>{" numberFont"}</code> | Font used for the price. |
| <Link id="m-shopitem" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{" shopItem"}</code> | Shop API data for the item, including price and whether the player owns it. |
| <Link id="m-successfullpurchase" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" successfullPurchase"}</code> | Event run after a successful purchase. |
| <Link id="m-textfont" /><code>{"private "}<Link to="/game-api/types/global-t-x/textfont">{"TextFont"}</Link>{" textFont"}</code> | Font used for the "Owned" text. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itempurchased" /><code>{"event Action<uint> ItemPurchased"}</code> | Raised with the item's hash after a purchase goes through. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempttobuy" /><code>{"async void AttemptToBuy()"}</code> | Buys the item through the shop API if it isn't owned and the dock holds enough currency, then takes the currency, marks it owned and raises `ItemPurchased`. |
| <Link id="m-setup" /><code>{"async void Setup("}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session, "}<Link to="/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{" shopItem)"}</code> | Fills the slot from a shop item: loads its `Purchasable`, shows the name and price (or "Owned") and spawns its preview. Hides itself if the item isn't found. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additem" /><code>{"private Transform AddItem("}<Link to="/game-api/types/alta-customization/purchasable">{"Purchasable"}</Link>{" item)"}</code> | Spawns a preview pickup of a cosmetic with colliders off and physics frozen, scaled to fit `maxObjectSize`. Returns null for non-cosmetics. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws the box that set items are scattered in. |

</details>

## Used in

Members of other types that take, return or hold a `MainMenuShopItem`:

[`MainMenuShopInterface.shopItemPrefab`](/game-api/types/alta-customization/mainmenushopinterface#m-shopitemprefab), [`MainMenuShopInterface.spawnedItems`](/game-api/types/alta-customization/mainmenushopinterface#m-spawneditems), [`MainMenuShopInterface.SpawnItem`](/game-api/types/alta-customization/mainmenushopinterface#m-spawnitem).
