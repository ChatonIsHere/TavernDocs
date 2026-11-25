---
title: "Crank"
description: "class Crank in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Crank

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CrankSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<CrankSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IDeltaControl`](/game-api/types/global-i-l/ideltacontrol)
- **Derived types** [`CrankSaveData`](/game-api/types/global-c-d/cranksavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Crank()"}</code> |

## Fields

<details>
<summary>24 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-clampedoffset" /><code>{"private Vector3 clampedOffset"}</code> |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> |
| <Link id="m-currentinteractor" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" currentInteractor"}</code> |
| <Link id="m-difference" /><code>{"private float difference"}</code> |
| <Link id="m-direction" /><code>{"private float direction"}</code> |
| <Link id="m-handorientationaxis" /><code>{"private Vector3 handOrientationAxis"}</code> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> |
| <Link id="m-isclockwise" /><code>{"private bool isClockwise"}</code> |
| <Link id="m-isrunningonclients" /><code>{"private bool isRunningOnClients"}</code> |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> |
| <Link id="m-lengthperrevolution" /><code>{"private float lengthPerRevolution"}</code> |
| <Link id="m-onrotated" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" onRotated"}</code> |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" onValueChanged"}</code> |
| <Link id="m-orientatestohand" /><code>{"private bool orientatesToHand"}</code> |
| <Link id="m-orientationaxis" /><code>{"private Vector3 orientationAxis"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |
| <Link id="m-rotatesaroundaxis" /><code>{"private bool rotatesAroundAxis"}</code> |
| <Link id="m-rotationcenter" /><code>{"private Transform rotationCenter"}</code> |
| <Link id="m-rotationoffset" /><code>{"private float rotationOffset"}</code> |
| <Link id="m-syncreleaseposition" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncReleasePosition"}</code> |
| <Link id="m-syncvalue" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncValue"}</code> |
| <Link id="m-target" /><code>{"private Transform target"}</code> |
| <Link id="m-updatemethod" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateMethod"}</code> |
| <Link id="m-value" /><code>{"private float value"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-value-2" /><code>{"float Value { get; protected set; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-deltaprovided" /><code>{"event Action<float> DeltaProvided"}</code> |
| <Link id="m-valuechanged" /><code>{"event Action<"}<Link to="/game-api/types/global-c-d/crank">{"Crank"}</Link>{", float> ValueChanged"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |

<details>
<summary>12 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |
| <Link id="m-onvaluechanged-2" /><code>{"private void OnValueChanged()"}</code> |
| <Link id="m-serializevalue" /><code>{"private void SerializeValue("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-setdirection" /><code>{"private void SetDirection()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-starttrack" /><code>{"private void StartTrack("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-stoptrack" /><code>{"private void StopTrack("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |
| <Link id="m-syncreleaseposition-2" /><code>{"private void SyncReleasePosition("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-trackhands" /><code>{"private void TrackHands()"}</code> |
| <Link id="m-updatecrank" /><code>{"private void UpdateCrank()"}</code> |
| <Link id="m-updatevalues" /><code>{"private void UpdateValues()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Crank`:

[`CrankControlledRope.crank`](/game-api/types/global-c-d/crankcontrolledrope#m-crank), [`CrankControlledRope.UpdateLineRenderer`](/game-api/types/global-c-d/crankcontrolledrope#m-updatelinerenderer), [`CrankController.crank`](/game-api/types/global-c-d/crankcontroller#m-crank).
