---
title: "RepairBoxSaveDataOld4"
description: "Version 4 save data for RepairBox, without the dev tool flag."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepairBoxSaveDataOld4

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Version 4 save data for `RepairBox`, without the dev tool flag. Migrated to `RepairBoxSaveData` on load.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Nested types** [`Item`](/mod/game-api/types/global-q-r/repairboxsavedataold4-item)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RepairBoxSaveDataOld4()"}</code> | <span className="api-desc">Creates a `RepairBoxSaveDataOld4` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-canbeundone" /><code>{"bool canBeUndone"}</code> | <span className="api-desc">Whether the build can be undone.</span> |
| <Link id="m-isdone" /><code>{"bool isDone"}</code> | <span className="api-desc">Whether the build is finished.</span> |
| <Link id="m-isrepeatable" /><code>{"bool isRepeatable"}</code> | <span className="api-desc">Whether the box can be refilled.</span> |
| <Link id="m-items" /><code><Link to="/mod/game-api/types/global-q-r/repairboxsavedataold4-item">{"RepairBoxSaveDataOld4.Item"}</Link>{"[] items"}</code> | <span className="api-desc">Cost slots with item, count, material and simple-server flag.</span> |
| <Link id="m-spawning" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawning"}</code> | <span className="api-desc">Prefab spawned on finish.</span> |
| <Link id="m-spawningdata" /><code><Link to="/mod/game-api/types/global-s/setpiecedata">{"SetPieceData"}</Link>{" spawningData"}</code> | <span className="api-desc">Set piece spawned on finish.</span> |
| <Link id="m-spawnposition" /><code>{"Vector3 spawnPosition"}</code> | <span className="api-desc">Spawn position.</span> |
| <Link id="m-spawnrotation" /><code>{"Quaternion spawnRotation"}</code> | <span className="api-desc">Spawn rotation.</span> |
| <Link id="m-statichash" /><code>{"uint staticHash"}</code> | <span className="api-desc">Hash of the static object modified, or 0.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Copies everything into the current format with `wasBuiltByDevTool` false.</span> |
