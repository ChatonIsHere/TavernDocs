---
title: "LogicIntReceiverData"
description: "Save data for LogicIntReceiver: which int sender it listens to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicIntReceiverData

A **class** in `Root.Township`, `Alta.Logic`.

Save data for `LogicIntReceiver`: which int sender it listens to.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicIntReceiver, LogicIntReceiverData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LogicIntReceiver`](/mod/game-api/types/alta-items/logicintreceiver), [`LogicIntReceiverData`](/mod/game-api/types/alta-items/logicintreceiverdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicIntReceiverData()"}</code> | <span className="api-desc">Creates a `LogicIntReceiverData` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/mod/game-api/types/alta-items/logicintsavedata">{"LogicIntSaveData"}</Link>{" Data { get; set; }"}</code> | <span className="api-desc">The linked int sender's logic data. On load the receiver relinks to it through the logic manager.</span> |
