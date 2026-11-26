---
title: "LocomotionFunction"
description: "The kinds of player movement (teleport, smooth, reposition, rotation, anchor distance, recovery, forced), used to tell which locomotion system is acting."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocomotionFunction

An **enum** in `Root.Township`, no namespace.

The kinds of player movement (teleport, smooth, reposition, rotation, anchor distance, recovery, forced), used to tell which locomotion system is acting.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)

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

[`AfkTimer.PositionChanged`](/game-api/types/global-a-b/afktimer#m-positionchanged), [`PositionChangedHandler.BeginInvoke`](/game-api/types/alta-player/positionchangedhandler#m-begininvoke), [`PositionChangedHandler.Invoke`](/game-api/types/alta-player/positionchangedhandler#m-invoke), [`HandShakeOffDetector.UpdatePosition`](/game-api/types/alta-stats-effects/handshakeoffdetector#m-updateposition), [`Chest.UpdateDistance`](/game-api/types/alta-items/chest#m-updatedistance), [`StabilizePickupJoint.MoveWithPlayer`](/game-api/types/alta-items/stabilizepickupjoint#m-movewithplayer), [`StabilizePickupJoint.RecordLocalPositionBeforeMoving`](/game-api/types/alta-items/stabilizepickupjoint#m-recordlocalpositionbeforemoving), [`SpiritState.MovedOutOfBounds`](/game-api/types/alta-player/spiritstate#m-movedoutofbounds), [`CameraStabilization.OnLocomotionMoved`](/game-api/types/alta-customization/camerastabilization#m-onlocomotionmoved), [`TextPopup.CheckEnabled`](/game-api/types/alta-utilities/textpopup#m-checkenabled), [`MicroTutorialFaceOrb.MovedOutOfBounds`](/game-api/types/game-other-namespaces/microtutorialfaceorb#m-movedoutofbounds), [`TriggerZone.OnPlayerPositionChanged`](/game-api/types/game-other-namespaces/triggerzone#m-onplayerpositionchanged), [`BreakOnImpact.ResetTeleport`](/game-api/types/global-a-b/breakonimpact#m-resetteleport), [`ChunkBasedEnvironment.PositionChanged`](/game-api/types/global-c-d/chunkbasedenvironment#m-positionchanged), [`ClothManager.PlayerAboutToTeleport`](/game-api/types/global-c-d/clothmanager#m-playerabouttoteleport), [`InteractableInspector.DistanceRelease`](/game-api/types/global-i-l/interactableinspector#m-distancerelease), [`LocomotionController.MoveTo`](/game-api/types/global-i-l/locomotioncontroller#m-moveto), [`LocomotionController.OnPositionAboutToChange`](/game-api/types/global-i-l/locomotioncontroller#m-onpositionabouttochange), [`LocomotionController.OnPositionChanged`](/game-api/types/global-i-l/locomotioncontroller#m-onpositionchanged), [`LocomotionController.ShouldSendSync`](/game-api/types/global-i-l/locomotioncontroller#m-shouldsendsync), [`LocomotionController.TeleportArgument.Function`](/game-api/types/global-i-l/locomotioncontroller-teleportargument#m-function), [`LocomotionController.TeleportArgument.TeleportArgument`](/game-api/types/global-i-l/locomotioncontroller-teleportargument#m-ctor-2), [`OptimizationManager.UpdatePosition`](/game-api/types/global-m-o/optimizationmanager#m-updateposition), [`Pickup.CheckThreshold`](/game-api/types/global-p/pickup#m-checkthreshold), [`PlayerChunkManager.LoadChunksFromPosition`](/game-api/types/global-p/playerchunkmanager#m-loadchunksfromposition), [`PlayerLocomotionController.MoveTo`](/game-api/types/global-p/playerlocomotioncontroller#m-moveto), [`PlayerLocomotionController.TeleportFinishedSound`](/game-api/types/global-p/playerlocomotioncontroller#m-teleportfinishedsound), [`PlayerLocomotionController.TeleportTo`](/game-api/types/global-p/playerlocomotioncontroller#m-teleportto), [`PlayerSpecialEffectsController.RespositionTrail`](/game-api/types/global-p/playerspecialeffectscontroller#m-respositiontrail), [`RigidbodyGroup.PlayerAboutToTeleport`](/game-api/types/global-q-r/rigidbodygroup#m-playerabouttoteleport), [`SmoothLocomotion.HandleTeleport`](/game-api/types/global-s/smoothlocomotion#m-handleteleport), [`ReviveOrb.MovedOutOfBounds`](/game-api/types/game-other-namespaces/reviveorb#m-movedoutofbounds).
