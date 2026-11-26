---
title: "SetPieceData"
description: "An asset holding a saved dynamic object (a set piece) that can be spawned whole."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetPieceData

A **class** in `Root.Township`, no namespace.

An asset holding a saved dynamic object (a set piece) that can be spawned whole. `RepairBox` can spawn one when finished.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`HashedGeneralValue<SetPieceData>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`SetPieceData`](/game-api/types/global-s/setpiecedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SetPieceData()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dynamicdata" /><code>{"private "}<Link to="/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" dynamicData"}</code> | Backing field for `DynamicData`, the serialized saved objects that make up this set piece. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dynamicdata-2" /><code><Link to="/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" DynamicData { get; set; }"}</code> | The saved object data to spawn from. |

## Used in

Members of other types that take, return or hold a `SetPieceData`:

[`MicroTutorialStep.DynamicContent`](/game-api/types/game-other-namespaces/microtutorialstep#m-dynamiccontent), [`PlayerPostboxStorage.InitialContent.data`](/game-api/types/global-p/playerpostboxstorage-initialcontent#m-data), [`RepairBox.spawningData`](/game-api/types/global-q-r/repairbox#m-spawningdata), [`RepairBoxSaveData.spawningData`](/game-api/types/global-q-r/repairboxsavedata#m-spawningdata), [`RepairBoxSaveDataOld2.spawningData`](/game-api/types/global-q-r/repairboxsavedataold2#m-spawningdata), [`RepairBoxSaveDataOld3.spawningData`](/game-api/types/global-q-r/repairboxsavedataold3#m-spawningdata), [`RepairBoxSaveDataOld4.spawningData`](/game-api/types/global-q-r/repairboxsavedataold4#m-spawningdata), [`SetPiece.data`](/game-api/types/global-s/setpiece#m-data), [`SetPiece.oldData`](/game-api/types/global-s/setpiece#m-olddata), [`SetPieceSaveData.data`](/game-api/types/global-s/setpiecesavedata#m-data).
