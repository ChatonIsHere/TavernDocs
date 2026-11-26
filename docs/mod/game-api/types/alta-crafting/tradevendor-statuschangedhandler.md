---
title: "TradeVendor.StatusChangedHandler"
description: "Handler for TradeVendor.StatusChanged, called with the vendor's new trade status."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TradeVendor.StatusChangedHandler

A **delegate** in `Root.Township`, `Alta.Trading`.

Handler for `TradeVendor.StatusChanged`, called with the vendor's new trade status.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`TradeVendor`](/mod/game-api/types/alta-crafting/tradevendor)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatusChangedHandler(object object, IntPtr method)"}</code> | <span className="api-desc">Made by the compiler when you assign a method to this delegate; you don't call it directly.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-crafting/tradestatus">{"TradeStatus"}</Link>{" status, AsyncCallback callback, object object)"}</code> | <span className="api-desc">Starts the call on another thread; not supported in Unity, so use `Invoke`.</span> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | <span className="api-desc">Waits for a call started with `BeginInvoke`; not supported in Unity.</span> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/alta-crafting/tradestatus">{"TradeStatus"}</Link>{" status)"}</code> | <span className="api-desc">Calls every method on this delegate with these arguments.</span> |

## Used in

Members of other types that take, return or hold a `StatusChangedHandler`:

<div className="api-used-in">

[`TradeVendor.StatusChanged`](/mod/game-api/types/alta-crafting/tradevendor#m-statuschanged).

</div>
