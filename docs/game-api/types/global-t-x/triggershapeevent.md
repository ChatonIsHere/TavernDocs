---
title: "TriggerShapeEvent"
description: "A TriggerShape that also fires inspector events when something enters or leaves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TriggerShapeEvent

A **class** in `Root.Township`, no namespace.

A `TriggerShape` that also fires inspector events when something enters or leaves.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`TriggerShape`](/game-api/types/global-t-x/triggershape)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TriggerShapeEvent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onentered" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onEntered"}</code> | Event fired when a collider enters. |
| <Link id="m-onexited" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onExited"}</code> | Event fired when a collider leaves. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the shape's enter and exit events to `onEntered` and `onExited`. |

</details>
