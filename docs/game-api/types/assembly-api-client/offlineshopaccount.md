---
title: "OfflineShopAccount"
description: "class OfflineShopAccount in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineShopAccount

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IShopAccount`](/game-api/types/assembly-api-client/ishopaccount)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OfflineShopAccount()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-giftresult" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/giftresult">{"GiftResult"}</Link>{" giftResult"}</code> |
| <Link id="m-shopaccountinfo" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-models/shopaccountinfo">{"ShopAccountInfo"}</Link>{" shopAccountInfo"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-checkforsubscriptionrewardsasync" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/subscriptionrefreshresult">{"SubscriptionRefreshResult"}</Link>{"> CheckForSubscriptionRewardsAsync()"}</code> |
| <Link id="m-getowneditems" /><code>{"Task<IEnumerable<"}<Link to="/game-api/types/assembly-api-models/ownedshopitem">{"OwnedShopItem"}</Link>{">> GetOwnedItems()"}</code> |
| <Link id="m-getshopaccountinfo" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopaccountinfo">{"ShopAccountInfo"}</Link>{"> GetShopAccountInfo()"}</code> |
| <Link id="m-getshopaccountinfo-2" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/shopaccountinfo">{"ShopAccountInfo"}</Link>{"> GetShopAccountInfo(int userIdentifier)"}</code> |
| <Link id="m-giftitem" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/giftresult">{"GiftResult"}</Link>{"> GiftItem(int userIdentifier, string itemSku)"}</code> |
| <Link id="m-removeitem" /><code>{"Task RemoveItem(int userIdentifier, int itemIdentifier)"}</code> |
