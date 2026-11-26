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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IShopEditor`](/game-api/types/assembly-api-client/ishopeditor)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"internal ShopEditor("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> |

</details>

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clientmanager" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager"}</code> | The client manager requests are sent through. |
| <Link id="m-itemsetrequest" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/itemsetrequest">{"ItemSetRequest"}</Link>{" itemSetRequest"}</code> | Last request built by `CreateNewItemSet`. |
| <Link id="m-setrequest" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/itemsetrequest">{"ItemSetRequest"}</Link>{" setRequest"}</code> | Last request built by `UpdateItemSetAsync`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addimagetoitemasync" /><code>{"Task AddImageToItemAsync(int itemId, "}<Link to="/game-api/types/assembly-api-models/imagetype">{"ImageType"}</Link>{" imageType, string imagePath)"}</code> | Uploads an image of the given type for an item. |
| <Link id="m-createnewitem" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> CreateNewItem("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToCreate)"}</code> | Creates a shop item. |
| <Link id="m-createnewitemset" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> CreateNewItemSet("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" setItem, IEnumerable<int> items, "}<Link to="/game-api/types/assembly-api-models/itemsettype">{"ItemSetType"}</Link>{" type = 22)"}</code> | Creates an item set (an outfit by default) from a set item and item IDs. |
| <Link id="m-deleteitem" /><code>{"Task DeleteItem("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToDelete)"}</code> | Deletes a shop item. |
| <Link id="m-deleteitemset" /><code>{"Task DeleteItemSet("}<Link to="/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{" setToDelete)"}</code> | Deletes an item set by its SKU. |
| <Link id="m-getitem" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> GetItem(int itemIdentifier)"}</code> | Gets one shop item by ID. |
| <Link id="m-getitemset" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> GetItemSet(string setSku)"}</code> | Gets an item set by SKU. |
| <Link id="m-updateitemasync" /><code>{"async Task<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> UpdateItemAsync("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToUpdate)"}</code> | Updates a shop item. |
| <Link id="m-updateitemsetasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> UpdateItemSetAsync("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" setItem, IEnumerable<int> items, "}<Link to="/game-api/types/assembly-api-models/itemsettype">{"ItemSetType"}</Link>{" type = 22)"}</code> | Replaces an item set's items and type. |
