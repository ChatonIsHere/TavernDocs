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
| <Link id="m-checkforsubscriptionrewardsasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/subscriptionrefreshresult">{"SubscriptionRefreshResult"}</Link>{"> CheckForSubscriptionRewardsAsync()"}</code> | <span className="api-desc">Asks the API to grant any subscription rewards due.</span> |
| <Link id="m-getowneditems" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/ownedshopitem">{"OwnedShopItem"}</Link>{">> GetOwnedItems()"}</code> | <span className="api-desc">Lists the shop items the logged-in user owns.</span> |
| <Link id="m-getshopaccountinfo" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopaccountinfo">{"ShopAccountInfo"}</Link>{"> GetShopAccountInfo()"}</code> | <span className="api-desc">Gets shop account info for the logged-in user or a given user.</span> |
| <Link id="m-getshopaccountinfo-2" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopaccountinfo">{"ShopAccountInfo"}</Link>{"> GetShopAccountInfo(int userIdentifier)"}</code> | <span className="api-desc">Gets shop account info for the logged-in user or a given user.</span> |
| <Link id="m-giftitem" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/giftresult">{"GiftResult"}</Link>{"> GiftItem(int userIdentifier, string itemSku)"}</code> | <span className="api-desc">Gives a user an item by SKU.</span> |
| <Link id="m-removeitem" /><code>{"Task RemoveItem(int userIdentifier, int itemIdentifier)"}</code> | <span className="api-desc">Removes an owned item from a user.</span> |

## Used in

Members of other types that take, return or hold a `IShopAccount`:

<div className="api-used-in">

[`IShopApiClient.Account`](/mod/game-api/types/assembly-api-client/ishopapiclient#m-account), [`OfflineShopApiClient.Account`](/mod/game-api/types/assembly-api-client/offlineshopapiclient#m-account), [`ShopApiClient.Account`](/mod/game-api/types/assembly-api-client/shopapiclient#m-account).

</div>
