---
title: "OfflineShopEditor"
description: "Offline stand-in for the shop editor."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineShopEditor

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Offline stand-in for the shop editor. Every method throws `OfflineException`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IShopEditor`](/game-api/types/assembly-api-client/ishopeditor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflineShopEditor()"}</code> | Creates an `OfflineShopEditor` with default values. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addimagetoitemasync" /><code>{"Task AddImageToItemAsync(int itemId, "}<Link to="/game-api/types/assembly-api-models/imagetype">{"ImageType"}</Link>{" imageType, string imagePath)"}</code> | Throws `OfflineException`. |
| <Link id="m-createnewitem" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> CreateNewItem("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToCreate)"}</code> | Throws `OfflineException`. |
| <Link id="m-createnewitemset" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> CreateNewItemSet("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" setItem, IEnumerable<int> items, "}<Link to="/game-api/types/assembly-api-models/itemsettype">{"ItemSetType"}</Link>{" type = 22)"}</code> | Throws `OfflineException`. |
| <Link id="m-deleteitem" /><code>{"Task DeleteItem("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToDelete)"}</code> | Throws `OfflineException`. |
| <Link id="m-deleteitemset" /><code>{"Task DeleteItemSet("}<Link to="/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{" setToDelete)"}</code> | Throws `OfflineException`. |
| <Link id="m-getitem" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> GetItem(int itemIdentifier)"}</code> | Throws `OfflineException`. |
| <Link id="m-getitemset" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> GetItemSet(string setSku)"}</code> | Throws `OfflineException`. |
| <Link id="m-updateitemasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> UpdateItemAsync("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToUpdate)"}</code> | Throws `OfflineException`. |
| <Link id="m-updateitemsetasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> UpdateItemSetAsync("}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" setItem, IEnumerable<int> items, "}<Link to="/game-api/types/assembly-api-models/itemsettype">{"ItemSetType"}</Link>{" type = 22)"}</code> | Throws `OfflineException`. |
