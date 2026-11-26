---
title: "ShopTokenResponse"
description: "Web API model for a shop purchase token from the Xsolla payment provider."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopTokenResponse

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

Web API model for a shop purchase token from the Xsolla payment provider.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopTokenResponse(string token, int transactionIdentifier)"}</code> | Creates a `ShopTokenResponse` from `token` and `transactionIdentifier`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shopurl" /><code>{"string ShopUrl { get; }"}</code> | Xsolla pay station address built from `Token`. |
| <Link id="m-token" /><code>{"string Token { get; set; }"}</code> | The Xsolla access token for the purchase. |
| <Link id="m-transactionidentifier" /><code>{"int TransactionIdentifier { get; set; }"}</code> | ID of the shop transaction. |

## Used in

Members of other types that take, return or hold a `ShopTokenResponse`:

[`LowLevelApiClient.GetShopTokenAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getshoptokenasync).
