---
title: "CoinPressGear"
description: "Rotates a coin press gear to follow a lever's value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CoinPressGear

A **class** in `Root.Township`, the global namespace.

Rotates a coin press gear to follow a lever's value.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CoinPressGear()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-axis" /><code>{"private Vector3 axis"}</code> | <span className="api-desc">Local axis the gear turns around.</span> |
| <Link id="m-lever" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever"}</code> | <span className="api-desc">Lever that drives the gear.</span> |
| <Link id="m-rangeofmotiondegress" /><code>{"private float rangeOfMotionDegress"}</code> | <span className="api-desc">Degrees turned at full lever value.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the lever's value change.</span> |
| <Link id="m-valuechanged" /><code>{"private void ValueChanged("}<Link to="/mod/game-api/types/global-i-l/lever">{"Lever"}</Link>{" lever, float oldValue, float newValue)"}</code> | <span className="api-desc">Sets local rotation to `rangeOfMotionDegress` times the lever value around `axis`.</span> |

</details>
