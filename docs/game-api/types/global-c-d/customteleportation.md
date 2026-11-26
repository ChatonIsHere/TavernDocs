---
title: "CustomTeleportation"
description: "Base for a networked behaviour that replaces the normal teleport logic of a Teleporter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomTeleportation

An **abstract class** in `Root.Township`, no namespace.

Base for a networked behaviour that replaces the normal teleport logic of a `Teleporter`. Subclasses decide when a teleport may start and what happens at each end.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`TeleportationPoint`](/game-api/types/global-t-x/teleportationpoint)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected CustomTeleportation()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attempt" /><code>{"abstract bool Attempt("}<Link to="/game-api/types/global-t-x/teleporter">{"Teleporter"}</Link>{" teleporter)"}</code> | Returns whether this teleporter is allowed to teleport now. |
| <Link id="m-begin" /><code>{"abstract void Begin("}<Link to="/game-api/types/global-t-x/teleporter">{"Teleporter"}</Link>{" teleporter)"}</code> | Called when a teleport through the given teleporter starts. |
| <Link id="m-end" /><code>{"abstract void End("}<Link to="/game-api/types/global-t-x/teleporter">{"Teleporter"}</Link>{" teleporter)"}</code> | Called when a teleport through the given teleporter finishes. |

## Used in

Members of other types that take, return or hold a `CustomTeleportation`:

[`Teleporter.custom`](/game-api/types/global-t-x/teleporter#m-custom).
