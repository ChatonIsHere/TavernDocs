---
title: "PlayerLocomotionController"
description: "The VR body's."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerLocomotionController

A **class** in `Root.Township`, no namespace.

The VR body's.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`LocomotionController`](/game-api/types/global-i-l/locomotioncontroller), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized)
- **Nested types** [`SmoothingSetting`](/game-api/types/global-p/playerlocomotioncontroller-smoothingsetting)
- **Documented in** [Locomotion](/game-api/networking/locomotion#playerlocomotioncontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerLocomotionController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currenttranslate" /><code>{"private Coroutine currentTranslate"}</code> |  |
| <Link id="m-dashblockagemask" /><code>{"private LayerMask dashBlockageMask"}</code> |  |
| <Link id="m-dashcooldown" /><code>{"private float dashCooldown"}</code> |  |
| <Link id="m-dashstandablemask" /><code>{"private LayerMask dashStandableMask"}</code> |  |
| <Link id="m-halfsteps" /><code>{"private int halfSteps"}</code> |  |
| <Link id="m-isusingtrail" /><code>{"private bool isUsingTrail"}</code> |  |
| <Link id="m-lerpduration" /><code>{"private float lerpDuration"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-maximumfall" /><code>{"private float maximumFall"}</code> |  |
| <Link id="m-maxstepangle" /><code>{"private float maxStepAngle"}</code> |  |
| <Link id="m-origin" /><code>{"private Transform origin"}</code> |  |
| <Link id="m-prepareforwritetimer" /><code>{"private static readonly "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> |  |
| <Link id="m-remotetrailmovement" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> remoteTrailMovement"}</code> |  |
| <Link id="m-serializetimer" /><code>{"private static readonly "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> |  |
| <Link id="m-smoothingsettings" /><code>{"private "}<Link to="/game-api/types/global-p/playerlocomotioncontroller-smoothingsetting">{"PlayerLocomotionController.SmoothingSetting"}</Link>{"[] smoothingSettings"}</code> |  |
| <Link id="m-smoothtransforms" /><code>{"private "}<Link to="/game-api/types/alta-networking/networktransform">{"NetworkTransform"}</Link>{"[] smoothTransforms"}</code> |  |
| <Link id="m-stepvelocity" /><code>{"private float stepVelocity"}</code> |  |
| <Link id="m-style" /><code>{"private "}<Link to="/game-api/types/alta-player/locomotionstyle">{"LocomotionStyle"}</Link>{" style"}</code> |  |
| <Link id="m-translatevelocity" /><code>{"private Vector3 translateVelocity"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bodyposition" /><code>{"Vector3 BodyPosition { get; set; }"}</code> |  |
| <Link id="m-isoncooldown" /><code>{"bool IsOnCooldown { get; set; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> |  |
| <Link id="m-playercontroller" /><code>{"protected "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" PlayerController { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-moveto" /><code>{"override void MoveTo(Vector3 position, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |  |
| <Link id="m-rotatearoundplayer" /><code>{"override void RotateAroundPlayer(Quaternion rotation, "}<Link to="/game-api/types/alta-player/locomotionstyle">{"LocomotionStyle"}</Link>{" teleportStyle, float duration)"}</code> |  |
| <Link id="m-teleportto" /><code>{"void TeleportTo(Vector3 position, "}<Link to="/game-api/types/alta-player/teleportmode">{"TeleportMode"}</Link>{" mode, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function, bool isUsingTrail = false)"}</code> |  |
| <Link id="m-teleportto-2" /><code>{"void TeleportTo(Vector3 position, "}<Link to="/game-api/types/alta-player/teleportmode">{"TeleportMode"}</Link>{" mode, "}<Link to="/game-api/types/alta-player/locomotionstyle">{"LocomotionStyle"}</Link>{" style, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function, float duration = 0.02, bool isUsingTrail = false)"}</code> |  |
| <Link id="m-trystep" /><code>{"void TryStep("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-internalfacetowardsxz" /><code>{"protected override void InternalFaceTowardsXZ(Vector3 forward)"}</code> |  |
| <Link id="m-lerpposition" /><code>{"private IEnumerator LerpPosition(Vector3 target, float duration, Action lerpFinishedCallback) (iterator)"}</code> |  |
| <Link id="m-lerprotation" /><code>{"private IEnumerator LerpRotation(Quaternion rotation, float duration) (iterator)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"protected override void OnEnable()"}</code> |  |
| <Link id="m-remotetrailmovement-2" /><code>{"private void RemoteTrailMovement("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isUsingTrail)"}</code> |  |
| <Link id="m-runstepcooldown" /><code>{"private IEnumerator RunStepCoolDown() (iterator)"}</code> |  |
| <Link id="m-setuporigin" /><code>{"private bool SetupOrigin()"}</code> |  |
| <Link id="m-teleportfinishedsound" /><code>{"private void TeleportFinishedSound("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |  |
| <Link id="m-updatesmoothing" /><code>{"private void UpdateSmoothing(int smoothingLevel)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerLocomotionController`:

[`PlayerCharacter.LocomotionController`](/game-api/types/alta-player/playercharacter#m-locomotioncontroller).
