---
title: "LogicFloatReceiverData"
description: "Save data for LogicFloatReceiver: which float sender it listens to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicFloatReceiverData

A **class** in `Root.Township`, `Alta.Logic`.

Save data for `LogicFloatReceiver`: which float sender it listens to.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicFloatReceiver, LogicFloatReceiverData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LogicFloatReceiver`](/mod/game-api/types/alta-items/logicfloatreceiver), [`LogicFloatReceiverData`](/mod/game-api/types/alta-items/logicfloatreceiverdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicFloatReceiverData()"}</code> | <span className="api-desc">Creates a `LogicFloatReceiverData` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/mod/game-api/types/alta-items/logicfloatsavedata">{"LogicFloatSaveData"}</Link>{" Data { get; set; }"}</code> | <span className="api-desc">The linked float sender's logic data. On load the receiver relinks to it through the logic manager.</span> |
