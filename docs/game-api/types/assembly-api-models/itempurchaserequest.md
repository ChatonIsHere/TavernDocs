---
title: "ItemPurchaseRequest"
description: "Request body for buying a shop item with a payment method."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemPurchaseRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

Request body for buying a shop item with a payment method.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`PurchaseRequest`](/game-api/types/assembly-api-models/purchaserequest)
- **Derived types** [`ItemDeleteRequest`](/game-api/types/assembly-api-models/itemdeleterequest)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ItemPurchaseRequest()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-itemidentifier" /><code>{"int ItemIdentifier { get; set; }"}</code> | Id of the item to buy, sent as `item_id`. |
