---
title: "Pump"
description: "Turns lever strokes into a pouring strength that slowly drains, and sends it out through an event every frame while above zero."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Pump

A **class** in `Root.Township`, no namespace.

Turns lever strokes into a pouring strength that slowly drains, and sends it out through an event every frame while above zero.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Pump()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentpouringvalue" /><code>{"private float currentPouringValue"}</code> | Current pump strength, clamped between min and max. |
| <Link id="m-decreasemultiplierperstrength" /><code>{"private AnimationCurve decreaseMultiplierPerStrength"}</code> | Curve scaling the drain rate by how full the pump is. |
| <Link id="m-ispumpingdownwards" /><code>{"private bool isPumpingDownwards"}</code> | Which lever direction counts as a pump stroke. |
| <Link id="m-lever" /><code>{"private "}<Link to="/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever"}</code> | Lever that drives the pump. |
| <Link id="m-leverchangemultiplier" /><code>{"private float leverChangeMultiplier"}</code> | Scales how much a lever movement adds. |
| <Link id="m-pouringdecreasepersecond" /><code>{"private float pouringDecreasePerSecond"}</code> | Base drain per second. |
| <Link id="m-pouringvaluemax" /><code>{"private float pouringValueMax"}</code> | Highest pouring value. |
| <Link id="m-pouringvaluemin" /><code>{"private float pouringValueMin"}</code> | Lowest pouring value. |
| <Link id="m-pumpevent" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" pumpEvent"}</code> | Event given the pouring value each frame. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the lever's value change. |
| <Link id="m-checkdisable" /><code>{"private void CheckDisable()"}</code> | Disables the component once the pouring value reaches zero. |
| <Link id="m-checkenable" /><code>{"private void CheckEnable()"}</code> | Enables the component when the pouring value goes above zero. |
| <Link id="m-increasestrength" /><code>{"private void IncreaseStrength("}<Link to="/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever, float oldValue, float newValue)"}</code> | Adds to the pouring value when the lever moves in the pumping direction. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Sends the current value through `pumpEvent`, then drains it by a rate scaled by the strength curve. |

</details>
