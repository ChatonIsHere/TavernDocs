---
title: "TimedToggle"
description: "A local component that flips a target GameObject on and off every delay seconds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimedToggle

A **class** in `Root.Township`, the global namespace.

A local component that flips a target GameObject on and off every `delay` seconds. No networking.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimedToggle()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currenttime" /><code>{"private float currentTime"}</code> | <span className="api-desc">Seconds left until the next toggle. Starts at -1 so the first frame toggles straight away.</span> |
| <Link id="m-delay" /><code>{"private float delay"}</code> | <span className="api-desc">Seconds between toggles (minimum 0.01).</span> |
| <Link id="m-target" /><code>{"private GameObject target"}</code> | <span className="api-desc">The GameObject whose active state is flipped.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Counts down `currentTime` and toggles `target` each time it runs out, then restarts the countdown.</span> |

</details>
