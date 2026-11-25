---
title: "PlayerControllerHandler"
description: "delegate PlayerControllerHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerControllerHandler

A **delegate** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerControllerHandler(object object, IntPtr method)"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, AsyncCallback callback, object object)"}</code> |  |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |  |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerControllerHandler`:

[`IPlayer.PlayerControllerSet`](/game-api/types/alta-networking/iplayer#m-playercontrollerset), [`Player.PlayerControllerSet`](/game-api/types/global-p/player#m-playercontrollerset).
