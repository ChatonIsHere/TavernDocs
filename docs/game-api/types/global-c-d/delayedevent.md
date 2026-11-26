---
title: "DelayedEvent"
description: "Fires a UnityEvent after a delay, either on start or when Invoke is called (for example from another UnityEvent)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DelayedEvent

A **class** in `Root.Township`, no namespace.

Fires a UnityEvent after a delay, either on start or when `Invoke` is called (for example from another UnityEvent).

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DelayedEvent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delayedevent" /><code>{"private UnityEvent delayedEvent"}</code> | The event to fire. |
| <Link id="m-duration" /><code>{"private float duration"}</code> | Delay in seconds; 0 or less fires straight away. |
| <Link id="m-isinvokedonstart" /><code>{"private bool isInvokedOnStart"}</code> | Whether to start the delay as soon as the object starts. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"void Invoke()"}</code> | Fires `delayedEvent` after `duration` seconds, or straight away if the duration is 0. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Calls `Invoke` if `isInvokedOnStart` is set. |
| <Link id="m-triggerevent" /><code>{"private IEnumerator TriggerEvent() (iterator)"}</code> | Waits `duration` seconds and fires the event. |

</details>
