---
title: "OfflineShopAccount"
description: "Offline stand-in for the shop account: a fixed supporter account with 100000 shards and no owned items."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineShopAccount

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Offline stand-in for the shop account: a fixed supporter account with 100000 shards and no owned items.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`IShopAccount`](/mod/game-api/types/assembly-api-client/ishopaccount)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflineShopAccount()"}</code> | <span className="api-desc">Creates an `OfflineShopAccount` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-giftresult" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/giftresult">{"GiftResult"}</Link>{" giftResult"}</code> | <span className="api-desc">The last result built by `GiftItem`.</span> |
| <Link id="m-shopaccountinfo" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-models/shopaccountinfo">{"ShopAccountInfo"}</Link>{" shopAccountInfo"}</code> | <span className="api-desc">The fixed account: supporter, not renewing, 100000 shards, USD.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkforsubscriptionrewardsasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/subscriptionrefreshresult">{"SubscriptionRefreshResult"}</Link>{"> CheckForSubscriptionRewardsAsync()"}</code> | <span className="api-desc">Returns an empty result.</span> |
| <Link id="m-getowneditems" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/ownedshopitem">{"OwnedShopItem"}</Link>{">> GetOwnedItems()"}</code> | <span className="api-desc">Returns an empty list.</span> |
| <Link id="m-getshopaccountinfo" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopaccountinfo">{"ShopAccountInfo"}</Link>{"> GetShopAccountInfo()"}</code> | <span className="api-desc">Returns the fixed offline account info for any user.</span> |
| <Link id="m-getshopaccountinfo-2" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopaccountinfo">{"ShopAccountInfo"}</Link>{"> GetShopAccountInfo(int userIdentifier)"}</code> | <span className="api-desc">Returns the fixed offline account info for any user.</span> |
| <Link id="m-giftitem" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/giftresult">{"GiftResult"}</Link>{"> GiftItem(int userIdentifier, string itemSku)"}</code> | <span className="api-desc">Reports success without doing anything.</span> |
| <Link id="m-removeitem" /><code>{"Task RemoveItem(int userIdentifier, int itemIdentifier)"}</code> | <span className="api-desc">Does nothing.</span> |
