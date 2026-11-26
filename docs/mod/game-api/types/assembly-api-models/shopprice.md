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

- **Listed in** [Alta.Api.DataTransferModels](/mod/game-api/types/assembly-api-models)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShopPrice()"}</code> | <span className="api-desc">Creates a `ShopPrice` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-amount" /><code>{"decimal Amount { get; set; }"}</code> | <span className="api-desc">The price amount, 1 by default.</span> |
| <Link id="m-pricetype" /><code><Link to="/mod/game-api/types/assembly-api-models/pricetype">{"PriceType"}</Link>{" "}<Link to="/mod/game-api/types/assembly-api-models/pricetype">{"PriceType"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Currency of the price, shards by default.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-multiply" /><code><Link to="/mod/game-api/types/assembly-api-models/shopprice">{"ShopPrice"}</Link>{" Multiply(int quantity)"}</code> | <span className="api-desc">Returns a new price in the same currency for the given quantity.</span> |

## Used in

Members of other types that take, return or hold a `ShopPrice`:

<div className="api-used-in">

[`ShopItem.Price`](/mod/game-api/types/assembly-api-models/shopitem#m-price).

</div>
