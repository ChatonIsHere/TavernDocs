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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GiftResult()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iteminfo" /><code><Link to="/game-api/types/assembly-api-models/shopitemidentifier">{"ShopItemIdentifier"}</Link>{" ItemInfo { get; set; }"}</code> | The gifted item. Its JSON key is `itemInfo ` with a trailing space. |
| <Link id="m-result" /><code><Link to="/game-api/types/assembly-api-models/giftresulttype">{"GiftResultType"}</Link>{" Result { get; set; }"}</code> | Outcome of the gift, from the `status` key. |
| <Link id="m-transactionidentifier" /><code>{"int? TransactionIdentifier { get; set; }"}</code> | Shop transaction ID, if one was made. |

## Used in

Members of other types that take, return or hold a `GiftResult`:

[`IShopAccount.GiftItem`](/game-api/types/assembly-api-client/ishopaccount#m-giftitem), [`OfflineShopAccount.GiftItem`](/game-api/types/assembly-api-client/offlineshopaccount#m-giftitem), [`OfflineShopAccount.giftResult`](/game-api/types/assembly-api-client/offlineshopaccount#m-giftresult), [`ShopAccount.GiftItem`](/game-api/types/assembly-api-client/shopaccount#m-giftitem), [`LowLevelApiClient.GiftItem`](/game-api/types/assembly-api-client/lowlevelapiclient#m-giftitem).
