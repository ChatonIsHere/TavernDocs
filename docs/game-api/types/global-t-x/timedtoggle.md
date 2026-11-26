---
title: "TimedToggle"
description: "A local component that flips a target GameObject on and off every delay seconds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TimedToggle

A **class** in `Root.Township`, no namespace.

A local component that flips a target GameObject on and off every `delay` seconds. No networking.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TimedToggle()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currenttime" /><code>{"private float currentTime"}</code> | Seconds left until the next toggle. Starts at -1 so the first frame toggles straight away. |
| <Link id="m-delay" /><code>{"private float delay"}</code> | Seconds between toggles (minimum 0.01). |
| <Link id="m-target" /><code>{"private GameObject target"}</code> | The GameObject whose active state is flipped. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Counts down `currentTime` and toggles `target` each time it runs out, then restarts the countdown. |

</details>
