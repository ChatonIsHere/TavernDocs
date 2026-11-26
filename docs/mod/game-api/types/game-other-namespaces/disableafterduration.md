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
| <Link id="m-ctor" /><code>{"DisableAfterDuration()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delayuntildisable" /><code>{"private float delayUntilDisable"}</code> | <span className="api-desc">Seconds to stay active, default 20.</span> |
| <Link id="m-remainingdelay" /><code>{"private float remainingDelay"}</code> | <span className="api-desc">Seconds left on the countdown.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Restarts the countdown.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Counts down and deactivates the GameObject when it reaches zero.</span> |

</details>
