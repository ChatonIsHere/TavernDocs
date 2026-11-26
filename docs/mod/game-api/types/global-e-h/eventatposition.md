---
title: "EventAtPosition"
description: "Fires a transform event with its own transform, so wiring can spawn something at this object's position."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EventAtPosition

A **class** in `Root.Township`, the global namespace.

Fires a transform event with its own transform, so wiring can spawn something at this object's position.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EventAtPosition()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-transformevent" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformevent">{"TransformEvent"}</Link>{" transformEvent"}</code> | <span className="api-desc">Event that receives the transform.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-callevent" /><code>{"void CallEvent()"}</code> | <span className="api-desc">Invokes the event with this transform.</span> |
