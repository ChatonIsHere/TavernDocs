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
| <Link id="m-ctor" /><code>{"ShopItemModificationRequest()"}</code> | <span className="api-desc">Creates a `ShopItemModificationRequest` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canonlybeboughtonce" /><code>{"bool CanOnlyBeBoughtOnce { get; set; }"}</code> | <span className="api-desc">Whether each user can buy it only once; true by default.</span> |
| <Link id="m-category" /><code>{"int Category { get; set; }"}</code> | <span className="api-desc">Id of the item's shop category.</span> |
| <Link id="m-currency" /><code>{"string Currency { get; set; }"}</code> | <span className="api-desc">Currency the price is in.</span> |
| <Link id="m-description" /><code>{"string Description { get; set; }"}</code> | <span className="api-desc">Item description.</span> |
| <Link id="m-id" /><code>{"int Id { get; set; }"}</code> | <span className="api-desc">The item's id. Left out of the JSON when 0, so a new item gets one from the API.</span> |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; set; }"}</code> | <span className="api-desc">Whether the item is on sale.</span> |
| <Link id="m-isitemset" /><code>{"bool IsItemSet { get; }"}</code> | <span className="api-desc">True when the SKU has the `set_` prefix. Read only.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Item name.</span> |
| <Link id="m-price" /><code>{"decimal Price { get; set; }"}</code> | <span className="api-desc">Item price.</span> |
| <Link id="m-purchasecount" /><code>{"int PurchaseCount { get; set; }"}</code> | <span className="api-desc">How many times it has been bought.</span> |
| <Link id="m-shopitemset" /><code>{"int ShopItemSet { get; set; }"}</code> | <span className="api-desc">Id of the set this item belongs to, left out when 0.</span> |
| <Link id="m-sku" /><code>{"string Sku { get; set; }"}</code> | <span className="api-desc">The item's SKU; a `set_` prefix makes it an item set.</span> |
| <Link id="m-xsollaitemid" /><code>{"int XsollaItemId { get; set; }"}</code> | <span className="api-desc">The item's id in Xsolla, the payment provider.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Returns the id and SKU.</span> |
