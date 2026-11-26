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
| <Link id="m-ctor" /><code>{"PumpingMechanism()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>20 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alignvector" /><code>{"private Vector3 alignVector"}</code> | <span className="api-desc">Local direction on the pivot that is turned to point at the hands.</span> |
| <Link id="m-basevalue" /><code>{"private float baseValue"}</code> | <span className="api-desc">Value `SteadyValue` rests at and decays to.</span> |
| <Link id="m-bellowshandlepickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" bellowsHandlePickup"}</code> | <span className="api-desc">The handle pickup the player grabs to pump.</span> |
| <Link id="m-cooldownpersecond" /><code>{"private float cooldownPerSecond"}</code> | <span className="api-desc">How fast `SteadyValue` falls per second.</span> |
| <Link id="m-down" /><code>{"private float down"}</code> | <span className="api-desc">Bellows angle counted as fully pressed.</span> |
| <Link id="m-duringpumpaddition" /><code>{"private AnimationCurve duringPumpAddition"}</code> | <span className="api-desc">Curve, by stroke position, for how much a stroke adds to the short-term pumping value.</span> |
| <Link id="m-handlerotatingaxis" /><code>{"private Vector3 handleRotatingAxis"}</code> | <span className="api-desc">Axis the handle turns around to match the hands' grip.</span> |
| <Link id="m-handlerotatingtransform" /><code>{"private Transform handleRotatingTransform"}</code> | <span className="api-desc">Handle transform turned to match the grip.</span> |
| <Link id="m-isoffcenter" /><code>{"private bool isOffCenter"}</code> | <span className="api-desc">True while the released bellows are still more than a degree from neutral, which keeps the update running.</span> |
| <Link id="m-maxdifferencefromneutral" /><code>{"private float maxDifferenceFromNeutral"}</code> | <span className="api-desc">Furthest the pivot may turn from neutral, in degrees.</span> |
| <Link id="m-maxvalue" /><code>{"private float maxValue"}</code> | <span className="api-desc">Cap for `SteadyValue`, and the top of `Value`'s range.</span> |
| <Link id="m-neutralrotation" /><code>{"private Quaternion neutralRotation"}</code> | <span className="api-desc">Pivot's resting local rotation.</span> |
| <Link id="m-oldprogress" /><code>{"private float oldProgress"}</code> | <span className="api-desc">Stroke position from the previous frame, used to measure how far it moved.</span> |
| <Link id="m-pivotaxis" /><code>{"private Vector3 pivotAxis"}</code> | <span className="api-desc">Axis the pivot hinges around.</span> |
| <Link id="m-pivottransform" /><code>{"private Transform pivotTransform"}</code> | <span className="api-desc">Transform hinged to follow the hands (a fake joint).</span> |
| <Link id="m-pumpefficiency" /><code>{"private AnimationCurve pumpEfficiency"}</code> | <span className="api-desc">Curve, by stroke position, for how much a stroke adds to `SteadyValue`.</span> |
| <Link id="m-pumpingvaluemaxdecreasespeed" /><code>{"private float pumpingValueMaxDecreaseSpeed"}</code> | <span className="api-desc">Fastest the short-term pumping value may fall per second.</span> |
| <Link id="m-smoothpumpingvalue" /><code>{"private float smoothPumpingValue"}</code> | <span className="api-desc">Short-term value from recent strokes; added to `SteadyValue` for `Value` and used for experience.</span> |
| <Link id="m-up" /><code>{"private float up"}</code> | <span className="api-desc">Bellows angle counted as fully open.</span> |
| <Link id="m-updatemovement" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateMovement"}</code> | <span className="api-desc">Handle for the registered per-frame update, or null.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-steadyvalue" /><code>{"float SteadyValue { get; private set; }"}</code> | <span className="api-desc">Slow value built up by pumping; decays by `cooldownPerSecond` towards `baseValue` and is capped at `maxValue`.</span> |
| <Link id="m-value" /><code>{"float Value { get; private set; }"}</code> | <span className="api-desc">Current output from 0 to 1: steady plus short-term pumping value, scaled between base and max.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-canpump" /><code>{"event "}<Link to="/mod/game-api/types/global-e-h/filter">{"Filter"}</Link>{" CanPump"}</code> | <span className="api-desc">Listeners can set the flag false to stop pumps from counting.</span> |
| <Link id="m-updatessteadyvalue" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/pumpingmechanism">{"PumpingMechanism"}</Link>{", float> UpdatesSteadyValue"}</code> | <span className="api-desc">Raised every update with the new `SteadyValue`; `Recycler` listens to it.</span> |

## Methods

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getbellowangle" /><code>{"private float GetBellowAngle()"}</code> | <span className="api-desc">Returns this transform's local Z angle in the range -180 to 180.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Starts tracking when the handle is grabbed and sets `SteadyValue` to its base.</span> |
| <Link id="m-startupdatingbellows" /><code>{"private void StartUpdatingBellows("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Registers the per-frame update when the handle is grabbed.</span> |
| <Link id="m-trackhands" /><code>{"private void TrackHands()"}</code> | <span className="api-desc">Rotates the pivot and handle to follow the holding hands, or eases back to the neutral rotation when let go.</span> |
| <Link id="m-updatemovement-2" /><code>{"private void UpdateMovement()"}</code> | <span className="api-desc">Per-frame tick; unregisters itself once the bellows are idle, released and back at neutral.</span> |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue()"}</code> | <span className="api-desc">Measures the downward stroke since last frame, updates both values and raises `UpdatesSteadyValue`. Server: gives the holder forging experience.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PumpingMechanism`:

<div className="api-used-in">

[`Recycler.bellows`](/mod/game-api/types/alta-crafting/recycler#m-bellows), [`Recycler.UpdatedBellows`](/mod/game-api/types/alta-crafting/recycler#m-updatedbellows).

</div>
