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
| <Link id="m-ctor" /><code>{"TradeDeckSale()"}</code> | <span className="api-desc">Creates a `TradingLogger.TradeDeckSale` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-buyer" /><code>{"int buyer"}</code> | <span className="api-desc">Player ID of the last player to interact with the paying pickup.</span> |
| <Link id="m-itemhash" /><code>{"uint itemHash"}</code> | <span className="api-desc">Prefab hash of the item that was sold.</span> |
| <Link id="m-itemname" /><code>{"string itemName"}</code> | <span className="api-desc">Prefab name of the item that was sold.</span> |
| <Link id="m-price" /><code>{"float price"}</code> | <span className="api-desc">Price per item: the ask price divided by the ask amount.</span> |
| <Link id="m-quantity" /><code>{"int quantity"}</code> | <span className="api-desc">Number of items handed out in this sale.</span> |
| <Link id="m-seller" /><code>{"int seller"}</code> | <span className="api-desc">Player ID of the vendor's owner.</span> |

## Used in

Members of other types that take, return or hold a `TradeDeckSale`:

<div className="api-used-in">

[`ConsoleEvents.TradeDeckUsed`](/mod/game-api/types/alta-console/consoleevents#m-tradedeckused).

</div>
