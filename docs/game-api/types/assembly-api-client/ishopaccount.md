---
title: "IShopAccount"
description: "interface IShopAccount in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IShopAccount

An **interface** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Derived types** [`OfflineShopAccount`](/game-api/types/assembly-api-client/offlineshopaccount), [`ShopAccount`](/game-api/types/assembly-api-client/shopaccount)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkforsubscriptionrewardsasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/subscriptionrefreshresult">{"SubscriptionRefreshResult"}</Link>{"> CheckForSubscriptionRewardsAsync()"}</code> |  |
| <Link id="m-getowneditems" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/ownedshopitem">{"OwnedShopItem"}</Link>{">> GetOwnedItems()"}</code> |  |
| <Link id="m-getshopaccountinfo" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopaccountinfo">{"ShopAccountInfo"}</Link>{"> GetShopAccountInfo()"}</code> |  |
| <Link id="m-getshopaccountinfo-2" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopaccountinfo">{"ShopAccountInfo"}</Link>{"> GetShopAccountInfo(int userIdentifier)"}</code> |  |
| <Link id="m-giftitem" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/giftresult">{"GiftResult"}</Link>{"> GiftItem(int userIdentifier, string itemSku)"}</code> |  |
| <Link id="m-removeitem" /><code>{"Task RemoveItem(int userIdentifier, int itemIdentifier)"}</code> |  |

## Used in

Members of other types that take, return or hold a `IShopAccount`:

[`IShopApiClient.Account`](/game-api/types/assembly-api-client/ishopapiclient#m-account), [`OfflineShopApiClient.Account`](/game-api/types/assembly-api-client/offlineshopapiclient#m-account), [`ShopApiClient.Account`](/game-api/types/assembly-api-client/shopapiclient#m-account).
