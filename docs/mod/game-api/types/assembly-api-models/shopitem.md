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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`IIdentifiable`](/mod/game-api/types/assembly-api-models/iidentifiable)
- **Derived types** [`ShopItemDetailed`](/mod/game-api/types/assembly-api-models/shopitemdetailed)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopItem()"}</code> | <span className="api-desc">Creates a `ShopItem` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canonlybeboughtonce" /><code>{"bool CanOnlyBeBoughtOnce { get; set; }"}</code> | <span className="api-desc">True if a user may only buy it once. Defaults to true.</span> |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> | <span className="api-desc">The item's numeric id.</span> |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; set; }"}</code> | <span className="api-desc">Whether the item is on sale. Not part of the JSON.</span> |
| <Link id="m-isset" /><code>{"bool IsSet { get; }"}</code> | <span className="api-desc">True when the SKU starts with `set_`, meaning the item is a bundle.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Display name.</span> |
| <Link id="m-price" /><code><Link to="/mod/game-api/types/assembly-api-models/shopprice">{"ShopPrice"}</Link>{" Price { get; set; }"}</code> | <span className="api-desc">The item's price.</span> |
| <Link id="m-purchasecount" /><code>{"int PurchaseCount { get; set; }"}</code> | <span className="api-desc">How many times it has been bought.</span> |
| <Link id="m-sku" /><code>{"string Sku { get; set; }"}</code> | <span className="api-desc">The item's SKU, its text id.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Formats as `Id - Sku`.</span> |

## Used in

Members of other types that take, return or hold a `ShopItem`:

<div className="api-used-in">

[`IShopApiClient.GetFullItemDescriptions`](/mod/game-api/types/assembly-api-client/ishopapiclient#m-getfullitemdescriptions), [`OfflineShopApiClient.GetFullItemDescriptions`](/mod/game-api/types/assembly-api-client/offlineshopapiclient#m-getfullitemdescriptions), [`ShopApiClient.GetFullItemDescriptions`](/mod/game-api/types/assembly-api-client/shopapiclient#m-getfullitemdescriptions), [`LowLevelApiClient.GetFullItemDescriptions`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getfullitemdescriptions).

</div>
