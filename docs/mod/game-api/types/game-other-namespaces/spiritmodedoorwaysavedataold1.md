---
title: "SpiritModeDoorwaySaveDataOld1"
description: "Version 1 save data for a SpiritModeDoorway, from before one-way doors."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpiritModeDoorwaySaveDataOld1

A **internal class** in `Root.Township`, `ATT.ClimbingTower`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Version 1 save data for a `SpiritModeDoorway`, from before one-way doors.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpiritModeDoorwaySaveDataOld1()"}</code> | Creates a `SpiritModeDoorwaySaveDataOld1` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-doorwaymode" /><code><Link to="/mod/game-api/types/game-other-namespaces/spiritmodedoorwaymode">{"SpiritModeDoorwayMode"}</Link>{" doorwayMode"}</code> | The doorway's mode. |
| <Link id="m-playerunlock" /><code><Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" playerUnlock"}</code> | Player unlock tied to the doorway. |
| <Link id="m-size" /><code>{"Vector3 size"}</code> | Size of the doorway. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to the current save data with `isOneWayDoor` set to false. |
