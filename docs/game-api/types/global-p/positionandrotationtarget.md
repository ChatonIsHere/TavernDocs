---
title: "PositionAndRotationTarget"
description: "A teleport destination: a position and a facing direction."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionAndRotationTarget

A **struct** in `Root.Township`, no namespace.

A teleport destination: a position and a facing direction. Used by the climbing tower teleporter nodes.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionAndRotationTarget(Vector3 position)"}</code> | Creates a `PositionAndRotationTarget` from `position` and `rotation`. |
| <Link id="m-ctor-2" /><code>{"PositionAndRotationTarget(Vector3 position, Vector3 rotation)"}</code> | Creates a `PositionAndRotationTarget` from `position` and `rotation`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | World position to move to. |
| <Link id="m-rotation" /><code>{"Vector3 rotation"}</code> | Direction to face, as a vector (forward by default), not a rotation. |

## Used in

Members of other types that take, return or hold a `PositionAndRotationTarget`:

[`ClimbingTowerTeleporterNode.GetTeleportLocationForChildNode`](/game-api/types/game-other-namespaces/climbingtowerteleporternode#m-getteleportlocationforchildnode), [`ClimbingTowerTeleporterNode.GetTeleportLocationForCompletionNode`](/game-api/types/game-other-namespaces/climbingtowerteleporternode#m-getteleportlocationforcompletionnode), [`ClimbingTowerTeleporterNode.GetTeleportLocationForRootNode`](/game-api/types/game-other-namespaces/climbingtowerteleporternode#m-getteleportlocationforrootnode), [`ClimbingTowerTeleporterNode.GetTeleportPositionAndRotation`](/game-api/types/game-other-namespaces/climbingtowerteleporternode#m-getteleportpositionandrotation), [`LocomotionController.SyncMoveToAndFaceRequest`](/game-api/types/global-i-l/locomotioncontroller#m-syncmovetoandfacerequest), [`LocomotionController.syncMoveToAndFaceTowardsXZ`](/game-api/types/global-i-l/locomotioncontroller#m-syncmovetoandfacetowardsxz), [`TeleportDefinition.TeleportPlayerAndRotateTo`](/game-api/types/global-t-x/teleportdefinition#m-teleportplayerandrotateto).
