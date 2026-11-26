---
title: "LockEvent"
description: "A serializable event with a Lock argument, such as a lock's locked or broken events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LockEvent

A **class** in `Root.Township`, `Alta.Inventory`.

A serializable event with a `Lock` argument, such as a lock's locked or broken events.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`AltaEvent<Lock, LockUnityEvent>`](/game-api/types/global-a-b/altaevent-t-unityeventt)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LockEvent()"}</code> | Creates a `LockEvent` with default values. |

## Used in

Members of other types that take, return or hold a `LockEvent`:

[`ConsumableLock.lockBreakEvent`](/game-api/types/alta-items/consumablelock#m-lockbreakevent), [`ConsumableLock.LockBreakEvent`](/game-api/types/alta-items/consumablelock#m-lockbreakevent-2), [`Lock.isLockedEvent`](/game-api/types/alta-items/lock#m-islockedevent), [`Lock.IsLockedEvent`](/game-api/types/alta-items/lock#m-islockedevent-2).
