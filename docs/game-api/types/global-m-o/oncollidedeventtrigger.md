---
title: "OnCollidedEventTrigger"
description: "Fires a position event on collision or trigger enter, filtered by layer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OnCollidedEventTrigger

A **class** in `Root.Township`, no namespace.

Fires a position event on collision or trigger enter, filtered by layer.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`CollisionType`](/game-api/types/global-m-o/oncollidedeventtrigger-collisiontype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OnCollidedEventTrigger()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-layerfilter" /><code>{"private LayerMask layerFilter"}</code> | Layers that count; empty means all. |
| <Link id="m-oncollided" /><code>{"private "}<Link to="/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" OnCollided"}</code> | Event fired with the first contact point, or this object's position for a trigger. |
| <Link id="m-validevent" /><code>{"private "}<Link to="/game-api/types/global-m-o/oncollidedeventtrigger-collisiontype">{"OnCollidedEventTrigger.CollisionType"}</Link>{" validEvent"}</code> | Which of collision and trigger enter fire the event. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | Fires the event if collisions are enabled and the layer passes. |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | Fires the event if trigger enter is enabled and the layer passes. |

</details>
