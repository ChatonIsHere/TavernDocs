---
title: "Lever"
description: "A physical lever Trigger: reads the handle's X rotation each physics step and is on while it sits inside its angle range."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Lever

A **class** in `Root.Township`, no namespace.

A physical lever `Trigger`: reads the handle's X rotation each physics step and is on while it sits inside its angle range.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`Trigger`](/game-api/types/global-t-x/trigger)
- **Documented in** [Buttons and levers](/game-api/items/buttons-and-levers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Lever()"}</code> | Creates a `Lever` with default values. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> | Backing field for `Value`. |
| <Link id="m-handle" /><code>{"private Transform handle"}</code> | Transform whose local X rotation is read as the lever angle. |
| <Link id="m-handlerigidbody" /><code>{"private Rigidbody handleRigidbody"}</code> | Handle rigidbody; nothing is read while it sleeps. |
| <Link id="m-isforcedon" /><code>{"private bool isForcedOn"}</code> | Not used by this class. |
| <Link id="m-rangemax" /><code>{"private float rangeMax"}</code> | Angle in degrees where `Value` reaches 1. Defaults to -40. |
| <Link id="m-rangemin" /><code>{"private float rangeMin"}</code> | Angle in degrees where `Value` is 0. Defaults to -60. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"float Value { get; set; }"}</code> | Handle position as 0 to 1 across the angle range. Setting a new value raises `ValueChanged`. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-valuechanged" /><code>{"event Action<"}<Link to="/game-api/types/global-i-l/lever">{"Lever"}</Link>{", float, float> ValueChanged"}</code> | Raised with the lever, old value and new value. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | While the handle is awake, maps its X angle to `Value` and sets the trigger on when it's between the range limits. |

</details>

## Used in

Members of other types that take, return or hold a `Lever`:

[`TradeVendor.lever`](/game-api/types/alta-crafting/tradevendor#m-lever), [`CoinPress.lever`](/game-api/types/global-c-d/coinpress#m-lever), [`CoinPress.ValueChanged`](/game-api/types/global-c-d/coinpress#m-valuechanged), [`CoinPressGear.lever`](/game-api/types/global-c-d/coinpressgear#m-lever), [`CoinPressGear.ValueChanged`](/game-api/types/global-c-d/coinpressgear#m-valuechanged), [`MouldPress.lever`](/game-api/types/global-m-o/mouldpress#m-lever), [`MouldPress.ValueChanged`](/game-api/types/global-m-o/mouldpress#m-valuechanged), [`Postbox.handleLever`](/game-api/types/global-p/postbox#m-handlelever), [`Pump.IncreaseStrength`](/game-api/types/global-p/pump#m-increasestrength), [`Pump.lever`](/game-api/types/global-p/pump#m-lever).
