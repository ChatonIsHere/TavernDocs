---
title: "KeyItemEvent"
description: "A serializable event with a KeyItem argument, such as a lock's key turn event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KeyItemEvent

A **class** in `Root.Township`, `Alta.Inventory`.

A serializable event with a `KeyItem` argument, such as a lock's key turn event.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`AltaEvent<KeyItem, KeyUnityEvent>`](/mod/game-api/types/global-a-b/altaevent-t-unityeventt)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"KeyItemEvent()"}</code> | Creates a `KeyItemEvent` with default values. |

## Used in

Members of other types that take, return or hold a `KeyItemEvent`:

[`Lock.keyTurnEvent`](/mod/game-api/types/alta-items/lock#m-keyturnevent), [`Lock.KeyTurnEvent`](/mod/game-api/types/alta-items/lock#m-keyturnevent-2), [`Lock.receivedNewKeyEvent`](/mod/game-api/types/alta-items/lock#m-receivednewkeyevent), [`Lock.ReceivedNewKeyEvent`](/mod/game-api/types/alta-items/lock#m-receivednewkeyevent-2).
