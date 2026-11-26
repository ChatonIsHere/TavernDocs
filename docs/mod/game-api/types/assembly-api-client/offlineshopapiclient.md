---
title: "OfflineShopApiClient"
description: "Offline stand-in for the shop client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineShopApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Offline stand-in for the shop client. Ownership checks always pass; shop configuration calls throw `OfflineException`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`IShopApiClient`](/mod/game-api/types/assembly-api-client/ishopapiclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflineShopApiClient()"}</code> | <span className="api-desc">Creates an `OfflineShopApiClient` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-account" /><code><Link to="/mod/game-api/types/assembly-api-client/ishopaccount">{"IShopAccount"}</Link>{" Account { get; }"}</code> | <span className="api-desc">An `OfflineShopAccount`.</span> |
| <Link id="m-editor" /><code><Link to="/mod/game-api/types/assembly-api-client/ishopeditor">{"IShopEditor"}</Link>{" Editor { get; }"}</code> | <span className="api-desc">An `OfflineShopEditor`, which throws on every call.</span> |
| <Link id="m-oculus" /><code><Link to="/mod/game-api/types/assembly-api-client/ioculusshop">{"IOculusShop"}</Link>{" Oculus { get; }"}</code> | <span className="api-desc">Throws `NotImplementedException`.</span> |
| <Link id="m-purchase" /><code><Link to="/mod/game-api/types/assembly-api-client/ishoppurchase">{"IShopPurchase"}</Link>{" Purchase { get; }"}</code> | <span className="api-desc">An `OfflineShopPurchase`, which throws on every call.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrentshopconfiguration" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shoppageconfiguration">{"ShopPageConfiguration"}</Link>{"> GetCurrentShopConfiguration()"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-getcurrentshopconfigurationforuser" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{">> GetCurrentShopConfigurationForUser()"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-getcurrentshopconfigurationwithbanner" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shoppageconfigurationwithbanner">{"ShopPageConfigurationWithBanner"}</Link>{"> GetCurrentShopConfigurationWithBanner()"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-getfullitemdescriptions" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/shopitem">{"ShopItem"}</Link>{">> GetFullItemDescriptions(IEnumerable<int> itemIdentifiers)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-getshoptokenasync" /><code>{"async Task<string> GetShopTokenAsync()"}</code> | <span className="api-desc">Returns an empty string.</span> |
| <Link id="m-validateuserspurchasesasync" /><code>{"async Task<bool> ValidateUsersPurchasesAsync(int userIdentifier, IEnumerable<uint> itemHashes)"}</code> | <span className="api-desc">Always true.</span> |
| <Link id="m-validateuserspurchasesviaskusasync" /><code>{"async Task<bool> ValidateUsersPurchasesViaSKUsAsync(int userIdentifier, IEnumerable<string> itemSKUs)"}</code> | <span className="api-desc">Always true.</span> |
