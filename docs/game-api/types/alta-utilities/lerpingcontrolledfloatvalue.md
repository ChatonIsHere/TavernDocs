---
title: "LerpingControlledFloatValue"
description: "A float that eases toward a target over time and writes each step through a setter callback."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LerpingControlledFloatValue

A **class** in `Root.Township`, `Alta.Utilities`.

A float that eases toward a target over time and writes each step through a setter callback. A control value can temporarily take over the target. Call `Update` every frame.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LerpingControlledFloatValue(Action<float> setValue)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-control" /><code>{"private float control"}</code> |  |
| <Link id="m-gettarget" /><code>{"private Func<float> getTarget"}</code> |  |
| <Link id="m-initial" /><code>{"private float initial"}</code> |  |
| <Link id="m-iscontrolled" /><code>{"private bool isControlled"}</code> |  |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> |  |
| <Link id="m-progress" /><code>{"private float progress"}</code> |  |
| <Link id="m-setvalue" /><code>{"private Action<float> setValue"}</code> |  |
| <Link id="m-snapvalue" /><code>{"private float snapValue"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"float Current { get; private set; }"}</code> | The current value, as last passed to the setter. |
| <Link id="m-islerping" /><code>{"bool IsLerping { get; private set; }"}</code> | True while moving toward a target. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finishedlerp" /><code>{"event Action FinishedLerp"}</code> | Raised when a lerp reaches its target. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-kill" /><code>{"void Kill()"}</code> | Stops any lerp and holds the current value. |
| <Link id="m-lerp-2" /><code>{"void Lerp(float target, float lerpSpeed)"}</code> | Starts moving toward a fixed target (with a duration in seconds) or toward a target read every frame. |
| <Link id="m-lerp-3" /><code>{"void Lerp(Func<float> getTarget)"}</code> | Starts moving toward a fixed target (with a duration in seconds) or toward a target read every frame. |
| <Link id="m-setcontrol" /><code>{"void SetControl(float control)"}</code> | Starts moving toward a control value, which overrides the normal target until `StopControl`. |
| <Link id="m-snap" /><code>{"void Snap(float newTarget)"}</code> | Jumps straight to a value. While controlled, it instead sets the target used after control ends. |
| <Link id="m-snapifnotlerping" /><code>{"void SnapIfNotLerping(float newTarget)"}</code> | Snaps only if no lerp is running. |
| <Link id="m-stopcontrol" /><code>{"void StopControl()"}</code> | Ends control and lerps from the current value back to the normal target. |
| <Link id="m-update" /><code>{"void Update()"}</code> | Advances the lerp by the frame time and calls the setter. |
| <Link id="m-lerp" /><code>{"protected float Lerp(float target)"}</code> | Starts moving toward a fixed target (with a duration in seconds) or toward a target read every frame. |
| <Link id="m-snapvalue-2" /><code>{"private float SnapValue()"}</code> |  |

## Used in

Members of other types that take, return or hold a `LerpingControlledFloatValue`:

[`AtmosphereManager.FogDensity`](/game-api/types/alta-world/atmospheremanager#m-fogdensity).
