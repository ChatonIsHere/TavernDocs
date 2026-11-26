---
title: "PumpingMechanism"
description: "Bellows on a forge or recycler: turns the player pumping the handle into a heat-like value and gives forging experience."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PumpingMechanism

A **class** in `Root.Township`, the global namespace.

Bellows on a forge or recycler: turns the player pumping the handle into a heat-like value and gives forging experience. Runs on both sides; experience is only given on the server.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PumpingMechanism()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alignvector" /><code>{"private Vector3 alignVector"}</code> | Local direction on the pivot that is turned to point at the hands. |
| <Link id="m-basevalue" /><code>{"private float baseValue"}</code> | Value `SteadyValue` rests at and decays to. |
| <Link id="m-bellowshandlepickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" bellowsHandlePickup"}</code> | The handle pickup the player grabs to pump. |
| <Link id="m-cooldownpersecond" /><code>{"private float cooldownPerSecond"}</code> | How fast `SteadyValue` falls per second. |
| <Link id="m-down" /><code>{"private float down"}</code> | Bellows angle counted as fully pressed. |
| <Link id="m-duringpumpaddition" /><code>{"private AnimationCurve duringPumpAddition"}</code> | Curve, by stroke position, for how much a stroke adds to the short-term pumping value. |
| <Link id="m-handlerotatingaxis" /><code>{"private Vector3 handleRotatingAxis"}</code> | Axis the handle turns around to match the hands' grip. |
| <Link id="m-handlerotatingtransform" /><code>{"private Transform handleRotatingTransform"}</code> | Handle transform turned to match the grip. |
| <Link id="m-isoffcenter" /><code>{"private bool isOffCenter"}</code> | True while the released bellows are still more than a degree from neutral, which keeps the update running. |
| <Link id="m-maxdifferencefromneutral" /><code>{"private float maxDifferenceFromNeutral"}</code> | Furthest the pivot may turn from neutral, in degrees. |
| <Link id="m-maxvalue" /><code>{"private float maxValue"}</code> | Cap for `SteadyValue`, and the top of `Value`'s range. |
| <Link id="m-neutralrotation" /><code>{"private Quaternion neutralRotation"}</code> | Pivot's resting local rotation. |
| <Link id="m-oldprogress" /><code>{"private float oldProgress"}</code> | Stroke position from the previous frame, used to measure how far it moved. |
| <Link id="m-pivotaxis" /><code>{"private Vector3 pivotAxis"}</code> | Axis the pivot hinges around. |
| <Link id="m-pivottransform" /><code>{"private Transform pivotTransform"}</code> | Transform hinged to follow the hands (a fake joint). |
| <Link id="m-pumpefficiency" /><code>{"private AnimationCurve pumpEfficiency"}</code> | Curve, by stroke position, for how much a stroke adds to `SteadyValue`. |
| <Link id="m-pumpingvaluemaxdecreasespeed" /><code>{"private float pumpingValueMaxDecreaseSpeed"}</code> | Fastest the short-term pumping value may fall per second. |
| <Link id="m-smoothpumpingvalue" /><code>{"private float smoothPumpingValue"}</code> | Short-term value from recent strokes; added to `SteadyValue` for `Value` and used for experience. |
| <Link id="m-up" /><code>{"private float up"}</code> | Bellows angle counted as fully open. |
| <Link id="m-updatemovement" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateMovement"}</code> | Handle for the registered per-frame update, or null. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-steadyvalue" /><code>{"float SteadyValue { get; private set; }"}</code> | Slow value built up by pumping; decays by `cooldownPerSecond` towards `baseValue` and is capped at `maxValue`. |
| <Link id="m-value" /><code>{"float Value { get; private set; }"}</code> | Current output from 0 to 1: steady plus short-term pumping value, scaled between base and max. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-canpump" /><code>{"event "}<Link to="/mod/game-api/types/global-e-h/filter">{"Filter"}</Link>{" CanPump"}</code> | Listeners can set the flag false to stop pumps from counting. |
| <Link id="m-updatessteadyvalue" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/pumpingmechanism">{"PumpingMechanism"}</Link>{", float> UpdatesSteadyValue"}</code> | Raised every update with the new `SteadyValue`; `Recycler` listens to it. |

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getbellowangle" /><code>{"private float GetBellowAngle()"}</code> | Returns this transform's local Z angle in the range -180 to 180. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Starts tracking when the handle is grabbed and sets `SteadyValue` to its base. |
| <Link id="m-startupdatingbellows" /><code>{"private void StartUpdatingBellows("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Registers the per-frame update when the handle is grabbed. |
| <Link id="m-trackhands" /><code>{"private void TrackHands()"}</code> | Rotates the pivot and handle to follow the holding hands, or eases back to the neutral rotation when let go. |
| <Link id="m-updatemovement-2" /><code>{"private void UpdateMovement()"}</code> | Per-frame tick; unregisters itself once the bellows are idle, released and back at neutral. |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue()"}</code> | Measures the downward stroke since last frame, updates both values and raises `UpdatesSteadyValue`. Server: gives the holder forging experience. |

</details>

## Used in

Members of other types that take, return or hold a `PumpingMechanism`:

[`Recycler.bellows`](/mod/game-api/types/alta-crafting/recycler#m-bellows), [`Recycler.UpdatedBellows`](/mod/game-api/types/alta-crafting/recycler#m-updatedbellows).
