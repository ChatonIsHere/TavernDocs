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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Derived types** [`LogicBoolSaveData`](/mod/game-api/types/alta-items/logicboolsavedata), [`LogicFloatChangeOnBoolSaveData`](/mod/game-api/types/alta-items/logicfloatchangeonboolsavedata), [`LogicFloatResetSaveData`](/mod/game-api/types/alta-items/logicfloatresetsavedata), [`LogicFloatSaveData`](/mod/game-api/types/alta-items/logicfloatsavedata), [`LogicIntSaveData`](/mod/game-api/types/alta-items/logicintsavedata), [`LogicSumFloatSaveData`](/mod/game-api/types/alta-items/logicsumfloatsavedata), [`LogicSumIntSaveData`](/mod/game-api/types/alta-items/logicsumintsavedata), [`LogicVector3SaveData`](/mod/game-api/types/alta-items/logicvector3savedata)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicsavedata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The logic save data, including the identifier the value is stored under.</span> |

## Used in

Members of other types that take, return or hold a `ILogicValueData`:

<div className="api-used-in">

[`GlobalLogicManager.dataMap`](/mod/game-api/types/alta-items/globallogicmanager#m-datamap), [`GlobalLogicManager.GetData`](/mod/game-api/types/alta-items/globallogicmanager#m-getdata-2).

</div>
