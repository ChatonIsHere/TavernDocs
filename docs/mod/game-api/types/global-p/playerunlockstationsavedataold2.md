---
title: "PlayerUnlockStationSaveDataOld2"
description: "Old save data (version 2) for a PlayerUnlockStation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlockStationSaveDataOld2

A **class** in `Root.Township`, the global namespace.

Old save data (version 2) for a `PlayerUnlockStation`. Migrates to `PlayerUnlockStationSaveData`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerUnlockStationSaveDataOld2()"}</code> | <span className="api-desc">Creates a `PlayerUnlockStationSaveDataOld2` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-ischeckpoint" /><code>{"bool isCheckpoint"}</code> | <span className="api-desc">Old flag, dropped on migration.</span> |
| <Link id="m-isremoval" /><code>{"bool isRemoval"}</code> | <span className="api-desc">Old flag, dropped on migration.</span> |
| <Link id="m-isreset" /><code>{"bool isReset"}</code> | <span className="api-desc">Old flag, dropped on migration.</span> |
| <Link id="m-orbindex" /><code>{"int orbIndex"}</code> | <span className="api-desc">Index of the orb.</span> |
| <Link id="m-unlock" /><code><Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock"}</code> | <span className="api-desc">The unlock the station gave.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Keeps the unlock and orb index and sets the station index to 0. The flags are dropped.</span> |
