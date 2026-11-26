---
title: "ClimbingTowerTeleporterNodeSaveData"
description: "Save data (version 3) for ClimbingTowerTeleporterNode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingTowerTeleporterNodeSaveData

A **class** in `Root.Township`, `Features.Gameplay.ClimbingTower`.

Save data (version 3) for `ClimbingTowerTeleporterNode`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NewSaveData<ClimbingTowerTeleporterNode, ClimbingTowerTeleporterNodeSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`ClimbingTowerTeleporterNode`](/game-api/types/game-other-namespaces/climbingtowerteleporternode), [`ClimbingTowerTeleporterNodeSaveData`](/game-api/types/game-other-namespaces/climbingtowerteleporternodesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingTowerTeleporterNodeSaveData()"}</code> | Creates a `ClimbingTowerTeleporterNodeSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isrootnode" /><code>{"bool isRootNode"}</code> | Whether the node is the tower's root. |
| <Link id="m-orbindextoactivateteleporternode" /><code>{"uint orbIndexToActivateTeleporterNode"}</code> | The orb needed to use the node. |
| <Link id="m-teleportoffset" /><code>{"Vector3 teleportOffset"}</code> | Local offset of the arrival point. |
