---
title: "DelayEnable"
description: "Enables a target Behaviour after a random delay when the object starts, so many copies don't all switch on at once."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DelayEnable

A **class** in `Root.Township`, no namespace.

Enables a target `Behaviour` after a random delay when the object starts, so many copies don't all switch on at once.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`DelayMode`](/game-api/types/global-c-d/delayenable-delaymode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DelayEnable()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> | Curve mode: maps a random 0 to 1 value to the delay in seconds. |
| <Link id="m-maximumtime" /><code>{"private float maximumTime"}</code> | Range mode: longest delay in seconds. |
| <Link id="m-minimumtime" /><code>{"private float minimumTime"}</code> | Range mode: shortest delay in seconds. |
| <Link id="m-mode" /><code>{"private "}<Link to="/game-api/types/global-c-d/delayenable-delaymode">{"DelayEnable.DelayMode"}</Link>{" mode"}</code> | Whether the delay is picked from a range or from the curve. |
| <Link id="m-target" /><code>{"private Behaviour target"}</code> | The behaviour to enable. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private IEnumerator Start() (iterator)"}</code> | Waits a random time, from the range or the curve depending on `mode`, then enables `target`. |

</details>
