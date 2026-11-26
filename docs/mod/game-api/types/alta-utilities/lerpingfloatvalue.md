---
title: "LerpingFloatValue"
description: "Helper that moves a float towards a target over time and pushes each new value to a setter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LerpingFloatValue

A **class** in `Root.Township`, `Alta.Utilities`.

Helper that moves a float towards a target over time and pushes each new value to a setter. You call `Update` every frame yourself.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LerpingFloatValue(Action<float> setValue)"}</code> | Creates a `LerpingFloatValue` from `setValue`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"private float current"}</code> | Value most recently pushed to the setter. |
| <Link id="m-gettarget" /><code>{"private Func<float> getTarget"}</code> | Function giving the target, read each update so the target can move. Cleared when the lerp ends. |
| <Link id="m-initial" /><code>{"private float initial"}</code> | Value the current lerp started from. |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | Seconds a full lerp takes (despite the name). Set by the `Lerp(target, speed)` overload. |
| <Link id="m-progress" /><code>{"private float progress"}</code> | Lerp progress from 0 to 1. |
| <Link id="m-setvalue" /><code>{"private Action<float> setValue"}</code> | Callback that receives each new value. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current-2" /><code>{"float Current { get; }"}</code> | The value last pushed to the setter. |
| <Link id="m-islerping" /><code>{"bool IsLerping { get; private set; }"}</code> | True while a lerp is running. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finishedlerp" /><code>{"event Action FinishedLerp"}</code> | Fired when a lerp reaches its target. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-kill" /><code>{"void Kill()"}</code> | Stops the lerp where it is. |
| <Link id="m-lerp-2" /><code>{"void Lerp(float target, float lerpSpeed)"}</code> | Starts a lerp from `Current` to a fixed or changing target. `lerpSpeed` is really the duration in seconds; the function overload reuses the last one. |
| <Link id="m-lerp-3" /><code>{"void Lerp(Func<float> getTarget)"}</code> | Starts a lerp from `Current` to a fixed or changing target. `lerpSpeed` is really the duration in seconds; the function overload reuses the last one. |
| <Link id="m-snap" /><code>{"void Snap(float newTarget)"}</code> | Jumps straight to the value and stops any lerp. |
| <Link id="m-snapifnotlerping" /><code>{"void SnapIfNotLerping(float newTarget)"}</code> | Snaps only if no lerp is running. |
| <Link id="m-update" /><code>{"void Update()"}</code> | Advances the lerp by `Time.deltaTime` and pushes the new value. |
| <Link id="m-lerp" /><code>{"protected float Lerp(float initial, float target, float progress)"}</code> | Starts a lerp from `Current` to a fixed or changing target. `lerpSpeed` is really the duration in seconds; the function overload reuses the last one. |

## Used in

Members of other types that take, return or hold a `LerpingFloatValue`:

[`AtmosphereManager.AmbienceAudio`](/mod/game-api/types/alta-world/atmospheremanager#m-ambienceaudio), [`DayTimeManager.LightIntensityModifier`](/mod/game-api/types/alta-world/daytimemanager#m-lightintensitymodifier), [`DayTimeManager.skyColorFade`](/mod/game-api/types/alta-world/daytimemanager#m-skycolorfade), [`ScaleLerpPooledObject.scale`](/mod/game-api/types/global-s/scalelerppooledobject#m-scale).
