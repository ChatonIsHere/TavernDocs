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
| <Link id="m-ctor" /><code>{"LogicFloatRangeSaveData()"}</code> | <span className="api-desc">Creates a `LogicFloatRangeSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isactivewithinrange" /><code>{"bool isActiveWithinRange"}</code> | <span className="api-desc">If true the output is on while the value is inside the range; if false, while it is outside.</span> |
| <Link id="m-maximumvalue" /><code>{"float maximumValue"}</code> | <span className="api-desc">Upper end of the range.</span> |
| <Link id="m-minimumvalue" /><code>{"float minimumValue"}</code> | <span className="api-desc">Lower end of the range.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/mod/game-api/types/alta-items/logicfloatsavedata">{"LogicFloatSaveData"}</Link>{" Data { get; set; }"}</code> | <span className="api-desc">The linked float sender's logic data, used to relink the input on load.</span> |
