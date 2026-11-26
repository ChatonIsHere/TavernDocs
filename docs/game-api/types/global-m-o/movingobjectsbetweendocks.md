---
title: "MovingObjectsBetweenDocks"
description: "Pooled ghost visual that shows an item flying into a dock, used by Gatherer and PickupContainer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MovingObjectsBetweenDocks

A **class** in `Root.Township`, no namespace.

Pooled ghost visual that shows an item flying into a dock, used by `Gatherer` and `PickupContainer`. Releases itself when done.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`ObjectVisualDouble`](/game-api/types/global-m-o/objectvisualdouble)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MovingObjectsBetweenDocks()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-receivedirections" /><code>{"void ReceiveDirections("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, Transform target, "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> | Starts moving the ghost toward a dock for an item. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-moving" /><code>{"private IEnumerator Moving("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, Transform target, "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item) (iterator)"}</code> | Runs the dock move animation, then releases the ghosts and itself. |

</details>
