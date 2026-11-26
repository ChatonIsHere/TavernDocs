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

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`OfflineShopEditor`](/mod/game-api/types/assembly-api-client/offlineshopeditor), [`ShopEditor`](/mod/game-api/types/assembly-api-client/shopeditor)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addimagetoitemasync" /><code>{"Task AddImageToItemAsync(int itemId, "}<Link to="/mod/game-api/types/assembly-api-models/imagetype">{"ImageType"}</Link>{" imageType, string imagePath)"}</code> | <span className="api-desc">Uploads an image file of a type to an item.</span> |
| <Link id="m-createnewitem" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> CreateNewItem("}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToCreate)"}</code> | <span className="api-desc">Creates a shop item.</span> |
| <Link id="m-createnewitemset" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> CreateNewItemSet("}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" setItem, IEnumerable<int> items, "}<Link to="/mod/game-api/types/assembly-api-models/itemsettype">{"ItemSetType"}</Link>{" type = 22)"}</code> | <span className="api-desc">Creates an item set (an outfit by default) from a set item and item ids.</span> |
| <Link id="m-deleteitem" /><code>{"Task DeleteItem("}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToDelete)"}</code> | <span className="api-desc">Deletes a shop item.</span> |
| <Link id="m-deleteitemset" /><code>{"Task DeleteItemSet("}<Link to="/mod/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{" setToDelete)"}</code> | <span className="api-desc">Deletes an item set.</span> |
| <Link id="m-getitem" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> GetItem(int itemIdentifier)"}</code> | <span className="api-desc">Gets one shop item's full details.</span> |
| <Link id="m-getitemset" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> GetItemSet(string setSku)"}</code> | <span className="api-desc">Gets an item set by SKU.</span> |
| <Link id="m-updateitemasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> UpdateItemAsync("}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToUpdate)"}</code> | <span className="api-desc">Saves changes to a shop item.</span> |
| <Link id="m-updateitemsetasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> UpdateItemSetAsync("}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" setItem, IEnumerable<int> items, "}<Link to="/mod/game-api/types/assembly-api-models/itemsettype">{"ItemSetType"}</Link>{" type = 22)"}</code> | <span className="api-desc">Saves changes to an item set.</span> |

## Used in

Members of other types that take, return or hold a `IShopEditor`:

<div className="api-used-in">

[`IShopApiClient.Editor`](/mod/game-api/types/assembly-api-client/ishopapiclient#m-editor), [`OfflineShopApiClient.Editor`](/mod/game-api/types/assembly-api-client/offlineshopapiclient#m-editor), [`ShopApiClient.Editor`](/mod/game-api/types/assembly-api-client/shopapiclient#m-editor).

</div>
