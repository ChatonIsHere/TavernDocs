---
title: "PlayerUnlockManagerSaveData"
description: "Save data for a player's PlayerUnlockManager: the unlocks they have, their current one, their orbs and checkpoint."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlockManagerSaveData

A **class** in `Root.Township`, no namespace.

Save data for a player's `PlayerUnlockManager`: the unlocks they have, their current one, their orbs and checkpoint.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NewSaveData<PlayerUnlockManager, PlayerUnlockManagerSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PlayerUnlockManager`](/game-api/types/global-p/playerunlockmanager), [`PlayerUnlockManagerSaveData`](/game-api/types/global-p/playerunlockmanagersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerUnlockManagerSaveData()"}</code> | Creates a `PlayerUnlockManagerSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-checkpoint" /><code>{"Vector3 checkpoint"}</code> | Saved checkpoint position. |
| <Link id="m-currentunlock" /><code><Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" currentUnlock"}</code> | The unlock currently active. |
| <Link id="m-orbs" /><code>{"uint[] orbs"}</code> | Ids of the orbs the player has collected, probably their hashes. |
| <Link id="m-unlocks" /><code><Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{"[] unlocks"}</code> | All unlocks the player has. |
