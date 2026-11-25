---
title: "ShopItemSet"
description: "class ShopItemSet in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopItemSet

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`IIdentifiable`](/game-api/types/assembly-api-models/iidentifiable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopItemSet()"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> |  |
| <Link id="m-items" /><code>{"IEnumerable<"}<Link to="/game-api/types/assembly-api-models/shopitemidentifier">{"ShopItemIdentifier"}</Link>{"> Items { get; set; }"}</code> |  |
| <Link id="m-sku" /><code>{"string Sku { get; set; }"}</code> |  |
| <Link id="m-type" /><code><Link to="/game-api/types/assembly-api-models/itemsettype">{"ItemSetType"}</Link>{" Type { get; set; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `ShopItemSet`:

[`IShopEditor.CreateNewItemSet`](/game-api/types/assembly-api-client/ishopeditor#m-createnewitemset), [`IShopEditor.DeleteItemSet`](/game-api/types/assembly-api-client/ishopeditor#m-deleteitemset), [`IShopEditor.GetItemSet`](/game-api/types/assembly-api-client/ishopeditor#m-getitemset), [`IShopEditor.UpdateItemSetAsync`](/game-api/types/assembly-api-client/ishopeditor#m-updateitemsetasync), [`OfflineShopEditor.CreateNewItemSet`](/game-api/types/assembly-api-client/offlineshopeditor#m-createnewitemset), [`OfflineShopEditor.DeleteItemSet`](/game-api/types/assembly-api-client/offlineshopeditor#m-deleteitemset), [`OfflineShopEditor.GetItemSet`](/game-api/types/assembly-api-client/offlineshopeditor#m-getitemset), [`OfflineShopEditor.UpdateItemSetAsync`](/game-api/types/assembly-api-client/offlineshopeditor#m-updateitemsetasync), [`ShopEditor.CreateNewItemSet`](/game-api/types/assembly-api-client/shopeditor#m-createnewitemset), [`ShopEditor.DeleteItemSet`](/game-api/types/assembly-api-client/shopeditor#m-deleteitemset), [`ShopEditor.GetItemSet`](/game-api/types/assembly-api-client/shopeditor#m-getitemset), [`ShopEditor.UpdateItemSetAsync`](/game-api/types/assembly-api-client/shopeditor#m-updateitemsetasync), [`LowLevelApiClient.CreateShopItemSetAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-createshopitemsetasync), [`LowLevelApiClient.GetShopItemSetAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getshopitemsetasync), [`LowLevelApiClient.UpdateShopItemSetAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-updateshopitemsetasync).
