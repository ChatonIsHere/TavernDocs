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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Nested in** [`TradeVendor`](/game-api/types/alta-crafting/tradevendor)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StatusChangedHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-crafting/tradestatus">{"TradeStatus"}</Link>{" status, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/alta-crafting/tradestatus">{"TradeStatus"}</Link>{" status)"}</code> |

## Used in

Members of other types that take, return or hold a `StatusChangedHandler`:

[`TradeVendor.StatusChanged`](/game-api/types/alta-crafting/tradevendor#m-statuschanged).
