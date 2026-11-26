---
title: "ItemDeleteRequest"
description: "An ItemPurchaseRequest with a reason, used to remove an item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemDeleteRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Requests`.

An `ItemPurchaseRequest` with a reason, used to remove an item.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)
- **Inherits or implements** [`ItemPurchaseRequest`](/mod/game-api/types/assembly-api-models/itempurchaserequest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemDeleteRequest()"}</code> | Creates an `ItemDeleteRequest` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-reason" /><code>{"string Reason { get; set; }"}</code> | Why the item is being removed. |
