---
title: "ShopAccountInfo"
description: "class ShopAccountInfo in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopAccountInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Nested types** [`SubscriptionStatus`](/game-api/types/assembly-api-models/shopaccountinfo-subscriptionstatus)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopAccountInfo()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-memberstatus" /><code><Link to="/game-api/types/assembly-api-models/shopaccountinfo-subscriptionstatus">{"ShopAccountInfo.SubscriptionStatus"}</Link>{" MemberStatus { get; set; }"}</code> |  |
| <Link id="m-shardbalance" /><code>{"int ShardBalance { get; set; }"}</code> |  |
| <Link id="m-walletamount" /><code>{"decimal WalletAmount { get; set; }"}</code> |  |
| <Link id="m-walletcurrency" /><code>{"string WalletCurrency { get; set; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `ShopAccountInfo`:

[`IShopAccount.GetShopAccountInfo`](/game-api/types/assembly-api-client/ishopaccount#m-getshopaccountinfo), [`OfflineShopAccount.GetShopAccountInfo`](/game-api/types/assembly-api-client/offlineshopaccount#m-getshopaccountinfo), [`OfflineShopAccount.shopAccountInfo`](/game-api/types/assembly-api-client/offlineshopaccount#m-shopaccountinfo), [`ShopAccount.GetShopAccountInfo`](/game-api/types/assembly-api-client/shopaccount#m-getshopaccountinfo), [`LowLevelApiClient.GetShopAccountDetailsAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getshopaccountdetailsasync), [`MainMenuShopInterface.account`](/game-api/types/alta-customization/mainmenushopinterface#m-account).
