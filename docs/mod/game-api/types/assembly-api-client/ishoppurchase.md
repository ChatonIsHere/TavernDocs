---
title: "IShopPurchase"
description: "Alta web API call for buying a shop item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IShopPurchase

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API call for buying a shop item. `ShopClient.Purchase`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`OfflineShopPurchase`](/mod/game-api/types/assembly-api-client/offlineshoppurchase), [`ShopPurchase`](/mod/game-api/types/assembly-api-client/shoppurchase)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-purchaseitem" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/purchaseresult">{"PurchaseResult"}</Link>{"> PurchaseItem(int identifier)"}</code> | <span className="api-desc">Buys an item by id.</span> |

## Used in

Members of other types that take, return or hold a `IShopPurchase`:

<div className="api-used-in">

[`IShopApiClient.Purchase`](/mod/game-api/types/assembly-api-client/ishopapiclient#m-purchase), [`OfflineShopApiClient.Purchase`](/mod/game-api/types/assembly-api-client/offlineshopapiclient#m-purchase), [`ShopApiClient.Purchase`](/mod/game-api/types/assembly-api-client/shopapiclient#m-purchase).

</div>
