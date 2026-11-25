---
title: "ShopPageConfiguration"
description: "class ShopPageConfiguration in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopPageConfiguration

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Derived types** [`ShopPageConfigurationWithBanner`](/game-api/types/assembly-api-models/shoppageconfigurationwithbanner)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ShopPageConfiguration()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-allitemconfigurations" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-api-models/shopitemconfiguration">{"ShopItemConfiguration"}</Link>{"> AllItemConfigurations { get; }"}</code> |
| <Link id="m-graphics" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/storerotationgraphicconfig">{"StoreRotationGraphicConfig"}</Link>{"> Graphics { get; set; }"}</code> |
| <Link id="m-primaryitems" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/shopitemconfiguration">{"ShopItemConfiguration"}</Link>{"> PrimaryItems { get; set; }"}</code> |
| <Link id="m-secondaryitems" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/shopitemconfiguration">{"ShopItemConfiguration"}</Link>{"> SecondaryItems { get; set; }"}</code> |
| <Link id="m-subtitle" /><code>{"string Subtitle { get; set; }"}</code> |

## Used in

Members of other types that take, return or hold a `ShopPageConfiguration`:

[`IShopApiClient.GetCurrentShopConfiguration`](/game-api/types/assembly-api-client/ishopapiclient#m-getcurrentshopconfiguration), [`OfflineShopApiClient.GetCurrentShopConfiguration`](/game-api/types/assembly-api-client/offlineshopapiclient#m-getcurrentshopconfiguration), [`ShopApiClient.GetCurrentShopConfiguration`](/game-api/types/assembly-api-client/shopapiclient#m-getcurrentshopconfiguration), [`LowLevelApiClient.GetCurrentShopConfiguration`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getcurrentshopconfiguration), [`ShopPageConfigurationWithBanner.Create`](/game-api/types/assembly-api-models/shoppageconfigurationwithbanner#m-create), [`ShopConfigUtility.ShopItemConfigurations.ShopConfiguration`](/game-api/types/alta-customization/shopconfigutility-shopitemconfigurations#m-shopconfiguration), [`StoreRotationPopup.GetHashForConfiguration`](/game-api/types/global-s/storerotationpopup#m-gethashforconfiguration).
