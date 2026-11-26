---
title: "IOculusShop"
description: "Alta web API call for turning Oculus store purchases into Alta shop items."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IOculusShop

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API call for turning Oculus store purchases into Alta shop items. `ShopClient.Oculus`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`OculusShop`](/mod/game-api/types/assembly-api-client/oculusshop)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-consumealloculuspurchases" /><code>{"Task<IEnumerable<string>> ConsumeAllOculusPurchases(string userToken)"}</code> | Claims all the user's Oculus purchases and returns the items claimed. |

## Used in

Members of other types that take, return or hold a `IOculusShop`:

[`IShopApiClient.Oculus`](/mod/game-api/types/assembly-api-client/ishopapiclient#m-oculus), [`OfflineShopApiClient.Oculus`](/mod/game-api/types/assembly-api-client/offlineshopapiclient#m-oculus), [`ShopApiClient.Oculus`](/mod/game-api/types/assembly-api-client/shopapiclient#m-oculus).
