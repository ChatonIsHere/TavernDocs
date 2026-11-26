---
title: "LogicGateSaveData"
description: "Save data (version 2) for LogicGateReceiver: the gate type, whether the output is inverted, and its bool inputs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicGateSaveData

A **class** in `Root.Township`, `Alta.Logic`.

Save data (version 2) for `LogicGateReceiver`: the gate type, whether the output is inverted, and its bool inputs.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicGateReceiver, LogicGateSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LogicGateReceiver`](/mod/game-api/types/alta-items/logicgatereceiver), [`LogicGateSaveData`](/mod/game-api/types/alta-items/logicgatesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicGateSaveData()"}</code> | <span className="api-desc">Creates a `LogicGateSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isinversedoutputsaved" /><code>{"bool isInversedOutputSaved"}</code> | <span className="api-desc">If true the gate's output is inverted (for example AND becomes NAND).</span> |
| <Link id="m-operationtype" /><code><Link to="/mod/game-api/types/alta-items/logicoperationtype">{"LogicOperationType"}</Link>{" operationType"}</code> | <span className="api-desc">Which logic operation the gate applies to its inputs.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-datas" /><code><Link to="/mod/game-api/types/alta-items/logicboolsavedata">{"LogicBoolSaveData"}</Link>{"[] Datas { get; set; }"}</code> | <span className="api-desc">Logic data of each linked bool sender, one per gate input.</span> |
