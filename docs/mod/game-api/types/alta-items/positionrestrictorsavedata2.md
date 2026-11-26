---
title: "PositionRestrictorSaveData2"
description: "Old version 2 save data for a PositionRestrictor, kept so old saves can load."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionRestrictorSaveData2

A **class** in `Root.Township`, `Alta.Pages`.

Old version 2 save data for a `PositionRestrictor`, kept so old saves can load.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionRestrictorSaveData2()"}</code> | Creates a `PositionRestrictorSaveData2` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-autojumpbackboundsizesaved" /><code>{"Vector3 autoJumpBackBoundSizeSaved"}</code> | Bounds size past which the object jumps back. |
| <Link id="m-autojumpbackradiussaved" /><code>{"float autoJumpBackRadiusSaved"}</code> | Radius past which the object jumps back. Replaced by 20 or 24 on migrate in radius mode. |
| <Link id="m-boundssizesaved" /><code>{"Vector3 boundsSizeSaved"}</code> | Size of the allowed bounds. |
| <Link id="m-isusingboundssaved" /><code>{"bool isUsingBoundsSaved"}</code> | True to restrict by a box instead of a radius. |
| <Link id="m-radiussaved" /><code>{"float radiusSaved"}</code> | Allowed radius. |
| <Link id="m-spawnlocationpossaved" /><code>{"Vector3 spawnLocationPosSaved"}</code> | Local position the object returns to. |
| <Link id="m-spawnlocationrotsaved" /><code>{"Quaternion spawnLocationRotSaved"}</code> | Local rotation the object returns to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Copies the fields to the current save data. For radius mode it also resets the spawn point and jump-back radius to fixed values based on the radius. |
