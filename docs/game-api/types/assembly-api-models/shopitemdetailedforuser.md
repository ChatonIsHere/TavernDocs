---
title: "ShopItemDetailedForUser"
description: "A shop item with details for one user: whether they own it and the price they would pay."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopItemDetailedForUser

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

A shop item with details for one user: whether they own it and the price they would pay.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`ShopItemDetailed`](/game-api/types/assembly-api-models/shopitemdetailed)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ShopItemDetailedForUser()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-finalprice" /><code>{"decimal FinalPrice { get; set; }"}</code> | Price for this user after any discounts. |
| <Link id="m-isowned" /><code>{"bool IsOwned { get; set; }"}</code> | True if the user already owns the item. |

## Used in

Members of other types that take, return or hold a `ShopItemDetailedForUser`:

[`IShopApiClient.GetCurrentShopConfigurationForUser`](/game-api/types/assembly-api-client/ishopapiclient#m-getcurrentshopconfigurationforuser), [`OfflineShopApiClient.GetCurrentShopConfigurationForUser`](/game-api/types/assembly-api-client/offlineshopapiclient#m-getcurrentshopconfigurationforuser), [`ShopApiClient.GetCurrentShopConfigurationForUser`](/game-api/types/assembly-api-client/shopapiclient#m-getcurrentshopconfigurationforuser), [`LowLevelApiClient.GetCurrentShopConfigurationForUser`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getcurrentshopconfigurationforuser), [`MainMenuShopItem.Setup`](/game-api/types/alta-customization/mainmenushopitem#m-setup), [`MainMenuShopItem.shopItem`](/game-api/types/alta-customization/mainmenushopitem#m-shopitem), [`ShopConfigUtility.GetCurrentShopConfigurationForUser`](/game-api/types/alta-customization/shopconfigutility#m-getcurrentshopconfigurationforuser), [`ShopInterface.mappedItems`](/game-api/types/alta-customization/shopinterface#m-mappeditems), [`ShopInterfaceItem.Setup`](/game-api/types/alta-customization/shopinterfaceitem#m-setup), [`ShopInterfaceItem.ShopItem`](/game-api/types/alta-customization/shopinterfaceitem#m-shopitem).
