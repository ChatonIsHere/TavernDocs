---
title: "IncrementStat"
description: "Delegate for GameAction.IncrementValue: a game action stat was incremented for a player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IncrementStat

A **delegate** in `Root.Township`, no namespace.

Delegate for `GameAction.IncrementValue`: a game action stat was incremented for a player.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IncrementStat(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" stat, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" stat, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `IncrementStat`:

[`GameAction.IncrementValue`](/game-api/types/global-e-h/gameaction#m-incrementvalue).
