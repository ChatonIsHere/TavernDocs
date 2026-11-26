---
title: "IActionItemHandlerCollection"
description: "Internal: per-player store of quick access action item handlers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IActionItemHandlerCollection

An **internal interface** in `Root.Township`, `Alta.QuickAccessActions`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal: per-player store of quick access action item handlers. `ActionItemsManager` uses `ActionItemHandlerCollectionMap` on the server and `ActionItemHandlerCollection` on the client.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Derived types** [`ActionItemHandlerCollection`](/mod/game-api/types/alta-player/actionitemhandlercollection), [`ActionItemHandlerCollectionMap`](/mod/game-api/types/alta-player/actionitemhandlercollectionmap)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethandlerforactionindex" /><code><Link to="/mod/game-api/types/alta-player/actionitemhandler">{"ActionItemHandler"}</Link>{" GetHandlerForActionIndex("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int actionItemIndex)"}</code> | Gets the handler for a player's action item index, creating it if needed. |
| <Link id="m-isspawnedfor" /><code>{"bool IsSpawnedFor("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int actionItemIndex)"}</code> | Whether that action item is currently spawned for the player. |
| <Link id="m-removeplayer" /><code>{"void RemovePlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Disposes a player's handlers. |

## Used in

Members of other types that take, return or hold a `IActionItemHandlerCollection`:

[`ActionItemsManager.itemCollection`](/mod/game-api/types/alta-player/actionitemsmanager#m-itemcollection).
