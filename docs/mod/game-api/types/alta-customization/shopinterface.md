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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`LoggedInTool`](/mod/game-api/types/global-i-l/loggedintool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopInterface()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-customization/shopinterface">{"ShopInterface"}</Link>{" instance"}</code> | <span className="api-desc">The first shop interface created; not a strict singleton.</span> |

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-balancetext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" balanceText"}</code> | <span className="api-desc">Text showing the balance.</span> |
| <Link id="m-currentcart" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-customization/shopinterfaceitem">{"ShopInterfaceItem"}</Link>{"> currentCart"}</code> | <span className="api-desc">Cart entries currently shown.</span> |
| <Link id="m-currentcartcost" /><code>{"private int currentCartCost"}</code> | <span className="api-desc">Total price of the cart.</span> |
| <Link id="m-customizationhandler" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" customizationHandler"}</code> | <span className="api-desc">Handler whose worn items make up the cart.</span> |
| <Link id="m-isbuying" /><code>{"private bool isBuying"}</code> | <span className="api-desc">True while a purchase is running, to block repeats.</span> |
| <Link id="m-isbuyingevent" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" isBuyingEvent"}</code> | <span className="api-desc">Event raised with true when buying starts and false when it ends.</span> |
| <Link id="m-itemprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/shopinterfaceitem">{"ShopInterfaceItem"}</Link>{" itemPrefab"}</code> | <span className="api-desc">Prefab for a cart entry.</span> |
| <Link id="m-itemsparent" /><code>{"private Transform itemsParent"}</code> | <span className="api-desc">Parent for cart entries.</span> |
| <Link id="m-itemsspacing" /><code>{"private float itemsSpacing"}</code> | <span className="api-desc">Vertical gap between cart entries.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-manager" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager"}</code> | <span className="api-desc">Customization manager whose item events are watched.</span> |
| <Link id="m-mappeditems" /><code>{"private Dictionary<uint, "}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{"> mappedItems"}</code> | <span className="api-desc">Shop items by compressed SKU hash.</span> |
| <Link id="m-purchasefailedwitherror" /><code>{"private "}<Link to="/mod/game-api/types/global-s/stringhandler">{"StringHandler"}</Link>{" purchaseFailedWithError"}</code> | <span className="api-desc">Event given the error text when a purchase fails.</span> |
| <Link id="m-successfullpurchase" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" successfullPurchase"}</code> | <span className="api-desc">Event raised when every cart item was bought.</span> |
| <Link id="m-totalcost" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" totalCost"}</code> | <span className="api-desc">Text showing the cart total.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attemptbuy" /><code>{"async void AttemptBuy()"}</code> | <span className="api-desc">Buys each cart item through the API if the balance covers it; stops and shows an error on the first failure, then refreshes balance and cart.</span> |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> | <span className="api-desc">Runs the login setup again and rebuilds the cart.</span> |
| <Link id="m-updatebalance" /><code>{"void UpdateBalance(int newBalance)"}</code> | <span className="api-desc">Shows a balance on the balance text.</span> |
| <Link id="m-updatecheckout-2" /><code>{"void UpdateCheckout()"}</code> | <span className="api-desc">Rebuilds the cart from worn, unowned items, one entry per set on the store, and updates the total.</span> |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> | <span className="api-desc">Loads shop items, fetches the balance, waits for the customization manager and rebuilds the cart when items change.</span> |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | <span className="api-desc">Clears the shop item map.</span> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | <span className="api-desc">Unsubscribes from balance and item events and clears `instance`.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets `instance` if none is set.</span> |
| <Link id="m-updatecheckout" /><code>{"private void UpdateCheckout(uint obj)"}</code> | <span className="api-desc">Rebuilds the cart from worn, unowned items, one entry per set on the store, and updates the total.</span> |

</details>
