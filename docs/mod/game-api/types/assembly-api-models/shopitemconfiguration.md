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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopItemConfiguration()"}</code> | <span className="api-desc">Creates a `ShopItemConfiguration` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-discountpercentage" /><code>{"decimal? DiscountPercentage { get; set; }"}</code> | <span className="api-desc">Discount on the item, if any.</span> |
| <Link id="m-identifier" /><code>{"string Identifier { get; set; }"}</code> | <span className="api-desc">The configuration entry's id.</span> |
| <Link id="m-issupporteronlydiscount" /><code>{"bool IsSupporterOnlyDiscount { get; set; }"}</code> | <span className="api-desc">True if the discount only applies to supporters.</span> |
| <Link id="m-itemsku" /><code>{"string ItemSku { get; set; }"}</code> | <span className="api-desc">SKU of the item this entry is for.</span> |
| <Link id="m-promo" /><code>{"string Promo { get; set; }"}</code> | <span className="api-desc">Promotion label, if any.</span> |
| <Link id="m-shards" /><code>{"int? Shards { get; set; }"}</code> | <span className="api-desc">Price in shards, if set.</span> |

## Used in

Members of other types that take, return or hold a `ShopItemConfiguration`:

<div className="api-used-in">

[`ShopPageConfiguration.AllItemConfigurations`](/mod/game-api/types/assembly-api-models/shoppageconfiguration#m-allitemconfigurations), [`ShopPageConfiguration.PrimaryItems`](/mod/game-api/types/assembly-api-models/shoppageconfiguration#m-primaryitems), [`ShopPageConfiguration.SecondaryItems`](/mod/game-api/types/assembly-api-models/shoppageconfiguration#m-secondaryitems), [`PurchasedList.AddItems`](/mod/game-api/types/alta-customization/purchasedlist#m-additems).

</div>
