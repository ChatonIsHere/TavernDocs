---
title: "MovingObjectsBetweenDocks"
description: "Pooled ghost visual that shows an item flying into a dock, used by Gatherer and PickupContainer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MovingObjectsBetweenDocks

A **class** in `Root.Township`, the global namespace.

Pooled ghost visual that shows an item flying into a dock, used by `Gatherer` and `PickupContainer`. Releases itself when done.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`ObjectVisualDouble`](/mod/game-api/types/global-m-o/objectvisualdouble)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MovingObjectsBetweenDocks()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-receivedirections" /><code>{"void ReceiveDirections("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, Transform target, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item)"}</code> | <span className="api-desc">Starts moving the ghost toward a dock for an item.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-moving" /><code>{"private IEnumerator Moving("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, Transform target, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item) (iterator)"}</code> | <span className="api-desc">Runs the dock move animation, then releases the ghosts and itself.</span> |

</details>
