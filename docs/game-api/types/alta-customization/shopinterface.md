---
title: "ShopInterface"
description: "class ShopInterface in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopInterface

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`LoggedInTool`](/game-api/types/global-i-l/loggedintool)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ShopInterface()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-customization/shopinterface">{"ShopInterface"}</Link>{" instance"}</code> |

<details>
<summary>15 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-balancetext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" balanceText"}</code> |
| <Link id="m-currentcart" /><code>{"private List<"}<Link to="/game-api/types/alta-customization/shopinterfaceitem">{"ShopInterfaceItem"}</Link>{"> currentCart"}</code> |
| <Link id="m-currentcartcost" /><code>{"private int currentCartCost"}</code> |
| <Link id="m-customizationhandler" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" customizationHandler"}</code> |
| <Link id="m-isbuying" /><code>{"private bool isBuying"}</code> |
| <Link id="m-isbuyingevent" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" isBuyingEvent"}</code> |
| <Link id="m-itemprefab" /><code>{"private "}<Link to="/game-api/types/alta-customization/shopinterfaceitem">{"ShopInterfaceItem"}</Link>{" itemPrefab"}</code> |
| <Link id="m-itemsparent" /><code>{"private Transform itemsParent"}</code> |
| <Link id="m-itemsspacing" /><code>{"private float itemsSpacing"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-manager" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager"}</code> |
| <Link id="m-mappeditems" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{"> mappedItems"}</code> |
| <Link id="m-purchasefailedwitherror" /><code>{"private "}<Link to="/game-api/types/global-s/stringhandler">{"StringHandler"}</Link>{" purchaseFailedWithError"}</code> |
| <Link id="m-successfullpurchase" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" successfullPurchase"}</code> |
| <Link id="m-totalcost" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" totalCost"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-attemptbuy" /><code>{"async void AttemptBuy()"}</code> |
| <Link id="m-refresh" /><code>{"void Refresh()"}</code> |
| <Link id="m-updatebalance" /><code>{"void UpdateBalance(int newBalance)"}</code> |
| <Link id="m-updatecheckout-2" /><code>{"void UpdateCheckout()"}</code> |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-updatecheckout" /><code>{"private void UpdateCheckout(uint obj)"}</code> |

</details>
