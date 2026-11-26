---
title: "DisableAfterDuration"
description: "Turns its GameObject off a set time after it is turned on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DisableAfterDuration

A **class** in `Root.Township`, `Features.Gameplay.ClimbingTower`.

Turns its GameObject off a set time after it is turned on.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DisableAfterDuration()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delayuntildisable" /><code>{"private float delayUntilDisable"}</code> | Seconds to stay active, default 20. |
| <Link id="m-remainingdelay" /><code>{"private float remainingDelay"}</code> | Seconds left on the countdown. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Restarts the countdown. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Counts down and deactivates the GameObject when it reaches zero. |

</details>
