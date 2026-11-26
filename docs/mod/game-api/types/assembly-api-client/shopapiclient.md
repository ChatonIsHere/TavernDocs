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
| <Link id="m-ctor" /><code>{"ShopApiClient("}<Link to="/mod/game-api/types/assembly-api-client/highlevelapiclient">{"HighLevelApiClient"}</Link>{" highLevelApiClient)"}</code> | <span className="api-desc">Creates a `ShopApiClient` from `highLevelApiClient`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-account" /><code><Link to="/mod/game-api/types/assembly-api-client/ishopaccount">{"IShopAccount"}</Link>{" Account { get; }"}</code> | <span className="api-desc">The `ShopAccount` client.</span> |
| <Link id="m-editor" /><code><Link to="/mod/game-api/types/assembly-api-client/ishopeditor">{"IShopEditor"}</Link>{" Editor { get; }"}</code> | <span className="api-desc">The `ShopEditor` client for managing shop items.</span> |
| <Link id="m-oculus" /><code><Link to="/mod/game-api/types/assembly-api-client/ioculusshop">{"IOculusShop"}</Link>{" Oculus { get; }"}</code> | <span className="api-desc">The `OculusShop` client.</span> |
| <Link id="m-purchase" /><code><Link to="/mod/game-api/types/assembly-api-client/ishoppurchase">{"IShopPurchase"}</Link>{" Purchase { get; }"}</code> | <span className="api-desc">The `ShopPurchase` client.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrentshopconfiguration" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shoppageconfiguration">{"ShopPageConfiguration"}</Link>{"> GetCurrentShopConfiguration()"}</code> | <span className="api-desc">Gets the current shop page layout.</span> |
| <Link id="m-getcurrentshopconfigurationforuser" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{">> GetCurrentShopConfigurationForUser()"}</code> | <span className="api-desc">Gets the current shop items with the logged-in user's details.</span> |
| <Link id="m-getcurrentshopconfigurationwithbanner" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shoppageconfigurationwithbanner">{"ShopPageConfigurationWithBanner"}</Link>{"> GetCurrentShopConfigurationWithBanner()"}</code> | <span className="api-desc">Gets the current shop page layout with its banner.</span> |
| <Link id="m-getfullitemdescriptions" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/shopitem">{"ShopItem"}</Link>{">> GetFullItemDescriptions(IEnumerable<int> itemIdentifiers)"}</code> | <span className="api-desc">Gets full descriptions of the given shop items.</span> |
| <Link id="m-getshoptokenasync" /><code>{"async Task<string> GetShopTokenAsync()"}</code> | <span className="api-desc">Gets a shop token for the logged-in user.</span> |
| <Link id="m-validateuserspurchasesasync" /><code>{"async Task<bool> ValidateUsersPurchasesAsync(int userIdentifier, IEnumerable<uint> itemHashes)"}</code> | <span className="api-desc">Asks the API whether a user owns all the given items, by hash.</span> |
| <Link id="m-validateuserspurchasesviaskusasync" /><code>{"async Task<bool> ValidateUsersPurchasesViaSKUsAsync(int userIdentifier, IEnumerable<string> itemSKUs)"}</code> | <span className="api-desc">Asks the API whether a user owns all the given items, by SKU.</span> |
