---
title: "IShopEditor"
description: "interface IShopEditor in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IShopEditor

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`OfflineShopEditor`](/game-api/types/assembly-api-client/offlineshopeditor), [`ShopEditor`](/game-api/types/assembly-api-client/shopeditor)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addimagetoitemasync" /><code>{"Task AddImageToItemAsync(int itemId, "}<Link to="/game-api/types/assembly-api-models/imagetype">{"ImageType"}</Link>{" imageType, string imagePath)"}</code> |  |
| <Link id="m-createnewitem" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> CreateNewItem("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToCreate)"}</code> |  |
| <Link id="m-createnewitemset" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> CreateNewItemSet("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" setItem, IEnumerable<int> items, "}<Link to="/game-api/types/assembly-api-models/itemsettype">{"ItemSetType"}</Link>{" type = 22)"}</code> |  |
| <Link id="m-deleteitem" /><code>{"Task DeleteItem("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToDelete)"}</code> |  |
| <Link id="m-deleteitemset" /><code>{"Task DeleteItemSet("}<Link to="/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{" setToDelete)"}</code> |  |
| <Link id="m-getitem" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> GetItem(int itemIdentifier)"}</code> |  |
| <Link id="m-getitemset" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> GetItemSet(string setSku)"}</code> |  |
| <Link id="m-updateitemasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> UpdateItemAsync("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToUpdate)"}</code> |  |
| <Link id="m-updateitemsetasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> UpdateItemSetAsync("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" setItem, IEnumerable<int> items, "}<Link to="/game-api/types/assembly-api-models/itemsettype">{"ItemSetType"}</Link>{" type = 22)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IShopEditor`:

[`IShopApiClient.Editor`](/game-api/types/assembly-api-client/ishopapiclient#m-editor), [`OfflineShopApiClient.Editor`](/game-api/types/assembly-api-client/offlineshopapiclient#m-editor), [`ShopApiClient.Editor`](/game-api/types/assembly-api-client/shopapiclient#m-editor).
