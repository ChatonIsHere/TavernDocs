---
title: "ScaleAnimator"
description: "Helper that scales a behaviour's transform in or out along \"on\" and \"off\" curves, using a coroutine on that behaviour."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScaleAnimator

A **class** in `Root.Township`, the global namespace.

Helper that scales a behaviour's transform in or out along "on" and "off" curves, using a coroutine on that behaviour.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Derived types** [`RendererScaleAnimator`](/mod/game-api/types/global-q-r/rendererscaleanimator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScaleAnimator(MonoBehaviour behaviour, bool isInitiallyOn, Vector3 startScale, AnimationCurve on, AnimationCurve off, bool isDisallowingZero)"}</code> | <span className="api-desc">Creates a `ScaleAnimator` from `behaviour`, `isInitiallyOn`, `startScale`, `on`, `off` and `isDisallowingZero`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationroutine" /><code>{"private Coroutine animationRoutine"}</code> | <span className="api-desc">The running animation coroutine, null when idle.</span> |
| <Link id="m-behaviour" /><code>{"private MonoBehaviour behaviour"}</code> | <span className="api-desc">The behaviour whose transform is scaled and that runs the coroutine.</span> |
| <Link id="m-isdisallowingzero" /><code>{"private bool isDisallowingZero"}</code> | <span className="api-desc">Keeps scale at least 0.001 so the object never reaches zero.</span> |
| <Link id="m-ison" /><code>{"private bool isOn"}</code> | <span className="api-desc">Backing field for `IsOn`.</span> |
| <Link id="m-off" /><code>{"private AnimationCurve off"}</code> | <span className="api-desc">Scale curve played when turning off.</span> |
| <Link id="m-on" /><code>{"private AnimationCurve on"}</code> | <span className="api-desc">Scale curve played when turning on.</span> |
| <Link id="m-startscale" /><code>{"private Vector3 startScale"}</code> | <span className="api-desc">The full scale that the curves multiply.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-behaviour-2" /><code>{"MonoBehaviour Behaviour { get; }"}</code> | <span className="api-desc">The behaviour whose transform is scaled and which runs the coroutine.</span> |
| <Link id="m-isanimating" /><code>{"bool IsAnimating { get; }"}</code> | <span className="api-desc">True while the animation coroutine is running.</span> |
| <Link id="m-ison-2" /><code>{"bool IsOn { get; set; }"}</code> | <span className="api-desc">Whether it is (or is going) on. Setting it calls `Set`.</span> |
| <Link id="m-multiplier" /><code>{"float Multiplier { get; private set; }"}</code> | <span className="api-desc">Extra scale factor applied on top of the curves. Starts at 1.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finished" /><code>{"event Action Finished"}</code> | <span className="api-desc">Raised each time an animation run ends.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set(bool isOn)"}</code> | <span className="api-desc">Turns on or off. Animates if the behaviour is active, otherwise jumps to the end scale.</span> |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | <span className="api-desc">Stops the animation and jumps to the end scale.</span> |
| <Link id="m-setscale" /><code>{"protected virtual void SetScale(float scale)"}</code> | <span className="api-desc">Applies a scale relative to the start scale, never below 0.001 if zero is disallowed.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private IEnumerator Animate() (iterator)"}</code> | <span className="api-desc">Coroutine that plays the on or off curve, and plays again if the state flipped meanwhile, then raises `Finished`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ScaleAnimator`:

<div className="api-used-in">

[`PickupDock.scaleAnimator`](/mod/game-api/types/alta-items/pickupdock#m-scaleanimator), [`CurveScaler.animator`](/mod/game-api/types/global-c-d/curvescaler#m-animator), [`CurveScaler.ScaleAnimator`](/mod/game-api/types/global-c-d/curvescaler#m-scaleanimator).

</div>
