---
title: "PlayerControllerHandler"
description: "Handler for Player.PlayerControllerSet: gets the player and its new PlayerController (may be null)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerControllerHandler

A **delegate** in `Root.Township`, the global namespace.

Handler for `Player.PlayerControllerSet`: gets the player and its new `PlayerController` (may be null).

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerControllerHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `PlayerControllerHandler`:

[`IPlayer.PlayerControllerSet`](/mod/game-api/types/alta-networking/iplayer#m-playercontrollerset), [`Player.PlayerControllerSet`](/mod/game-api/types/global-p/player#m-playercontrollerset).
