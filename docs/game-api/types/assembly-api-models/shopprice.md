---
title: "ShopPrice"
description: "A price in the shop: an amount and its currency."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopPrice

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Models.Shared`.

A price in the shop: an amount and its currency. Defaults to 1 shard.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopPrice()"}</code> | Creates a `ShopPrice` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-amount" /><code>{"decimal Amount { get; set; }"}</code> | The price amount, 1 by default. |
| <Link id="m-pricetype" /><code><Link to="/game-api/types/assembly-api-models/pricetype">{"PriceType"}</Link>{" "}<Link to="/game-api/types/assembly-api-models/pricetype">{"PriceType"}</Link>{" { get; set; }"}</code> | Currency of the price, shards by default. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-multiply" /><code><Link to="/game-api/types/assembly-api-models/shopprice">{"ShopPrice"}</Link>{" Multiply(int quantity)"}</code> | Returns a new price in the same currency for the given quantity. |

## Used in

Members of other types that take, return or hold a `ShopPrice`:

[`ShopItem.Price`](/game-api/types/assembly-api-models/shopitem#m-price).
