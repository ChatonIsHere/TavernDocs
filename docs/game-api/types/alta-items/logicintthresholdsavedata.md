---
title: "LogicIntThresholdSaveData"
description: "Save data for LogicIntThresholdReceiver: the threshold settings and the linked int sender's data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicIntThresholdSaveData

A **class** in `Root.Township`, `Alta.Logic`.

Save data for `LogicIntThresholdReceiver`: the threshold settings and the linked int sender's data.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicIntThresholdReceiver, LogicIntThresholdSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LogicIntThresholdReceiver`](/game-api/types/alta-items/logicintthresholdreceiver), [`LogicIntThresholdSaveData`](/game-api/types/alta-items/logicintthresholdsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicIntThresholdSaveData()"}</code> | Creates a `LogicIntThresholdSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isactiveabovethreshold" /><code>{"bool isActiveAboveThreshold"}</code> | If true the output is on when the value is above the threshold; if false, when below. |
| <Link id="m-threshold" /><code>{"int threshold"}</code> | The int value the input is compared against. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/game-api/types/alta-items/logicintsavedata">{"LogicIntSaveData"}</Link>{" Data { get; set; }"}</code> | The linked int sender's logic data, used to relink the input on load. |
