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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LerpingFloatGetValue()"}</code> | <span className="api-desc">Creates a `LerpingFloatGetValue` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"private float current"}</code> | <span className="api-desc">Backing field for `Current`.</span> |
| <Link id="m-gettarget" /><code>{"private Func<float> getTarget"}</code> | <span className="api-desc">Function giving the target, cleared when the lerp ends.</span> |
| <Link id="m-initial" /><code>{"private float initial"}</code> | <span className="api-desc">Value at the start of the lerp.</span> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | <span className="api-desc">Duration of a lerp in seconds, despite the name.</span> |
| <Link id="m-progress" /><code>{"private float progress"}</code> | <span className="api-desc">Lerp progress from 0 to 1.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current-2" /><code>{"float Current { get; }"}</code> | <span className="api-desc">The current value.</span> |
| <Link id="m-islerping" /><code>{"bool IsLerping { get; private set; }"}</code> | <span className="api-desc">True while moving towards a target.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-kill" /><code>{"void Kill()"}</code> | <span className="api-desc">Stops at the current value.</span> |
| <Link id="m-lerp-2" /><code>{"void Lerp(float target, float lerpSpeed)"}</code> | <span className="api-desc">Starts easing to a fixed target over a duration in seconds, or to a target function using the last duration.</span> |
| <Link id="m-lerp-3" /><code>{"void Lerp(Func<float> getTarget)"}</code> | <span className="api-desc">Starts easing to a fixed target over a duration in seconds, or to a target function using the last duration.</span> |
| <Link id="m-snap" /><code>{"void Snap(float newTarget)"}</code> | <span className="api-desc">Jumps straight to a value and stops lerping.</span> |
| <Link id="m-snapifnotlerping" /><code>{"void SnapIfNotLerping(float newTarget)"}</code> | <span className="api-desc">Snaps only if no lerp is running.</span> |
| <Link id="m-update" /><code>{"void Update()"}</code> | <span className="api-desc">Advances the lerp by the frame time and finishes it once progress reaches 1.</span> |
| <Link id="m-lerp" /><code>{"protected float Lerp(float initial, float target, float progress)"}</code> | <span className="api-desc">Starts easing to a fixed target over a duration in seconds, or to a target function using the last duration.</span> |

## Used in

Members of other types that take, return or hold a `LerpingFloatGetValue`:

<div className="api-used-in">

[`DayTimeManager.MoonLerpInModifier`](/mod/game-api/types/alta-world/daytimemanager#m-moonlerpinmodifier).

</div>
