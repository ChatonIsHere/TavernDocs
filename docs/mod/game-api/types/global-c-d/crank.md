---
title: "Crank"
description: "A handle you grab and turn, giving a value from 0 to 1 that changes with each turn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Crank

A **class** in `Root.Township`, the global namespace.

A handle you grab and turn, giving a value from 0 to 1 that changes with each turn. Server side by default; set `isRunningOnClients` to work it out on each client instead.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CrankSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<CrankSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`IDeltaControl`](/mod/game-api/types/global-i-l/ideltacontrol)
- **Derived types** [`CrankSaveData`](/mod/game-api/types/global-c-d/cranksavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Crank()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>24 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clampedoffset" /><code>{"private Vector3 clampedOffset"}</code> | <span className="api-desc">Private: not used in this build.</span> |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | <span className="api-desc">Private: the hand's angle around the axis at the last update.</span> |
| <Link id="m-currentinteractor" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" currentInteractor"}</code> | <span className="api-desc">Private: the hand being tracked.</span> |
| <Link id="m-difference" /><code>{"private float difference"}</code> | <span className="api-desc">Private: angle change since the last update, in degrees.</span> |
| <Link id="m-direction" /><code>{"private float direction"}</code> | <span className="api-desc">Private: 1 for clockwise, -1 otherwise.</span> |
| <Link id="m-handorientationaxis" /><code>{"private Vector3 handOrientationAxis"}</code> | <span className="api-desc">Axis the handle twists around to match the hand. Zero means use `orientationAxis`.</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">Private: not used in this build.</span> |
| <Link id="m-isclockwise" /><code>{"private bool isClockwise"}</code> | <span className="api-desc">Whether turning clockwise raises the value.</span> |
| <Link id="m-isrunningonclients" /><code>{"private bool isRunningOnClients"}</code> | <span className="api-desc">If set, each client works out the value itself and the server does not sync it.</span> |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | <span className="api-desc">Private: the hand's last position relative to `rotationCenter`.</span> |
| <Link id="m-lengthperrevolution" /><code>{"private float lengthPerRevolution"}</code> | <span className="api-desc">How much the value changes for one full turn. Defaults to 1.</span> |
| <Link id="m-onrotated" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" onRotated"}</code> | <span className="api-desc">Event raised each update with the angle turned, in degrees.</span> |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" onValueChanged"}</code> | <span className="api-desc">Event raised with the new value.</span> |
| <Link id="m-orientatestohand" /><code>{"private bool orientatesToHand"}</code> | <span className="api-desc">Whether the handle twists to match the hand when held by one hand.</span> |
| <Link id="m-orientationaxis" /><code>{"private Vector3 orientationAxis"}</code> | <span className="api-desc">Local axis the target turns around.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The pickup players grab to turn the crank.</span> |
| <Link id="m-rotatesaroundaxis" /><code>{"private bool rotatesAroundAxis"}</code> | <span className="api-desc">Whether the target turns with the hand at all.</span> |
| <Link id="m-rotationcenter" /><code>{"private Transform rotationCenter"}</code> | <span className="api-desc">Transform the hand position is measured from.</span> |
| <Link id="m-rotationoffset" /><code>{"private float rotationOffset"}</code> | <span className="api-desc">Serialized value not read in this build.</span> |
| <Link id="m-syncreleaseposition" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncReleasePosition"}</code> | <span className="api-desc">Private: message for `SyncReleasePosition`.</span> |
| <Link id="m-syncvalue" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncValue"}</code> | <span className="api-desc">Private: message for `SerializeValue`.</span> |
| <Link id="m-target" /><code>{"private Transform target"}</code> | <span className="api-desc">The transform that turns.</span> |
| <Link id="m-updatemethod" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateMethod"}</code> | <span className="api-desc">Private: the registered fixed update while held.</span> |
| <Link id="m-value" /><code>{"private float value"}</code> | <span className="api-desc">Backing field for `Value`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value-2" /><code>{"float Value { get; protected set; }"}</code> | <span className="api-desc">The crank's value, from 0 to 1. Changing it raises `ValueChanged`. It is saved.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-deltaprovided" /><code>{"event Action<float> DeltaProvided"}</code> | <span className="api-desc">Raised each update while turned, with the value change before clamping.</span> |
| <Link id="m-valuechanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-c-d/crank">{"Crank"}</Link>{", float> ValueChanged"}</code> | <span className="api-desc">Raised with the crank and its new value whenever the value changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the value and release rotation sync messages.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current value to a joining player.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets the turn direction, defaults the hand axis to the turn axis and hooks the pickup's grab and release.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Private, editor: updates the direction from `isClockwise`.</span> |
| <Link id="m-onvaluechanged-2" /><code>{"private void OnValueChanged()"}</code> | <span className="api-desc">Private: raises `ValueChanged` and `onValueChanged`; the server also syncs the value unless clients run it.</span> |
| <Link id="m-serializevalue" /><code>{"private void SerializeValue("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Private: syncs the value. The server ignores values sent by clients.</span> |
| <Link id="m-setdirection" /><code>{"private void SetDirection()"}</code> | <span className="api-desc">Private: sets `direction` to 1 or -1 from `isClockwise`.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Private: raises the value changed events once with the starting value.</span> |
| <Link id="m-starttrack" /><code>{"private void StartTrack("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Private: starts following the grabbing hand every fixed update.</span> |
| <Link id="m-stoptrack" /><code>{"private void StopTrack("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Private: when the last hand lets go, stops tracking, makes the pickup kinematic and the local player syncs where it was left.</span> |
| <Link id="m-syncreleaseposition-2" /><code>{"private void SyncReleasePosition("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Private: syncs the handle's rotation after release; the server relays it to other players.</span> |
| <Link id="m-trackhands" /><code>{"private void TrackHands()"}</code> | <span className="api-desc">Private: turns the target to follow the hand around the axis, and twists the handle to match the hand if `orientatesToHand` is set.</span> |
| <Link id="m-updatecrank" /><code>{"private void UpdateCrank()"}</code> | <span className="api-desc">Private: fixed update while held. Tracks the hand, and updates the value on the server or when clients run it.</span> |
| <Link id="m-updatevalues" /><code>{"private void UpdateValues()"}</code> | <span className="api-desc">Private: turns the angle change since the last update into a value change, raises the rotation events and clamps the value.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Crank`:

<div className="api-used-in">

[`CrankControlledRope.crank`](/mod/game-api/types/global-c-d/crankcontrolledrope#m-crank), [`CrankControlledRope.UpdateLineRenderer`](/mod/game-api/types/global-c-d/crankcontrolledrope#m-updatelinerenderer), [`CrankController.crank`](/mod/game-api/types/global-c-d/crankcontroller#m-crank).

</div>
