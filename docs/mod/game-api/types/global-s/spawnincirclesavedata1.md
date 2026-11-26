---
title: "SpawnInCircleSaveData1"
description: "Old version 1 save data for SpawnInCircle, without the kinematic flag."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnInCircleSaveData1

A **class** in `Root.Township`, the global namespace.

Old version 1 save data for `SpawnInCircle`, without the kinematic flag. Migrated to `SpawnInCircleSaveData` on load.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnInCircleSaveData1()"}</code> | <span className="api-desc">Creates a `SpawnInCircleSaveData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxradiussaved" /><code>{"float maxRadiusSaved"}</code> | <span className="api-desc">Saved `maxRadius`.</span> |
| <Link id="m-minradiussaved" /><code>{"float minRadiusSaved"}</code> | <span className="api-desc">Saved `minRadius`.</span> |
| <Link id="m-numofitemssaved" /><code>{"int numOfItemsSaved"}</code> | <span className="api-desc">Saved `numOfItems`.</span> |
| <Link id="m-randomoffsetsaved" /><code>{"Vector3 randomOffsetSaved"}</code> | <span className="api-desc">Saved `randomOffset`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Copies the ring settings into a version 2 save. The kinematic flag is left false.</span> |
