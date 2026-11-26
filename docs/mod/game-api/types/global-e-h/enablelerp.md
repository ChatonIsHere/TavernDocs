---
title: "EnableLerp"
description: "Animates a 0 to 1 progress value over time when switched on or off and reports it through a float event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnableLerp

A **class** in `Root.Township`, the global namespace.

Animates a 0 to 1 progress value over time when switched on or off and reports it through a float event.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`DelayedEnableLerp`](/mod/game-api/types/global-c-d/delayedenablelerp)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EnableLerp()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-lerpanimation" /><code>{"protected Coroutine lerpAnimation"}</code> | <span className="api-desc">The running animation coroutine.</span> |

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | <span className="api-desc">Seconds for a full 0 to 1 change.</span> |
| <Link id="m-disabledvalue" /><code>{"private float disabledValue"}</code> | <span className="api-desc">Progress at which the off animation stops before snapping to 0.</span> |
| <Link id="m-enabledvalue" /><code>{"private float enabledValue"}</code> | <span className="api-desc">Progress at which the on animation stops before snapping to 1.</span> |
| <Link id="m-progress" /><code>{"private float progress"}</code> | <span className="api-desc">Current progress value.</span> |
| <Link id="m-progressupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" progressUpdate"}</code> | <span className="api-desc">Event that receives the progress.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> | <span className="api-desc">Current target state.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setenabled" /><code>{"void SetEnabled(bool isEnabled)"}</code> | <span className="api-desc">Changes the state and restarts the animation if it differs.</span> |
| <Link id="m-startanimation" /><code>{"protected virtual void StartAnimation()"}</code> | <span className="api-desc">Stops any running animation and starts a new one.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animation" /><code>{"private IEnumerator Animation() (iterator)"}</code> | <span className="api-desc">Coroutine that moves progress up to `enabledValue` or down to `disabledValue`, invoking the event each frame, then snaps to 1 or 0.</span> |

</details>
