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
| <Link id="m-ctor" /><code>{"PlayerUnlockStationSaveData()"}</code> | <span className="api-desc">Creates a `PlayerUnlockStationSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-climbingunlock" /><code><Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" climbingUnlock"}</code> | <span className="api-desc">The unlock this station gives.</span> |
| <Link id="m-orbindex" /><code>{"int orbIndex"}</code> | <span className="api-desc">Index of the orb this station belongs to.</span> |
| <Link id="m-unlockstationindex" /><code>{"uint unlockStationIndex"}</code> | <span className="api-desc">Index of this station.</span> |
