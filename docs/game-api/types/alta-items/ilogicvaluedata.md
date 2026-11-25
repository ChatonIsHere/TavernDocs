---
title: "ILogicValueData"
description: "Save data for a logic (wiring) value, tied to its logic identifier."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ILogicValueData

An **interface** in `Root.Township`, `Alta.Logic`.

Save data for a logic (wiring) value, tied to its logic identifier. `GlobalLogicManager` keys its stored values by that identifier.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Derived types** [`LogicBoolSaveData`](/game-api/types/alta-items/logicboolsavedata), [`LogicFloatChangeOnBoolSaveData`](/game-api/types/alta-items/logicfloatchangeonboolsavedata), [`LogicFloatResetSaveData`](/game-api/types/alta-items/logicfloatresetsavedata), [`LogicFloatSaveData`](/game-api/types/alta-items/logicfloatsavedata), [`LogicIntSaveData`](/game-api/types/alta-items/logicintsavedata), [`LogicSumFloatSaveData`](/game-api/types/alta-items/logicsumfloatsavedata), [`LogicSumIntSaveData`](/game-api/types/alta-items/logicsumintsavedata), [`LogicVector3SaveData`](/game-api/types/alta-items/logicvector3savedata)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicsavedata" /><code><Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" "}<Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" { get; set; }"}</code> | The logic save data, including the identifier the value is stored under. |

## Used in

Members of other types that take, return or hold a `ILogicValueData`:

[`GlobalLogicManager.dataMap`](/game-api/types/alta-items/globallogicmanager#m-datamap), [`GlobalLogicManager.GetData`](/game-api/types/alta-items/globallogicmanager#m-getdata-2).
