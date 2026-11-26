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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LerpingControlledFloatValue(Action<float> setValue)"}</code> | <span className="api-desc">Creates a `LerpingControlledFloatValue` from `setValue`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-control" /><code>{"private float control"}</code> | <span className="api-desc">Value the lerp heads to while controlled.</span> |
| <Link id="m-gettarget" /><code>{"private Func<float> getTarget"}</code> | <span className="api-desc">Function giving the current target when not controlled.</span> |
| <Link id="m-initial" /><code>{"private float initial"}</code> | <span className="api-desc">Value at the start of the current lerp.</span> |
| <Link id="m-iscontrolled" /><code>{"private bool isControlled"}</code> | <span className="api-desc">True between `SetControl` and `StopControl`.</span> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | <span className="api-desc">Duration of a lerp in seconds, despite the name.</span> |
| <Link id="m-progress" /><code>{"private float progress"}</code> | <span className="api-desc">Lerp progress from 0 to 1.</span> |
| <Link id="m-setvalue" /><code>{"private Action<float> setValue"}</code> | <span className="api-desc">Callback that receives each new value.</span> |
| <Link id="m-snapvalue" /><code>{"private float snapValue"}</code> | <span className="api-desc">Value stored by a `Snap` made while controlled.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-current" /><code>{"float Current { get; private set; }"}</code> | <span className="api-desc">The current value, as last passed to the setter.</span> |
| <Link id="m-islerping" /><code>{"bool IsLerping { get; private set; }"}</code> | <span className="api-desc">True while moving toward a target.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finishedlerp" /><code>{"event Action FinishedLerp"}</code> | <span className="api-desc">Raised when a lerp reaches its target.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-kill" /><code>{"void Kill()"}</code> | <span className="api-desc">Stops any lerp and holds the current value.</span> |
| <Link id="m-lerp-2" /><code>{"void Lerp(float target, float lerpSpeed)"}</code> | <span className="api-desc">Starts moving toward a fixed target (with a duration in seconds) or toward a target read every frame.</span> |
| <Link id="m-lerp-3" /><code>{"void Lerp(Func<float> getTarget)"}</code> | <span className="api-desc">Starts moving toward a fixed target (with a duration in seconds) or toward a target read every frame.</span> |
| <Link id="m-setcontrol" /><code>{"void SetControl(float control)"}</code> | <span className="api-desc">Starts moving toward a control value, which overrides the normal target until `StopControl`.</span> |
| <Link id="m-snap" /><code>{"void Snap(float newTarget)"}</code> | <span className="api-desc">Jumps straight to a value. While controlled, it instead sets the target used after control ends.</span> |
| <Link id="m-snapifnotlerping" /><code>{"void SnapIfNotLerping(float newTarget)"}</code> | <span className="api-desc">Snaps only if no lerp is running.</span> |
| <Link id="m-stopcontrol" /><code>{"void StopControl()"}</code> | <span className="api-desc">Ends control and lerps from the current value back to the normal target.</span> |
| <Link id="m-update" /><code>{"void Update()"}</code> | <span className="api-desc">Advances the lerp by the frame time and calls the setter.</span> |
| <Link id="m-lerp" /><code>{"protected float Lerp(float target)"}</code> | <span className="api-desc">Starts moving toward a fixed target (with a duration in seconds) or toward a target read every frame.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-snapvalue-2" /><code>{"private float SnapValue()"}</code> | <span className="api-desc">Returns the value saved by a `Snap` made while controlled, used as the target once control stops.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LerpingControlledFloatValue`:

<div className="api-used-in">

[`AtmosphereManager.FogDensity`](/mod/game-api/types/alta-world/atmospheremanager#m-fogdensity).

</div>
