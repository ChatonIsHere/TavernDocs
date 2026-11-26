---
title: "PlayerUnlockStationSaveData"
description: "Save data (version 3) for a PlayerUnlockStation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlockStationSaveData

A **class** in `Root.Township`, the global namespace.

Save data (version 3) for a `PlayerUnlockStation`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NewSaveData<PlayerUnlockStation, PlayerUnlockStationSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PlayerUnlockStation`](/mod/game-api/types/global-p/playerunlockstation), [`PlayerUnlockStationSaveData`](/mod/game-api/types/global-p/playerunlockstationsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerUnlockStationSaveData()"}</code> | Creates a `PlayerUnlockStationSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-climbingunlock" /><code><Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" climbingUnlock"}</code> | The unlock this station gives. |
| <Link id="m-orbindex" /><code>{"int orbIndex"}</code> | Index of the orb this station belongs to. |
| <Link id="m-unlockstationindex" /><code>{"uint unlockStationIndex"}</code> | Index of this station. |
