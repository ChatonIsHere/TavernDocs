---
title: "SpawnInCircleSaveData1"
description: "Old version 1 save data for SpawnInCircle, without the kinematic flag."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnInCircleSaveData1

A **class** in `Root.Township`, no namespace.

Old version 1 save data for `SpawnInCircle`, without the kinematic flag. Migrated to `SpawnInCircleSaveData` on load.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnInCircleSaveData1()"}</code> | Creates a `SpawnInCircleSaveData1` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maxradiussaved" /><code>{"float maxRadiusSaved"}</code> | Saved `maxRadius`. |
| <Link id="m-minradiussaved" /><code>{"float minRadiusSaved"}</code> | Saved `minRadius`. |
| <Link id="m-numofitemssaved" /><code>{"int numOfItemsSaved"}</code> | Saved `numOfItems`. |
| <Link id="m-randomoffsetsaved" /><code>{"Vector3 randomOffsetSaved"}</code> | Saved `randomOffset`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Copies the ring settings into a version 2 save. The kinematic flag is left false. |
