---
title: "NetworkAxisRotation"
description: "A NetworkAxisValue that syncs a rotation around one local axis, in degrees from 0 to 360, with wrap-around."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkAxisRotation

A **class** in `Root.Township`, `Alta.Networking`.

A `NetworkAxisValue` that syncs a rotation around one local axis, in degrees from 0 to 360, with wrap-around.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NetworkAxisValue`](/mod/game-api/types/alta-networking/networkaxisvalue)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkAxisRotation()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addrotationmultiplier" /><code>{"private float addRotationMultiplier"}</code> | Multiplier for angles passed to `RotateAngle` (default 0.5). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"protected override float CurrentValue { get; }"}</code> | The target's current angle around the local axis, from its local Euler angles. |
| <Link id="m-maximumvalue" /><code>{"protected override float MaximumValue { get; }"}</code> | 360. |
| <Link id="m-minimumvalue" /><code>{"protected override float MinimumValue { get; }"}</code> | 0. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-rotateangle" /><code>{"void RotateAngle(float angle)"}</code> | Server: adds the angle (times `addRotationMultiplier`) to the current rotation. |
| <Link id="m-applyvalue" /><code>{"protected override void ApplyValue(float value)"}</code> | Sets the target transform's local rotation to the angle around the axis. |
| <Link id="m-getdifference" /><code>{"protected override float GetDifference(float currentValue, float value)"}</code> | Absolute difference between two angles, reduced by 180 when over 180. |
| <Link id="m-lerptovalue" /><code>{"protected override float LerpToValue(float value, float lerpValue)"}</code> | Lerps the current angle towards a value, adjusting by 180 degrees across the wrap point. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clampvalue" /><code>{"private float ClampValue(float value)"}</code> | Wraps an angle back into 0 to 360 (only one step, so far out values stay out). |

</details>

## Used in

Members of other types that take, return or hold a `NetworkAxisRotation`:

[`Rotator.axisRotation`](/mod/game-api/types/game-other-namespaces/rotator#m-axisrotation).
