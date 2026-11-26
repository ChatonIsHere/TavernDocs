---
title: "SpiritModeDoorwaySaveData"
description: "Save data (version 2) for a SpiritModeDoorway in the climbing tower."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpiritModeDoorwaySaveData

A **internal class** in `Root.Township`, `ATT.ClimbingTower`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data (version 2) for a `SpiritModeDoorway` in the climbing tower.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NewSaveData<SpiritModeDoorway, SpiritModeDoorwaySaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`SpiritModeDoorwaySaveData`](/mod/game-api/types/game-other-namespaces/spiritmodedoorwaysavedata), [`SpiritModeDoorway`](/mod/game-api/types/game-other-namespaces/spiritmodedoorway)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpiritModeDoorwaySaveData()"}</code> | Creates a `SpiritModeDoorwaySaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-doorwaymode" /><code><Link to="/mod/game-api/types/game-other-namespaces/spiritmodedoorwaymode">{"SpiritModeDoorwayMode"}</Link>{" doorwayMode"}</code> | The doorway's mode. |
| <Link id="m-isonewaydoor" /><code>{"bool isOneWayDoor"}</code> | True if the doorway only lets players through one way. |
| <Link id="m-playerunlock" /><code><Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" playerUnlock"}</code> | Player unlock tied to the doorway. |
| <Link id="m-size" /><code>{"Vector3 size"}</code> | Size of the doorway. |
