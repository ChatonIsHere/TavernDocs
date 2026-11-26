---
title: "EventAtPosition"
description: "Fires a transform event with its own transform, so wiring can spawn something at this object's position."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EventAtPosition

A **class** in `Root.Township`, no namespace.

Fires a transform event with its own transform, so wiring can spawn something at this object's position.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EventAtPosition()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-transformevent" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" transformEvent"}</code> | Event that receives the transform. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-callevent" /><code>{"void CallEvent()"}</code> | Invokes the event with this transform. |
