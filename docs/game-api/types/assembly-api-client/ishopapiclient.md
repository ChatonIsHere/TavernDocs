---
title: "IShopApiClient"
description: "interface IShopApiClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IShopApiClient

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`OfflineShopApiClient`](/game-api/types/assembly-api-client/offlineshopapiclient), [`ShopApiClient`](/game-api/types/assembly-api-client/shopapiclient)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-account" /><code><Link to="/game-api/types/assembly-api-client/ishopaccount">{"IShopAccount"}</Link>{" Account { get; }"}</code> |  |
| <Link id="m-editor" /><code><Link to="/game-api/types/assembly-api-client/ishopeditor">{"IShopEditor"}</Link>{" Editor { get; }"}</code> |  |
| <Link id="m-oculus" /><code><Link to="/game-api/types/assembly-api-client/ioculusshop">{"IOculusShop"}</Link>{" Oculus { get; }"}</code> |  |
| <Link id="m-purchase" /><code><Link to="/game-api/types/assembly-api-client/ishoppurchase">{"IShopPurchase"}</Link>{" Purchase { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrentshopconfiguration" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shoppageconfiguration">{"ShopPageConfiguration"}</Link>{"> GetCurrentShopConfiguration()"}</code> |  |
| <Link id="m-getcurrentshopconfigurationforuser" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{">> GetCurrentShopConfigurationForUser()"}</code> |  |
| <Link id="m-getcurrentshopconfigurationwithbanner" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shoppageconfigurationwithbanner">{"ShopPageConfigurationWithBanner"}</Link>{"> GetCurrentShopConfigurationWithBanner()"}</code> |  |
| <Link id="m-getfullitemdescriptions" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/shopitem">{"ShopItem"}</Link>{">> GetFullItemDescriptions(IEnumerable<int> itemIdentifiers)"}</code> |  |
| <Link id="m-getshoptokenasync" /><code>{"Task<string> GetShopTokenAsync()"}</code> |  |
| <Link id="m-validateuserspurchasesasync" /><code>{"Task<bool> ValidateUsersPurchasesAsync(int userIdentifier, IEnumerable<uint> itemIdentifiers)"}</code> |  |
| <Link id="m-validateuserspurchasesviaskusasync" /><code>{"Task<bool> ValidateUsersPurchasesViaSKUsAsync(int userIdentifier, IEnumerable<string> itemSKUs)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IShopApiClient`:

[`HighLevelApiClient.ShopClient`](/game-api/types/assembly-api-client/highlevelapiclient#m-shopclient), [`IHighLevelApiClient.ShopClient`](/game-api/types/assembly-api-client/ihighlevelapiclient#m-shopclient), [`OfflineHighLevelApiClient.ShopClient`](/game-api/types/assembly-api-client/offlinehighlevelapiclient#m-shopclient).
