---
title: "EvaluateWielder"
description: "Delegate that reports who is wielding something, as a network entity and, if it is a player, their PlayerController."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EvaluateWielder

A **delegate** in `Root.Township`, the global namespace.

Delegate that reports who is wielding something, as a network entity and, if it is a player, their `PlayerController`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EvaluateWielder(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke(out "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" wielder, out "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerWielder, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(out "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" wielder, out "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerWielder, IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke(out "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" wielder, out "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerWielder)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `EvaluateWielder`:

[`Explosive.getWielder`](/mod/game-api/types/global-e-h/explosive#m-getwielder).
