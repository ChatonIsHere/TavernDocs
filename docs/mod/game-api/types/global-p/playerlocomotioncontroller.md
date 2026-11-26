---
title: "PlayerLocomotionController"
description: "The VR body's LocomotionController: adds teleport styles (instant, lerp, fade), combat steps and smoothing of remote bodies."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerLocomotionController

A **class** in `Root.Township`, the global namespace.

The VR body's `LocomotionController`: adds teleport styles (instant, lerp, fade), combat steps and smoothing of remote bodies. Get it from `PlayerCharacter.LocomotionController`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`LocomotionController`](/mod/game-api/types/global-i-l/locomotioncontroller), [`INetworkSerialized`](/mod/game-api/types/alta-networking/inetworkserialized)
- **Nested types** [`SmoothingSetting`](/mod/game-api/types/global-p/playerlocomotioncontroller-smoothingsetting)
- **Documented in** [Locomotion](/mod/game-api/networking/locomotion#playerlocomotioncontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerLocomotionController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currenttranslate" /><code>{"private Coroutine currentTranslate"}</code> | Running `LerpPosition` coroutine, stopped when a new teleport starts. |
| <Link id="m-dashblockagemask" /><code>{"private LayerMask dashBlockageMask"}</code> | Layers that block a combat step. |
| <Link id="m-dashcooldown" /><code>{"private float dashCooldown"}</code> | Seconds between combat steps. Defaults to 0.5. |
| <Link id="m-dashstandablemask" /><code>{"private LayerMask dashStandableMask"}</code> | Layers a combat step can land on. |
| <Link id="m-halfsteps" /><code>{"private int halfSteps"}</code> | How many times a blocked step is retried at half the distance. |
| <Link id="m-isusingtrail" /><code>{"private bool isUsingTrail"}</code> | Whether moves show a teleport trail. Set from the remote trail sync. |
| <Link id="m-lerpduration" /><code>{"private float lerpDuration"}</code> | Duration of the combat step move. Zero uses the default teleport duration. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-maximumfall" /><code>{"private float maximumFall"}</code> | How far down a combat step looks for ground. |
| <Link id="m-maxstepangle" /><code>{"private float maxStepAngle"}</code> | Steepest surface, in degrees, a combat step can land on. |
| <Link id="m-origin" /><code>{"private Transform origin"}</code> | Transform whose rotation turns stick input into a step direction (the player camera). |
| <Link id="m-prepareforwritetimer" /><code>{"private static readonly "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | Static backing field for the explicit `PrepareForWriteTimer`. |
| <Link id="m-remotetrailmovement" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> remoteTrailMovement"}</code> | Method sync on `EffectRequest` for the trail flag. |
| <Link id="m-serializetimer" /><code>{"private static readonly "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | Static backing field for the explicit `SerializeTimer`. |
| <Link id="m-smoothingsettings" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerlocomotioncontroller-smoothingsetting">{"PlayerLocomotionController.SmoothingSetting"}</Link>{"[] smoothingSettings"}</code> | Locomotion and transform lerp pairs, one per `PlayerSmoothManager` setting index. |
| <Link id="m-smoothtransforms" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networktransform">{"NetworkTransform"}</Link>{"[] smoothTransforms"}</code> | Network transforms whose lerp is set by the smoothing setting. |
| <Link id="m-stepvelocity" /><code>{"private float stepVelocity"}</code> | Distance of a full combat step. Defaults to 0.6. |
| <Link id="m-style" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/locomotionstyle">{"LocomotionStyle"}</Link>{" style"}</code> | Teleport style used for combat steps. Defaults to Lerp. |
| <Link id="m-translatevelocity" /><code>{"private Vector3 translateVelocity"}</code> | Smooth-damp velocity used by `LerpPosition`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bodyposition" /><code>{"Vector3 BodyPosition { get; set; }"}</code> | Where the body target was when a trail teleport started. |
| <Link id="m-isoncooldown" /><code>{"bool IsOnCooldown { get; set; }"}</code> | True while a combat step is cooling down. |
| <Link id="m-playercontroller" /><code>{"protected "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" PlayerController { get; }"}</code> | The body as a `PlayerCharacter`. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | Shared timing stats for preparing player locomotion writes. |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | Shared timing stats for serializing player locomotion. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the trail message and applies the player smoothing setting. |
| <Link id="m-moveto" /><code>{"override void MoveTo(Vector3 position, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | Moves the feet to a position. On the owner it teleports; on any other side it sends the move to the owning player. |
| <Link id="m-rotatearoundplayer" /><code>{"override void RotateAroundPlayer(Quaternion rotation, "}<Link to="/mod/game-api/types/alta-player/locomotionstyle">{"LocomotionStyle"}</Link>{" teleportStyle, float duration)"}</code> | Turns the body while keeping the player's real feet in place. |
| <Link id="m-teleportto" /><code>{"void TeleportTo(Vector3 position, "}<Link to="/mod/game-api/types/alta-player/teleportmode">{"TeleportMode"}</Link>{" mode, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function, bool isUsingTrail = false)"}</code> | Moves the body with a style and duration. Fade goes to black and back; lerp smooths there first. Can show a trail to others. |
| <Link id="m-teleportto-2" /><code>{"void TeleportTo(Vector3 position, "}<Link to="/mod/game-api/types/alta-player/teleportmode">{"TeleportMode"}</Link>{" mode, "}<Link to="/mod/game-api/types/alta-player/locomotionstyle">{"LocomotionStyle"}</Link>{" style, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function, float duration = 0.02, bool isUsingTrail = false)"}</code> | Moves the body with a style and duration. Fade goes to black and back; lerp smooths there first. Can show a trail to others. |
| <Link id="m-trystep" /><code>{"void TryStep("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Combat step: tries a short hop in the stick direction onto standable ground, then starts the cooldown. |
| <Link id="m-internalfacetowardsxz" /><code>{"protected override void InternalFaceTowardsXZ(Vector3 forward)"}</code> | Rotates the body around the player so the head faces a flat direction. |
| <Link id="m-onenable" /><code>{"protected override void OnEnable()"}</code> | Hooks the teleport arrive sound on clients. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lerpposition" /><code>{"private IEnumerator LerpPosition(Vector3 target, float duration, Action lerpFinishedCallback) (iterator)"}</code> | Coroutine that smooth-damps the local position to a target, then runs a callback. Used by Lerp-style teleports. |
| <Link id="m-lerprotation" /><code>{"private IEnumerator LerpRotation(Quaternion rotation, float duration) (iterator)"}</code> | Coroutine that slerps the rotation to a target. Not called in this class. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks from `PlayerSmoothManager.SettingChanged`. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Client: unhooks the teleport arrival sound. |
| <Link id="m-remotetrailmovement-2" /><code>{"private void RemoteTrailMovement("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isUsingTrail)"}</code> | Method sync for whether the last move used a teleport trail. The server relays it to everyone else. |
| <Link id="m-runstepcooldown" /><code>{"private IEnumerator RunStepCoolDown() (iterator)"}</code> | Waits `dashCooldown`, then steps again if a Step action is still held, otherwise clears `IsOnCooldown`. |
| <Link id="m-setuporigin" /><code>{"private bool SetupOrigin()"}</code> | Editor helper: sets `origin` to the player camera. |
| <Link id="m-teleportfinishedsound" /><code>{"private void TeleportFinishedSound("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | Client: plays the teleport arrive sound after a teleport-locomotion move. |
| <Link id="m-updatesmoothing" /><code>{"private void UpdateSmoothing(int smoothingLevel)"}</code> | Applies the smoothing setting at the chosen index to the locomotion lerp and the smoothed network transforms. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerLocomotionController`:

[`PlayerCharacter.LocomotionController`](/mod/game-api/types/alta-player/playercharacter#m-locomotioncontroller).
