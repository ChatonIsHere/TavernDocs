---
title: "IShopController"
description: "Store controller for the Talem shop purchases, got from InterfaceResolver.IShopController."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IShopController

An **interface** in `Root.Township`, `Features.Main_Menu.Scripts.TalemShop`.

Store controller for the Talem shop purchases, got from `InterfaceResolver.IShopController`. In this server build the resolver returns null.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-consumepurchaseasync" /><code>{"Task<bool> ConsumePurchaseAsync()"}</code> | <span className="api-desc">Consumes pending purchases; true on success.</span> |
| <Link id="m-purchaseasync" /><code>{"Task<"}<Link to="/mod/game-api/types/game-other-namespaces/purchaseresult">{"PurchaseResult"}</Link>{"> PurchaseAsync(string sku)"}</code> | <span className="api-desc">Starts a purchase of the given SKU and returns the result.</span> |

## Used in

Members of other types that take, return or hold a `IShopController`:

<div className="api-used-in">

[`InterfaceResolver.CreateShopController`](/mod/game-api/types/game-other-namespaces/interfaceresolver#m-createshopcontroller), [`InterfaceResolver.iShopController`](/mod/game-api/types/game-other-namespaces/interfaceresolver#m-ishopcontroller), [`InterfaceResolver.IShopController`](/mod/game-api/types/game-other-namespaces/interfaceresolver#m-ishopcontroller-2).

</div>
