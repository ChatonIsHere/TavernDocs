---
title: "TradingLogger.TradeDeckSale"
description: "Record of one trade deck sale, built by TradingLogger.RecordSale and passed to the ConsoleEvents.TradeDeckUsed console event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TradingLogger.TradeDeckSale

A **class** in `Root.Township`, `Alta.Trading`.

Record of one trade deck sale, built by `TradingLogger.RecordSale` and passed to the `ConsoleEvents.TradeDeckUsed` console event. Server.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Nested in** [`TradingLogger`](/mod/game-api/types/alta-crafting/tradinglogger)
- **Documented in** [Console events](/mod/game-api/console-and-utilities/console-events)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TradeDeckSale()"}</code> | Creates a `TradingLogger.TradeDeckSale` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-buyer" /><code>{"int buyer"}</code> | Player ID of the last player to interact with the paying pickup. |
| <Link id="m-itemhash" /><code>{"uint itemHash"}</code> | Prefab hash of the item that was sold. |
| <Link id="m-itemname" /><code>{"string itemName"}</code> | Prefab name of the item that was sold. |
| <Link id="m-price" /><code>{"float price"}</code> | Price per item: the ask price divided by the ask amount. |
| <Link id="m-quantity" /><code>{"int quantity"}</code> | Number of items handed out in this sale. |
| <Link id="m-seller" /><code>{"int seller"}</code> | Player ID of the vendor's owner. |

## Used in

Members of other types that take, return or hold a `TradeDeckSale`:

[`ConsoleEvents.TradeDeckUsed`](/mod/game-api/types/alta-console/consoleevents#m-tradedeckused).
