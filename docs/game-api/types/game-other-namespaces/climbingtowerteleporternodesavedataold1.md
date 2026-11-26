---
title: "ClimbingTowerTeleporterNodeSaveDataOld1"
description: "Old save data (version 1) for ClimbingTowerTeleporterNode, migrated to version 2."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingTowerTeleporterNodeSaveDataOld1

A **class** in `Root.Township`, `Features.Gameplay.ClimbingTower`.

Old save data (version 1) for `ClimbingTowerTeleporterNode`, migrated to version 2.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClimbingTowerTeleporterNodeSaveDataOld1()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isrootnode" /><code>{"bool isRootNode"}</code> | Whether the node is the tower's root. |
| <Link id="m-teleportoffset" /><code>{"Vector3 teleportOffset"}</code> | Local offset of the arrival point. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to version 2 with no unlock set. |
