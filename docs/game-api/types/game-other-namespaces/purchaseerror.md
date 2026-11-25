---
title: "PurchaseError"
description: "class PurchaseError in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PurchaseError

A **class** in `Root.Township`, `Features.Main_Menu.Scripts.TalemShop.Errors`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Derived types** [`NoShopForPlatformError`](/game-api/types/game-other-namespaces/noshopforplatformerror), [`NotLoggedInOnPlatformError`](/game-api/types/game-other-namespaces/notloggedinonplatformerror), [`PendingPurchasesError`](/game-api/types/game-other-namespaces/pendingpurchaseserror), [`UnknownPurchaseError`](/game-api/types/game-other-namespaces/unknownpurchaseerror), [`UnknownPurchaseExceptionError`](/game-api/types/game-other-namespaces/unknownpurchaseexceptionerror), [`UserCancelledError`](/game-api/types/game-other-namespaces/usercancellederror)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PurchaseError(Exception exception)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"protected PurchaseError(string message)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"private readonly string message"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-exception" /><code>{"Exception Exception { get; }"}</code> |  |
| <Link id="m-message-2" /><code>{"string Message { get; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `PurchaseError`:

[`IAPViewModel.HandleError`](/game-api/types/game-other-namespaces/iapviewmodel#m-handleerror), [`PurchaseResult.Error`](/game-api/types/game-other-namespaces/purchaseresult#m-error), [`PurchaseResult.PurchaseResult`](/game-api/types/game-other-namespaces/purchaseresult#m-ctor-2).
