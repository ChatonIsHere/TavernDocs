---
title: "RepairBoxSaveDataOld4"
description: "Version 4 save data for RepairBox, without the dev tool flag."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepairBoxSaveDataOld4

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Version 4 save data for `RepairBox`, without the dev tool flag. Migrated to `RepairBoxSaveData` on load.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Nested types** [`Item`](/game-api/types/global-q-r/repairboxsavedataold4-item)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RepairBoxSaveDataOld4()"}</code> | Creates a `RepairBoxSaveDataOld4` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-canbeundone" /><code>{"bool canBeUndone"}</code> | Whether the build can be undone. |
| <Link id="m-isdone" /><code>{"bool isDone"}</code> | Whether the build is finished. |
| <Link id="m-isrepeatable" /><code>{"bool isRepeatable"}</code> | Whether the box can be refilled. |
| <Link id="m-items" /><code><Link to="/game-api/types/global-q-r/repairboxsavedataold4-item">{"RepairBoxSaveDataOld4.Item"}</Link>{"[] items"}</code> | Cost slots with item, count, material and simple-server flag. |
| <Link id="m-spawning" /><code><Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawning"}</code> | Prefab spawned on finish. |
| <Link id="m-spawningdata" /><code><Link to="/game-api/types/global-s/setpiecedata">{"SetPieceData"}</Link>{" spawningData"}</code> | Set piece spawned on finish. |
| <Link id="m-spawnposition" /><code>{"Vector3 spawnPosition"}</code> | Spawn position. |
| <Link id="m-spawnrotation" /><code>{"Quaternion spawnRotation"}</code> | Spawn rotation. |
| <Link id="m-statichash" /><code>{"uint staticHash"}</code> | Hash of the static object modified, or 0. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Copies everything into the current format with `wasBuiltByDevTool` false. |
