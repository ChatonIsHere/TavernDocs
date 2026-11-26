---
title: "PurchaseResult"
description: "Alta API response to buying a shop item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PurchaseResult

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Alta API response to buying a shop item.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PurchaseResult()"}</code> | Creates a `PurchaseResult` from `result`. |
| <Link id="m-ctor-2" /><code>{"PurchaseResult("}<Link to="/mod/game-api/types/assembly-api-models/purchaseresulttype">{"PurchaseResultType"}</Link>{" result)"}</code> | Creates a `PurchaseResult` from `result`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-result" /><code><Link to="/mod/game-api/types/assembly-api-models/purchaseresulttype">{"PurchaseResultType"}</Link>{" Result { get; set; }"}</code> | Outcome of the purchase. |
| <Link id="m-transactionidentifier" /><code>{"int? TransactionIdentifier { get; set; }"}</code> | Shop transaction ID, if one was made. |

## Used in

Members of other types that take, return or hold a `PurchaseResult`:

[`IShopPurchase.PurchaseItem`](/mod/game-api/types/assembly-api-client/ishoppurchase#m-purchaseitem), [`OfflineShopPurchase.PurchaseItem`](/mod/game-api/types/assembly-api-client/offlineshoppurchase#m-purchaseitem), [`OfflineShopPurchase.PurchaseSpecial`](/mod/game-api/types/assembly-api-client/offlineshoppurchase#m-purchasespecial), [`ShopPurchase.PurchaseItem`](/mod/game-api/types/assembly-api-client/shoppurchase#m-purchaseitem), [`LowLevelApiClient.PurchaseItem`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-purchaseitem).
