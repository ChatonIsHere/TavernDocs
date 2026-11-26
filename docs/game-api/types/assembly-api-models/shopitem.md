---
title: "ShopItem"
description: "An item in Alta's shop, such as a cosmetic or a set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopItem

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

An item in Alta's shop, such as a cosmetic or a set.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`IIdentifiable`](/game-api/types/assembly-api-models/iidentifiable)
- **Derived types** [`ShopItemDetailed`](/game-api/types/assembly-api-models/shopitemdetailed)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ShopItem()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canonlybeboughtonce" /><code>{"bool CanOnlyBeBoughtOnce { get; set; }"}</code> | True if a user may only buy it once. Defaults to true. |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> | The item's numeric id. |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; set; }"}</code> | Whether the item is on sale. Not part of the JSON. |
| <Link id="m-isset" /><code>{"bool IsSet { get; }"}</code> | True when the SKU starts with `set_`, meaning the item is a bundle. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | Display name. |
| <Link id="m-price" /><code><Link to="/game-api/types/assembly-api-models/shopprice">{"ShopPrice"}</Link>{" Price { get; set; }"}</code> | The item's price. |
| <Link id="m-purchasecount" /><code>{"int PurchaseCount { get; set; }"}</code> | How many times it has been bought. |
| <Link id="m-sku" /><code>{"string Sku { get; set; }"}</code> | The item's SKU, its text id. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Formats as `Id - Sku`. |

## Used in

Members of other types that take, return or hold a `ShopItem`:

[`IShopApiClient.GetFullItemDescriptions`](/game-api/types/assembly-api-client/ishopapiclient#m-getfullitemdescriptions), [`OfflineShopApiClient.GetFullItemDescriptions`](/game-api/types/assembly-api-client/offlineshopapiclient#m-getfullitemdescriptions), [`ShopApiClient.GetFullItemDescriptions`](/game-api/types/assembly-api-client/shopapiclient#m-getfullitemdescriptions), [`LowLevelApiClient.GetFullItemDescriptions`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getfullitemdescriptions).
