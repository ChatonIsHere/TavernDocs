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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogicGateSaveData1()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-operationtype" /><code><Link to="/game-api/types/alta-items/logicoperationtype">{"LogicOperationType"}</Link>{" operationType"}</code> | Which logic operation the gate applies to its inputs. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-datas" /><code><Link to="/game-api/types/alta-items/logicboolsavedata">{"LogicBoolSaveData"}</Link>{"[] Datas { get; set; }"}</code> | Logic data of each linked bool sender, one per gate input. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to `LogicGateSaveData`, keeping the inputs and operation; the output is not inverted. |
