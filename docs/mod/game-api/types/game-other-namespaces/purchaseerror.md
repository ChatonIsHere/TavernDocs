---
title: "PurchaseError"
description: "Base for an error from the Talem shop (the in-game store), made from an exception or a message."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PurchaseError

A **class** in `Root.Township`, `Features.Main_Menu.Scripts.TalemShop.Errors`.

Base for an error from the Talem shop (the in-game store), made from an exception or a message.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Derived types** [`NoShopForPlatformError`](/mod/game-api/types/game-other-namespaces/noshopforplatformerror), [`NotLoggedInOnPlatformError`](/mod/game-api/types/game-other-namespaces/notloggedinonplatformerror), [`PendingPurchasesError`](/mod/game-api/types/game-other-namespaces/pendingpurchaseserror), [`UnknownPurchaseError`](/mod/game-api/types/game-other-namespaces/unknownpurchaseerror), [`UnknownPurchaseExceptionError`](/mod/game-api/types/game-other-namespaces/unknownpurchaseexceptionerror), [`UserCancelledError`](/mod/game-api/types/game-other-namespaces/usercancellederror)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PurchaseError(Exception exception)"}</code> | <span className="api-desc">Creates a `PurchaseError` from `message`.</span> |
| <Link id="m-ctor-2" /><code>{"protected PurchaseError(string message)"}</code> | <span className="api-desc">Creates a `PurchaseError` from `message`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"private readonly string message"}</code> | <span className="api-desc">Error text given to the constructor; `Message` returns the exception's message instead when there is one.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-exception" /><code>{"Exception Exception { get; }"}</code> | <span className="api-desc">The exception behind the error, if any.</span> |
| <Link id="m-message-2" /><code>{"string Message { get; }"}</code> | <span className="api-desc">The exception's message, or the stored message if there is no exception.</span> |

## Used in

Members of other types that take, return or hold a `PurchaseError`:

<div className="api-used-in">

[`IAPViewModel.HandleError`](/mod/game-api/types/game-other-namespaces/iapviewmodel#m-handleerror), [`PurchaseResult.Error`](/mod/game-api/types/game-other-namespaces/purchaseresult#m-error), [`PurchaseResult.PurchaseResult`](/mod/game-api/types/game-other-namespaces/purchaseresult#m-ctor-2).

</div>
