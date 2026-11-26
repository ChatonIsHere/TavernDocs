---
title: "DelayedEvent"
description: "Fires a UnityEvent after a delay, either on start or when Invoke is called (for example from another UnityEvent)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DelayedEvent

A **class** in `Root.Township`, the global namespace.

Fires a UnityEvent after a delay, either on start or when `Invoke` is called (for example from another UnityEvent).

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DelayedEvent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-delayedevent" /><code>{"private UnityEvent delayedEvent"}</code> | <span className="api-desc">The event to fire.</span> |
| <Link id="m-duration" /><code>{"private float duration"}</code> | <span className="api-desc">Delay in seconds; 0 or less fires straight away.</span> |
| <Link id="m-isinvokedonstart" /><code>{"private bool isInvokedOnStart"}</code> | <span className="api-desc">Whether to start the delay as soon as the object starts.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"void Invoke()"}</code> | <span className="api-desc">Fires `delayedEvent` after `duration` seconds, or straight away if the duration is 0.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Calls `Invoke` if `isInvokedOnStart` is set.</span> |
| <Link id="m-triggerevent" /><code>{"private IEnumerator TriggerEvent() (iterator)"}</code> | <span className="api-desc">Waits `duration` seconds and fires the event.</span> |

</details>
