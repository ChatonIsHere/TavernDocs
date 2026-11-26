---
title: "ClimbingTowerTeleporterNodeSaveDataOld2"
description: "Old save data (version 2) for ClimbingTowerTeleporterNode, when nodes needed an unlock rather than an orb."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingTowerTeleporterNodeSaveDataOld2

A **class** in `Root.Township`, `Features.Gameplay.ClimbingTower`.

Old save data (version 2) for `ClimbingTowerTeleporterNode`, when nodes needed an unlock rather than an orb. Migrated to version 3.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingTowerTeleporterNodeSaveDataOld2()"}</code> | Creates a `ClimbingTowerTeleporterNodeSaveDataOld2` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isrootnode" /><code>{"bool isRootNode"}</code> | Whether the node is the tower's root. |
| <Link id="m-teleportoffset" /><code>{"Vector3 teleportOffset"}</code> | Local offset of the arrival point. |
| <Link id="m-unlocktoactivateteleporternode" /><code><Link to="/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlockToActivateTeleporterNode"}</code> | The unlock that used to be needed. Discarded on migration. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to version 3 with orb index 0; the old unlock is dropped. |
