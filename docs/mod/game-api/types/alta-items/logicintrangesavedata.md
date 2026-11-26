---
title: "LogicIntRangeSaveData"
description: "Save data for LogicIntRangeReceiver: the range settings and the linked int sender's data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicIntRangeSaveData

A **class** in `Root.Township`, `Alta.Logic`.

Save data for `LogicIntRangeReceiver`: the range settings and the linked int sender's data.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicIntRangeReceiver, LogicIntRangeSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LogicIntRangeReceiver`](/mod/game-api/types/alta-items/logicintrangereceiver), [`LogicIntRangeSaveData`](/mod/game-api/types/alta-items/logicintrangesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicIntRangeSaveData()"}</code> | <span className="api-desc">Creates a `LogicIntRangeSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isactivewithinrange" /><code>{"bool isActiveWithinRange"}</code> | <span className="api-desc">If true the output is on while the value is inside the range; if false, while it is outside.</span> |
| <Link id="m-maximumvalueinclusive" /><code>{"int maximumValueInclusive"}</code> | <span className="api-desc">Upper end of the range, inclusive.</span> |
| <Link id="m-minimumvalueinclusive" /><code>{"int minimumValueInclusive"}</code> | <span className="api-desc">Lower end of the range, inclusive.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/mod/game-api/types/alta-items/logicintsavedata">{"LogicIntSaveData"}</Link>{" Data { get; set; }"}</code> | <span className="api-desc">The linked int sender's logic data, used to relink the input on load.</span> |
