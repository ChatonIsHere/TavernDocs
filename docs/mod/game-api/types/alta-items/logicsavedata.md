---
title: "LogicSaveData"
description: "Saved state of a logic value with an identifier and change events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicSaveData

A **class** in `Root.Township`, `Alta.Logic`.

Saved state of a logic value with an identifier and change events.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`BasicSaveData<LogicSaveData>`](/mod/game-api/types/global-a-b/basicsavedata-tdata)
- **Derived types** [`LogicSaveData`](/mod/game-api/types/alta-items/logicsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicSaveData()"}</code> | Creates a `LogicSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-identifier" /><code>{"uint identifier"}</code> | Identifier of the logic value this belongs to. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changedexternally" /><code>{"event Action ChangedExternally"}</code> | Raised by `OnUpdatedExternal`, before `UpdatedValue`. |
| <Link id="m-updatedvalue" /><code>{"event Action UpdatedValue"}</code> | Raised whenever the value updates. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onupdated" /><code>{"void OnUpdated()"}</code> | Raises `UpdatedValue`. |
| <Link id="m-onupdatedexternal" /><code>{"void OnUpdatedExternal()"}</code> | Raises `ChangedExternally` then `UpdatedValue`. |
| <Link id="m-copyto" /><code>{"protected override void CopyTo("}<Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" target)"}</code> | Copies the identifier to another save data. |

## Used in

Members of other types that take, return or hold a `LogicSaveData`:

[`ILogicValueData.LogicSaveData`](/mod/game-api/types/alta-items/ilogicvaluedata#m-logicsavedata), [`LogicBoolSaveData.logicData`](/mod/game-api/types/alta-items/logicboolsavedata#m-logicdata), [`LogicBoolSaveData.LogicSaveData`](/mod/game-api/types/alta-items/logicboolsavedata#m-logicsavedata), [`LogicFloatChangeOnBoolSaveData.logicData`](/mod/game-api/types/alta-items/logicfloatchangeonboolsavedata#m-logicdata), [`LogicFloatChangeOnBoolSaveData.LogicSaveData`](/mod/game-api/types/alta-items/logicfloatchangeonboolsavedata#m-logicsavedata), [`LogicFloatChangeOnBoolSaveData1.logicData`](/mod/game-api/types/alta-items/logicfloatchangeonboolsavedata1#m-logicdata), [`LogicFloatChangeOnBoolSaveData1.LogicSaveData`](/mod/game-api/types/alta-items/logicfloatchangeonboolsavedata1#m-logicsavedata), [`LogicFloatChangeOnBoolSaveData2.logicData`](/mod/game-api/types/alta-items/logicfloatchangeonboolsavedata2#m-logicdata), [`LogicFloatResetSaveData.logicData`](/mod/game-api/types/alta-items/logicfloatresetsavedata#m-logicdata), [`LogicFloatResetSaveData.LogicSaveData`](/mod/game-api/types/alta-items/logicfloatresetsavedata#m-logicsavedata), [`LogicFloatSaveData.logicData`](/mod/game-api/types/alta-items/logicfloatsavedata#m-logicdata), [`LogicFloatSaveData.LogicSaveData`](/mod/game-api/types/alta-items/logicfloatsavedata#m-logicsavedata), [`LogicIntSaveData.logicData`](/mod/game-api/types/alta-items/logicintsavedata#m-logicdata), [`LogicIntSaveData.LogicSaveData`](/mod/game-api/types/alta-items/logicintsavedata#m-logicsavedata), [`LogicSumFloatSaveData.logicData`](/mod/game-api/types/alta-items/logicsumfloatsavedata#m-logicdata), [`LogicSumFloatSaveData.LogicSaveData`](/mod/game-api/types/alta-items/logicsumfloatsavedata#m-logicsavedata), [`LogicSumIntSaveData.logicData`](/mod/game-api/types/alta-items/logicsumintsavedata#m-logicdata), [`LogicSumIntSaveData.LogicSaveData`](/mod/game-api/types/alta-items/logicsumintsavedata#m-logicsavedata), [`LogicVector3SaveData.logicData`](/mod/game-api/types/alta-items/logicvector3savedata#m-logicdata), [`LogicVector3SaveData.LogicSaveData`](/mod/game-api/types/alta-items/logicvector3savedata#m-logicsavedata).
