---
title: "GiftResult"
description: "Alta API response to gifting a shop item to someone."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GiftResult

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Alta API response to gifting a shop item to someone.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GiftResult()"}</code> | <span className="api-desc">Creates a `GiftResult` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iteminfo" /><code><Link to="/mod/game-api/types/assembly-api-models/shopitemidentifier">{"ShopItemIdentifier"}</Link>{" ItemInfo { get; set; }"}</code> | <span className="api-desc">The gifted item. Its JSON key is `itemInfo ` with a trailing space.</span> |
| <Link id="m-result" /><code><Link to="/mod/game-api/types/assembly-api-models/giftresulttype">{"GiftResultType"}</Link>{" Result { get; set; }"}</code> | <span className="api-desc">Outcome of the gift, from the `status` key.</span> |
| <Link id="m-transactionidentifier" /><code>{"int? TransactionIdentifier { get; set; }"}</code> | <span className="api-desc">Shop transaction ID, if one was made.</span> |

## Used in

Members of other types that take, return or hold a `GiftResult`:

<div className="api-used-in">

[`IShopAccount.GiftItem`](/mod/game-api/types/assembly-api-client/ishopaccount#m-giftitem), [`OfflineShopAccount.GiftItem`](/mod/game-api/types/assembly-api-client/offlineshopaccount#m-giftitem), [`OfflineShopAccount.giftResult`](/mod/game-api/types/assembly-api-client/offlineshopaccount#m-giftresult), [`ShopAccount.GiftItem`](/mod/game-api/types/assembly-api-client/shopaccount#m-giftitem), [`LowLevelApiClient.GiftItem`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-giftitem).

</div>
