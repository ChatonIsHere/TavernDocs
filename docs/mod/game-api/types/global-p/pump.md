---
title: "Pump"
description: "Turns lever strokes into a pouring strength that slowly drains, and sends it out through an event every frame while above zero."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Pump

A **class** in `Root.Township`, the global namespace.

Turns lever strokes into a pouring strength that slowly drains, and sends it out through an event every frame while above zero.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Pump()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentpouringvalue" /><code>{"private float currentPouringValue"}</code> | <span className="api-desc">Current pump strength, clamped between min and max.</span> |
| <Link id="m-decreasemultiplierperstrength" /><code>{"private AnimationCurve decreaseMultiplierPerStrength"}</code> | <span className="api-desc">Curve scaling the drain rate by how full the pump is.</span> |
| <Link id="m-ispumpingdownwards" /><code>{"private bool isPumpingDownwards"}</code> | <span className="api-desc">Which lever direction counts as a pump stroke.</span> |
| <Link id="m-lever" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever"}</code> | <span className="api-desc">Lever that drives the pump.</span> |
| <Link id="m-leverchangemultiplier" /><code>{"private float leverChangeMultiplier"}</code> | <span className="api-desc">Scales how much a lever movement adds.</span> |
| <Link id="m-pouringdecreasepersecond" /><code>{"private float pouringDecreasePerSecond"}</code> | <span className="api-desc">Base drain per second.</span> |
| <Link id="m-pouringvaluemax" /><code>{"private float pouringValueMax"}</code> | <span className="api-desc">Highest pouring value.</span> |
| <Link id="m-pouringvaluemin" /><code>{"private float pouringValueMin"}</code> | <span className="api-desc">Lowest pouring value.</span> |
| <Link id="m-pumpevent" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" pumpEvent"}</code> | <span className="api-desc">Event given the pouring value each frame.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the lever's value change.</span> |
| <Link id="m-checkdisable" /><code>{"private void CheckDisable()"}</code> | <span className="api-desc">Disables the component once the pouring value reaches zero.</span> |
| <Link id="m-checkenable" /><code>{"private void CheckEnable()"}</code> | <span className="api-desc">Enables the component when the pouring value goes above zero.</span> |
| <Link id="m-increasestrength" /><code>{"private void IncreaseStrength("}<Link to="/mod/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever, float oldValue, float newValue)"}</code> | <span className="api-desc">Adds to the pouring value when the lever moves in the pumping direction.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Sends the current value through `pumpEvent`, then drains it by a rate scaled by the strength curve.</span> |

</details>
