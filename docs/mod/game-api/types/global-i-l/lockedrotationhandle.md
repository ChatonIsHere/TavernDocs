---
title: "LockedRotationHandle"
description: "Networked handle that turns around an axis as a player drags it, such as a lever or crank."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LockedRotationHandle

A **class** in `Root.Township`, the global namespace.

Networked handle that turns around an axis as a player drags it, such as a lever or crank. It can be locked to a small angle, fires events past a threshold angle, and can spring back on release.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LockedRotationHandle()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>27 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | <span className="api-desc">Angle the handle is shown at.</span> |
| <Link id="m-currenttarget" /><code>{"private float currentTarget"}</code> | <span className="api-desc">Angle the handle is moving toward.</span> |
| <Link id="m-eventthreshold" /><code>{"private float eventThreshold"}</code> | <span className="api-desc">Angle past which the threshold events fire.</span> |
| <Link id="m-handle" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" handle"}</code> | <span className="api-desc">The `Interactable` players grab.</span> |
| <Link id="m-isaligninghandlewithhand" /><code>{"private bool isAligningHandleWithHand"}</code> | <span className="api-desc">Whether the handle twists to match the hand.</span> |
| <Link id="m-islocked" /><code>{"private bool isLocked"}</code> | <span className="api-desc">While true, the handle can only reach `maxAngleLocked`.</span> |
| <Link id="m-ispivotstatic" /><code>{"private bool isPivotStatic"}</code> | <span className="api-desc">If true, the pivot matrix is cached once instead of read every frame.</span> |
| <Link id="m-isreturningwhenreleased" /><code>{"private bool isReturningWhenReleased"}</code> | <span className="api-desc">Whether the handle springs back to 0 when released.</span> |
| <Link id="m-maxanglelocked" /><code>{"private float maxAngleLocked"}</code> | <span className="api-desc">Largest angle while locked.</span> |
| <Link id="m-maxangleunlocked" /><code>{"private float maxAngleUnlocked"}</code> | <span className="api-desc">Largest angle while unlocked.</span> |
| <Link id="m-minangle" /><code>{"private float minAngle"}</code> | <span className="api-desc">Smallest angle.</span> |
| <Link id="m-movementlerpspeed" /><code>{"private float movementLerpSpeed"}</code> | <span className="api-desc">Degrees per second while dragged; -1 snaps.</span> |
| <Link id="m-movementtoactualrotation" /><code>{"private AnimationCurve movementToActualRotation"}</code> | <span className="api-desc">Curve mapping the hand angle to the handle angle.</span> |
| <Link id="m-movetohand" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" moveToHand"}</code> | <span className="api-desc">Handle of the update method that follows the hand.</span> |
| <Link id="m-neutralaxis" /><code>{"private Vector3 neutralAxis"}</code> | <span className="api-desc">Direction, in pivot space, of angle 0.</span> |
| <Link id="m-onpassedthreshold" /><code>{"private UnityEvent onPassedThreshold"}</code> | <span className="api-desc">Event fired when the angle goes above the threshold.</span> |
| <Link id="m-onthresholdchanged" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onThresholdChanged"}</code> | <span className="api-desc">Event fired with true or false when the angle crosses the threshold.</span> |
| <Link id="m-pivot" /><code>{"private Transform pivot"}</code> | <span className="api-desc">Transform the hand position is measured against.</span> |
| <Link id="m-returnlerpspeed" /><code>{"private float returnLerpSpeed"}</code> | <span className="api-desc">Degrees per second when springing back; -1 snaps.</span> |
| <Link id="m-returntodefault" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" returnToDefault"}</code> | <span className="api-desc">Handle of the update method that springs back.</span> |
| <Link id="m-rotationaxis" /><code>{"private Vector3 rotationAxis"}</code> | <span className="api-desc">Axis the handle turns around.</span> |
| <Link id="m-rotationtarget" /><code>{"private Transform rotationTarget"}</code> | <span className="api-desc">Transform that is rotated.</span> |
| <Link id="m-staticmatrix" /><code>{"private Matrix4x4 staticMatrix"}</code> | <span className="api-desc">Cached pivot world-to-local matrix when the pivot is static.</span> |
| <Link id="m-synclocked" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncLocked"}</code> | <span className="api-desc">Method sync that sends the locked flag.</span> |
| <Link id="m-trackinginteractor" /><code>{"private Transform trackingInteractor"}</code> | <span className="api-desc">Grip point of the hand being followed.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared late update module for all handles.</span> |
| <Link id="m-wasabovethreshold" /><code>{"private bool wasAboveThreshold"}</code> | <span className="api-desc">Whether the angle was above the threshold last update.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the lock sync and grab events, and caches the pivot matrix if the pivot is static.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the locked state to a joining player if locked.</span> |
| <Link id="m-updatelocked" /><code>{"void UpdateLocked(bool isLocked)"}</code> | <span className="api-desc">Server: changes the locked state and syncs it to the chunks.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alignhandlewithhand" /><code>{"private void AlignHandleWithHand()"}</code> | <span className="api-desc">If enabled, twists the handle so it lines up with the holding hand.</span> |
| <Link id="m-blockinteraction" /><code>{"private void BlockInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Interaction filter that refuses every grab; added while the handle springs back.</span> |
| <Link id="m-endtracking" /><code>{"private void EndTracking("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When the last player lets go, stops following the hand and, if set, starts returning to neutral.</span> |
| <Link id="m-lerptotarget" /><code>{"private void LerpToTarget()"}</code> | <span className="api-desc">Moves the current angle toward the target at the drag or return speed, or snaps if the speed is not positive.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Removes the update methods.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-returntoneutral" /><code>{"private void ReturnToNeutral()"}</code> | <span className="api-desc">Update method that eases back to 0 and allows grabbing again once there.</span> |
| <Link id="m-setposition" /><code>{"private void SetPosition()"}</code> | <span className="api-desc">Applies the current angle and fires the threshold events when it crosses `eventThreshold`.</span> |
| <Link id="m-starttracking" /><code>{"private void StartTracking("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">On grab, cancels any spring back and starts following the hand's grip point.</span> |
| <Link id="m-synclocked-2" /><code>{"private void SyncLocked("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Serializes the locked flag for the sync message.</span> |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition()"}</code> | <span className="api-desc">Update method that works out the hand's angle around the axis, clamps it to the locked or unlocked range and moves toward it.</span> |

</details>
