---
title: "LocomotionFunction"
description: "The kinds of player movement (teleport, smooth, reposition, rotation, anchor distance, recovery, forced), used to tell which locomotion system is acting."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocomotionFunction

An **enum** in `Root.Township`, the global namespace.

The kinds of player movement (teleport, smooth, reposition, rotation, anchor distance, recovery, forced), used to tell which locomotion system is acting.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)

## Values

| Member |
| --- |
| <Link id="m-anchordistance" /><code>{"AnchorDistance = 4"}</code> |
| <Link id="m-forcedlocomotion" /><code>{"ForcedLocomotion = 6"}</code> |
| <Link id="m-recovery" /><code>{"Recovery = 5"}</code> |
| <Link id="m-reposition" /><code>{"Reposition = 2"}</code> |
| <Link id="m-rotation" /><code>{"Rotation = 3"}</code> |
| <Link id="m-smoothlocomotion" /><code>{"SmoothLocomotion = 1"}</code> |
| <Link id="m-teleportlocomotion" /><code>{"TeleportLocomotion = 0"}</code> |

## Used in

Members of other types that take, return or hold a `LocomotionFunction`:

<div className="api-used-in">

[`AfkTimer.PositionChanged`](/mod/game-api/types/global-a-b/afktimer#m-positionchanged), [`PositionChangedHandler.BeginInvoke`](/mod/game-api/types/alta-player/positionchangedhandler#m-begininvoke), [`PositionChangedHandler.Invoke`](/mod/game-api/types/alta-player/positionchangedhandler#m-invoke), [`HandShakeOffDetector.UpdatePosition`](/mod/game-api/types/alta-stats-effects/handshakeoffdetector#m-updateposition), [`Chest.UpdateDistance`](/mod/game-api/types/alta-items/chest#m-updatedistance), [`StabilizePickupJoint.MoveWithPlayer`](/mod/game-api/types/alta-items/stabilizepickupjoint#m-movewithplayer), [`StabilizePickupJoint.RecordLocalPositionBeforeMoving`](/mod/game-api/types/alta-items/stabilizepickupjoint#m-recordlocalpositionbeforemoving), [`SpiritState.MovedOutOfBounds`](/mod/game-api/types/alta-player/spiritstate#m-movedoutofbounds), [`CameraStabilization.OnLocomotionMoved`](/mod/game-api/types/alta-customization/camerastabilization#m-onlocomotionmoved), [`TextPopup.CheckEnabled`](/mod/game-api/types/alta-utilities/textpopup#m-checkenabled), [`MicroTutorialFaceOrb.MovedOutOfBounds`](/mod/game-api/types/game-other-namespaces/microtutorialfaceorb#m-movedoutofbounds), [`TriggerZone.OnPlayerPositionChanged`](/mod/game-api/types/game-other-namespaces/triggerzone#m-onplayerpositionchanged), [`BreakOnImpact.ResetTeleport`](/mod/game-api/types/global-a-b/breakonimpact#m-resetteleport), [`ChunkBasedEnvironment.PositionChanged`](/mod/game-api/types/global-c-d/chunkbasedenvironment#m-positionchanged), [`ClothManager.PlayerAboutToTeleport`](/mod/game-api/types/global-c-d/clothmanager#m-playerabouttoteleport), [`InteractableInspector.DistanceRelease`](/mod/game-api/types/global-i-l/interactableinspector#m-distancerelease), [`LocomotionController.MoveTo`](/mod/game-api/types/global-i-l/locomotioncontroller#m-moveto), [`LocomotionController.OnPositionAboutToChange`](/mod/game-api/types/global-i-l/locomotioncontroller#m-onpositionabouttochange), [`LocomotionController.OnPositionChanged`](/mod/game-api/types/global-i-l/locomotioncontroller#m-onpositionchanged), [`LocomotionController.ShouldSendSync`](/mod/game-api/types/global-i-l/locomotioncontroller#m-shouldsendsync), [`LocomotionController.TeleportArgument.Function`](/mod/game-api/types/global-i-l/locomotioncontroller-teleportargument#m-function), [`LocomotionController.TeleportArgument.TeleportArgument`](/mod/game-api/types/global-i-l/locomotioncontroller-teleportargument#m-ctor-2), [`OptimizationManager.UpdatePosition`](/mod/game-api/types/global-m-o/optimizationmanager#m-updateposition), [`Pickup.CheckThreshold`](/mod/game-api/types/global-p/pickup#m-checkthreshold), [`PlayerChunkManager.LoadChunksFromPosition`](/mod/game-api/types/global-p/playerchunkmanager#m-loadchunksfromposition), [`PlayerLocomotionController.MoveTo`](/mod/game-api/types/global-p/playerlocomotioncontroller#m-moveto), [`PlayerLocomotionController.TeleportFinishedSound`](/mod/game-api/types/global-p/playerlocomotioncontroller#m-teleportfinishedsound), [`PlayerLocomotionController.TeleportTo`](/mod/game-api/types/global-p/playerlocomotioncontroller#m-teleportto), [`PlayerSpecialEffectsController.RespositionTrail`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-respositiontrail), [`RigidbodyGroup.PlayerAboutToTeleport`](/mod/game-api/types/global-q-r/rigidbodygroup#m-playerabouttoteleport), [`SmoothLocomotion.HandleTeleport`](/mod/game-api/types/global-s/smoothlocomotion#m-handleteleport), [`ReviveOrb.MovedOutOfBounds`](/mod/game-api/types/game-other-namespaces/reviveorb#m-movedoutofbounds).

</div>
