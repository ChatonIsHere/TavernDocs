---
title: "ShopItemModificationRequest"
description: "A shop item as staff create or edit it through the API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopItemModificationRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

A shop item as staff create or edit it through the API.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`IIdentifiable`](/mod/game-api/types/assembly-api-models/iidentifiable)
- **Derived types** [`ShopItemSetModificationRequest`](/mod/game-api/types/assembly-api-models/shopitemsetmodificationrequest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopItemModificationRequest()"}</code> | Creates a `ShopItemModificationRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canonlybeboughtonce" /><code>{"bool CanOnlyBeBoughtOnce { get; set; }"}</code> | Whether each user can buy it only once; true by default. |
| <Link id="m-category" /><code>{"int Category { get; set; }"}</code> | Id of the item's shop category. |
| <Link id="m-currency" /><code>{"string Currency { get; set; }"}</code> | Currency the price is in. |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | Item description. |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> | The item's id. Left out of the JSON when 0, so a new item gets one from the API. |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; set; }"}</code> | Whether the item is on sale. |
| <Link id="m-isitemset" /><code>{"bool IsItemSet { get; }"}</code> | True when the SKU has the `set_` prefix. Read only. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | Item name. |
| <Link id="m-price" /><code>{"decimal Price { get; set; }"}</code> | Item price. |
| <Link id="m-purchasecount" /><code>{"int PurchaseCount { get; set; }"}</code> | How many times it has been bought. |
| <Link id="m-shopitemset" /><code>{"int ShopItemSet { get; set; }"}</code> | Id of the set this item belongs to, left out when 0. |
| <Link id="m-sku" /><code>{"string Sku { get; set; }"}</code> | The item's SKU; a `set_` prefix makes it an item set. |
| <Link id="m-xsollaitemid" /><code>{"int XsollaItemId { get; set; }"}</code> | The item's id in Xsolla, the payment provider. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Returns the id and SKU. |
