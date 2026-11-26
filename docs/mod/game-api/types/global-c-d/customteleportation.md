---
title: "CustomTeleportation"
description: "Base for a networked behaviour that replaces the normal teleport logic of a Teleporter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomTeleportation

An **abstract class** in `Root.Township`, the global namespace.

Base for a networked behaviour that replaces the normal teleport logic of a `Teleporter`. Subclasses decide when a teleport may start and what happens at each end.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`TeleportationPoint`](/mod/game-api/types/global-t-x/teleportationpoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected CustomTeleportation()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempt" /><code>{"abstract bool Attempt("}<Link to="/mod/game-api/types/global-t-x/teleporter">{"Teleporter"}</Link>{" teleporter)"}</code> | <span className="api-desc">Returns whether this teleporter is allowed to teleport now.</span> |
| <Link id="m-begin" /><code>{"abstract void Begin("}<Link to="/mod/game-api/types/global-t-x/teleporter">{"Teleporter"}</Link>{" teleporter)"}</code> | <span className="api-desc">Called when a teleport through the given teleporter starts.</span> |
| <Link id="m-end" /><code>{"abstract void End("}<Link to="/mod/game-api/types/global-t-x/teleporter">{"Teleporter"}</Link>{" teleporter)"}</code> | <span className="api-desc">Called when a teleport through the given teleporter finishes.</span> |

## Used in

Members of other types that take, return or hold a `CustomTeleportation`:

<div className="api-used-in">

[`Teleporter.custom`](/mod/game-api/types/global-t-x/teleporter#m-custom).

</div>
