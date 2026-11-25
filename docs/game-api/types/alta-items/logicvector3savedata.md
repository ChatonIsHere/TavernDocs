---
title: "LogicVector3SaveData"
description: "Save data for LogicVector3Sender: the shared logic data and the current vector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicVector3SaveData

A **class** in `Root.Township`, `Alta.Logic`.

Save data for `LogicVector3Sender`: the shared logic data and the current vector.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicVector3Sender, LogicVector3SaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata), [`ILogicValueData`](/game-api/types/alta-items/ilogicvaluedata)
- **Derived types** [`LogicVector3SaveData`](/game-api/types/alta-items/logicvector3savedata), [`LogicVector3Sender`](/game-api/types/alta-items/logicvector3sender), [`Vector3SenderInput`](/game-api/types/alta-items/vector3senderinput)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicVector3SaveData()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logicdata" /><code><Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" logicData"}</code> | Backing field for `LogicSaveData`. |
| <Link id="m-value" /><code>{"Vector3 value"}</code> | The vector being sent. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicsavedata" /><code><Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" "}<Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" { get; set; }"}</code> | The shared logic data. |

## Used in

Members of other types that take, return or hold a `LogicVector3SaveData`:

[`LogicVector3ReceiverData.Data`](/game-api/types/alta-items/logicvector3receiverdata#m-data).
