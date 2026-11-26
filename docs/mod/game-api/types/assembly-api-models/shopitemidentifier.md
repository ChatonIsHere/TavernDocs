---
title: "ShopItemIdentifier"
description: "Identifies a shop item by its numeric id and SKU."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopItemIdentifier

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

Identifies a shop item by its numeric id and SKU.

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopItemIdentifier()"}</code> | <span className="api-desc">Creates a `ShopItemIdentifier` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | <span className="api-desc">Shop item id.</span> |
| <Link id="m-sku" /><code>{"string Sku { get; set; }"}</code> | <span className="api-desc">Store SKU string.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Id and SKU in brackets, for logs.</span> |

## Used in

Members of other types that take, return or hold a `ShopItemIdentifier`:

<div className="api-used-in">

[`GiftResult.ItemInfo`](/mod/game-api/types/assembly-api-models/giftresult#m-iteminfo), [`ShopItemSet.Items`](/mod/game-api/types/assembly-api-models/shopitemset#m-items).

</div>
