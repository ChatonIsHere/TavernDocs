---
title: "ScaleAnimator"
description: "class ScaleAnimator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScaleAnimator

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Derived types** [`RendererScaleAnimator`](/game-api/types/global-q-r/rendererscaleanimator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScaleAnimator(MonoBehaviour behaviour, bool isInitiallyOn, Vector3 startScale, AnimationCurve on, AnimationCurve off, bool isDisallowingZero)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animationroutine" /><code>{"private Coroutine animationRoutine"}</code> |  |
| <Link id="m-behaviour" /><code>{"private MonoBehaviour behaviour"}</code> |  |
| <Link id="m-isdisallowingzero" /><code>{"private bool isDisallowingZero"}</code> |  |
| <Link id="m-ison" /><code>{"private bool isOn"}</code> |  |
| <Link id="m-off" /><code>{"private AnimationCurve off"}</code> |  |
| <Link id="m-on" /><code>{"private AnimationCurve on"}</code> |  |
| <Link id="m-startscale" /><code>{"private Vector3 startScale"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-behaviour-2" /><code>{"MonoBehaviour Behaviour { get; }"}</code> |  |
| <Link id="m-isanimating" /><code>{"bool IsAnimating { get; }"}</code> |  |
| <Link id="m-ison-2" /><code>{"bool IsOn { get; set; }"}</code> |  |
| <Link id="m-multiplier" /><code>{"float Multiplier { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-finished" /><code>{"event Action Finished"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set(bool isOn)"}</code> |  |
| <Link id="m-stop" /><code>{"void Stop()"}</code> |  |
| <Link id="m-animate" /><code>{"private IEnumerator Animate() (iterator)"}</code> |  |
| <Link id="m-setscale" /><code>{"protected virtual void SetScale(float scale)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ScaleAnimator`:

[`PickupDock.scaleAnimator`](/game-api/types/alta-items/pickupdock#m-scaleanimator), [`CurveScaler.animator`](/game-api/types/global-c-d/curvescaler#m-animator), [`CurveScaler.ScaleAnimator`](/game-api/types/global-c-d/curvescaler#m-scaleanimator).
