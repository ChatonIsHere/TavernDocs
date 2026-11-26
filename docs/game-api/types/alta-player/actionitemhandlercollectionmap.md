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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`ActionItemHandlersBase`](/game-api/types/alta-player/actionitemhandlersbase), [`IActionItemHandlerCollection`](/game-api/types/alta-player/iactionitemhandlercollection)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActionItemHandlerCollectionMap("}<Link to="/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{"[] actionItems, Action<int, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyItem)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serversideallplayersactionitemsmap" /><code>{"private readonly Dictionary<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/alta-player/actionitemhandlercollection">{"ActionItemHandlerCollection"}</Link>{"> serverSideAllPlayersActionItemsMap"}</code> | Handler collection for each player. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethandlerforactionindex" /><code><Link to="/game-api/types/alta-player/actionitemhandler">{"ActionItemHandler"}</Link>{" GetHandlerForActionIndex("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int actionIndex)"}</code> | Gets the player's handler for an action index, creating the player's collection on first use. |
| <Link id="m-isspawnedfor" /><code>{"bool IsSpawnedFor("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int index)"}</code> | True if the player has the action's item spawned. |
| <Link id="m-removeplayer" /><code>{"void RemovePlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Drops a player's handlers, called when they disconnect. Logs a warning if they had none. |
