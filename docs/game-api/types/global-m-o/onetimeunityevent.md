---
title: "OneTimeUnityEvent"
description: "Component wrapping an AltaEvent that only fires once until ResetEvent is called."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OneTimeUnityEvent

A **class** in `Root.Township`, no namespace.

Component wrapping an `AltaEvent` that only fires once until `ResetEvent` is called. Wire `Invoke` up from other events in the inspector.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OneTimeUnityEvent()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isinvoked" /><code>{"private bool isInvoked"}</code> | True once the event has fired. Not saved, so it resets when the object is reloaded. |
| <Link id="m-unityevent" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" unityEvent"}</code> | The event that fires on the first `Invoke`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-invoke" /><code>{"void Invoke()"}</code> |  |
| <Link id="m-resetevent" /><code>{"void ResetEvent()"}</code> | Clears the fired flag so the next `Invoke` runs the event again. |
