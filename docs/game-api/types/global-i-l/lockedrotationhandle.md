---
title: "LockedRotationHandle"
description: "Networked handle that turns around an axis as a player drags it, such as a lever or crank."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LockedRotationHandle

A **class** in `Root.Township`, no namespace.

Networked handle that turns around an axis as a player drags it, such as a lever or crank. It can be locked to a small angle, fires events past a threshold angle, and can spring back on release.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LockedRotationHandle()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>27 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | Angle the handle is shown at. |
| <Link id="m-currenttarget" /><code>{"private float currentTarget"}</code> | Angle the handle is moving toward. |
| <Link id="m-eventthreshold" /><code>{"private float eventThreshold"}</code> | Angle past which the threshold events fire. |
| <Link id="m-handle" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" handle"}</code> | The `Interactable` players grab. |
| <Link id="m-isaligninghandlewithhand" /><code>{"private bool isAligningHandleWithHand"}</code> | Whether the handle twists to match the hand. |
| <Link id="m-islocked" /><code>{"private bool isLocked"}</code> | While true, the handle can only reach `maxAngleLocked`. |
| <Link id="m-ispivotstatic" /><code>{"private bool isPivotStatic"}</code> | If true, the pivot matrix is cached once instead of read every frame. |
| <Link id="m-isreturningwhenreleased" /><code>{"private bool isReturningWhenReleased"}</code> | Whether the handle springs back to 0 when released. |
| <Link id="m-maxanglelocked" /><code>{"private float maxAngleLocked"}</code> | Largest angle while locked. |
| <Link id="m-maxangleunlocked" /><code>{"private float maxAngleUnlocked"}</code> | Largest angle while unlocked. |
| <Link id="m-minangle" /><code>{"private float minAngle"}</code> | Smallest angle. |
| <Link id="m-movementlerpspeed" /><code>{"private float movementLerpSpeed"}</code> | Degrees per second while dragged; -1 snaps. |
| <Link id="m-movementtoactualrotation" /><code>{"private AnimationCurve movementToActualRotation"}</code> | Curve mapping the hand angle to the handle angle. |
| <Link id="m-movetohand" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" moveToHand"}</code> | Handle of the update method that follows the hand. |
| <Link id="m-neutralaxis" /><code>{"private Vector3 neutralAxis"}</code> | Direction, in pivot space, of angle 0. |
| <Link id="m-onpassedthreshold" /><code>{"private UnityEvent onPassedThreshold"}</code> | Event fired when the angle goes above the threshold. |
| <Link id="m-onthresholdchanged" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onThresholdChanged"}</code> | Event fired with true or false when the angle crosses the threshold. |
| <Link id="m-pivot" /><code>{"private Transform pivot"}</code> | Transform the hand position is measured against. |
| <Link id="m-returnlerpspeed" /><code>{"private float returnLerpSpeed"}</code> | Degrees per second when springing back; -1 snaps. |
| <Link id="m-returntodefault" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" returnToDefault"}</code> | Handle of the update method that springs back. |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> | Axis the handle turns around. |
| <Link id="m-rotationtarget" /><code>{"private Transform rotationTarget"}</code> | Transform that is rotated. |
| <Link id="m-staticmatrix" /><code>{"private Matrix4x4 staticMatrix"}</code> | Cached pivot world-to-local matrix when the pivot is static. |
| <Link id="m-synclocked" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLocked"}</code> | Method sync that sends the locked flag. |
| <Link id="m-trackinginteractor" /><code>{"private Transform trackingInteractor"}</code> | Grip point of the hand being followed. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Shared late update module for all handles. |
| <Link id="m-wasabovethreshold" /><code>{"private bool wasAboveThreshold"}</code> | Whether the angle was above the threshold last update. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the lock sync and grab events, and caches the pivot matrix if the pivot is static. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the locked state to a joining player if locked. |
| <Link id="m-updatelocked" /><code>{"void UpdateLocked(bool isLocked)"}</code> | Server: changes the locked state and syncs it to the chunks. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alignhandlewithhand" /><code>{"private void AlignHandleWithHand()"}</code> | If enabled, twists the handle so it lines up with the holding hand. |
| <Link id="m-blockinteraction" /><code>{"private void BlockInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Interaction filter that refuses every grab; added while the handle springs back. |
| <Link id="m-endtracking" /><code>{"private void EndTracking("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When the last player lets go, stops following the hand and, if set, starts returning to neutral. |
| <Link id="m-lerptotarget" /><code>{"private void LerpToTarget()"}</code> | Moves the current angle toward the target at the drag or return speed, or snaps if the speed is not positive. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Removes the update methods. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Empty. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Empty. |
| <Link id="m-returntoneutral" /><code>{"private void ReturnToNeutral()"}</code> | Update method that eases back to 0 and allows grabbing again once there. |
| <Link id="m-setposition" /><code>{"private void SetPosition()"}</code> | Applies the current angle and fires the threshold events when it crosses `eventThreshold`. |
| <Link id="m-starttracking" /><code>{"private void StartTracking("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On grab, cancels any spring back and starts following the hand's grip point. |
| <Link id="m-synclocked-2" /><code>{"private void SyncLocked("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Serializes the locked flag for the sync message. |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition()"}</code> | Update method that works out the hand's angle around the axis, clamps it to the locked or unlocked range and moves toward it. |

</details>
