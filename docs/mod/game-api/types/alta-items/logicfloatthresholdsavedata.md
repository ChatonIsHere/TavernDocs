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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicFloatThresholdReceiver, LogicFloatThresholdSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LogicFloatThresholdReceiver`](/mod/game-api/types/alta-items/logicfloatthresholdreceiver), [`LogicFloatThresholdSaveData`](/mod/game-api/types/alta-items/logicfloatthresholdsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicFloatThresholdSaveData()"}</code> | <span className="api-desc">Creates a `LogicFloatThresholdSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isactiveabovethreshold" /><code>{"bool isActiveAboveThreshold"}</code> | <span className="api-desc">If true the output is on when the value is above the threshold; if false, when below.</span> |
| <Link id="m-threshold" /><code>{"float threshold"}</code> | <span className="api-desc">The float value the input is compared against.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/mod/game-api/types/alta-items/logicfloatsavedata">{"LogicFloatSaveData"}</Link>{" Data { get; set; }"}</code> | <span className="api-desc">The linked float sender's logic data, used to relink the input on load.</span> |
