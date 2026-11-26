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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NewSaveData<ClimbingTowerTeleporterNode, ClimbingTowerTeleporterNodeSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`ClimbingTowerTeleporterNode`](/mod/game-api/types/game-other-namespaces/climbingtowerteleporternode), [`ClimbingTowerTeleporterNodeSaveData`](/mod/game-api/types/game-other-namespaces/climbingtowerteleporternodesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingTowerTeleporterNodeSaveData()"}</code> | <span className="api-desc">Creates a `ClimbingTowerTeleporterNodeSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isrootnode" /><code>{"bool isRootNode"}</code> | <span className="api-desc">Whether the node is the tower's root.</span> |
| <Link id="m-orbindextoactivateteleporternode" /><code>{"uint orbIndexToActivateTeleporterNode"}</code> | <span className="api-desc">The orb needed to use the node.</span> |
| <Link id="m-teleportoffset" /><code>{"Vector3 teleportOffset"}</code> | <span className="api-desc">Local offset of the arrival point.</span> |
