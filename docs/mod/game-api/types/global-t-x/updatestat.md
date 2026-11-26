---
title: "UpdateStat"
description: "Callback with a game action stat, the player it belongs to and the new value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UpdateStat

A **delegate** in `Root.Township`, the global namespace.

Callback with a game action stat, the player it belongs to and the new value. Type of `GameAction.ValueUpdate`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UpdateStat(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" stat, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, float value, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" stat, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, float value)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `UpdateStat`:

[`GameAction.ValueUpdate`](/mod/game-api/types/global-e-h/gameaction#m-valueupdate).
