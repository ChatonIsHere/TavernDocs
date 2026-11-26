---
title: "RepairBoxSaveData"
description: "Save data for RepairBox (version 5): the item costs, build state and what it spawns or modifies when done."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepairBoxSaveData

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for `RepairBox` (version 5): the item costs, build state and what it spawns or modifies when done.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`NewSaveData<RepairBox, RepairBoxSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`RepairBox`](/mod/game-api/types/global-q-r/repairbox), [`RepairBoxSaveData`](/mod/game-api/types/global-q-r/repairboxsavedata)
- **Nested types** [`Item`](/mod/game-api/types/global-q-r/repairboxsavedata-item)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RepairBoxSaveData()"}</code> | Creates a `RepairBoxSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-canbeundone" /><code>{"bool canBeUndone"}</code> | Whether the finished build can be undone. |
| <Link id="m-isdone" /><code>{"bool isDone"}</code> | Whether the build is finished. |
| <Link id="m-isrepeatable" /><code>{"bool isRepeatable"}</code> | Whether the box can be filled again after finishing. |
| <Link id="m-items" /><code><Link to="/mod/game-api/types/global-q-r/repairboxsavedata-item">{"RepairBoxSaveData.Item"}</Link>{"[] items"}</code> | The three cost slots: item, count, optional physical material and the simple-server material flag. |
| <Link id="m-spawning" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawning"}</code> | Prefab spawned when the build finishes. |
| <Link id="m-spawningdata" /><code><Link to="/mod/game-api/types/global-s/setpiecedata">{"SetPieceData"}</Link>{" spawningData"}</code> | Set piece spawned when the build finishes, instead of a prefab. |
| <Link id="m-spawnposition" /><code>{"Vector3 spawnPosition"}</code> | World position the result spawns at. |
| <Link id="m-spawnrotation" /><code>{"Quaternion spawnRotation"}</code> | World rotation the result spawns with. |
| <Link id="m-statichash" /><code>{"uint staticHash"}</code> | Hash of a static world object the build modifies, or 0. |
| <Link id="m-wasbuiltbydevtool" /><code>{"bool wasBuiltByDevTool"}</code> | True if the build was completed by a dev tool. |
