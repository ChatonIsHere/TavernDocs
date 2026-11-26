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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicVector3Sender, LogicVector3SaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata), [`ILogicValueData`](/mod/game-api/types/alta-items/ilogicvaluedata)
- **Derived types** [`LogicVector3SaveData`](/mod/game-api/types/alta-items/logicvector3savedata), [`LogicVector3Sender`](/mod/game-api/types/alta-items/logicvector3sender), [`Vector3SenderInput`](/mod/game-api/types/alta-items/vector3senderinput)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicVector3SaveData()"}</code> | <span className="api-desc">Creates a `LogicVector3SaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logicdata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" logicData"}</code> | <span className="api-desc">Backing field for `LogicSaveData`.</span> |
| <Link id="m-value" /><code>{"Vector3 value"}</code> | <span className="api-desc">The vector being sent.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicsavedata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The shared logic data.</span> |

## Used in

Members of other types that take, return or hold a `LogicVector3SaveData`:

<div className="api-used-in">

[`LogicVector3ReceiverData.Data`](/mod/game-api/types/alta-items/logicvector3receiverdata#m-data).

</div>
