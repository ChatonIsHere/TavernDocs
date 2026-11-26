---
title: "CaptainsWheel"
description: "A turnable wheel that adds up how far it has been turned into a running value, checked every LateUpdate."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaptainsWheel

A **class** in `Root.Township`, the global namespace.

A turnable wheel that adds up how far it has been turned into a running value, checked every LateUpdate. The angle is measured to the world origin in the wheel's local XY plane.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaptainsWheel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentangle" /><code>{"private float currentAngle"}</code> | <span className="api-desc">Angle from last frame, in degrees.</span> |
| <Link id="m-direction" /><code>{"private float direction"}</code> | <span className="api-desc">Sign or scale for the value change. Use -1 to reverse.</span> |
| <Link id="m-lengthperrevolution" /><code>{"private float lengthPerRevolution"}</code> | <span className="api-desc">How much the value changes per full turn.</span> |
| <Link id="m-value" /><code>{"private float value"}</code> | <span className="api-desc">Backing field for `Value`.</span> |
| <Link id="m-valuechanged" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" valueChanged"}</code> | <span className="api-desc">Serialized event raised with the new value.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value-2" /><code>{"float Value { get; }"}</code> | <span className="api-desc">Running total of turns times `lengthPerRevolution`. Not clamped.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-valuechanged-2" /><code>{"event Action<float, float> ValueChanged"}</code> | <span className="api-desc">Raised with the old and new value.</span> |

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Runs `UpdateValues` each frame.</span> |
| <Link id="m-onvaluechanged" /><code>{"private void OnValueChanged(float newValue)"}</code> | <span className="api-desc">Stores the new value and raises both the C# and serialized change events.</span> |
| <Link id="m-updatevalues" /><code>{"private void UpdateValues()"}</code> | <span className="api-desc">Works out the angle turned since last frame and adds it to the value, scaled by length per revolution and direction.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CaptainsWheel`:

<div className="api-used-in">

[`ServerSelectionMenu.wheel`](/mod/game-api/types/global-s/serverselectionmenu#m-wheel), [`TimeScroller.wheel`](/mod/game-api/types/global-t-x/timescroller#m-wheel).

</div>
