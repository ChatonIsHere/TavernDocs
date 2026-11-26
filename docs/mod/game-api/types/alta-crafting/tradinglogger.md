---
title: "TradingLogger"
description: "Logging for the trade deck."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TradingLogger

A **static class** in `Root.Township`, `Alta.Trading`.

Logging for the trade deck. Sales are raised as the `TradeDeckUsed` console event.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested types** [`TradeDeckSale`](/mod/game-api/types/alta-crafting/tradinglogger-tradedecksale)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-log" /><code>{"static void Log(string message)"}</code> | <span className="api-desc">Writes a debug log line.</span> |
| <Link id="m-log-2" /><code>{"static void Log(string message, params object[] parameters)"}</code> | <span className="api-desc">Writes a debug log line.</span> |
| <Link id="m-recordsale" /><code>{"static void RecordSale("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" item, int outputQuantity, int askPrice, int askAmount, int buyer, int seller)"}</code> | <span className="api-desc">Server: raises `ConsoleEvents.TradeDeckUsed` with the item, unit price, quantity, buyer and seller. Called by `TradeVendor` on a sale.</span> |
