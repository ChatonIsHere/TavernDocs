---
title: "PlayerControllerHandler"
description: "Event handler that receives a PlayerController."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerControllerHandler

A **delegate** in `Root.Township`, `Alta.Character`.

Event handler that receives a `PlayerController`. Used by `PlayerController.LocalPlayerSet`, `OnAboutToLeave` and `Player.PlayerControllerSet`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerControllerHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |

## Used in

Members of other types that take, return or hold a `PlayerControllerHandler`:

[`PlayerController.LocalPlayerSet`](/game-api/types/global-p/playercontroller#m-localplayerset), [`PlayerController.OnAboutToLeave`](/game-api/types/global-p/playercontroller#m-onabouttoleave).
