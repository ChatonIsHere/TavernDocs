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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`ShopItem`](/mod/game-api/types/assembly-api-models/shopitem)
- **Derived types** [`ShopItemDetailedForUser`](/mod/game-api/types/assembly-api-models/shopitemdetailedforuser)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopItemDetailed()"}</code> | <span className="api-desc">Creates a `ShopItemDetailed` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-category" /><code><Link to="/mod/game-api/types/assembly-api-models/itemcategory">{"ItemCategory"}</Link>{" Category { get; set; }"}</code> | <span className="api-desc">The item's shop category.</span> |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | <span className="api-desc">Shop description text.</span> |
| <Link id="m-images" /><code>{"List<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemimage">{"ShopItemImage"}</Link>{"> Images { get; set; }"}</code> | <span className="api-desc">Images shown for the item in the shop.</span> |
| <Link id="m-xsollaitemid" /><code>{"int XsollaItemId { get; set; }"}</code> | <span className="api-desc">The item's id in the Xsolla payment store.</span> |

## Used in

Members of other types that take, return or hold a `ShopItemDetailed`:

<div className="api-used-in">

[`IShopEditor.CreateNewItem`](/mod/game-api/types/assembly-api-client/ishopeditor#m-createnewitem), [`IShopEditor.CreateNewItemSet`](/mod/game-api/types/assembly-api-client/ishopeditor#m-createnewitemset), [`IShopEditor.DeleteItem`](/mod/game-api/types/assembly-api-client/ishopeditor#m-deleteitem), [`IShopEditor.GetItem`](/mod/game-api/types/assembly-api-client/ishopeditor#m-getitem), [`IShopEditor.UpdateItemAsync`](/mod/game-api/types/assembly-api-client/ishopeditor#m-updateitemasync), [`IShopEditor.UpdateItemSetAsync`](/mod/game-api/types/assembly-api-client/ishopeditor#m-updateitemsetasync), [`OfflineShopEditor.CreateNewItem`](/mod/game-api/types/assembly-api-client/offlineshopeditor#m-createnewitem), [`OfflineShopEditor.CreateNewItemSet`](/mod/game-api/types/assembly-api-client/offlineshopeditor#m-createnewitemset), [`OfflineShopEditor.DeleteItem`](/mod/game-api/types/assembly-api-client/offlineshopeditor#m-deleteitem), [`OfflineShopEditor.GetItem`](/mod/game-api/types/assembly-api-client/offlineshopeditor#m-getitem), [`OfflineShopEditor.UpdateItemAsync`](/mod/game-api/types/assembly-api-client/offlineshopeditor#m-updateitemasync), [`OfflineShopEditor.UpdateItemSetAsync`](/mod/game-api/types/assembly-api-client/offlineshopeditor#m-updateitemsetasync), [`ShopEditor.CreateNewItem`](/mod/game-api/types/assembly-api-client/shopeditor#m-createnewitem), [`ShopEditor.CreateNewItemSet`](/mod/game-api/types/assembly-api-client/shopeditor#m-createnewitemset), [`ShopEditor.DeleteItem`](/mod/game-api/types/assembly-api-client/shopeditor#m-deleteitem), [`ShopEditor.GetItem`](/mod/game-api/types/assembly-api-client/shopeditor#m-getitem), [`ShopEditor.UpdateItemAsync`](/mod/game-api/types/assembly-api-client/shopeditor#m-updateitemasync), [`ShopEditor.UpdateItemSetAsync`](/mod/game-api/types/assembly-api-client/shopeditor#m-updateitemsetasync), [`LowLevelApiClient.CreateShopItemAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-createshopitemasync), [`LowLevelApiClient.GetShopItemAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-getshopitemasync), [`LowLevelApiClient.UpdateShopItemAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-updateshopitemasync), [`ItemSetRequest.SetItem`](/mod/game-api/types/assembly-api-models/itemsetrequest#m-setitem), [`ShopItemSetModificationRequest.SetItems`](/mod/game-api/types/assembly-api-models/shopitemsetmodificationrequest#m-setitems).

</div>
