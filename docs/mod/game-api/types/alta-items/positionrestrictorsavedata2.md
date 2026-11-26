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
| <Link id="m-ctor" /><code>{"PositionRestrictorSaveData2()"}</code> | <span className="api-desc">Creates a `PositionRestrictorSaveData2` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-autojumpbackboundsizesaved" /><code>{"Vector3 autoJumpBackBoundSizeSaved"}</code> | <span className="api-desc">Bounds size past which the object jumps back.</span> |
| <Link id="m-autojumpbackradiussaved" /><code>{"float autoJumpBackRadiusSaved"}</code> | <span className="api-desc">Radius past which the object jumps back. Replaced by 20 or 24 on migrate in radius mode.</span> |
| <Link id="m-boundssizesaved" /><code>{"Vector3 boundsSizeSaved"}</code> | <span className="api-desc">Size of the allowed bounds.</span> |
| <Link id="m-isusingboundssaved" /><code>{"bool isUsingBoundsSaved"}</code> | <span className="api-desc">True to restrict by a box instead of a radius.</span> |
| <Link id="m-radiussaved" /><code>{"float radiusSaved"}</code> | <span className="api-desc">Allowed radius.</span> |
| <Link id="m-spawnlocationpossaved" /><code>{"Vector3 spawnLocationPosSaved"}</code> | <span className="api-desc">Local position the object returns to.</span> |
| <Link id="m-spawnlocationrotsaved" /><code>{"Quaternion spawnLocationRotSaved"}</code> | <span className="api-desc">Local rotation the object returns to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Copies the fields to the current save data. For radius mode it also resets the spawn point and jump-back radius to fixed values based on the radius.</span> |
