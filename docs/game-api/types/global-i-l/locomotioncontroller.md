---
title: "LocomotionController"
description: "Moves and turns a player's rig and syncs it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocomotionController

A **class** in `Root.Township`, no namespace.

Moves and turns a player's rig and syncs it. The owning client is in charge of its own position: it streams it to the server, and the server forwards moves to others or asks the client to move. A component on every player controller.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized), [`IInitializeAsLocalPlayer`](/game-api/types/global-i-l/iinitializeaslocalplayer)
- **Derived types** [`AutoCamLocomotionController`](/game-api/types/global-a-b/autocamlocomotioncontroller), [`FlyCamLocomotionController`](/game-api/types/global-e-h/flycamlocomotioncontroller), [`PlayerLocomotionController`](/game-api/types/global-p/playerlocomotioncontroller)
- **Nested types** [`TeleportArgument`](/game-api/types/global-i-l/locomotioncontroller-teleportargument)
- **Documented in** [Locomotion](/game-api/networking/locomotion#locomotioncontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LocomotionController()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | Shared profiling timer for preparing the stream data. |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | Shared profiling timer for serializing the stream data. |
| <Link id="m-fixedupdatelerptime" /><code>{"protected float fixedUpdateLerpTime"}</code> | How fast remote copies ease to the streamed position each frame. 1 or more snaps. |
| <Link id="m-moveduration" /><code>{"protected float moveDuration"}</code> | Default duration for smooth or faded turns. |
| <Link id="m-syncmovement" /><code>{"protected "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/global-i-l/locomotioncontroller-teleportargument">{"LocomotionController.TeleportArgument"}</Link>{"> syncMovement"}</code> | Network message carrying a move (position, chunk, teleport mode and function). |
| <Link id="m-syncrotation" /><code>{"protected "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<Quaternion> syncRotation"}</code> | Network message carrying a rotation. |
| <Link id="m-teleportstyle" /><code>{"protected "}<Link to="/game-api/types/alta-player/locomotionstyle">{"LocomotionStyle"}</Link>{" teleportStyle"}</code> | Default style (instant, lerp or fade) for turns. |

<details>
<summary>20 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-anchorposition" /><code>{"private Vector3 anchorPosition"}</code> |
| <Link id="m-anchorrotation" /><code>{"private Quaternion anchorRotation"}</code> |
| <Link id="m-anglefromanchortocalleventdot" /><code>{"private float angleFromAnchorToCallEventDot"}</code> |
| <Link id="m-anglethresholddot" /><code>{"private float angleThresholdDot"}</code> |
| <Link id="m-currentrotate" /><code>{"private Coroutine currentRotate"}</code> |
| <Link id="m-distancefromanchortocalleventsquared" /><code>{"private float distanceFromAnchorToCallEventSquared"}</code> |
| <Link id="m-isstreaming" /><code>{"private bool isStreaming"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-movementthresholdsquared" /><code>{"private float movementThresholdSquared"}</code> |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> |
| <Link id="m-positionserializer" /><code>{"private "}<Link to="/game-api/types/global-p/positionserializer">{"PositionSerializer"}</Link>{" positionSerializer"}</code> |
| <Link id="m-snapdistancesquared" /><code>{"private float snapDistanceSquared"}</code> |
| <Link id="m-statsettings" /><code>{"private "}<Link to="/game-api/types/global-i-l/locomotionstatsettings">{"LocomotionStatSettings"}</Link>{" statSettings"}</code> |
| <Link id="m-syncfacetowardsxz" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<Vector3> syncFaceTowardsXZ"}</code> |
| <Link id="m-syncmovetoandfacetowardsxz" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/global-p/positionandrotationtarget">{"PositionAndRotationTarget"}</Link>{"> syncMoveToAndFaceTowardsXZ"}</code> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> |
| <Link id="m-unchangedresend" /><code>{"private const int UnchangedResend"}</code> |
| <Link id="m-weightspeedmultiplier" /><code>{"private AnimationCurve weightSpeedMultiplier"}</code> |
| <Link id="m-weightstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" weightStat"}</code> |
| <Link id="m-weightstatdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" weightStatDefinition"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-crippledstatspeedmodifier" /><code>{"float CrippledStatSpeedModifier { get; private set; }"}</code> | Speed factor from the cripple stat, kept up to date for the local player. |
| <Link id="m-environmentspeedmodifier" /><code>{"float EnvironmentSpeedModifier { get; set; }"}</code> | Speed factor set by the surroundings. Default 1. |
| <Link id="m-isgrounded" /><code>{"bool IsGrounded { get; set; }"}</code> | Whether the player is on the ground. Set by the movement code; default true. |
| <Link id="m-isstreaming-2" /><code>{"bool IsStreaming { get; set; }"}</code> | Whether position and rotation are streamed every network update. Setting it also enables or disables the component. |
| <Link id="m-lastsynctime" /><code>{"float LastSyncTime { get; private set; }"}</code> | Level time of the last streamed position update. 0 until the first one. |
| <Link id="m-latestrotation" /><code>{"Quaternion LatestRotation { get; private set; }"}</code> | The change in rotation from the last `RotateTo` call. |
| <Link id="m-movementcontext" /><code><Link to="/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{" MovementContext { get; set; }"}</code> | Movement context of the position serializer, which positions are relative to. |
| <Link id="m-overridestepsound" /><code><Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" OverrideStepSound { get; set; }"}</code> | Footstep sound to use instead of the surface's. `None` means no override. |
| <Link id="m-playercontroller-2" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; }"}</code> | The player controller on the same object. |
| <Link id="m-speedstatmodifier" /><code>{"float SpeedStatModifier { get; private set; }"}</code> | Speed factor from the speed stat, kept up to date for the local player. |
| <Link id="m-teleportspeedmultiplier" /><code>{"float TeleportSpeedMultiplier { get; }"}</code> | Product of the environment, speed stat, cripple and weight factors. |
| <Link id="m-weightspeedmodifier" /><code>{"float WeightSpeedModifier { get; }"}</code> | Speed factor from carried weight, from a curve over the weight stat. 1 if there is no weight stat. |

<details>
<summary>3 private and internal properties</summary>

| Member |
| --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-distancetravelled" /><code>{"event Action<Vector3> DistanceTravelled"}</code> | Raised with the movement vector for teleport, reposition and smooth moves (smooth moves scaled by a setting). |
| <Link id="m-positionabouttochange" /><code>{"event "}<Link to="/game-api/types/alta-player/positionchangedhandler">{"PositionChangedHandler"}</Link>{" PositionAboutToChange"}</code> | Raised just before the rig moves, with old and new positions and the `LocomotionFunction`. |
| <Link id="m-positionchanged" /><code>{"event "}<Link to="/game-api/types/alta-player/positionchangedhandler">{"PositionChangedHandler"}</Link>{" PositionChanged"}</code> | Raised after the rig moves, or drifts past a threshold. Fires often; the server's chunk tracking listens to it. |
| <Link id="m-relativerotation" /><code>{"event Action<Vector3, Quaternion> RelativeRotation"}</code> | Raised with the player position and the rotation change when the rig turns. |
| <Link id="m-rotationchanged" /><code>{"event "}<Link to="/game-api/types/alta-player/rotationchangedhandler">{"RotationChangedHandler"}</Link>{" RotationChanged"}</code> | Raised with the old and new rotation when the rig turns. |
| <Link id="m-streamingset" /><code>{"event Action<bool> StreamingSet"}</code> | Raised when `IsStreaming` changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-facetowardsxz" /><code>{"void FaceTowardsXZ(Vector3 forward)"}</code> | Turns the player to face a horizontal direction. From the server it asks the owning client to do it. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the movement, rotation and face-towards network messages and the position serializer. |
| <Link id="m-moveto" /><code>{"virtual void MoveTo(Vector3 position, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | Moves the player's feet to a position. The local player moves and syncs; the server only sends `Reposition` moves to the owner. |
| <Link id="m-moveto-2" /><code>{"void MoveTo(Vector3 position, "}<Link to="/game-api/types/alta-player/teleportmode">{"TeleportMode"}</Link>{" mode, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | Moves the player's feet to a position. The local player moves and syncs; the server only sends `Reposition` moves to the owner. |
| <Link id="m-movetoandface" /><code>{"void MoveToAndFace(Vector3 position, Vector3 forward)"}</code> | Moves the player and turns them to face a direction. From the server it asks the owning client. |
| <Link id="m-rotatearoundplayer" /><code>{"void RotateAroundPlayer(Quaternion rotation)"}</code> | Turns the rig while keeping the player's real feet in the same spot. |
| <Link id="m-rotatearoundplayer-2" /><code>{"virtual void RotateAroundPlayer(Quaternion rotation, "}<Link to="/game-api/types/alta-player/locomotionstyle">{"LocomotionStyle"}</Link>{" teleportStyle, float duration)"}</code> | Turns the rig while keeping the player's real feet in the same spot. |
| <Link id="m-rotateto" /><code>{"void RotateTo(Quaternion rotation)"}</code> | Turns the rig, instantly, smoothly or with a fade. The local player syncs the new rotation. |
| <Link id="m-rotateto-2" /><code>{"void RotateTo(Quaternion rotation, "}<Link to="/game-api/types/alta-player/locomotionstyle">{"LocomotionStyle"}</Link>{" style, float duration = 0.02)"}</code> | Turns the rig, instantly, smoothly or with a fade. The local player syncs the new rotation. |
| <Link id="m-serverforceposition" /><code>{"void ServerForcePosition(Vector3 position)"}</code> | Server: sets the position the server holds and marks it for sync. On its own the client will move it back. |
| <Link id="m-translate" /><code>{"void Translate(Vector3 translation)"}</code> | Shifts the remote target position by an offset. |
| <Link id="m-getteleporttarget" /><code>{"protected Vector3 GetTeleportTarget(Vector3 position, "}<Link to="/game-api/types/alta-player/teleportmode">{"TeleportMode"}</Link>{" mode)"}</code> | Converts a target position for a `TeleportMode` (feet, head or room centre) into the rig position. |
| <Link id="m-internalfacetowardsxz" /><code>{"protected virtual void InternalFaceTowardsXZ(Vector3 forward)"}</code> | Sets the rotation to look along the given direction. Subclasses override it. |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> | Resets the anchor position and rotation used for the change events. |
| <Link id="m-update" /><code>{"protected virtual void Update()"}</code> | On other players' copies, eases towards the streamed position. Also raises the change events when the rig drifts past the anchor thresholds. |

<details>
<summary>16 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-disableonapply" /><code>{"private bool DisableOnApply()"}</code> |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |
| <Link id="m-internalmovetoandfacetowardsxz" /><code>{"private void InternalMoveToAndFaceTowardsXZ(Vector3 position, Vector3 forward)"}</code> |
| <Link id="m-lerprotation" /><code>{"private IEnumerator LerpRotation(Quaternion rotation, float duration) (iterator)"}</code> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |
| <Link id="m-onpositionabouttochange" /><code>{"private void OnPositionAboutToChange(Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |
| <Link id="m-onpositionchanged" /><code>{"private void OnPositionChanged(Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |
| <Link id="m-onrotationchanged" /><code>{"private void OnRotationChanged(Quaternion oldRotation, Quaternion newRotation)"}</code> |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> |
| <Link id="m-shouldsendsync" /><code>{"private bool ShouldSendSync("}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |
| <Link id="m-syncfacerequest" /><code>{"private void SyncFaceRequest("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, Vector3 forward)"}</code> |
| <Link id="m-syncmovement-2" /><code>{"private void SyncMovement("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-i-l/locomotioncontroller-teleportargument">{"LocomotionController.TeleportArgument"}</Link>{" arguments)"}</code> |
| <Link id="m-syncmovetoandfacerequest" /><code>{"private void SyncMoveToAndFaceRequest("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-p/positionandrotationtarget">{"PositionAndRotationTarget"}</Link>{" positionAndRotationTarget)"}</code> |
| <Link id="m-syncrotation-2" /><code>{"private void SyncRotation("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, Quaternion toRotation)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `LocomotionController`:

[`HandShakeOffDetector.teleportController`](/game-api/types/alta-stats-effects/handshakeoffdetector#m-teleportcontroller), [`ImpactTool.currentlyTrackingPlayer`](/game-api/types/alta-items/impacttool#m-currentlytrackingplayer), [`SpiritState.locomotion`](/game-api/types/alta-player/spiritstate#m-locomotion), [`TextPopup.locomotionController`](/game-api/types/alta-utilities/textpopup#m-locomotioncontroller), [`ChunkBasedEnvironment.locomotion`](/game-api/types/global-c-d/chunkbasedenvironment#m-locomotion), [`ClimbingHandler.coreLocomotion`](/game-api/types/game-other-namespaces/climbinghandler#m-corelocomotion), [`PlayerController.locomotionController`](/game-api/types/global-p/playercontroller#m-locomotioncontroller), [`PlayerController.LocomotionController`](/game-api/types/global-p/playercontroller#m-locomotioncontroller-2).
