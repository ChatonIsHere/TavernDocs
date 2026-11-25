---
title: "EnableLerp"
description: "class EnableLerp in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EnableLerp

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`DelayedEnableLerp`](/game-api/types/global-c-d/delayedenablelerp)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EnableLerp()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-lerpanimation" /><code>{"protected Coroutine lerpAnimation"}</code> |

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> |
| <Link id="m-disabledvalue" /><code>{"private float disabledValue"}</code> |
| <Link id="m-enabledvalue" /><code>{"private float enabledValue"}</code> |
| <Link id="m-progress" /><code>{"private float progress"}</code> |
| <Link id="m-progressupdate" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" progressUpdate"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-setenabled" /><code>{"void SetEnabled(bool isEnabled)"}</code> |
| <Link id="m-startanimation" /><code>{"protected virtual void StartAnimation()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-animation" /><code>{"private IEnumerator Animation() (iterator)"}</code> |

</details>
