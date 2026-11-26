---
title: "SetPieceData"
description: "An asset holding a saved dynamic object (a set piece) that can be spawned whole."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetPieceData

A **class** in `Root.Township`, the global namespace.

An asset holding a saved dynamic object (a set piece) that can be spawned whole. `RepairBox` can spawn one when finished.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`HashedGeneralValue<SetPieceData>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`SetPieceData`](/mod/game-api/types/global-s/setpiecedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SetPieceData()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dynamicdata" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" dynamicData"}</code> | <span className="api-desc">Backing field for `DynamicData`, the serialized saved objects that make up this set piece.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dynamicdata-2" /><code><Link to="/mod/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" DynamicData { get; set; }"}</code> | <span className="api-desc">The saved object data to spawn from.</span> |

## Used in

Members of other types that take, return or hold a `SetPieceData`:

<div className="api-used-in">

[`MicroTutorialStep.DynamicContent`](/mod/game-api/types/game-other-namespaces/microtutorialstep#m-dynamiccontent), [`PlayerPostboxStorage.InitialContent.data`](/mod/game-api/types/global-p/playerpostboxstorage-initialcontent#m-data), [`RepairBox.spawningData`](/mod/game-api/types/global-q-r/repairbox#m-spawningdata), [`RepairBoxSaveData.spawningData`](/mod/game-api/types/global-q-r/repairboxsavedata#m-spawningdata), [`RepairBoxSaveDataOld2.spawningData`](/mod/game-api/types/global-q-r/repairboxsavedataold2#m-spawningdata), [`RepairBoxSaveDataOld3.spawningData`](/mod/game-api/types/global-q-r/repairboxsavedataold3#m-spawningdata), [`RepairBoxSaveDataOld4.spawningData`](/mod/game-api/types/global-q-r/repairboxsavedataold4#m-spawningdata), [`SetPiece.data`](/mod/game-api/types/global-s/setpiece#m-data), [`SetPiece.oldData`](/mod/game-api/types/global-s/setpiece#m-olddata), [`SetPieceSaveData.data`](/mod/game-api/types/global-s/setpiecesavedata#m-data).

</div>
