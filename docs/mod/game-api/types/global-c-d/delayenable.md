---
title: "DelayEnable"
description: "Enables a target Behaviour after a random delay when the object starts, so many copies don't all switch on at once."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DelayEnable

A **class** in `Root.Township`, the global namespace.

Enables a target `Behaviour` after a random delay when the object starts, so many copies don't all switch on at once.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`DelayMode`](/mod/game-api/types/global-c-d/delayenable-delaymode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DelayEnable()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> | <span className="api-desc">Curve mode: maps a random 0 to 1 value to the delay in seconds.</span> |
| <Link id="m-maximumtime" /><code>{"private float maximumTime"}</code> | <span className="api-desc">Range mode: longest delay in seconds.</span> |
| <Link id="m-minimumtime" /><code>{"private float minimumTime"}</code> | <span className="api-desc">Range mode: shortest delay in seconds.</span> |
| <Link id="m-mode" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/delayenable-delaymode">{"DelayEnable.DelayMode"}</Link>{" mode"}</code> | <span className="api-desc">Whether the delay is picked from a range or from the curve.</span> |
| <Link id="m-target" /><code>{"private Behaviour target"}</code> | <span className="api-desc">The behaviour to enable.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private IEnumerator Start() (iterator)"}</code> | <span className="api-desc">Waits a random time, from the range or the curve depending on `mode`, then enables `target`.</span> |

</details>
