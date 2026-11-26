---
title: "EnableLerp"
description: "Animates a 0 to 1 progress value over time when switched on or off and reports it through a float event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnableLerp

A **class** in `Root.Township`, no namespace.

Animates a 0 to 1 progress value over time when switched on or off and reports it through a float event.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`DelayedEnableLerp`](/game-api/types/global-c-d/delayedenablelerp)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnableLerp()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-lerpanimation" /><code>{"protected Coroutine lerpAnimation"}</code> | The running animation coroutine. |

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | Seconds for a full 0 to 1 change. |
| <Link id="m-disabledvalue" /><code>{"private float disabledValue"}</code> | Progress at which the off animation stops before snapping to 0. |
| <Link id="m-enabledvalue" /><code>{"private float enabledValue"}</code> | Progress at which the on animation stops before snapping to 1. |
| <Link id="m-progress" /><code>{"private float progress"}</code> | Current progress value. |
| <Link id="m-progressupdate" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" progressUpdate"}</code> | Event that receives the progress. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> | Current target state. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setenabled" /><code>{"void SetEnabled(bool isEnabled)"}</code> | Changes the state and restarts the animation if it differs. |
| <Link id="m-startanimation" /><code>{"protected virtual void StartAnimation()"}</code> | Stops any running animation and starts a new one. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animation" /><code>{"private IEnumerator Animation() (iterator)"}</code> | Coroutine that moves progress up to `enabledValue` or down to `disabledValue`, invoking the event each frame, then snaps to 1 or 0. |

</details>
