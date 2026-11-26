---
title: "IShopEditor"
description: "Alta web API calls for creating and editing shop items and item sets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IShopEditor

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API calls for creating and editing shop items and item sets. `ShopClient.Editor`. Probably staff only.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`OfflineShopEditor`](/game-api/types/assembly-api-client/offlineshopeditor), [`ShopEditor`](/game-api/types/assembly-api-client/shopeditor)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addimagetoitemasync" /><code>{"Task AddImageToItemAsync(int itemId, "}<Link to="/game-api/types/assembly-api-models/imagetype">{"ImageType"}</Link>{" imageType, string imagePath)"}</code> | Uploads an image file of a type to an item. |
| <Link id="m-createnewitem" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> CreateNewItem("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToCreate)"}</code> | Creates a shop item. |
| <Link id="m-createnewitemset" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> CreateNewItemSet("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" setItem, IEnumerable<int> items, "}<Link to="/game-api/types/assembly-api-models/itemsettype">{"ItemSetType"}</Link>{" type = 22)"}</code> | Creates an item set (an outfit by default) from a set item and item ids. |
| <Link id="m-deleteitem" /><code>{"Task DeleteItem("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToDelete)"}</code> | Deletes a shop item. |
| <Link id="m-deleteitemset" /><code>{"Task DeleteItemSet("}<Link to="/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{" setToDelete)"}</code> | Deletes an item set. |
| <Link id="m-getitem" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> GetItem(int itemIdentifier)"}</code> | Gets one shop item's full details. |
| <Link id="m-getitemset" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> GetItemSet(string setSku)"}</code> | Gets an item set by SKU. |
| <Link id="m-updateitemasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> UpdateItemAsync("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToUpdate)"}</code> | Saves changes to a shop item. |
| <Link id="m-updateitemsetasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> UpdateItemSetAsync("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" setItem, IEnumerable<int> items, "}<Link to="/game-api/types/assembly-api-models/itemsettype">{"ItemSetType"}</Link>{" type = 22)"}</code> | Saves changes to an item set. |

## Used in

Members of other types that take, return or hold a `IShopEditor`:

[`IShopApiClient.Editor`](/game-api/types/assembly-api-client/ishopapiclient#m-editor), [`OfflineShopApiClient.Editor`](/game-api/types/assembly-api-client/offlineshopapiclient#m-editor), [`ShopApiClient.Editor`](/game-api/types/assembly-api-client/shopapiclient#m-editor).
