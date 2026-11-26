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
| <Link id="m-ctor" /><code>{"RepairBoxSaveData()"}</code> | <span className="api-desc">Creates a `RepairBoxSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-canbeundone" /><code>{"bool canBeUndone"}</code> | <span className="api-desc">Whether the finished build can be undone.</span> |
| <Link id="m-isdone" /><code>{"bool isDone"}</code> | <span className="api-desc">Whether the build is finished.</span> |
| <Link id="m-isrepeatable" /><code>{"bool isRepeatable"}</code> | <span className="api-desc">Whether the box can be filled again after finishing.</span> |
| <Link id="m-items" /><code><Link to="/mod/game-api/types/global-q-r/repairboxsavedata-item">{"RepairBoxSaveData.Item"}</Link>{"[] items"}</code> | <span className="api-desc">The three cost slots: item, count, optional physical material and the simple-server material flag.</span> |
| <Link id="m-spawning" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawning"}</code> | <span className="api-desc">Prefab spawned when the build finishes.</span> |
| <Link id="m-spawningdata" /><code><Link to="/mod/game-api/types/global-s/setpiecedata">{"SetPieceData"}</Link>{" spawningData"}</code> | <span className="api-desc">Set piece spawned when the build finishes, instead of a prefab.</span> |
| <Link id="m-spawnposition" /><code>{"Vector3 spawnPosition"}</code> | <span className="api-desc">World position the result spawns at.</span> |
| <Link id="m-spawnrotation" /><code>{"Quaternion spawnRotation"}</code> | <span className="api-desc">World rotation the result spawns with.</span> |
| <Link id="m-statichash" /><code>{"uint staticHash"}</code> | <span className="api-desc">Hash of a static world object the build modifies, or 0.</span> |
| <Link id="m-wasbuiltbydevtool" /><code>{"bool wasBuiltByDevTool"}</code> | <span className="api-desc">True if the build was completed by a dev tool.</span> |
