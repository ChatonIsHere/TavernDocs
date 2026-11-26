---
title: "IShopApiClient"
description: "Alta web API calls for the cosmetics shop."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IShopApiClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API calls for the cosmetics shop. `ApiAccess.ApiClient.ShopClient`. The API is gone; mods stub the rotation and purchase checks.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`OfflineShopApiClient`](/mod/game-api/types/assembly-api-client/offlineshopapiclient), [`ShopApiClient`](/mod/game-api/types/assembly-api-client/shopapiclient)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-account" /><code><Link to="/mod/game-api/types/assembly-api-client/ishopaccount">{"IShopAccount"}</Link>{" Account { get; }"}</code> | Shop account calls (owned items, gifts). |
| <Link id="m-editor" /><code><Link to="/mod/game-api/types/assembly-api-client/ishopeditor">{"IShopEditor"}</Link>{" Editor { get; }"}</code> | Calls for editing shop items and sets. |
| <Link id="m-oculus" /><code><Link to="/mod/game-api/types/assembly-api-client/ioculusshop">{"IOculusShop"}</Link>{" Oculus { get; }"}</code> | Oculus store purchase calls. |
| <Link id="m-purchase" /><code><Link to="/mod/game-api/types/assembly-api-client/ishoppurchase">{"IShopPurchase"}</Link>{" Purchase { get; }"}</code> | Purchase calls. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrentshopconfiguration" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shoppageconfiguration">{"ShopPageConfiguration"}</Link>{"> GetCurrentShopConfiguration()"}</code> | Gets the current shop page layout. |
| <Link id="m-getcurrentshopconfigurationforuser" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{">> GetCurrentShopConfigurationForUser()"}</code> | Gets the current shop items with the user's own details. |
| <Link id="m-getcurrentshopconfigurationwithbanner" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shoppageconfigurationwithbanner">{"ShopPageConfigurationWithBanner"}</Link>{"> GetCurrentShopConfigurationWithBanner()"}</code> | Gets the current shop page layout with its banner. |
| <Link id="m-getfullitemdescriptions" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/shopitem">{"ShopItem"}</Link>{">> GetFullItemDescriptions(IEnumerable<int> itemIdentifiers)"}</code> | Gets the full details of items by id. |
| <Link id="m-getshoptokenasync" /><code>{"Task<string> GetShopTokenAsync()"}</code> | Gets a shop token for the logged-in user. |
| <Link id="m-validateuserspurchasesasync" /><code>{"Task<bool> ValidateUsersPurchasesAsync(int userIdentifier, IEnumerable<uint> itemIdentifiers)"}</code> | Obsolete: asks whether a user owns items by id. |
| <Link id="m-validateuserspurchasesviaskusasync" /><code>{"Task<bool> ValidateUsersPurchasesViaSKUsAsync(int userIdentifier, IEnumerable<string> itemSKUs)"}</code> | Asks whether a user owns all the items with the given SKUs. |

## Used in

Members of other types that take, return or hold a `IShopApiClient`:

[`HighLevelApiClient.ShopClient`](/mod/game-api/types/assembly-api-client/highlevelapiclient#m-shopclient), [`IHighLevelApiClient.ShopClient`](/mod/game-api/types/assembly-api-client/ihighlevelapiclient#m-shopclient), [`OfflineHighLevelApiClient.ShopClient`](/mod/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-shopclient).
