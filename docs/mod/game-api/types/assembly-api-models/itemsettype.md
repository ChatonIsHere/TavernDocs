---
title: "ItemSetType"
description: "Kind of shop item set: an outfit or a bundle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemSetType

An **enum** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

Kind of shop item set: an outfit or a bundle. Used when shop editors create or update sets.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Values

| Member |
| --- |
| <Link id="m-bundle" /><code>{"Bundle = 23"}</code> |
| <Link id="m-outfit" /><code>{"Outfit = 22"}</code> |

## Used in

Members of other types that take, return or hold a `ItemSetType`:

[`IShopEditor.CreateNewItemSet`](/mod/game-api/types/assembly-api-client/ishopeditor#m-createnewitemset), [`IShopEditor.UpdateItemSetAsync`](/mod/game-api/types/assembly-api-client/ishopeditor#m-updateitemsetasync), [`OfflineShopEditor.CreateNewItemSet`](/mod/game-api/types/assembly-api-client/offlineshopeditor#m-createnewitemset), [`OfflineShopEditor.UpdateItemSetAsync`](/mod/game-api/types/assembly-api-client/offlineshopeditor#m-updateitemsetasync), [`ShopEditor.CreateNewItemSet`](/mod/game-api/types/assembly-api-client/shopeditor#m-createnewitemset), [`ShopEditor.UpdateItemSetAsync`](/mod/game-api/types/assembly-api-client/shopeditor#m-updateitemsetasync), [`ItemSetRequest.Type`](/mod/game-api/types/assembly-api-models/itemsetrequest#m-type), [`ShopItemSet.Type`](/mod/game-api/types/assembly-api-models/shopitemset#m-type), [`CosmeticSetDefinition.setType`](/mod/game-api/types/alta-customization/cosmeticsetdefinition#m-settype), [`CosmeticSetDefinition.SetType`](/mod/game-api/types/alta-customization/cosmeticsetdefinition#m-settype-2).
