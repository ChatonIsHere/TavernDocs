---
title: "TradeStatus"
description: "State of a trade vendor: unoccupied (no owner), out of stock, or open for sale."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TradeStatus

An **enum** in `Root.Township`, `Alta.Trading`.

State of a trade vendor: unoccupied (no owner), out of stock, or open for sale.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)

## Values

| Member |
| --- |
| <Link id="m-openforsale" /><code>{"OpenForSale = 2"}</code> |
| <Link id="m-outofstock" /><code>{"OutOfStock = 1"}</code> |
| <Link id="m-unoccupied" /><code>{"Unoccupied = 0"}</code> |

## Used in

Members of other types that take, return or hold a `TradeStatus`:

<div className="api-used-in">

[`TradeStateManager.index`](/mod/game-api/types/alta-crafting/tradestatemanager#m-index), [`TradeStateManager.StatusChanged`](/mod/game-api/types/alta-crafting/tradestatemanager#m-statuschanged), [`TradeVendor.TradeState`](/mod/game-api/types/alta-crafting/tradevendor#m-tradestate), [`TradeVendor.StatusChangedHandler.BeginInvoke`](/mod/game-api/types/alta-crafting/tradevendor-statuschangedhandler#m-begininvoke), [`TradeVendor.StatusChangedHandler.Invoke`](/mod/game-api/types/alta-crafting/tradevendor-statuschangedhandler#m-invoke).

</div>
