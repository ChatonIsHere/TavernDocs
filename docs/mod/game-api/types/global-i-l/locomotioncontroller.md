---
title: "LocomotionController"
description: "Moves and turns a player's rig and syncs it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocomotionController

A **class** in `Root.Township`, the global namespace.

Moves and turns a player's rig and syncs it. The owning client is in charge of its own position: it streams it to the server, and the server forwards moves to others or asks the client to move. A component on every player controller.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/mod/game-api/types/alta-networking/inetworkserialized), [`IInitializeAsLocalPlayer`](/mod/game-api/types/global-i-l/iinitializeaslocalplayer)
- **Derived types** [`AutoCamLocomotionController`](/mod/game-api/types/global-a-b/autocamlocomotioncontroller), [`FlyCamLocomotionController`](/mod/game-api/types/global-e-h/flycamlocomotioncontroller), [`PlayerLocomotionController`](/mod/game-api/types/global-p/playerlocomotioncontroller)
- **Nested types** [`TeleportArgument`](/mod/game-api/types/global-i-l/locomotioncontroller-teleportargument)
- **Documented in** [Locomotion](/mod/game-api/networking/locomotion#locomotioncontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocomotionController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | <span className="api-desc">Shared profiling timer for preparing the stream data.</span> |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | <span className="api-desc">Shared profiling timer for serializing the stream data.</span> |
| <Link id="m-fixedupdatelerptime" /><code>{"protected float fixedUpdateLerpTime"}</code> | <span className="api-desc">How fast remote copies ease to the streamed position each frame. 1 or more snaps.</span> |
| <Link id="m-moveduration" /><code>{"protected float moveDuration"}</code> | <span className="api-desc">Default duration for smooth or faded turns.</span> |
| <Link id="m-syncmovement" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/mod/game-api/types/global-i-l/locomotioncontroller-teleportargument">{"LocomotionController.TeleportArgument"}</Link>{"> syncMovement"}</code> | <span className="api-desc">Network message carrying a move (position, chunk, teleport mode and function).</span> |
| <Link id="m-syncrotation" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<Quaternion> syncRotation"}</code> | <span className="api-desc">Network message carrying a rotation.</span> |
| <Link id="m-teleportstyle" /><code>{"protected "}<Link to="/mod/game-api/types/alta-player/locomotionstyle">{"LocomotionStyle"}</Link>{" teleportStyle"}</code> | <span className="api-desc">Default style (instant, lerp or fade) for turns.</span> |

<details className="api-private">
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anchorposition" /><code>{"private Vector3 anchorPosition"}</code> | <span className="api-desc">Last position that raised the position events in `Update`.</span> |
| <Link id="m-anchorrotation" /><code>{"private Quaternion anchorRotation"}</code> | <span className="api-desc">Last rotation that raised the rotation events in `Update`.</span> |
| <Link id="m-anglefromanchortocalleventdot" /><code>{"private float angleFromAnchorToCallEventDot"}</code> | <span className="api-desc">How far the rotation must turn from the anchor before `Update` raises the rotation events, as a dot. About 20 degrees.</span> |
| <Link id="m-anglethresholddot" /><code>{"private float angleThresholdDot"}</code> | <span className="api-desc">Rotation change below this (as a dot) isn't streamed.</span> |
| <Link id="m-currentrotate" /><code>{"private Coroutine currentRotate"}</code> | <span className="api-desc">Running `LerpRotation` coroutine, stopped when a new rotation starts.</span> |
| <Link id="m-distancefromanchortocalleventsquared" /><code>{"private float distanceFromAnchorToCallEventSquared"}</code> | <span className="api-desc">Squared distance the player must move from the anchor before `Update` raises the position events.</span> |
| <Link id="m-isstreaming" /><code>{"private bool isStreaming"}</code> | <span className="api-desc">Backing field for `IsStreaming`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-movementthresholdsquared" /><code>{"private float movementThresholdSquared"}</code> | <span className="api-desc">Squared movement below this isn't streamed.</span> |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | <span className="api-desc">Backing field for `PlayerController`.</span> |
| <Link id="m-positionserializer" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionserializer">{"PositionSerializer"}</Link>{" positionSerializer"}</code> | <span className="api-desc">Holds and serializes the streamed position and rotation, and the movement context.</span> |
| <Link id="m-snapdistancesquared" /><code>{"private float snapDistanceSquared"}</code> | <span className="api-desc">Squared distance at which a client snaps a remote player to the streamed position and logs a warning instead of lerping. Defaults to 2 m.</span> |
| <Link id="m-statsettings" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/locomotionstatsettings">{"LocomotionStatSettings"}</Link>{" statSettings"}</code> | <span className="api-desc">Which stats drive the speed and cripple modifiers.</span> |
| <Link id="m-syncfacetowardsxz" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<Vector3> syncFaceTowardsXZ"}</code> | <span className="api-desc">Method sync for `SyncFaceRequest`.</span> |
| <Link id="m-syncmovetoandfacetowardsxz" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/global-p/positionandrotationtarget">{"PositionAndRotationTarget"}</Link>{"> syncMoveToAndFaceTowardsXZ"}</code> | <span className="api-desc">Method sync for `SyncMoveToAndFaceRequest`.</span> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | <span className="api-desc">The transform that's moved and rotated, cached from this object.</span> |
| <Link id="m-unchangedresend" /><code>{"private const int UnchangedResend"}</code> | <span className="api-desc">Constant 30. Not used by this class.</span> |
| <Link id="m-weightspeedmultiplier" /><code>{"private AnimationCurve weightSpeedMultiplier"}</code> | <span className="api-desc">Curve from the weight stat's value to a speed multiplier.</span> |
| <Link id="m-weightstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" weightStat"}</code> | <span className="api-desc">The player's weight stat, looked up on first use.</span> |
| <Link id="m-weightstatdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" weightStatDefinition"}</code> | <span className="api-desc">Stat definition for carried weight. When unset, weight doesn't slow the player.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-crippledstatspeedmodifier" /><code>{"float CrippledStatSpeedModifier { get; private set; }"}</code> | <span className="api-desc">Speed factor from the cripple stat, kept up to date for the local player.</span> |
| <Link id="m-environmentspeedmodifier" /><code>{"float EnvironmentSpeedModifier { get; set; }"}</code> | <span className="api-desc">Speed factor set by the surroundings. Default 1.</span> |
| <Link id="m-isgrounded" /><code>{"bool IsGrounded { get; set; }"}</code> | <span className="api-desc">Whether the player is on the ground. Set by the movement code; default true.</span> |
| <Link id="m-isstreaming-2" /><code>{"bool IsStreaming { get; set; }"}</code> | <span className="api-desc">Whether position and rotation are streamed every network update. Setting it also enables or disables the component.</span> |
| <Link id="m-lastsynctime" /><code>{"float LastSyncTime { get; private set; }"}</code> | <span className="api-desc">Level time of the last streamed position update. 0 until the first one.</span> |
| <Link id="m-latestrotation" /><code>{"Quaternion LatestRotation { get; private set; }"}</code> | <span className="api-desc">The change in rotation from the last `RotateTo` call.</span> |
| <Link id="m-movementcontext" /><code><Link to="/mod/game-api/types/global-i-l/imovementcontext">{"IMovementContext"}</Link>{" MovementContext { get; set; }"}</code> | <span className="api-desc">Movement context of the position serializer, which positions are relative to.</span> |
| <Link id="m-overridestepsound" /><code><Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" OverrideStepSound { get; set; }"}</code> | <span className="api-desc">Footstep sound to use instead of the surface's. `None` means no override.</span> |
| <Link id="m-playercontroller-2" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; }"}</code> | <span className="api-desc">The player controller on the same object.</span> |
| <Link id="m-speedstatmodifier" /><code>{"float SpeedStatModifier { get; private set; }"}</code> | <span className="api-desc">Speed factor from the speed stat, kept up to date for the local player.</span> |
| <Link id="m-teleportspeedmultiplier" /><code>{"float TeleportSpeedMultiplier { get; }"}</code> | <span className="api-desc">Product of the environment, speed stat, cripple and weight factors.</span> |
| <Link id="m-weightspeedmodifier" /><code>{"float WeightSpeedModifier { get; }"}</code> | <span className="api-desc">Speed factor from carried weight, from a curve over the weight stat. 1 if there is no weight stat.</span> |

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | <span className="api-desc">Explicit `INetworkSerialized` property: at most 99 bits per write.</span> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | <span className="api-desc">Explicit `INetworkSerialized` property: returns the static `prepareForWriteTimer`.</span> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | <span className="api-desc">Explicit `INetworkSerialized` property: returns the static `serializeTimer`.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-distancetravelled" /><code>{"event Action<Vector3> DistanceTravelled"}</code> | <span className="api-desc">Raised with the movement vector for teleport, reposition and smooth moves (smooth moves scaled by a setting).</span> |
| <Link id="m-positionabouttochange" /><code>{"event "}<Link to="/mod/game-api/types/alta-player/positionchangedhandler">{"PositionChangedHandler"}</Link>{" PositionAboutToChange"}</code> | <span className="api-desc">Raised just before the rig moves, with old and new positions and the `LocomotionFunction`.</span> |
| <Link id="m-positionchanged" /><code>{"event "}<Link to="/mod/game-api/types/alta-player/positionchangedhandler">{"PositionChangedHandler"}</Link>{" PositionChanged"}</code> | <span className="api-desc">Raised after the rig moves, or drifts past a threshold. Fires often; the server's chunk tracking listens to it.</span> |
| <Link id="m-relativerotation" /><code>{"event Action<Vector3, Quaternion> RelativeRotation"}</code> | <span className="api-desc">Raised with the player position and the rotation change when the rig turns.</span> |
| <Link id="m-rotationchanged" /><code>{"event "}<Link to="/mod/game-api/types/alta-player/rotationchangedhandler">{"RotationChangedHandler"}</Link>{" RotationChanged"}</code> | <span className="api-desc">Raised with the old and new rotation when the rig turns.</span> |
| <Link id="m-streamingset" /><code>{"event Action<bool> StreamingSet"}</code> | <span className="api-desc">Raised when `IsStreaming` changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-facetowardsxz" /><code>{"void FaceTowardsXZ(Vector3 forward)"}</code> | <span className="api-desc">Turns the player to face a horizontal direction. From the server it asks the owning client to do it.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the movement, rotation and face-towards network messages and the position serializer.</span> |
| <Link id="m-moveto" /><code>{"virtual void MoveTo(Vector3 position, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Moves the player's feet to a position. The local player moves and syncs; the server only sends `Reposition` moves to the owner.</span> |
| <Link id="m-moveto-2" /><code>{"void MoveTo(Vector3 position, "}<Link to="/mod/game-api/types/alta-player/teleportmode">{"TeleportMode"}</Link>{" mode, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Moves the player's feet to a position. The local player moves and syncs; the server only sends `Reposition` moves to the owner.</span> |
| <Link id="m-movetoandface" /><code>{"void MoveToAndFace(Vector3 position, Vector3 forward)"}</code> | <span className="api-desc">Moves the player and turns them to face a direction. From the server it asks the owning client.</span> |
| <Link id="m-rotatearoundplayer" /><code>{"void RotateAroundPlayer(Quaternion rotation)"}</code> | <span className="api-desc">Turns the rig while keeping the player's real feet in the same spot.</span> |
| <Link id="m-rotatearoundplayer-2" /><code>{"virtual void RotateAroundPlayer(Quaternion rotation, "}<Link to="/mod/game-api/types/alta-player/locomotionstyle">{"LocomotionStyle"}</Link>{" teleportStyle, float duration)"}</code> | <span className="api-desc">Turns the rig while keeping the player's real feet in the same spot.</span> |
| <Link id="m-rotateto" /><code>{"void RotateTo(Quaternion rotation)"}</code> | <span className="api-desc">Turns the rig, instantly, smoothly or with a fade. The local player syncs the new rotation.</span> |
| <Link id="m-rotateto-2" /><code>{"void RotateTo(Quaternion rotation, "}<Link to="/mod/game-api/types/alta-player/locomotionstyle">{"LocomotionStyle"}</Link>{" style, float duration = 0.02)"}</code> | <span className="api-desc">Turns the rig, instantly, smoothly or with a fade. The local player syncs the new rotation.</span> |
| <Link id="m-serverforceposition" /><code>{"void ServerForcePosition(Vector3 position)"}</code> | <span className="api-desc">Server: sets the position the server holds and marks it for sync. On its own the client will move it back.</span> |
| <Link id="m-translate" /><code>{"void Translate(Vector3 translation)"}</code> | <span className="api-desc">Shifts the remote target position by an offset.</span> |
| <Link id="m-getteleporttarget" /><code>{"protected Vector3 GetTeleportTarget(Vector3 position, "}<Link to="/mod/game-api/types/alta-player/teleportmode">{"TeleportMode"}</Link>{" mode)"}</code> | <span className="api-desc">Converts a target position for a `TeleportMode` (feet, head or room centre) into the rig position.</span> |
| <Link id="m-internalfacetowardsxz" /><code>{"protected virtual void InternalFaceTowardsXZ(Vector3 forward)"}</code> | <span className="api-desc">Sets the rotation to look along the given direction. Subclasses override it.</span> |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> | <span className="api-desc">Resets the anchor position and rotation used for the change events.</span> |
| <Link id="m-update" /><code>{"protected virtual void Update()"}</code> | <span className="api-desc">On other players' copies, eases towards the streamed position. Also raises the change events when the rig drifts past the anchor thresholds.</span> |

<details className="api-private">
<summary>16 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-disableonapply" /><code>{"private bool DisableOnApply()"}</code> | <span className="api-desc">Inspector helper that disables the component when `teleportStyle` is applied.</span> |
| <Link id="m-handleremote" /><code>{"private void HandleRemote()"}</code> | <span className="api-desc">Client, for other players: lerps the transform toward the last streamed position and rotation.</span> |
| <Link id="m-initializeaslocalplayer" /><code>{"private void IInitializeAsLocalPlayer.InitializeAsLocalPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Explicit `IInitializeAsLocalPlayer` method: follows the speed and cripple stats into `SpeedStatModifier` and `CrippledStatSpeedModifier`.</span> |
| <Link id="m-internalmovetoandfacetowardsxz" /><code>{"private void InternalMoveToAndFaceTowardsXZ(Vector3 position, Vector3 forward)"}</code> | <span className="api-desc">Repositions the player and then turns them to face a direction.</span> |
| <Link id="m-lerprotation" /><code>{"private IEnumerator LerpRotation(Quaternion rotation, float duration) (iterator)"}</code> | <span className="api-desc">Coroutine that smooth-damps the rotation to a target over a duration.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws a sphere at the streamed live position while playing.</span> |
| <Link id="m-onpositionabouttochange" /><code>{"private void OnPositionAboutToChange(Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Fires `PositionAboutToChange`, logging any exception.</span> |
| <Link id="m-onpositionchanged" /><code>{"private void OnPositionChanged(Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Fires `PositionChanged`, and `DistanceTravelled` for teleports, repositions and smooth movement.</span> |
| <Link id="m-onrotationchanged" /><code>{"private void OnRotationChanged(Quaternion oldRotation, Quaternion newRotation)"}</code> | <span className="api-desc">Fires `RotationChanged` and `RelativeRotation`, logging any exception.</span> |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> | <span className="api-desc">Explicit `INetworkSerialized` method: whether there's movement to stream, skipping changes under the movement and angle thresholds.</span> |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | <span className="api-desc">Explicit `INetworkSerialized` method: streams position and rotation; the server and far-off clients snap to it.</span> |
| <Link id="m-shouldsendsync" /><code>{"private bool ShouldSendSync("}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Whether a move should go as its own message: always when not streaming, otherwise only for reposition and recovery.</span> |
| <Link id="m-syncfacerequest" /><code>{"private void SyncFaceRequest("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, Vector3 forward)"}</code> | <span className="api-desc">Server to the owning client: turns the local player to face a direction.</span> |
| <Link id="m-syncmovement-2" /><code>{"private void SyncMovement("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-i-l/locomotioncontroller-teleportargument">{"LocomotionController.TeleportArgument"}</Link>{" arguments)"}</code> | <span className="api-desc">Syncs a teleport or move. The server only accepts it from the owning player, applies it, counts distance travelled and relays it.</span> |
| <Link id="m-syncmovetoandfacerequest" /><code>{"private void SyncMoveToAndFaceRequest("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-p/positionandrotationtarget">{"PositionAndRotationTarget"}</Link>{" positionAndRotationTarget)"}</code> | <span className="api-desc">Server to the owning client: moves the local player and turns them.</span> |
| <Link id="m-syncrotation-2" /><code>{"private void SyncRotation("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, Quaternion toRotation)"}</code> | <span className="api-desc">Syncs a rotation. The server only accepts it from the owning player, then relays it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LocomotionController`:

<div className="api-used-in">

[`HandShakeOffDetector.teleportController`](/mod/game-api/types/alta-stats-effects/handshakeoffdetector#m-teleportcontroller), [`ImpactTool.currentlyTrackingPlayer`](/mod/game-api/types/alta-items/impacttool#m-currentlytrackingplayer), [`SpiritState.locomotion`](/mod/game-api/types/alta-player/spiritstate#m-locomotion), [`TextPopup.locomotionController`](/mod/game-api/types/alta-utilities/textpopup#m-locomotioncontroller), [`ChunkBasedEnvironment.locomotion`](/mod/game-api/types/global-c-d/chunkbasedenvironment#m-locomotion), [`ClimbingHandler.coreLocomotion`](/mod/game-api/types/game-other-namespaces/climbinghandler#m-corelocomotion), [`PlayerController.locomotionController`](/mod/game-api/types/global-p/playercontroller#m-locomotioncontroller), [`PlayerController.LocomotionController`](/mod/game-api/types/global-p/playercontroller#m-locomotioncontroller-2).

</div>
