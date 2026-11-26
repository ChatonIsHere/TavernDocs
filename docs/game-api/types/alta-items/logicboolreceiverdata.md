---
title: "LogicBoolReceiverData"
description: "Save data for a LogicBoolReceiver."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicBoolReceiverData

A **class** in `Root.Township`, `Alta.Logic`.

Save data for a `LogicBoolReceiver`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicBoolReceiver, LogicBoolReceiverData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LogicBoolReceiver`](/game-api/types/alta-items/logicboolreceiver), [`LogicBoolReceiverData`](/game-api/types/alta-items/logicboolreceiverdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicBoolReceiverData()"}</code> | Creates a `LogicBoolReceiverData` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/game-api/types/alta-items/logicboolsavedata">{"LogicBoolSaveData"}</Link>{" Data { get; set; }"}</code> | The saved logic bool (identifier and value). |
