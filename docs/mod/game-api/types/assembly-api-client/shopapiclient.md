---
title: "ShopApiClient"
description: "Online client for the cosmetics shop."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Online client for the cosmetics shop. Reached as `ApiAccess.ApiClient.ShopClient`; calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/mod/game-api/types/assembly-api-client/highlevelapiclientbase), [`IShopApiClient`](/mod/game-api/types/assembly-api-client/ishopapiclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopApiClient("}<Link to="/mod/game-api/types/assembly-api-client/highlevelapiclient">{"HighLevelApiClient"}</Link>{" highLevelApiClient)"}</code> | Creates a `ShopApiClient` from `highLevelApiClient`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-account" /><code><Link to="/mod/game-api/types/assembly-api-client/ishopaccount">{"IShopAccount"}</Link>{" Account { get; }"}</code> | The `ShopAccount` client. |
| <Link id="m-editor" /><code><Link to="/mod/game-api/types/assembly-api-client/ishopeditor">{"IShopEditor"}</Link>{" Editor { get; }"}</code> | The `ShopEditor` client for managing shop items. |
| <Link id="m-oculus" /><code><Link to="/mod/game-api/types/assembly-api-client/ioculusshop">{"IOculusShop"}</Link>{" Oculus { get; }"}</code> | The `OculusShop` client. |
| <Link id="m-purchase" /><code><Link to="/mod/game-api/types/assembly-api-client/ishoppurchase">{"IShopPurchase"}</Link>{" Purchase { get; }"}</code> | The `ShopPurchase` client. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrentshopconfiguration" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shoppageconfiguration">{"ShopPageConfiguration"}</Link>{"> GetCurrentShopConfiguration()"}</code> | Gets the current shop page layout. |
| <Link id="m-getcurrentshopconfigurationforuser" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{">> GetCurrentShopConfigurationForUser()"}</code> | Gets the current shop items with the logged-in user's details. |
| <Link id="m-getcurrentshopconfigurationwithbanner" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shoppageconfigurationwithbanner">{"ShopPageConfigurationWithBanner"}</Link>{"> GetCurrentShopConfigurationWithBanner()"}</code> | Gets the current shop page layout with its banner. |
| <Link id="m-getfullitemdescriptions" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/shopitem">{"ShopItem"}</Link>{">> GetFullItemDescriptions(IEnumerable<int> itemIdentifiers)"}</code> | Gets full descriptions of the given shop items. |
| <Link id="m-getshoptokenasync" /><code>{"async Task<string> GetShopTokenAsync()"}</code> | Gets a shop token for the logged-in user. |
| <Link id="m-validateuserspurchasesasync" /><code>{"async Task<bool> ValidateUsersPurchasesAsync(int userIdentifier, IEnumerable<uint> itemHashes)"}</code> | Asks the API whether a user owns all the given items, by hash. |
| <Link id="m-validateuserspurchasesviaskusasync" /><code>{"async Task<bool> ValidateUsersPurchasesViaSKUsAsync(int userIdentifier, IEnumerable<string> itemSKUs)"}</code> | Asks the API whether a user owns all the given items, by SKU. |
