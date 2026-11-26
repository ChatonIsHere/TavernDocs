---
title: "ShopAccountInfo"
description: "Web API reply with a user's shop balance: shards, wallet money and supporter subscription status."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopAccountInfo

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Web API reply with a user's shop balance: shards, wallet money and supporter subscription status.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Nested types** [`SubscriptionStatus`](/game-api/types/assembly-api-models/shopaccountinfo-subscriptionstatus)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopAccountInfo()"}</code> | Creates a `ShopAccountInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-memberstatus" /><code><Link to="/game-api/types/assembly-api-models/shopaccountinfo-subscriptionstatus">{"ShopAccountInfo.SubscriptionStatus"}</Link>{" MemberStatus { get; set; }"}</code> | Supporter subscription details: whether they are a supporter, end date, renewal and next reward date. |
| <Link id="m-shardbalance" /><code>{"int ShardBalance { get; set; }"}</code> | How many shop shards the user has. |
| <Link id="m-walletamount" /><code>{"decimal WalletAmount { get; set; }"}</code> | Money in the user's wallet, in `WalletCurrency`. |
| <Link id="m-walletcurrency" /><code>{"string WalletCurrency { get; set; }"}</code> | Currency code for `WalletAmount`. |

## Used in

Members of other types that take, return or hold a `ShopAccountInfo`:

[`IShopAccount.GetShopAccountInfo`](/game-api/types/assembly-api-client/ishopaccount#m-getshopaccountinfo), [`OfflineShopAccount.GetShopAccountInfo`](/game-api/types/assembly-api-client/offlineshopaccount#m-getshopaccountinfo), [`OfflineShopAccount.shopAccountInfo`](/game-api/types/assembly-api-client/offlineshopaccount#m-shopaccountinfo), [`ShopAccount.GetShopAccountInfo`](/game-api/types/assembly-api-client/shopaccount#m-getshopaccountinfo), [`LowLevelApiClient.GetShopAccountDetailsAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getshopaccountdetailsasync), [`MainMenuShopInterface.account`](/game-api/types/alta-customization/mainmenushopinterface#m-account).
