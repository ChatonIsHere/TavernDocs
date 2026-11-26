---
title: "IShopAccount"
description: "Alta web API calls for a user's shop account and owned items."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IShopAccount

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Alta web API calls for a user's shop account and owned items. `ShopClient.Account`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Derived types** [`OfflineShopAccount`](/mod/game-api/types/assembly-api-client/offlineshopaccount), [`ShopAccount`](/mod/game-api/types/assembly-api-client/shopaccount)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkforsubscriptionrewardsasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/subscriptionrefreshresult">{"SubscriptionRefreshResult"}</Link>{"> CheckForSubscriptionRewardsAsync()"}</code> | Asks the API to grant any subscription rewards due. |
| <Link id="m-getowneditems" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/ownedshopitem">{"OwnedShopItem"}</Link>{">> GetOwnedItems()"}</code> | Lists the shop items the logged-in user owns. |
| <Link id="m-getshopaccountinfo" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopaccountinfo">{"ShopAccountInfo"}</Link>{"> GetShopAccountInfo()"}</code> | Gets shop account info for the logged-in user or a given user. |
| <Link id="m-getshopaccountinfo-2" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopaccountinfo">{"ShopAccountInfo"}</Link>{"> GetShopAccountInfo(int userIdentifier)"}</code> | Gets shop account info for the logged-in user or a given user. |
| <Link id="m-giftitem" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/giftresult">{"GiftResult"}</Link>{"> GiftItem(int userIdentifier, string itemSku)"}</code> | Gives a user an item by SKU. |
| <Link id="m-removeitem" /><code>{"Task RemoveItem(int userIdentifier, int itemIdentifier)"}</code> | Removes an owned item from a user. |

## Used in

Members of other types that take, return or hold a `IShopAccount`:

[`IShopApiClient.Account`](/mod/game-api/types/assembly-api-client/ishopapiclient#m-account), [`OfflineShopApiClient.Account`](/mod/game-api/types/assembly-api-client/offlineshopapiclient#m-account), [`ShopApiClient.Account`](/mod/game-api/types/assembly-api-client/shopapiclient#m-account).
