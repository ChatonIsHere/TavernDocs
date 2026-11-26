---
title: "ShopItemDetailed"
description: "API model for a shop item with its full details: description, category, images and Xsolla id."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopItemDetailed

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

API model for a shop item with its full details: description, category, images and Xsolla id.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`ShopItem`](/game-api/types/assembly-api-models/shopitem)
- **Derived types** [`ShopItemDetailedForUser`](/game-api/types/assembly-api-models/shopitemdetailedforuser)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopItemDetailed()"}</code> | Creates a `ShopItemDetailed` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-category" /><code><Link to="/game-api/types/assembly-api-models/itemcategory">{"ItemCategory"}</Link>{" Category { get; set; }"}</code> | The item's shop category. |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | Shop description text. |
| <Link id="m-images" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/shopitemimage">{"ShopItemImage"}</Link>{"> Images { get; set; }"}</code> | Images shown for the item in the shop. |
| <Link id="m-xsollaitemid" /><code>{"int XsollaItemId { get; set; }"}</code> | The item's id in the Xsolla payment store. |

## Used in

Members of other types that take, return or hold a `ShopItemDetailed`:

[`IShopEditor.CreateNewItem`](/game-api/types/assembly-api-client/ishopeditor#m-createnewitem), [`IShopEditor.CreateNewItemSet`](/game-api/types/assembly-api-client/ishopeditor#m-createnewitemset), [`IShopEditor.DeleteItem`](/game-api/types/assembly-api-client/ishopeditor#m-deleteitem), [`IShopEditor.GetItem`](/game-api/types/assembly-api-client/ishopeditor#m-getitem), [`IShopEditor.UpdateItemAsync`](/game-api/types/assembly-api-client/ishopeditor#m-updateitemasync), [`IShopEditor.UpdateItemSetAsync`](/game-api/types/assembly-api-client/ishopeditor#m-updateitemsetasync), [`OfflineShopEditor.CreateNewItem`](/game-api/types/assembly-api-client/offlineshopeditor#m-createnewitem), [`OfflineShopEditor.CreateNewItemSet`](/game-api/types/assembly-api-client/offlineshopeditor#m-createnewitemset), [`OfflineShopEditor.DeleteItem`](/game-api/types/assembly-api-client/offlineshopeditor#m-deleteitem), [`OfflineShopEditor.GetItem`](/game-api/types/assembly-api-client/offlineshopeditor#m-getitem), [`OfflineShopEditor.UpdateItemAsync`](/game-api/types/assembly-api-client/offlineshopeditor#m-updateitemasync), [`OfflineShopEditor.UpdateItemSetAsync`](/game-api/types/assembly-api-client/offlineshopeditor#m-updateitemsetasync), [`ShopEditor.CreateNewItem`](/game-api/types/assembly-api-client/shopeditor#m-createnewitem), [`ShopEditor.CreateNewItemSet`](/game-api/types/assembly-api-client/shopeditor#m-createnewitemset), [`ShopEditor.DeleteItem`](/game-api/types/assembly-api-client/shopeditor#m-deleteitem), [`ShopEditor.GetItem`](/game-api/types/assembly-api-client/shopeditor#m-getitem), [`ShopEditor.UpdateItemAsync`](/game-api/types/assembly-api-client/shopeditor#m-updateitemasync), [`ShopEditor.UpdateItemSetAsync`](/game-api/types/assembly-api-client/shopeditor#m-updateitemsetasync), [`LowLevelApiClient.CreateShopItemAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-createshopitemasync), [`LowLevelApiClient.GetShopItemAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-getshopitemasync), [`LowLevelApiClient.UpdateShopItemAsync`](/game-api/types/assembly-api-client/lowlevelapiclient#m-updateshopitemasync), [`ItemSetRequest.SetItem`](/game-api/types/assembly-api-models/itemsetrequest#m-setitem), [`ShopItemSetModificationRequest.SetItems`](/game-api/types/assembly-api-models/shopitemsetmodificationrequest#m-setitems).
