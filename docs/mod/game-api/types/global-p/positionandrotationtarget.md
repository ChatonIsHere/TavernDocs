---
title: "PositionAndRotationTarget"
description: "A teleport destination: a position and a facing direction."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionAndRotationTarget

A **struct** in `Root.Township`, the global namespace.

A teleport destination: a position and a facing direction. Used by the climbing tower teleporter nodes.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionAndRotationTarget(Vector3 position)"}</code> | <span className="api-desc">Creates a `PositionAndRotationTarget` from `position` and `rotation`.</span> |
| <Link id="m-ctor-2" /><code>{"PositionAndRotationTarget(Vector3 position, Vector3 rotation)"}</code> | <span className="api-desc">Creates a `PositionAndRotationTarget` from `position` and `rotation`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">World position to move to.</span> |
| <Link id="m-rotation" /><code>{"Vector3 rotation"}</code> | <span className="api-desc">Direction to face, as a vector (forward by default), not a rotation.</span> |

## Used in

Members of other types that take, return or hold a `PositionAndRotationTarget`:

<div className="api-used-in">

[`ClimbingTowerTeleporterNode.GetTeleportLocationForChildNode`](/mod/game-api/types/game-other-namespaces/climbingtowerteleporternode#m-getteleportlocationforchildnode), [`ClimbingTowerTeleporterNode.GetTeleportLocationForCompletionNode`](/mod/game-api/types/game-other-namespaces/climbingtowerteleporternode#m-getteleportlocationforcompletionnode), [`ClimbingTowerTeleporterNode.GetTeleportLocationForRootNode`](/mod/game-api/types/game-other-namespaces/climbingtowerteleporternode#m-getteleportlocationforrootnode), [`ClimbingTowerTeleporterNode.GetTeleportPositionAndRotation`](/mod/game-api/types/game-other-namespaces/climbingtowerteleporternode#m-getteleportpositionandrotation), [`LocomotionController.SyncMoveToAndFaceRequest`](/mod/game-api/types/global-i-l/locomotioncontroller#m-syncmovetoandfacerequest), [`LocomotionController.syncMoveToAndFaceTowardsXZ`](/mod/game-api/types/global-i-l/locomotioncontroller#m-syncmovetoandfacetowardsxz), [`TeleportDefinition.TeleportPlayerAndRotateTo`](/mod/game-api/types/global-t-x/teleportdefinition#m-teleportplayerandrotateto).

</div>
