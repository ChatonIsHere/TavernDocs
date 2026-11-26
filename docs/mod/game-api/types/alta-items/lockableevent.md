---
title: "LockableEvent"
description: "A serializable AltaEvent that passes a LockableHinge, used for lock and chest thump events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LockableEvent

A **class** in `Root.Township`, `Alta.Inventory`.

A serializable `AltaEvent` that passes a `LockableHinge`, used for lock and chest thump events.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`AltaEvent<LockableHinge, LockableUnityEvent>`](/mod/game-api/types/global-a-b/altaevent-t-unityeventt)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LockableEvent()"}</code> | <span className="api-desc">Creates a `LockableEvent` with default values.</span> |

## Used in

Members of other types that take, return or hold a `LockableEvent`:

<div className="api-used-in">

[`Chest.creakEvent`](/mod/game-api/types/alta-items/chest#m-creakevent), [`Chest.CreakEvent`](/mod/game-api/types/alta-items/chest#m-creakevent-2), [`Chest.thumpEvent`](/mod/game-api/types/alta-items/chest#m-thumpevent), [`Chest.ThumpEvent`](/mod/game-api/types/alta-items/chest#m-thumpevent-2), [`LockableHinge.isLockedEvent`](/mod/game-api/types/alta-items/lockablehinge#m-islockedevent), [`LockableHinge.IsLockedEvent`](/mod/game-api/types/alta-items/lockablehinge#m-islockedevent-2).

</div>
