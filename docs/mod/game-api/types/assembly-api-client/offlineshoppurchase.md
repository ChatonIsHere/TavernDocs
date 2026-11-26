---
title: "OfflineShopPurchase"
description: "Offline stand-in for shop purchases."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OfflineShopPurchase

A **class** in `Alta.Api.Client`, `Alta.Api.Client.HighLevel`.

Offline stand-in for shop purchases. Every method throws `OfflineException`.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)
- **Inherits or implements** [`IShopPurchase`](/mod/game-api/types/assembly-api-client/ishoppurchase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OfflineShopPurchase()"}</code> | <span className="api-desc">Creates an `OfflineShopPurchase` with default values.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-purchaseitem" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/purchaseresult">{"PurchaseResult"}</Link>{"> PurchaseItem(int identifier)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
| <Link id="m-purchasespecial" /><code>{"Task<"}<Link to="/mod/game-api/types/assembly-api-models/purchaseresult">{"PurchaseResult"}</Link>{"> PurchaseSpecial(int identifier, ulong oculusId, string oculusUserProof)"}</code> | <span className="api-desc">Throws `OfflineException`.</span> |
