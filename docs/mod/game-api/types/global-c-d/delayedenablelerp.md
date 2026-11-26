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
| <Link id="m-ctor" /><code>{"DelayedEnableLerp()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delaycoroutine" /><code>{"private Coroutine delayCoroutine"}</code> | The pending delay, if any. |
| <Link id="m-delaytodisable" /><code>{"private float delayToDisable"}</code> | Seconds to wait before animating to disabled. |
| <Link id="m-delaytoenable" /><code>{"private float delayToEnable"}</code> | Seconds to wait before animating to enabled. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-startanimation" /><code>{"protected override void StartAnimation()"}</code> | Cancels any pending delay, then starts now if the delay for this direction is 0, or after it otherwise. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delay" /><code>{"private IEnumerator Delay() (iterator)"}</code> | Waits the delay for the current direction, then starts the animation. |

</details>
