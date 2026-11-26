---
title: "ShopAccount"
description: "Online client for a player's shop account: balance, owned items and gifts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopAccount

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Online client for a player's shop account: balance, owned items and gifts. Reached through `ShopClient.Account`; calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`IShopAccount`](/mod/game-api/types/assembly-api-client/ishopaccount)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal ShopAccount("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | Creates a `ShopAccount` from `clientManager`. |

</details>

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clientmanager" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager"}</code> | The client manager requests are sent through. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkforsubscriptionrewardsasync" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/subscriptionrefreshresult">{"SubscriptionRefreshResult"}</Link>{"> CheckForSubscriptionRewardsAsync()"}</code> | Asks the API to hand out any subscription rewards due. |
| <Link id="m-getowneditems" /><code>{"Task<IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/ownedshopitem">{"OwnedShopItem"}</Link>{">> GetOwnedItems()"}</code> | Lists the logged-in user's owned shop items. |
| <Link id="m-getshopaccountinfo" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopaccountinfo">{"ShopAccountInfo"}</Link>{"> GetShopAccountInfo()"}</code> | Gets shop account details (supporter status, shards) for the logged-in user or a given user. |
| <Link id="m-getshopaccountinfo-2" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/shopaccountinfo">{"ShopAccountInfo"}</Link>{"> GetShopAccountInfo(int userIdentifier)"}</code> | Gets shop account details (supporter status, shards) for the logged-in user or a given user. |
| <Link id="m-giftitem" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/giftresult">{"GiftResult"}</Link>{"> GiftItem(int userIdentifier, string itemSku)"}</code> | Gifts an item by SKU to a user. |
| <Link id="m-removeitem" /><code>{"Task RemoveItem(int userIdentifier, int itemIdentifier)"}</code> | Removes an item from a user's account. |
