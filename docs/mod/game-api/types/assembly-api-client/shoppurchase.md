---
title: "ShopPurchase"
description: "Online client for buying shop items with shards."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShopPurchase

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Online client for buying shop items with shards. Reached through `ShopClient.Purchase`; calls Alta's web API, which no longer answers.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`IShopPurchase`](/mod/game-api/types/assembly-api-client/ishoppurchase)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal ShopPurchase("}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | <span className="api-desc">Creates a `ShopPurchase` from `clientManager`.</span> |

</details>

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accountrequestbase" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/accountrequestbase">{"AccountRequestBase"}</Link>{" accountRequestBase"}</code> | <span className="api-desc">Unused field.</span> |
| <Link id="m-clientmanager" /><code>{"private readonly "}<Link to="/mod/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager"}</code> | <span className="api-desc">The client manager requests are sent through.</span> |
| <Link id="m-itemtokenrequest" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/purchaseitemtokenrequest">{"PurchaseItemTokenRequest"}</Link>{" itemTokenRequest"}</code> | <span className="api-desc">Unused field.</span> |
| <Link id="m-purchaseitemtokenrequest" /><code>{"private "}<Link to="/mod/game-api/types/assembly-api-models/purchaseitemtokenrequest">{"PurchaseItemTokenRequest"}</Link>{" purchaseItemTokenRequest"}</code> | <span className="api-desc">Last request built by `PurchaseItem`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-purchaseitem" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/purchaseresult">{"PurchaseResult"}</Link>{"> PurchaseItem(int identifier)"}</code> | <span className="api-desc">Buys a shop item by its ID.</span> |
