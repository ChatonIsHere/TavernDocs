---
title: "ShopEditor"
description: "Online client for managing shop items and item sets, an Alta staff tool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopEditor

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Online client for managing shop items and item sets, an Alta staff tool. Reached through `ShopClient.Editor`; calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`IShopEditor`](/mod/game-api/types/assembly-api-client/ishopeditor)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal ShopEditor("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | <span className="api-desc">Creates a `ShopEditor` from `clientManager`.</span> |

</details>

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clientmanager" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager"}</code> | <span className="api-desc">The client manager requests are sent through.</span> |
| <Link id="m-itemsetrequest" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/itemsetrequest">{"ItemSetRequest"}</Link>{" itemSetRequest"}</code> | <span className="api-desc">Last request built by `CreateNewItemSet`.</span> |
| <Link id="m-setrequest" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/itemsetrequest">{"ItemSetRequest"}</Link>{" setRequest"}</code> | <span className="api-desc">Last request built by `UpdateItemSetAsync`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addimagetoitemasync" /><code>{"Task AddImageToItemAsync(int itemId, "}<Link to="/mod/game-api/types/assembly-api-models/imagetype">{"ImageType"}</Link>{" imageType, string imagePath)"}</code> | <span className="api-desc">Uploads an image of the given type for an item.</span> |
| <Link id="m-createnewitem" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> CreateNewItem("}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToCreate)"}</code> | <span className="api-desc">Creates a shop item.</span> |
| <Link id="m-createnewitemset" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> CreateNewItemSet("}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" setItem, IEnumerable<int> items, "}<Link to="/mod/game-api/types/assembly-api-models/itemsettype">{"ItemSetType"}</Link>{" type = 22)"}</code> | <span className="api-desc">Creates an item set (an outfit by default) from a set item and item IDs.</span> |
| <Link id="m-deleteitem" /><code>{"Task DeleteItem("}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToDelete)"}</code> | <span className="api-desc">Deletes a shop item.</span> |
| <Link id="m-deleteitemset" /><code>{"Task DeleteItemSet("}<Link to="/mod/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{" setToDelete)"}</code> | <span className="api-desc">Deletes an item set by its SKU.</span> |
| <Link id="m-getitem" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> GetItem(int itemIdentifier)"}</code> | <span className="api-desc">Gets one shop item by ID.</span> |
| <Link id="m-getitemset" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> GetItemSet(string setSku)"}</code> | <span className="api-desc">Gets an item set by SKU.</span> |
| <Link id="m-updateitemasync" /><code>{"async Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> UpdateItemAsync("}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToUpdate)"}</code> | <span className="api-desc">Updates a shop item.</span> |
| <Link id="m-updateitemsetasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> UpdateItemSetAsync("}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" setItem, IEnumerable<int> items, "}<Link to="/mod/game-api/types/assembly-api-models/itemsettype">{"ItemSetType"}</Link>{" type = 22)"}</code> | <span className="api-desc">Replaces an item set's items and type.</span> |
