---
title: "OnCollidedEventTrigger"
description: "Fires a position event on collision or trigger enter, filtered by layer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OnCollidedEventTrigger

A **class** in `Root.Township`, the global namespace.

Fires a position event on collision or trigger enter, filtered by layer.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`CollisionType`](/mod/game-api/types/global-m-o/oncollidedeventtrigger-collisiontype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OnCollidedEventTrigger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-layerfilter" /><code>{"private LayerMask layerFilter"}</code> | <span className="api-desc">Layers that count; empty means all.</span> |
| <Link id="m-oncollided" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" OnCollided"}</code> | <span className="api-desc">Event fired with the first contact point, or this object's position for a trigger.</span> |
| <Link id="m-validevent" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/oncollidedeventtrigger-collisiontype">{"OnCollidedEventTrigger.CollisionType"}</Link>{" validEvent"}</code> | <span className="api-desc">Which of collision and trigger enter fire the event.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-oncollisionenter" /><code>{"private void OnCollisionEnter(Collision collision)"}</code> | <span className="api-desc">Fires the event if collisions are enabled and the layer passes.</span> |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">Fires the event if trigger enter is enabled and the layer passes.</span> |

</details>
