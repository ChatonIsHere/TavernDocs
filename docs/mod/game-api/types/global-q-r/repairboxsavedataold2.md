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
| <Link id="m-ctor" /><code>{"RepairBoxSaveDataOld2()"}</code> | <span className="api-desc">Creates a `RepairBoxSaveDataOld2` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-canbeundone" /><code>{"bool canBeUndone"}</code> | <span className="api-desc">Whether the build can be undone.</span> |
| <Link id="m-isdone" /><code>{"bool isDone"}</code> | <span className="api-desc">Whether the build is finished.</span> |
| <Link id="m-isrepeatable" /><code>{"bool isRepeatable"}</code> | <span className="api-desc">Whether the box can be refilled.</span> |
| <Link id="m-items" /><code><Link to="/mod/game-api/types/global-q-r/repairboxsavedataold2-itemold">{"RepairBoxSaveDataOld2.ItemOld"}</Link>{"[] items"}</code> | <span className="api-desc">Cost slots with only item and count.</span> |
| <Link id="m-spawning" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" spawning"}</code> | <span className="api-desc">Prefab spawned on finish.</span> |
| <Link id="m-spawningdata" /><code><Link to="/mod/game-api/types/global-s/setpiecedata">{"SetPieceData"}</Link>{" spawningData"}</code> | <span className="api-desc">Set piece spawned on finish; not carried over by `Migrate`.</span> |
| <Link id="m-spawnposition" /><code>{"Vector3 spawnPosition"}</code> | <span className="api-desc">Spawn position.</span> |
| <Link id="m-spawnrotation" /><code>{"Quaternion spawnRotation"}</code> | <span className="api-desc">Spawn rotation.</span> |
| <Link id="m-statichash" /><code>{"uint staticHash"}</code> | <span className="api-desc">Hash of the static object modified, or 0.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts the cost slots and copies the fields into the current format. Drops the saved set piece.</span> |
