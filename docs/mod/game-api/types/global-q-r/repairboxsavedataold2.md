---
title: "RepairBoxSaveDataOld2"
description: "Version 2 save data for RepairBox, with item cost slots that have no material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RepairBoxSaveDataOld2

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Version 2 save data for `RepairBox`, with item cost slots that have no material. Migrated to `RepairBoxSaveData` on load.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Nested types** [`ItemOld`](/mod/game-api/types/global-q-r/repairboxsavedataold2-itemold)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RepairBoxSaveDataOld2()"}</code> | Creates a `RepairBoxSaveDataOld2` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-canbeundone" /><code>{"bool canBeUndone"}</code> | Whether the build can be undone. |
| <Link id="m-isdone" /><code>{"bool isDone"}</code> | Whether the build is finished. |
| <Link id="m-isrepeatable" /><code>{"bool isRepeatable"}</code> | Whether the box can be refilled. |
| <Link id="m-items" /><code><Link to="/mod/game-api/types/global-q-r/repairboxsavedataold2-itemold">{"RepairBoxSaveDataOld2.ItemOld"}</Link>{"[] items"}</code> | Cost slots with only item and count. |
| <Link id="m-spawning" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawning"}</code> | Prefab spawned on finish. |
| <Link id="m-spawningdata" /><code><Link to="/mod/game-api/types/global-s/setpiecedata">{"SetPieceData"}</Link>{" spawningData"}</code> | Set piece spawned on finish; not carried over by `Migrate`. |
| <Link id="m-spawnposition" /><code>{"Vector3 spawnPosition"}</code> | Spawn position. |
| <Link id="m-spawnrotation" /><code>{"Quaternion spawnRotation"}</code> | Spawn rotation. |
| <Link id="m-statichash" /><code>{"uint staticHash"}</code> | Hash of the static object modified, or 0. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts the cost slots and copies the fields into the current format. Drops the saved set piece. |
