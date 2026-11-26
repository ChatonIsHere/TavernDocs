---
title: "TriggerShapeEvent"
description: "A TriggerShape that also fires inspector events when something enters or leaves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerShapeEvent

A **class** in `Root.Township`, the global namespace.

A `TriggerShape` that also fires inspector events when something enters or leaves.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`TriggerShape`](/mod/game-api/types/global-t-x/triggershape)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerShapeEvent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onentered" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onEntered"}</code> | <span className="api-desc">Event fired when a collider enters.</span> |
| <Link id="m-onexited" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onExited"}</code> | <span className="api-desc">Event fired when a collider leaves.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the shape's enter and exit events to `onEntered` and `onExited`.</span> |

</details>
