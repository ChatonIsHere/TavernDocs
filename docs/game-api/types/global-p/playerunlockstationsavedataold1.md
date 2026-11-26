---
title: "PlayerUnlockStationSaveDataOld1"
description: "Old save data (version 1) for a PlayerUnlockStation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlockStationSaveDataOld1

A **class** in `Root.Township`, no namespace.

Old save data (version 1) for a `PlayerUnlockStation`. Migrates to `PlayerUnlockStationSaveData`.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerUnlockStationSaveDataOld1()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-ischeckpoint" /><code>{"bool isCheckpoint"}</code> | Old flag, dropped on migration. |
| <Link id="m-isreset" /><code>{"bool isReset"}</code> | Old flag, dropped on migration. |
| <Link id="m-orbindex" /><code>{"int orbIndex"}</code> | Index of the orb. |
| <Link id="m-unlock" /><code><Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlock"}</code> | The unlock the station gave. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Keeps the unlock and orb index and sets the station index to 0. The checkpoint and reset flags are dropped. |
