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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Nested types** [`SubscriptionStatus`](/mod/game-api/types/assembly-api-models/shopaccountinfo-subscriptionstatus)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopAccountInfo()"}</code> | <span className="api-desc">Creates a `ShopAccountInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-memberstatus" /><code><Link to="/mod/game-api/types/assembly-api-models/shopaccountinfo-subscriptionstatus">{"ShopAccountInfo.SubscriptionStatus"}</Link>{" MemberStatus { get; set; }"}</code> | <span className="api-desc">Supporter subscription details: whether they are a supporter, end date, renewal and next reward date.</span> |
| <Link id="m-shardbalance" /><code>{"int ShardBalance { get; set; }"}</code> | <span className="api-desc">How many shop shards the user has.</span> |
| <Link id="m-walletamount" /><code>{"decimal WalletAmount { get; set; }"}</code> | <span className="api-desc">Money in the user's wallet, in `WalletCurrency`.</span> |
| <Link id="m-walletcurrency" /><code>{"string WalletCurrency { get; set; }"}</code> | <span className="api-desc">Currency code for `WalletAmount`.</span> |

## Used in

Members of other types that take, return or hold a `ShopAccountInfo`:

<div className="api-used-in">

[`IShopAccount.GetShopAccountInfo`](/mod/game-api/types/assembly-api-client/ishopaccount#m-getshopaccountinfo), [`OfflineShopAccount.GetShopAccountInfo`](/mod/game-api/types/assembly-api-client/offlineshopaccount#m-getshopaccountinfo), [`OfflineShopAccount.shopAccountInfo`](/mod/game-api/types/assembly-api-client/offlineshopaccount#m-shopaccountinfo), [`ShopAccount.GetShopAccountInfo`](/mod/game-api/types/assembly-api-client/shopaccount#m-getshopaccountinfo), [`LowLevelApiClient.GetShopAccountDetailsAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getshopaccountdetailsasync), [`MainMenuShopInterface.account`](/mod/game-api/types/alta-customization/mainmenushopinterface#m-account).

</div>
