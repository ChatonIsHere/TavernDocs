---
title: "RandomInterval"
description: "Fires an event over and over at random intervals while the object is enabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RandomInterval

A **class** in `Root.Township`, the global namespace.

Fires an event over and over at random intervals while the object is enabled.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RandomInterval()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximuminterval" /><code>{"private float maximumInterval"}</code> | <span className="api-desc">Longest wait in seconds.</span> |
| <Link id="m-minimuminterval" /><code>{"private float minimumInterval"}</code> | <span className="api-desc">Shortest wait in seconds.</span> |
| <Link id="m-triggered" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" triggered"}</code> | <span className="api-desc">Event fired each interval.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Starts the trigger loop.</span> |
| <Link id="m-trigger" /><code>{"private IEnumerator Trigger() (iterator)"}</code> | <span className="api-desc">Coroutine that waits a random time between the bounds and fires `triggered`, forever.</span> |

</details>
