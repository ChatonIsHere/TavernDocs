---
title: "LerpingFloatGetValue"
description: "A float that eases from its current value towards a target over time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LerpingFloatGetValue

A **class** in `Root.Township`, `Alta.Utilities`.

A float that eases from its current value towards a target over time. The target can be a function, read again each update. Call `Update` every frame.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LerpingFloatGetValue()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"private float current"}</code> | Backing field for `Current`. |
| <Link id="m-gettarget" /><code>{"private Func<float> getTarget"}</code> | Function giving the target, cleared when the lerp ends. |
| <Link id="m-initial" /><code>{"private float initial"}</code> | Value at the start of the lerp. |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | Duration of a lerp in seconds, despite the name. |
| <Link id="m-progress" /><code>{"private float progress"}</code> | Lerp progress from 0 to 1. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current-2" /><code>{"float Current { get; }"}</code> | The current value. |
| <Link id="m-islerping" /><code>{"bool IsLerping { get; private set; }"}</code> | True while moving towards a target. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-kill" /><code>{"void Kill()"}</code> | Stops at the current value. |
| <Link id="m-lerp-2" /><code>{"void Lerp(float target, float lerpSpeed)"}</code> | Starts easing to a fixed target over a duration in seconds, or to a target function using the last duration. |
| <Link id="m-lerp-3" /><code>{"void Lerp(Func<float> getTarget)"}</code> | Starts easing to a fixed target over a duration in seconds, or to a target function using the last duration. |
| <Link id="m-snap" /><code>{"void Snap(float newTarget)"}</code> | Jumps straight to a value and stops lerping. |
| <Link id="m-snapifnotlerping" /><code>{"void SnapIfNotLerping(float newTarget)"}</code> | Snaps only if no lerp is running. |
| <Link id="m-update" /><code>{"void Update()"}</code> | Advances the lerp by the frame time and finishes it once progress reaches 1. |
| <Link id="m-lerp" /><code>{"protected float Lerp(float initial, float target, float progress)"}</code> | Starts easing to a fixed target over a duration in seconds, or to a target function using the last duration. |

## Used in

Members of other types that take, return or hold a `LerpingFloatGetValue`:

[`DayTimeManager.MoonLerpInModifier`](/game-api/types/alta-world/daytimemanager#m-moonlerpinmodifier).
