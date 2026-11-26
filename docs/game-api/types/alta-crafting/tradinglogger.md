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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Nested types** [`TradeDeckSale`](/game-api/types/alta-crafting/tradinglogger-tradedecksale)

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-log" /><code>{"static void Log(string message)"}</code> | Writes a debug log line. |
| <Link id="m-log-2" /><code>{"static void Log(string message, params object[] parameters)"}</code> | Writes a debug log line. |
| <Link id="m-recordsale" /><code>{"static void RecordSale("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" item, int outputQuantity, int askPrice, int askAmount, int buyer, int seller)"}</code> | Server: raises `ConsoleEvents.TradeDeckUsed` with the item, unit price, quantity, buyer and seller. Called by `TradeVendor` on a sale. |
