---
title: "ShopItemSetModificationRequest"
description: "A shop item set as staff create or edit it: a shop item plus the items in the set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopItemSetModificationRequest

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

A shop item set as staff create or edit it: a shop item plus the items in the set.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** [`ShopItemModificationRequest`](/game-api/types/assembly-api-models/shopitemmodificationrequest)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ShopItemSetModificationRequest()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-setitems" /><code>{"List<"}<Link to="/game-api/types/assembly-api-models/shopitemdetailed">{"ShopItemDetailed"}</Link>{"> SetItems { get; set; }"}</code> | The items the set contains. |
