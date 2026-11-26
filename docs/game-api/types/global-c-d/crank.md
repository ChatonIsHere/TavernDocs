---
title: "Crank"
description: "A handle you grab and turn, giving a value from 0 to 1 that changes with each turn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Crank

A **class** in `Root.Township`, no namespace.

A handle you grab and turn, giving a value from 0 to 1 that changes with each turn. Server side by default; set `isRunningOnClients` to work it out on each client instead.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CrankSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<CrankSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IDeltaControl`](/game-api/types/global-i-l/ideltacontrol)
- **Derived types** [`CrankSaveData`](/game-api/types/global-c-d/cranksavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Crank()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>24 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clampedoffset" /><code>{"private Vector3 clampedOffset"}</code> | Private: not used in this build. |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | Private: the hand's angle around the axis at the last update. |
| <Link id="m-currentinteractor" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" currentInteractor"}</code> | Private: the hand being tracked. |
| <Link id="m-difference" /><code>{"private float difference"}</code> | Private: angle change since the last update, in degrees. |
| <Link id="m-direction" /><code>{"private float direction"}</code> | Private: 1 for clockwise, -1 otherwise. |
| <Link id="m-handorientationaxis" /><code>{"private Vector3 handOrientationAxis"}</code> | Axis the handle twists around to match the hand. Zero means use `orientationAxis`. |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | Private: not used in this build. |
| <Link id="m-isclockwise" /><code>{"private bool isClockwise"}</code> | Whether turning clockwise raises the value. |
| <Link id="m-isrunningonclients" /><code>{"private bool isRunningOnClients"}</code> | If set, each client works out the value itself and the server does not sync it. |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | Private: the hand's last position relative to `rotationCenter`. |
| <Link id="m-lengthperrevolution" /><code>{"private float lengthPerRevolution"}</code> | How much the value changes for one full turn. Defaults to 1. |
| <Link id="m-onrotated" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" onRotated"}</code> | Event raised each update with the angle turned, in degrees. |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" onValueChanged"}</code> | Event raised with the new value. |
| <Link id="m-orientatestohand" /><code>{"private bool orientatesToHand"}</code> | Whether the handle twists to match the hand when held by one hand. |
| <Link id="m-orientationaxis" /><code>{"private Vector3 orientationAxis"}</code> | Local axis the target turns around. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The pickup players grab to turn the crank. |
| <Link id="m-rotatesaroundaxis" /><code>{"private bool rotatesAroundAxis"}</code> | Whether the target turns with the hand at all. |
| <Link id="m-rotationcenter" /><code>{"private Transform rotationCenter"}</code> | Transform the hand position is measured from. |
| <Link id="m-rotationoffset" /><code>{"private float rotationOffset"}</code> | Serialized value not read in this build. |
| <Link id="m-syncreleaseposition" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncReleasePosition"}</code> | Private: message for `SyncReleasePosition`. |
| <Link id="m-syncvalue" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncValue"}</code> | Private: message for `SerializeValue`. |
| <Link id="m-target" /><code>{"private Transform target"}</code> | The transform that turns. |
| <Link id="m-updatemethod" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateMethod"}</code> | Private: the registered fixed update while held. |
| <Link id="m-value" /><code>{"private float value"}</code> | Backing field for `Value`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value-2" /><code>{"float Value { get; protected set; }"}</code> | The crank's value, from 0 to 1. Changing it raises `ValueChanged`. It is saved. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-deltaprovided" /><code>{"event Action<float> DeltaProvided"}</code> | Raised each update while turned, with the value change before clamping. |
| <Link id="m-valuechanged" /><code>{"event Action<"}<Link to="/game-api/types/global-c-d/crank">{"Crank"}</Link>{", float> ValueChanged"}</code> | Raised with the crank and its new value whenever the value changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the value and release rotation sync messages. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current value to a joining player. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets the turn direction, defaults the hand axis to the turn axis and hooks the pickup's grab and release. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Private, editor: updates the direction from `isClockwise`. |
| <Link id="m-onvaluechanged-2" /><code>{"private void OnValueChanged()"}</code> | Private: raises `ValueChanged` and `onValueChanged`; the server also syncs the value unless clients run it. |
| <Link id="m-serializevalue" /><code>{"private void SerializeValue("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Private: syncs the value. The server ignores values sent by clients. |
| <Link id="m-setdirection" /><code>{"private void SetDirection()"}</code> | Private: sets `direction` to 1 or -1 from `isClockwise`. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Private: raises the value changed events once with the starting value. |
| <Link id="m-starttrack" /><code>{"private void StartTrack("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Private: starts following the grabbing hand every fixed update. |
| <Link id="m-stoptrack" /><code>{"private void StopTrack("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Private: when the last hand lets go, stops tracking, makes the pickup kinematic and the local player syncs where it was left. |
| <Link id="m-syncreleaseposition-2" /><code>{"private void SyncReleasePosition("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Private: syncs the handle's rotation after release; the server relays it to other players. |
| <Link id="m-trackhands" /><code>{"private void TrackHands()"}</code> | Private: turns the target to follow the hand around the axis, and twists the handle to match the hand if `orientatesToHand` is set. |
| <Link id="m-updatecrank" /><code>{"private void UpdateCrank()"}</code> | Private: fixed update while held. Tracks the hand, and updates the value on the server or when clients run it. |
| <Link id="m-updatevalues" /><code>{"private void UpdateValues()"}</code> | Private: turns the angle change since the last update into a value change, raises the rotation events and clamps the value. |

</details>

## Used in

Members of other types that take, return or hold a `Crank`:

[`CrankControlledRope.crank`](/game-api/types/global-c-d/crankcontrolledrope#m-crank), [`CrankControlledRope.UpdateLineRenderer`](/game-api/types/global-c-d/crankcontrolledrope#m-updatelinerenderer), [`CrankController.crank`](/game-api/types/global-c-d/crankcontroller#m-crank).
