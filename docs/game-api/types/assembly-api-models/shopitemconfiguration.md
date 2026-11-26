---
title: "ShopItemConfiguration"
description: "One entry of Alta's shop configuration: an item's discount, shard price or promotion."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopItemConfiguration

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Responses`.

One entry of Alta's shop configuration: an item's discount, shard price or promotion.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopItemConfiguration()"}</code> | Creates a `ShopItemConfiguration` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-discountpercentage" /><code>{"decimal? DiscountPercentage { get; set; }"}</code> | Discount on the item, if any. |
| <Link id="m-identifier" /><code>{"string Identifier { get; set; }"}</code> | The configuration entry's id. |
| <Link id="m-issupporteronlydiscount" /><code>{"bool IsSupporterOnlyDiscount { get; set; }"}</code> | True if the discount only applies to supporters. |
| <Link id="m-itemsku" /><code>{"string ItemSku { get; set; }"}</code> | SKU of the item this entry is for. |
| <Link id="m-promo" /><code>{"string Promo { get; set; }"}</code> | Promotion label, if any. |
| <Link id="m-shards" /><code>{"int? Shards { get; set; }"}</code> | Price in shards, if set. |

## Used in

Members of other types that take, return or hold a `ShopItemConfiguration`:

[`ShopPageConfiguration.AllItemConfigurations`](/game-api/types/assembly-api-models/shoppageconfiguration#m-allitemconfigurations), [`ShopPageConfiguration.PrimaryItems`](/game-api/types/assembly-api-models/shoppageconfiguration#m-primaryitems), [`ShopPageConfiguration.SecondaryItems`](/game-api/types/assembly-api-models/shoppageconfiguration#m-secondaryitems), [`PurchasedList.AddItems`](/game-api/types/alta-customization/purchasedlist#m-additems).
