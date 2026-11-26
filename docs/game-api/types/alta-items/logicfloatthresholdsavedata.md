---
title: "LogicFloatThresholdSaveData"
description: "Save data for LogicFloatThresholdReceiver: the threshold settings and the linked float sender's data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicFloatThresholdSaveData

A **class** in `Root.Township`, `Alta.Logic`.

Save data for `LogicFloatThresholdReceiver`: the threshold settings and the linked float sender's data.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicFloatThresholdReceiver, LogicFloatThresholdSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LogicFloatThresholdReceiver`](/game-api/types/alta-items/logicfloatthresholdreceiver), [`LogicFloatThresholdSaveData`](/game-api/types/alta-items/logicfloatthresholdsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogicFloatThresholdSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isactiveabovethreshold" /><code>{"bool isActiveAboveThreshold"}</code> | If true the output is on when the value is above the threshold; if false, when below. |
| <Link id="m-threshold" /><code>{"float threshold"}</code> | The float value the input is compared against. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/game-api/types/alta-items/logicfloatsavedata">{"LogicFloatSaveData"}</Link>{" Data { get; set; }"}</code> | The linked float sender's logic data, used to relink the input on load. |
