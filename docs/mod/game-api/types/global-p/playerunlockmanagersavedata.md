---
title: "PlayerUnlockManagerSaveData"
description: "Save data for a player's PlayerUnlockManager: the unlocks they have, their current one, their orbs and checkpoint."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlockManagerSaveData

A **class** in `Root.Township`, the global namespace.

Save data for a player's `PlayerUnlockManager`: the unlocks they have, their current one, their orbs and checkpoint.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NewSaveData<PlayerUnlockManager, PlayerUnlockManagerSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PlayerUnlockManager`](/mod/game-api/types/global-p/playerunlockmanager), [`PlayerUnlockManagerSaveData`](/mod/game-api/types/global-p/playerunlockmanagersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerUnlockManagerSaveData()"}</code> | <span className="api-desc">Creates a `PlayerUnlockManagerSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-checkpoint" /><code>{"Vector3 checkpoint"}</code> | <span className="api-desc">Saved checkpoint position.</span> |
| <Link id="m-currentunlock" /><code><Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" currentUnlock"}</code> | <span className="api-desc">The unlock currently active.</span> |
| <Link id="m-orbs" /><code>{"uint[] orbs"}</code> | <span className="api-desc">Ids of the orbs the player has collected, probably their hashes.</span> |
| <Link id="m-unlocks" /><code><Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{"[] unlocks"}</code> | <span className="api-desc">All unlocks the player has.</span> |
