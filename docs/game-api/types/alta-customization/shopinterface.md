---
title: "ShopInterface"
description: "Checkout in the customization room: lists worn items the player doesn't own as a cart, shows the total and buys them through the Alta shop API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopInterface

A **class** in `Root.Township`, `Alta.Customization`.

Checkout in the customization room: lists worn items the player doesn't own as a cart, shows the total and buys them through the Alta shop API. Client side.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`LoggedInTool`](/game-api/types/global-i-l/loggedintool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopInterface()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-customization/shopinterface">{"ShopInterface"}</Link>{" instance"}</code> | The first shop interface created; not a strict singleton. |

<details>
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-balancetext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" balanceText"}</code> | Text showing the balance. |
| <Link id="m-currentcart" /><code>{"private List<"}<Link to="/game-api/types/alta-customization/shopinterfaceitem">{"ShopInterfaceItem"}</Link>{"> currentCart"}</code> | Cart entries currently shown. |
| <Link id="m-currentcartcost" /><code>{"private int currentCartCost"}</code> | Total price of the cart. |
| <Link id="m-customizationhandler" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" customizationHandler"}</code> | Handler whose worn items make up the cart. |
| <Link id="m-isbuying" /><code>{"private bool isBuying"}</code> | True while a purchase is running, to block repeats. |
| <Link id="m-isbuyingevent" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" isBuyingEvent"}</code> | Event raised with true when buying starts and false when it ends. |
| <Link id="m-itemprefab" /><code>{"private "}<Link to="/game-api/types/alta-customization/shopinterfaceitem">{"ShopInterfaceItem"}</Link>{" itemPrefab"}</code> | Prefab for a cart entry. |
| <Link id="m-itemsparent" /><code>{"private Transform itemsParent"}</code> | Parent for cart entries. |
| <Link id="m-itemsspacing" /><code>{"private float itemsSpacing"}</code> | Vertical gap between cart entries. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-manager" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager"}</code> | Customization manager whose item events are watched. |
| <Link id="m-mappeditems" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{"> mappedItems"}</code> | Shop items by compressed SKU hash. |
| <Link id="m-purchasefailedwitherror" /><code>{"private "}<Link to="/game-api/types/global-s/stringhandler">{"StringHandler"}</Link>{" purchaseFailedWithError"}</code> | Event given the error text when a purchase fails. |
| <Link id="m-successfullpurchase" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" successfullPurchase"}</code> | Event raised when every cart item was bought. |
| <Link id="m-totalcost" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" totalCost"}</code> | Text showing the cart total. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attemptbuy" /><code>{"async void AttemptBuy()"}</code> | Buys each cart item through the API if the balance covers it; stops and shows an error on the first failure, then refreshes balance and cart. |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> | Runs the login setup again and rebuilds the cart. |
| <Link id="m-updatebalance" /><code>{"void UpdateBalance(int newBalance)"}</code> | Shows a balance on the balance text. |
| <Link id="m-updatecheckout-2" /><code>{"void UpdateCheckout()"}</code> | Rebuilds the cart from worn, unowned items, one entry per set on the store, and updates the total. |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> | Loads shop items, fetches the balance, waits for the customization manager and rebuilds the cart when items change. |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | Clears the shop item map. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Unsubscribes from balance and item events and clears `instance`. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets `instance` if none is set. |
| <Link id="m-updatecheckout" /><code>{"private void UpdateCheckout(uint obj)"}</code> | Rebuilds the cart from worn, unowned items, one entry per set on the store, and updates the total. |

</details>
