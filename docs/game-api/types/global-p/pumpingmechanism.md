---
title: "PumpingMechanism"
description: "class PumpingMechanism in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PumpingMechanism

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PumpingMechanism()"}</code> |

## Fields

<details>
<summary>20 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-alignvector" /><code>{"private Vector3 alignVector"}</code> |
| <Link id="m-basevalue" /><code>{"private float baseValue"}</code> |
| <Link id="m-bellowshandlepickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" bellowsHandlePickup"}</code> |
| <Link id="m-cooldownpersecond" /><code>{"private float cooldownPerSecond"}</code> |
| <Link id="m-down" /><code>{"private float down"}</code> |
| <Link id="m-duringpumpaddition" /><code>{"private AnimationCurve duringPumpAddition"}</code> |
| <Link id="m-handlerotatingaxis" /><code>{"private Vector3 handleRotatingAxis"}</code> |
| <Link id="m-handlerotatingtransform" /><code>{"private Transform handleRotatingTransform"}</code> |
| <Link id="m-isoffcenter" /><code>{"private bool isOffCenter"}</code> |
| <Link id="m-maxdifferencefromneutral" /><code>{"private float maxDifferenceFromNeutral"}</code> |
| <Link id="m-maxvalue" /><code>{"private float maxValue"}</code> |
| <Link id="m-neutralrotation" /><code>{"private Quaternion neutralRotation"}</code> |
| <Link id="m-oldprogress" /><code>{"private float oldProgress"}</code> |
| <Link id="m-pivotaxis" /><code>{"private Vector3 pivotAxis"}</code> |
| <Link id="m-pivottransform" /><code>{"private Transform pivotTransform"}</code> |
| <Link id="m-pumpefficiency" /><code>{"private AnimationCurve pumpEfficiency"}</code> |
| <Link id="m-pumpingvaluemaxdecreasespeed" /><code>{"private float pumpingValueMaxDecreaseSpeed"}</code> |
| <Link id="m-smoothpumpingvalue" /><code>{"private float smoothPumpingValue"}</code> |
| <Link id="m-up" /><code>{"private float up"}</code> |
| <Link id="m-updatemovement" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateMovement"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-steadyvalue" /><code>{"float SteadyValue { get; private set; }"}</code> |
| <Link id="m-value" /><code>{"float Value { get; private set; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-canpump" /><code>{"event "}<Link to="/game-api/types/global-e-h/filter">{"Filter"}</Link>{" CanPump"}</code> |
| <Link id="m-updatessteadyvalue" /><code>{"event Action<"}<Link to="/game-api/types/global-p/pumpingmechanism">{"PumpingMechanism"}</Link>{", float> UpdatesSteadyValue"}</code> |

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-getbellowangle" /><code>{"private float GetBellowAngle()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |
| <Link id="m-startupdatingbellows" /><code>{"private void StartUpdatingBellows("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |
| <Link id="m-trackhands" /><code>{"private void TrackHands()"}</code> |
| <Link id="m-updatemovement-2" /><code>{"private void UpdateMovement()"}</code> |
| <Link id="m-updatevalue" /><code>{"private void UpdateValue()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PumpingMechanism`:

[`Recycler.bellows`](/game-api/types/alta-crafting/recycler#m-bellows), [`Recycler.UpdatedBellows`](/game-api/types/alta-crafting/recycler#m-updatedbellows).
