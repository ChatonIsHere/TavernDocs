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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicIntRangeReceiver, LogicIntRangeSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LogicIntRangeReceiver`](/game-api/types/alta-items/logicintrangereceiver), [`LogicIntRangeSaveData`](/game-api/types/alta-items/logicintrangesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicIntRangeSaveData()"}</code> | Creates a `LogicIntRangeSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isactivewithinrange" /><code>{"bool isActiveWithinRange"}</code> | If true the output is on while the value is inside the range; if false, while it is outside. |
| <Link id="m-maximumvalueinclusive" /><code>{"int maximumValueInclusive"}</code> | Upper end of the range, inclusive. |
| <Link id="m-minimumvalueinclusive" /><code>{"int minimumValueInclusive"}</code> | Lower end of the range, inclusive. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/game-api/types/alta-items/logicintsavedata">{"LogicIntSaveData"}</Link>{" Data { get; set; }"}</code> | The linked int sender's logic data, used to relink the input on load. |
