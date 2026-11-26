---
title: "OneTimeUnityEvent"
description: "Component wrapping an AltaEvent that only fires once until ResetEvent is called."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OneTimeUnityEvent

A **class** in `Root.Township`, the global namespace.

Component wrapping an `AltaEvent` that only fires once until `ResetEvent` is called. Wire `Invoke` up from other events in the inspector.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OneTimeUnityEvent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isinvoked" /><code>{"private bool isInvoked"}</code> | <span className="api-desc">True once the event has fired. Not saved, so it resets when the object is reloaded.</span> |
| <Link id="m-unityevent" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" unityEvent"}</code> | <span className="api-desc">The event that fires on the first `Invoke`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"void Invoke()"}</code> | <span className="api-desc">Fires the event the first time only; later calls do nothing until `ResetEvent`.</span> |
| <Link id="m-resetevent" /><code>{"void ResetEvent()"}</code> | <span className="api-desc">Clears the fired flag so the next `Invoke` runs the event again.</span> |
