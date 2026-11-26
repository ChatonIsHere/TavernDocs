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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicIntThresholdReceiver, LogicIntThresholdSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LogicIntThresholdReceiver`](/mod/game-api/types/alta-items/logicintthresholdreceiver), [`LogicIntThresholdSaveData`](/mod/game-api/types/alta-items/logicintthresholdsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicIntThresholdSaveData()"}</code> | <span className="api-desc">Creates a `LogicIntThresholdSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isactiveabovethreshold" /><code>{"bool isActiveAboveThreshold"}</code> | <span className="api-desc">If true the output is on when the value is above the threshold; if false, when below.</span> |
| <Link id="m-threshold" /><code>{"int threshold"}</code> | <span className="api-desc">The int value the input is compared against.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/mod/game-api/types/alta-items/logicintsavedata">{"LogicIntSaveData"}</Link>{" Data { get; set; }"}</code> | <span className="api-desc">The linked int sender's logic data, used to relink the input on load.</span> |
