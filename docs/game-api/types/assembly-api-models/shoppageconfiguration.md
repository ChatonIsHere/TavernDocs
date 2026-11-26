---
title: "ShopPageConfiguration"
description: "Layout data for one page of the in-game shop as sent by the web API: its subtitle, item slots and graphics."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopPageConfiguration

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Layout data for one page of the in-game shop as sent by the web API: its subtitle, item slots and graphics.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Derived types** [`ShopPageConfigurationWithBanner`](/game-api/types/assembly-api-models/shoppageconfigurationwithbanner)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ShopPageConfiguration()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allitemconfigurations" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-api-models/shopitemconfiguration">{"ShopItemConfiguration"}</Link>{"> AllItemConfigurations { get; }"}</code> | Every item on the page, primary items first then secondary. Not serialized. |
| <Link id="m-graphics" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/storerotationgraphicconfig">{"StoreRotationGraphicConfig"}</Link>{"> Graphics { get; set; }"}</code> | Rotation graphics shown on the page; may be null. |
| <Link id="m-primaryitems" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/shopitemconfiguration">{"ShopItemConfiguration"}</Link>{"> PrimaryItems { get; set; }"}</code> | The page's main (featured) item slots. |
| <Link id="m-secondaryitems" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/shopitemconfiguration">{"ShopItemConfiguration"}</Link>{"> SecondaryItems { get; set; }"}</code> | The page's smaller item slots. |
| <Link id="m-subtitle" /><code>{"string Subtitle { get; set; }"}</code> | Optional subtitle text for the page. |

## Used in

Members of other types that take, return or hold a `ShopPageConfiguration`:

[`IShopApiClient.GetCurrentShopConfiguration`](/game-api/types/assembly-api-client/ishopapiclient#m-getcurrentshopconfiguration), [`OfflineShopApiClient.GetCurrentShopConfiguration`](/game-api/types/assembly-api-client/offlineshopapiclient#m-getcurrentshopconfiguration), [`ShopApiClient.GetCurrentShopConfiguration`](/game-api/types/assembly-api-client/shopapiclient#m-getcurrentshopconfiguration), [`LowLevelApiClient.GetCurrentShopConfiguration`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getcurrentshopconfiguration), [`ShopPageConfigurationWithBanner.Create`](/game-api/types/assembly-api-models/shoppageconfigurationwithbanner#m-create), [`ShopConfigUtility.ShopItemConfigurations.ShopConfiguration`](/game-api/types/alta-customization/shopconfigutility-shopitemconfigurations#m-shopconfiguration), [`StoreRotationPopup.GetHashForConfiguration`](/game-api/types/global-s/storerotationpopup#m-gethashforconfiguration).
