---
title: "Lever"
description: "A physical lever Trigger: reads the handle's X rotation each physics step and is on while it sits inside its angle range."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Lever

A **class** in `Root.Township`, the global namespace.

A physical lever `Trigger`: reads the handle's X rotation each physics step and is on while it sits inside its angle range.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`Trigger`](/mod/game-api/types/global-t-x/trigger)
- **Documented in** [Buttons and levers](/mod/game-api/items/buttons-and-levers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Lever()"}</code> | <span className="api-desc">Creates a `Lever` with default values.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> | <span className="api-desc">Backing field for `Value`.</span> |
| <Link id="m-handle" /><code>{"private Transform handle"}</code> | <span className="api-desc">Transform whose local X rotation is read as the lever angle.</span> |
| <Link id="m-handlerigidbody" /><code>{"private Rigidbody handleRigidbody"}</code> | <span className="api-desc">Handle rigidbody; nothing is read while it sleeps.</span> |
| <Link id="m-isforcedon" /><code>{"private bool isForcedOn"}</code> | <span className="api-desc">Not used by this class.</span> |
| <Link id="m-rangemax" /><code>{"private float rangeMax"}</code> | <span className="api-desc">Angle in degrees where `Value` reaches 1. Defaults to -40.</span> |
| <Link id="m-rangemin" /><code>{"private float rangeMin"}</code> | <span className="api-desc">Angle in degrees where `Value` is 0. Defaults to -60.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"float Value { get; set; }"}</code> | <span className="api-desc">Handle position as 0 to 1 across the angle range. Setting a new value raises `ValueChanged`.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-valuechanged" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-i-l/lever">{"Lever"}</Link>{", float, float> ValueChanged"}</code> | <span className="api-desc">Raised with the lever, old value and new value.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">While the handle is awake, maps its X angle to `Value` and sets the trigger on when it's between the range limits.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Lever`:

<div className="api-used-in">

[`TradeVendor.lever`](/mod/game-api/types/alta-crafting/tradevendor#m-lever), [`CoinPress.lever`](/mod/game-api/types/global-c-d/coinpress#m-lever), [`CoinPress.ValueChanged`](/mod/game-api/types/global-c-d/coinpress#m-valuechanged), [`CoinPressGear.lever`](/mod/game-api/types/global-c-d/coinpressgear#m-lever), [`CoinPressGear.ValueChanged`](/mod/game-api/types/global-c-d/coinpressgear#m-valuechanged), [`MouldPress.lever`](/mod/game-api/types/global-m-o/mouldpress#m-lever), [`MouldPress.ValueChanged`](/mod/game-api/types/global-m-o/mouldpress#m-valuechanged), [`Postbox.handleLever`](/mod/game-api/types/global-p/postbox#m-handlelever), [`Pump.IncreaseStrength`](/mod/game-api/types/global-p/pump#m-increasestrength), [`Pump.lever`](/mod/game-api/types/global-p/pump#m-lever).

</div>
