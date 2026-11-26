---
title: "ItemSetRequest"
description: "Request body for creating or updating a shop item set (a bundle) through Alta's web API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemSetRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Request body for creating or updating a shop item set (a bundle) through Alta's web API.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemSetRequest()"}</code> | Creates an `ItemSetRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code>{"IEnumerable<int> Items { get; set; }"}</code> | Ids of the shop items in the set. |
| <Link id="m-setitem" /><code><Link to="/mod/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{" SetItem { get; set; }"}</code> | The shop item that represents the set itself. |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/assembly-api-models/itemsettype">{"ItemSetType"}</Link>{" Type { get; set; }"}</code> | The kind of set. |

## Used in

Members of other types that take, return or hold a `ItemSetRequest`:

[`ShopEditor.itemSetRequest`](/mod/game-api/types/assembly-api-client/shopeditor#m-itemsetrequest), [`ShopEditor.setRequest`](/mod/game-api/types/assembly-api-client/shopeditor#m-setrequest), [`LowLevelApiClient.CreateShopItemSetAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-createshopitemsetasync), [`LowLevelApiClient.UpdateShopItemSetAsync`](/mod/game-api/types/assembly-api-client/lowlevelapiclient#m-updateshopitemsetasync).
