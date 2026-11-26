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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IShopApiClient`](/game-api/types/assembly-api-client/ishopapiclient)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflineShopApiClient()"}</code> | Creates an `OfflineShopApiClient` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-account" /><code><Link to="/game-api/types/assembly-api-client/ishopaccount">{"IShopAccount"}</Link>{" Account { get; }"}</code> | An `OfflineShopAccount`. |
| <Link id="m-editor" /><code><Link to="/game-api/types/assembly-api-client/ishopeditor">{"IShopEditor"}</Link>{" Editor { get; }"}</code> | An `OfflineShopEditor`, which throws on every call. |
| <Link id="m-oculus" /><code><Link to="/game-api/types/assembly-api-client/ioculusshop">{"IOculusShop"}</Link>{" Oculus { get; }"}</code> | Throws `NotImplementedException`. |
| <Link id="m-purchase" /><code><Link to="/game-api/types/assembly-api-client/ishoppurchase">{"IShopPurchase"}</Link>{" Purchase { get; }"}</code> | An `OfflineShopPurchase`, which throws on every call. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcurrentshopconfiguration" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shoppageconfiguration">{"ShopPageConfiguration"}</Link>{"> GetCurrentShopConfiguration()"}</code> | Throws `OfflineException`. |
| <Link id="m-getcurrentshopconfigurationforuser" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{">> GetCurrentShopConfigurationForUser()"}</code> | Throws `OfflineException`. |
| <Link id="m-getcurrentshopconfigurationwithbanner" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shoppageconfigurationwithbanner">{"ShopPageConfigurationWithBanner"}</Link>{"> GetCurrentShopConfigurationWithBanner()"}</code> | Throws `OfflineException`. |
| <Link id="m-getfullitemdescriptions" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/shopitem">{"ShopItem"}</Link>{">> GetFullItemDescriptions(IEnumerable<int> itemIdentifiers)"}</code> | Throws `OfflineException`. |
| <Link id="m-getshoptokenasync" /><code>{"async Task<string> GetShopTokenAsync()"}</code> | Returns an empty string. |
| <Link id="m-validateuserspurchasesasync" /><code>{"async Task<bool> ValidateUsersPurchasesAsync(int userIdentifier, IEnumerable<uint> itemHashes)"}</code> | Always true. |
| <Link id="m-validateuserspurchasesviaskusasync" /><code>{"async Task<bool> ValidateUsersPurchasesViaSKUsAsync(int userIdentifier, IEnumerable<string> itemSKUs)"}</code> | Always true. |
