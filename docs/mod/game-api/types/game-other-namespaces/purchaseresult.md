---
title: "PurchaseResult"
description: "Result of a Talem shop purchase: success, or a PurchaseError saying why it failed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PurchaseResult

A **class** in `Root.Township`, `Features.Main_Menu.Scripts.TalemShop`.

Result of a Talem shop purchase: success, or a `PurchaseError` saying why it failed.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PurchaseResult()"}</code> | <span className="api-desc">Creates a `PurchaseResult` from `error`.</span> |
| <Link id="m-ctor-2" /><code>{"PurchaseResult("}<Link to="/mod/game-api/types/game-other-namespaces/purchaseerror">{"PurchaseError"}</Link>{" error)"}</code> | <span className="api-desc">Creates a `PurchaseResult` from `error`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-error" /><code><Link to="/mod/game-api/types/game-other-namespaces/purchaseerror">{"PurchaseError"}</Link>{" Error"}</code> | <span className="api-desc">Why the purchase failed. Only meaningful when `IsSuccess` is false.</span> |
| <Link id="m-issuccess" /><code>{"bool IsSuccess"}</code> | <span className="api-desc">True when the purchase went through. The no-argument constructor sets it.</span> |

## Used in

Members of other types that take, return or hold a `PurchaseResult`:

<div className="api-used-in">

[`IShopController.PurchaseAsync`](/mod/game-api/types/game-other-namespaces/ishopcontroller#m-purchaseasync).

</div>
