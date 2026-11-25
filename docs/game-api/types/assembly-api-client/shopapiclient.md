---
title: "ShopApiClient"
description: "class ShopApiClient in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopApiClient

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`HighLevelApiClientBase`](/game-api/types/assembly-api-client/highlevelapiclientbase), [`IShopApiClient`](/game-api/types/assembly-api-client/ishopapiclient)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ShopApiClient("}<Link to="/game-api/types/assembly-api-client/highlevelapiclient">{"HighLevelApiClient"}</Link>{" highLevelApiClient)"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-account" /><code><Link to="/game-api/types/assembly-api-client/ishopaccount">{"IShopAccount"}</Link>{" Account { get; }"}</code> |
| <Link id="m-editor" /><code><Link to="/game-api/types/assembly-api-client/ishopeditor">{"IShopEditor"}</Link>{" Editor { get; }"}</code> |
| <Link id="m-oculus" /><code><Link to="/game-api/types/assembly-api-client/ioculusshop">{"IOculusShop"}</Link>{" Oculus { get; }"}</code> |
| <Link id="m-purchase" /><code><Link to="/game-api/types/assembly-api-client/ishoppurchase">{"IShopPurchase"}</Link>{" Purchase { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getcurrentshopconfiguration" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shoppageconfiguration">{"ShopPageConfiguration"}</Link>{"> GetCurrentShopConfiguration()"}</code> |
| <Link id="m-getcurrentshopconfigurationforuser" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailedforuser">{"ShopItemDetailedForUser"}</Link>{">> GetCurrentShopConfigurationForUser()"}</code> |
| <Link id="m-getcurrentshopconfigurationwithbanner" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shoppageconfigurationwithbanner">{"ShopPageConfigurationWithBanner"}</Link>{"> GetCurrentShopConfigurationWithBanner()"}</code> |
| <Link id="m-getfullitemdescriptions" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/shopitem">{"ShopItem"}</Link>{">> GetFullItemDescriptions(IEnumerable<int> itemIdentifiers)"}</code> |
| <Link id="m-getshoptokenasync" /><code>{"async Task<string> GetShopTokenAsync()"}</code> |
| <Link id="m-validateuserspurchasesasync" /><code>{"async Task<bool> ValidateUsersPurchasesAsync(int userIdentifier, IEnumerable<uint> itemHashes)"}</code> |
| <Link id="m-validateuserspurchasesviaskusasync" /><code>{"async Task<bool> ValidateUsersPurchasesViaSKUsAsync(int userIdentifier, IEnumerable<string> itemSKUs)"}</code> |
