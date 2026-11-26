---
title: "ScaleAnimator"
description: "Helper that scales a behaviour's transform in or out along \"on\" and \"off\" curves, using a coroutine on that behaviour."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScaleAnimator

A **class** in `Root.Township`, no namespace.

Helper that scales a behaviour's transform in or out along "on" and "off" curves, using a coroutine on that behaviour.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Derived types** [`RendererScaleAnimator`](/game-api/types/global-q-r/rendererscaleanimator)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ScaleAnimator(MonoBehaviour behaviour, bool isInitiallyOn, Vector3 startScale, AnimationCurve on, AnimationCurve off, bool isDisallowingZero)"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationroutine" /><code>{"private Coroutine animationRoutine"}</code> | The running animation coroutine, null when idle. |
| <Link id="m-behaviour" /><code>{"private MonoBehaviour behaviour"}</code> | The behaviour whose transform is scaled and that runs the coroutine. |
| <Link id="m-isdisallowingzero" /><code>{"private bool isDisallowingZero"}</code> | Keeps scale at least 0.001 so the object never reaches zero. |
| <Link id="m-ison" /><code>{"private bool isOn"}</code> | Backing field for `IsOn`. |
| <Link id="m-off" /><code>{"private AnimationCurve off"}</code> | Scale curve played when turning off. |
| <Link id="m-on" /><code>{"private AnimationCurve on"}</code> | Scale curve played when turning on. |
| <Link id="m-startscale" /><code>{"private Vector3 startScale"}</code> | The full scale that the curves multiply. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-behaviour-2" /><code>{"MonoBehaviour Behaviour { get; }"}</code> | The behaviour whose transform is scaled and which runs the coroutine. |
| <Link id="m-isanimating" /><code>{"bool IsAnimating { get; }"}</code> | True while the animation coroutine is running. |
| <Link id="m-ison-2" /><code>{"bool IsOn { get; set; }"}</code> | Whether it is (or is going) on. Setting it calls `Set`. |
| <Link id="m-multiplier" /><code>{"float Multiplier { get; private set; }"}</code> | Extra scale factor applied on top of the curves. Starts at 1. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finished" /><code>{"event Action Finished"}</code> | Raised each time an animation run ends. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set(bool isOn)"}</code> | Turns on or off. Animates if the behaviour is active, otherwise jumps to the end scale. |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | Stops the animation and jumps to the end scale. |
| <Link id="m-setscale" /><code>{"protected virtual void SetScale(float scale)"}</code> | Applies a scale relative to the start scale, never below 0.001 if zero is disallowed. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private IEnumerator Animate() (iterator)"}</code> | Coroutine that plays the on or off curve, and plays again if the state flipped meanwhile, then raises `Finished`. |

</details>

## Used in

Members of other types that take, return or hold a `ScaleAnimator`:

[`PickupDock.scaleAnimator`](/game-api/types/alta-items/pickupdock#m-scaleanimator), [`CurveScaler.animator`](/game-api/types/global-c-d/curvescaler#m-animator), [`CurveScaler.ScaleAnimator`](/game-api/types/global-c-d/curvescaler#m-scaleanimator).
