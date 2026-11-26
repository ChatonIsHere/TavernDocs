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

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ShopItemIdentifier()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"int Identifier { get; set; }"}</code> | Shop item id. |
| <Link id="m-sku" /><code>{"string Sku { get; set; }"}</code> | Store SKU string. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Id and SKU in brackets, for logs. |

## Used in

Members of other types that take, return or hold a `ShopItemIdentifier`:

[`GiftResult.ItemInfo`](/game-api/types/assembly-api-models/giftresult#m-iteminfo), [`ShopItemSet.Items`](/game-api/types/assembly-api-models/shopitemset#m-items).
