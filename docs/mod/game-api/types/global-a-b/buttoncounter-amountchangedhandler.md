---
title: "ButtonCounter.AmountChangedHandler"
description: "Delegate for ButtonCounter.AmountChanged, passing the counter whose amount changed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ButtonCounter.AmountChangedHandler

A **delegate** in `Root.Township`, the global namespace.

Delegate for `ButtonCounter.AmountChanged`, passing the counter whose amount changed.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Nested in** [`ButtonCounter`](/mod/game-api/types/global-a-b/buttoncounter)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AmountChangedHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-a-b/buttoncounter">{"ButtonCounter"}</Link>{" counter, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/global-a-b/buttoncounter">{"ButtonCounter"}</Link>{" counter)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `AmountChangedHandler`:

<div className="api-used-in">

[`ButtonCounter.AmountChanged`](/mod/game-api/types/global-a-b/buttoncounter#m-amountchanged).

</div>
