---
title: "DelayedEnableLerp"
description: "An EnableLerp that waits a set time before starting its enable or disable animation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DelayedEnableLerp

A **class** in `Root.Township`, the global namespace.

An `EnableLerp` that waits a set time before starting its enable or disable animation.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`EnableLerp`](/mod/game-api/types/global-e-h/enablelerp)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DelayedEnableLerp()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delaycoroutine" /><code>{"private Coroutine delayCoroutine"}</code> | <span className="api-desc">The pending delay, if any.</span> |
| <Link id="m-delaytodisable" /><code>{"private float delayToDisable"}</code> | <span className="api-desc">Seconds to wait before animating to disabled.</span> |
| <Link id="m-delaytoenable" /><code>{"private float delayToEnable"}</code> | <span className="api-desc">Seconds to wait before animating to enabled.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-startanimation" /><code>{"protected override void StartAnimation()"}</code> | <span className="api-desc">Cancels any pending delay, then starts now if the delay for this direction is 0, or after it otherwise.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delay" /><code>{"private IEnumerator Delay() (iterator)"}</code> | <span className="api-desc">Waits the delay for the current direction, then starts the animation.</span> |

</details>
