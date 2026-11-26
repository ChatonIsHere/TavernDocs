---
title: "CoinPressGear"
description: "Rotates a coin press gear to follow a lever's value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CoinPressGear

A **class** in `Root.Township`, no namespace.

Rotates a coin press gear to follow a lever's value.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CoinPressGear()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-axis" /><code>{"private Vector3 axis"}</code> | Local axis the gear turns around. |
| <Link id="m-lever" /><code>{"private "}<Link to="/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever"}</code> | Lever that drives the gear. |
| <Link id="m-rangeofmotiondegress" /><code>{"private float rangeOfMotionDegress"}</code> | Degrees turned at full lever value. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the lever's value change. |
| <Link id="m-valuechanged" /><code>{"private void ValueChanged("}<Link to="/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever, float oldValue, float newValue)"}</code> | Sets local rotation to `rangeOfMotionDegress` times the lever value around `axis`. |

</details>
