---
title: "ShopItemSet"
description: "API model for a set of shop items sold together under one SKU."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopItemSet

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

API model for a set of shop items sold together under one SKU.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`IIdentifiable`](/mod/game-api/types/assembly-api-models/iidentifiable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopItemSet()"}</code> | Creates a `ShopItemSet` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> | The set's id. |
| <Link id="m-items" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemidentifier">{"ShopItemIdentifier"}</Link>{"> Items { get; set; }"}</code> | Ids of the shop items in the set. |
| <Link id="m-sku" /><code>{"string Sku { get; set; }"}</code> | The set's store SKU. |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-models/itemsettype">{"ItemSetType"}</Link>{" Type { get; set; }"}</code> | What kind of item set this is. |

## Used in

Members of other types that take, return or hold a `ShopItemSet`:

[`IShopEditor.CreateNewItemSet`](/mod/game-api/types/assembly-api-client/ishopeditor#m-createnewitemset), [`IShopEditor.DeleteItemSet`](/mod/game-api/types/assembly-api-client/ishopeditor#m-deleteitemset), [`IShopEditor.GetItemSet`](/mod/game-api/types/assembly-api-client/ishopeditor#m-getitemset), [`IShopEditor.UpdateItemSetAsync`](/mod/game-api/types/assembly-api-client/ishopeditor#m-updateitemsetasync), [`OfflineShopEditor.CreateNewItemSet`](/mod/game-api/types/assembly-api-client/offlineshopeditor#m-createnewitemset), [`OfflineShopEditor.DeleteItemSet`](/mod/game-api/types/assembly-api-client/offlineshopeditor#m-deleteitemset), [`OfflineShopEditor.GetItemSet`](/mod/game-api/types/assembly-api-client/offlineshopeditor#m-getitemset), [`OfflineShopEditor.UpdateItemSetAsync`](/mod/game-api/types/assembly-api-client/offlineshopeditor#m-updateitemsetasync), [`ShopEditor.CreateNewItemSet`](/mod/game-api/types/assembly-api-client/shopeditor#m-createnewitemset), [`ShopEditor.DeleteItemSet`](/mod/game-api/types/assembly-api-client/shopeditor#m-deleteitemset), [`ShopEditor.GetItemSet`](/mod/game-api/types/assembly-api-client/shopeditor#m-getitemset), [`ShopEditor.UpdateItemSetAsync`](/mod/game-api/types/assembly-api-client/shopeditor#m-updateitemsetasync), [`LowLevelApiClient.CreateShopItemSetAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-createshopitemsetasync), [`LowLevelApiClient.GetShopItemSetAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getshopitemsetasync), [`LowLevelApiClient.UpdateShopItemSetAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-updateshopitemsetasync).
