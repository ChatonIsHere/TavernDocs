---
title: "OwnedShopItem"
description: "A shop item a user owns, as returned by the web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OwnedShopItem

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

A shop item a user owns, as returned by the web API.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`IIdentifiable`](/mod/game-api/types/assembly-api-models/iidentifiable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OwnedShopItem()"}</code> | <span className="api-desc">Creates an `OwnedShopItem` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> | <span className="api-desc">The shop item's ID.</span> |
| <Link id="m-isset" /><code>{"bool IsSet { get; }"}</code> | <span className="api-desc">True when the SKU starts with `set_`, meaning the item is a set of other items.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">The item's name.</span> |
| <Link id="m-quantity" /><code>{"int Quantity { get; set; }"}</code> | <span className="api-desc">How many the user owns.</span> |
| <Link id="m-sku" /><code>{"string Sku { get; set; }"}</code> | <span className="api-desc">The item's SKU, which links it to the game's cosmetic definition.</span> |

## Used in

Members of other types that take, return or hold a `OwnedShopItem`:

<div className="api-used-in">

[`IShopAccount.GetOwnedItems`](/mod/game-api/types/assembly-api-client/ishopaccount#m-getowneditems), [`OfflineShopAccount.GetOwnedItems`](/mod/game-api/types/assembly-api-client/offlineshopaccount#m-getowneditems), [`ShopAccount.GetOwnedItems`](/mod/game-api/types/assembly-api-client/shopaccount#m-getowneditems), [`LowLevelApiClient.GetOwnedItems`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getowneditems), [`PurchasedList.ownedItems`](/mod/game-api/types/alta-customization/purchasedlist#m-owneditems), [`OwnedShopItemExtensions.GetHash`](/mod/game-api/types/global-m-o/ownedshopitemextensions#m-gethash).

</div>
