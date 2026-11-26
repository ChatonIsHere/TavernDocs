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

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`IShopEditor`](/mod/game-api/types/assembly-api-client/ishopeditor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflineShopEditor()"}</code> | <span className="api-desc">Creates an `OfflineShopEditor` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addimagetoitemasync" /><code>{"Task AddImageToItemAsync(int itemId, "}<Link to="/mod/game-api/types/assembly-api-models/imagetype">{"ImageType"}</Link>{" imageType, string imagePath)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-createnewitem" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> CreateNewItem("}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToCreate)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-createnewitemset" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> CreateNewItemSet("}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" setItem, IEnumerable<int> items, "}<Link to="/mod/game-api/types/assembly-api-models/itemsettype">{"ItemSetType"}</Link>{" type = 22)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-deleteitem" /><code>{"Task DeleteItem("}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToDelete)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-deleteitemset" /><code>{"Task DeleteItemSet("}<Link to="/mod/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{" setToDelete)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-getitem" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> GetItem(int itemIdentifier)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-getitemset" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> GetItemSet(string setSku)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-updateitemasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> UpdateItemAsync("}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" itemToUpdate)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-updateitemsetasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopitemset">{"ShopItemSet"}</Link>{"> UpdateItemSetAsync("}<Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" setItem, IEnumerable<int> items, "}<Link to="/mod/game-api/types/assembly-api-models/itemsettype">{"ItemSetType"}</Link>{" type = 22)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
