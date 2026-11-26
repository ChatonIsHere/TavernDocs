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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Derived types** [`ShopPageConfigurationWithBanner`](/mod/game-api/types/assembly-api-models/shoppageconfigurationwithbanner)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopPageConfiguration()"}</code> | <span className="api-desc">Creates a `ShopPageConfiguration` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allitemconfigurations" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemconfiguration">{"ShopItemConfiguration"}</Link>{"> AllItemConfigurations { get; }"}</code> | <span className="api-desc">Every item on the page, primary items first then secondary. Not serialized.</span> |
| <Link id="m-graphics" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/storerotationgraphicconfig">{"StoreRotationGraphicConfig"}</Link>{"> Graphics { get; set; }"}</code> | <span className="api-desc">Rotation graphics shown on the page; may be null.</span> |
| <Link id="m-primaryitems" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemconfiguration">{"ShopItemConfiguration"}</Link>{"> PrimaryItems { get; set; }"}</code> | <span className="api-desc">The page's main (featured) item slots.</span> |
| <Link id="m-secondaryitems" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemconfiguration">{"ShopItemConfiguration"}</Link>{"> SecondaryItems { get; set; }"}</code> | <span className="api-desc">The page's smaller item slots.</span> |
| <Link id="m-subtitle" /><code>{"string Subtitle { get; set; }"}</code> | <span className="api-desc">Optional subtitle text for the page.</span> |

## Used in

Members of other types that take, return or hold a `ShopPageConfiguration`:

<div className="api-used-in">

[`IShopApiClient.GetCurrentShopConfiguration`](/mod/game-api/types/assembly-api-client/ishopapiclient#m-getcurrentshopconfiguration), [`OfflineShopApiClient.GetCurrentShopConfiguration`](/mod/game-api/types/assembly-api-client/offlineshopapiclient#m-getcurrentshopconfiguration), [`ShopApiClient.GetCurrentShopConfiguration`](/mod/game-api/types/assembly-api-client/shopapiclient#m-getcurrentshopconfiguration), [`LowLevelApiClient.GetCurrentShopConfiguration`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getcurrentshopconfiguration), [`ShopPageConfigurationWithBanner.Create`](/mod/game-api/types/assembly-api-models/shoppageconfigurationwithbanner#m-create), [`ShopConfigUtility.ShopItemConfigurations.ShopConfiguration`](/mod/game-api/types/alta-customization/shopconfigutility-shopitemconfigurations#m-shopconfiguration), [`StoreRotationPopup.GetHashForConfiguration`](/mod/game-api/types/global-s/storerotationpopup#m-gethashforconfiguration).

</div>
