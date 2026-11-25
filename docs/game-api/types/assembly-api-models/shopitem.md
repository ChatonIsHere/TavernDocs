---
title: "ShopItem"
description: "class ShopItem in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopItem

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`IIdentifiable`](/game-api/types/assembly-api-models/iidentifiable)
- **Derived types** [`ShopItemDetailed`](/game-api/types/assembly-api-models/shopitemdetailed)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopItem()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canonlybeboughtonce" /><code>{"bool CanOnlyBeBoughtOnce { get; set; }"}</code> |  |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> |  |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; set; }"}</code> |  |
| <Link id="m-isset" /><code>{"bool IsSet { get; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> |  |
| <Link id="m-price" /><code><Link to="/game-api/types/assembly-api-models/shopprice">{"ShopPrice"}</Link>{" Price { get; set; }"}</code> |  |
| <Link id="m-purchasecount" /><code>{"int PurchaseCount { get; set; }"}</code> |  |
| <Link id="m-sku" /><code>{"string Sku { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ShopItem`:

[`IShopApiClient.GetFullItemDescriptions`](/game-api/types/assembly-api-client/ishopapiclient#m-getfullitemdescriptions), [`OfflineShopApiClient.GetFullItemDescriptions`](/game-api/types/assembly-api-client/offlineshopapiclient#m-getfullitemdescriptions), [`ShopApiClient.GetFullItemDescriptions`](/game-api/types/assembly-api-client/shopapiclient#m-getfullitemdescriptions), [`LowLevelApiClient.GetFullItemDescriptions`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getfullitemdescriptions).
