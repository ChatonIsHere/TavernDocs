---
title: "LogicFloatRangeSaveData"
description: "Save data for LogicFloatRangeReceiver: the range settings and the linked float sender's data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicFloatRangeSaveData

A **class** in `Root.Township`, `Alta.Logic`.

Save data for `LogicFloatRangeReceiver`: the range settings and the linked float sender's data.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicFloatRangeReceiver, LogicFloatRangeSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LogicFloatRangeReceiver`](/mod/game-api/types/alta-items/logicfloatrangereceiver), [`LogicFloatRangeSaveData`](/mod/game-api/types/alta-items/logicfloatrangesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicFloatRangeSaveData()"}</code> | Creates a `LogicFloatRangeSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isactivewithinrange" /><code>{"bool isActiveWithinRange"}</code> | If true the output is on while the value is inside the range; if false, while it is outside. |
| <Link id="m-maximumvalue" /><code>{"float maximumValue"}</code> | Upper end of the range. |
| <Link id="m-minimumvalue" /><code>{"float minimumValue"}</code> | Lower end of the range. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/mod/game-api/types/alta-items/logicfloatsavedata">{"LogicFloatSaveData"}</Link>{" Data { get; set; }"}</code> | The linked float sender's logic data, used to relink the input on load. |
