---
title: "ActionItemHandlerCollectionMap"
description: "Server side store of summoned action item handlers: one ActionItemHandlerCollection per player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionItemHandlerCollectionMap

A **internal class** in `Root.Township`, `Alta.QuickAccessActions`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Server side store of summoned action item handlers: one `ActionItemHandlerCollection` per player. `ActionItemsManager` uses it on the server.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`ActionItemHandlersBase`](/mod/game-api/types/alta-player/actionitemhandlersbase), [`IActionItemHandlerCollection`](/mod/game-api/types/alta-player/iactionitemhandlercollection)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionItemHandlerCollectionMap("}<Link to="/mod/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{"[] actionItems, Action<int, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyItem)"}</code> | <span className="api-desc">Creates an `ActionItemHandlerCollectionMap` from `actionItems` and `destroyItem`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serversideallplayersactionitemsmap" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/alta-player/actionitemhandlercollection">{"ActionItemHandlerCollection"}</Link>{"> serverSideAllPlayersActionItemsMap"}</code> | <span className="api-desc">Handler collection for each player.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethandlerforactionindex" /><code><Link to="/mod/game-api/types/alta-player/actionitemhandler">{"ActionItemHandler"}</Link>{" GetHandlerForActionIndex("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int actionIndex)"}</code> | <span className="api-desc">Gets the player's handler for an action index, creating the player's collection on first use.</span> |
| <Link id="m-isspawnedfor" /><code>{"bool IsSpawnedFor("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int index)"}</code> | <span className="api-desc">True if the player has the action's item spawned.</span> |
| <Link id="m-removeplayer" /><code>{"void RemovePlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Drops a player's handlers, called when they disconnect. Logs a warning if they had none.</span> |
