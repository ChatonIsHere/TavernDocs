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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)
- **Inherits or implements** [`IShopPurchase`](/game-api/types/assembly-api-client/ishoppurchase)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"internal ShopPurchase("}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager)"}</code> | Creates a `ShopPurchase` from `clientManager`. |

</details>

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accountrequestbase" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/accountrequestbase">{"AccountRequestBase"}</Link>{" accountRequestBase"}</code> | Unused field. |
| <Link id="m-clientmanager" /><code>{"private readonly "}<Link to="/game-api/types/assembly-api-client/ihighlevelapiclientmanager">{"IHighLevelApiClientManager"}</Link>{" clientManager"}</code> | The client manager requests are sent through. |
| <Link id="m-itemtokenrequest" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/purchaseitemtokenrequest">{"PurchaseItemTokenRequest"}</Link>{" itemTokenRequest"}</code> | Unused field. |
| <Link id="m-purchaseitemtokenrequest" /><code>{"private "}<Link to="/game-api/types/assembly-api-models/purchaseitemtokenrequest">{"PurchaseItemTokenRequest"}</Link>{" purchaseItemTokenRequest"}</code> | Last request built by `PurchaseItem`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-purchaseitem" /><code>{"Task<"}<Link to="/game-api/types/assembly-api-models/purchaseresult">{"PurchaseResult"}</Link>{"> PurchaseItem(int identifier)"}</code> | Buys a shop item by its ID. |
