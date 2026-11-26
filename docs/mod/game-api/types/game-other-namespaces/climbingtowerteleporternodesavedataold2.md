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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingTowerTeleporterNodeSaveDataOld2()"}</code> | <span className="api-desc">Creates a `ClimbingTowerTeleporterNodeSaveDataOld2` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isrootnode" /><code>{"bool isRootNode"}</code> | <span className="api-desc">Whether the node is the tower's root.</span> |
| <Link id="m-teleportoffset" /><code>{"Vector3 teleportOffset"}</code> | <span className="api-desc">Local offset of the arrival point.</span> |
| <Link id="m-unlocktoactivateteleporternode" /><code><Link to="/mod/game-api/types/global-p/playerunlock">{"PlayerUnlock"}</Link>{" unlockToActivateTeleporterNode"}</code> | <span className="api-desc">The unlock that used to be needed. Discarded on migration.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to version 3 with orb index 0; the old unlock is dropped.</span> |
