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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicIntReceiver, LogicIntReceiverData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LogicIntReceiver`](/game-api/types/alta-items/logicintreceiver), [`LogicIntReceiverData`](/game-api/types/alta-items/logicintreceiverdata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogicIntReceiverData()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/game-api/types/alta-items/logicintsavedata">{"LogicIntSaveData"}</Link>{" Data { get; set; }"}</code> | The linked int sender's logic data. On load the receiver relinks to it through the logic manager. |
