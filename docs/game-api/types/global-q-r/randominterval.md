---
title: "RandomInterval"
description: "Fires an event over and over at random intervals while the object is enabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomInterval

A **class** in `Root.Township`, no namespace.

Fires an event over and over at random intervals while the object is enabled.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomInterval()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximuminterval" /><code>{"private float maximumInterval"}</code> | Longest wait in seconds. |
| <Link id="m-minimuminterval" /><code>{"private float minimumInterval"}</code> | Shortest wait in seconds. |
| <Link id="m-triggered" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" triggered"}</code> | Event fired each interval. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Starts the trigger loop. |
| <Link id="m-trigger" /><code>{"private IEnumerator Trigger() (iterator)"}</code> | Coroutine that waits a random time between the bounds and fires `triggered`, forever. |

</details>
