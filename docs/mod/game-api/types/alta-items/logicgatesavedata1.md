---
title: "LogicGateSaveData1"
description: "Old save format (version 1) for LogicGateReceiver, before the inverted-output flag."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicGateSaveData1

A **class** in `Root.Township`, `Alta.Logic`.

Old save format (version 1) for `LogicGateReceiver`, before the inverted-output flag. Migrated to `LogicGateSaveData`.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicGateSaveData1()"}</code> | <span className="api-desc">Creates a `LogicGateSaveData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-operationtype" /><code><Link to="/mod/game-api/types/alta-items/logicoperationtype">{"LogicOperationType"}</Link>{" operationType"}</code> | <span className="api-desc">Which logic operation the gate applies to its inputs.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-datas" /><code><Link to="/mod/game-api/types/alta-items/logicboolsavedata">{"LogicBoolSaveData"}</Link>{"[] Datas { get; set; }"}</code> | <span className="api-desc">Logic data of each linked bool sender, one per gate input.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to `LogicGateSaveData`, keeping the inputs and operation; the output is not inverted.</span> |
