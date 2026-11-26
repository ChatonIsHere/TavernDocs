---
title: "IConnection"
description: "A network connection with its player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IConnection

An **interface** in `Root.Township`, the global namespace.

A network connection with its player. `Connection` is the implementation.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`Connection`](/mod/game-api/types/alta-networking/connection)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Player { get; set; }"}</code> | The player on this connection. Setting it also updates `PlayerName` in `Connection`. |
| <Link id="m-playername" /><code>{"string PlayerName { get; }"}</code> | The player's username, or "Unknown Player" before one is set. |

## Used in

Members of other types that take, return or hold a `IConnection`:

[`InternalMessage.Serialize`](/mod/game-api/types/alta-networking/internalmessage#m-serialize), [`SceneEntityMessage.Serialize`](/mod/game-api/types/alta-networking/sceneentitymessage#m-serialize).
