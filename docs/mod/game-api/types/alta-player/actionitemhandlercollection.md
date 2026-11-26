---
title: "ActionItemHandlerCollection"
description: "Internal: one player's quick access action item handlers, one per action index, made on first use."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionItemHandlerCollection

A **internal class** in `Root.Township`, `Alta.QuickAccessActions`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal: one player's quick access action item handlers, one per action index, made on first use. The client uses one; the server keeps one per player in `ActionItemHandlerCollectionMap`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`ActionItemHandlersBase`](/mod/game-api/types/alta-player/actionitemhandlersbase), [`IActionItemHandlerCollection`](/mod/game-api/types/alta-player/iactionitemhandlercollection)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionItemHandlerCollection("}<Link to="/mod/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{"[] actionItems, Action<int, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyItem)"}</code> | <span className="api-desc">Creates an `ActionItemHandlerCollection` from `actionItems` and `destroyItem`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localplayeractionitems" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/actionitemhandler">{"ActionItemHandler"}</Link>{"[] localPlayerActionItems"}</code> | <span className="api-desc">Backing field for `LocalPlayerActionItems`.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-localplayeractionitems-2" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/actionitemhandler">{"ActionItemHandler"}</Link>{"[] LocalPlayerActionItems { get; }"}</code> | <span className="api-desc">Handler array, created on first access.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethandlerforactionindex" /><code><Link to="/mod/game-api/types/alta-player/actionitemhandler">{"ActionItemHandler"}</Link>{" GetHandlerForActionIndex("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int index)"}</code> | <span className="api-desc">Returns the handler for a valid action index, or null.</span> |
| <Link id="m-isspawnedfor" /><code>{"bool IsSpawnedFor("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int index)"}</code> | <span className="api-desc">Whether the item for that index has a handler and is active. Ignores the player.</span> |
| <Link id="m-removeplayer" /><code>{"void RemovePlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Disposes every handler. Throws if no handler was ever made, as the array is still null.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gethandler" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/actionitemhandler">{"ActionItemHandler"}</Link>{" GetHandler("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int index)"}</code> | <span className="api-desc">Returns the handler for an index, creating it the first time.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ActionItemHandlerCollection`:

<div className="api-used-in">

[`ActionItemHandlerCollectionMap.serverSideAllPlayersActionItemsMap`](/mod/game-api/types/alta-player/actionitemhandlercollectionmap#m-serversideallplayersactionitemsmap).

</div>
