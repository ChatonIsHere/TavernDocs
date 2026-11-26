---
title: "PurchaseItemTokenRequest"
description: "Alta web API request body for buying a shop item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PurchaseItemTokenRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Alta web API request body for buying a shop item.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PurchaseItemTokenRequest()"}</code> | Creates a `PurchaseItemTokenRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-itemidentifier" /><code>{"int ItemIdentifier { get; set; }"}</code> | Id of the item to buy (`item_id`). |
| <Link id="m-oculuscredentials" /><code><Link to="/mod/game-api/types/assembly-api-models/accountrequestbase">{"AccountRequestBase"}</Link>{" OculusCredentials { get; set; }"}</code> | Oculus credentials for buying through the Oculus store (`oculus_credentials`). |

## Used in

Members of other types that take, return or hold a `PurchaseItemTokenRequest`:

[`ShopPurchase.itemTokenRequest`](/mod/game-api/types/assembly-api-client/shoppurchase#m-itemtokenrequest), [`ShopPurchase.purchaseItemTokenRequest`](/mod/game-api/types/assembly-api-client/shoppurchase#m-purchaseitemtokenrequest), [`LowLevelApiClient.PurchaseItem`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-purchaseitem).
