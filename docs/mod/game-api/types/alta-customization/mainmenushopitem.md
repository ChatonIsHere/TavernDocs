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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MainMenuShopItem()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-center" /><code>{"private Transform center"}</code> | <span className="api-desc">Where the preview items are placed.</span> |
| <Link id="m-costtext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" costText"}</code> | <span className="api-desc">Text showing the price, or "Owned".</span> |
| <Link id="m-depositdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" depositDock"}</code> | <span className="api-desc">Dock the player puts currency in to pay.</span> |
| <Link id="m-internalsize" /><code>{"private Vector3 internalSize"}</code> | <span className="api-desc">Size of the box around `center` that a cosmetic set's items are scattered in at random.</span> |
| <Link id="m-item" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/purchasable">{"Purchasable"}</Link>{" item"}</code> | <span className="api-desc">The `Purchasable` this slot sells, loaded in `Setup`.</span> |
| <Link id="m-itemhash" /><code>{"private uint itemHash"}</code> | <span className="api-desc">Hash of the shop item's SKU, used to look up the `Purchasable`.</span> |
| <Link id="m-itemname" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" itemName"}</code> | <span className="api-desc">Text showing the item's display name.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-maxobjectsize" /><code>{"private float maxObjectSize"}</code> | <span className="api-desc">Largest size a preview item is scaled to.</span> |
| <Link id="m-numberfont" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textfont">{"TextFont"}</Link>{" numberFont"}</code> | <span className="api-desc">Font used for the price.</span> |
| <Link id="m-shopitem" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{" shopItem"}</code> | <span className="api-desc">Shop API data for the item, including price and whether the player owns it.</span> |
| <Link id="m-successfullpurchase" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" successfullPurchase"}</code> | <span className="api-desc">Event run after a successful purchase.</span> |
| <Link id="m-textfont" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textfont">{"TextFont"}</Link>{" textFont"}</code> | <span className="api-desc">Font used for the "Owned" text.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-itempurchased" /><code>{"event Action<uint> ItemPurchased"}</code> | <span className="api-desc">Raised with the item's hash after a purchase goes through.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempttobuy" /><code>{"async void AttemptToBuy()"}</code> | <span className="api-desc">Buys the item through the shop API if it isn't owned and the dock holds enough currency, then takes the currency, marks it owned and raises `ItemPurchased`.</span> |
| <Link id="m-setup" /><code>{"async void Setup("}<Link to="/mod/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session, "}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{" shopItem)"}</code> | <span className="api-desc">Fills the slot from a shop item: loads its `Purchasable`, shows the name and price (or "Owned") and spawns its preview. Hides itself if the item isn't found.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additem" /><code>{"private Transform AddItem("}<Link to="/mod/game-api/types/alta-customization/purchasable">{"Purchasable"}</Link>{" item)"}</code> | <span className="api-desc">Spawns a preview pickup of a cosmetic with colliders off and physics frozen, scaled to fit `maxObjectSize`. Returns null for non-cosmetics.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the box that set items are scattered in.</span> |

</details>

## Used in

Members of other types that take, return or hold a `MainMenuShopItem`:

<div className="api-used-in">

[`MainMenuShopInterface.shopItemPrefab`](/mod/game-api/types/alta-customization/mainmenushopinterface#m-shopitemprefab), [`MainMenuShopInterface.spawnedItems`](/mod/game-api/types/alta-customization/mainmenushopinterface#m-spawneditems), [`MainMenuShopInterface.SpawnItem`](/mod/game-api/types/alta-customization/mainmenushopinterface#m-spawnitem).

</div>
