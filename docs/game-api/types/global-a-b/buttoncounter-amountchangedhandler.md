---
title: "ButtonCounter.AmountChangedHandler"
description: "Delegate for ButtonCounter.AmountChanged, passing the counter whose amount changed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ButtonCounter.AmountChangedHandler

A **delegate** in `Root.Township`, no namespace.

Delegate for `ButtonCounter.AmountChanged`, passing the counter whose amount changed.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Nested in** [`ButtonCounter`](/game-api/types/global-a-b/buttoncounter)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AmountChangedHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-a-b/buttoncounter">{"ButtonCounter"}</Link>{" counter, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-a-b/buttoncounter">{"ButtonCounter"}</Link>{" counter)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `AmountChangedHandler`:

[`ButtonCounter.AmountChanged`](/game-api/types/global-a-b/buttoncounter#m-amountchanged).
