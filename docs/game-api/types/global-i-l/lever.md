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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Lever()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> |
| <Link id="m-handle" /><code>{"private Transform handle"}</code> |
| <Link id="m-handlerigidbody" /><code>{"private Rigidbody handleRigidbody"}</code> |
| <Link id="m-isforcedon" /><code>{"private bool isForcedOn"}</code> |
| <Link id="m-rangemax" /><code>{"private float rangeMax"}</code> |
| <Link id="m-rangemin" /><code>{"private float rangeMin"}</code> |

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

| Member |
| --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Lever`:

[`TradeVendor.lever`](/game-api/types/alta-crafting/tradevendor#m-lever), [`CoinPress.lever`](/game-api/types/global-c-d/coinpress#m-lever), [`CoinPress.ValueChanged`](/game-api/types/global-c-d/coinpress#m-valuechanged), [`CoinPressGear.lever`](/game-api/types/global-c-d/coinpressgear#m-lever), [`CoinPressGear.ValueChanged`](/game-api/types/global-c-d/coinpressgear#m-valuechanged), [`MouldPress.lever`](/game-api/types/global-m-o/mouldpress#m-lever), [`MouldPress.ValueChanged`](/game-api/types/global-m-o/mouldpress#m-valuechanged), [`Postbox.handleLever`](/game-api/types/global-p/postbox#m-handlelever), [`Pump.IncreaseStrength`](/game-api/types/global-p/pump#m-increasestrength), [`Pump.lever`](/game-api/types/global-p/pump#m-lever).
