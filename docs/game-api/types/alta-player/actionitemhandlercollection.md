---
title: "ActionItemHandlerCollection"
description: "class ActionItemHandlerCollection in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionItemHandlerCollection

A **internal class** in `Root.Township`, `Alta.QuickAccessActions`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`ActionItemHandlersBase`](/game-api/types/alta-player/actionitemhandlersbase), [`IActionItemHandlerCollection`](/game-api/types/alta-player/iactionitemhandlercollection)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionItemHandlerCollection("}<Link to="/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{"[] actionItems, Action<int, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyItem)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-localplayeractionitems" /><code>{"private "}<Link to="/game-api/types/alta-player/actionitemhandler">{"ActionItemHandler"}</Link>{"[] localPlayerActionItems"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-localplayeractionitems-2" /><code>{"private "}<Link to="/game-api/types/alta-player/actionitemhandler">{"ActionItemHandler"}</Link>{"[] LocalPlayerActionItems { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-gethandlerforactionindex" /><code><Link to="/game-api/types/alta-player/actionitemhandler">{"ActionItemHandler"}</Link>{" GetHandlerForActionIndex("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int index)"}</code> |  |
| <Link id="m-isspawnedfor" /><code>{"bool IsSpawnedFor("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int index)"}</code> |  |
| <Link id="m-removeplayer" /><code>{"void RemovePlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-gethandler" /><code>{"private "}<Link to="/game-api/types/alta-player/actionitemhandler">{"ActionItemHandler"}</Link>{" GetHandler("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int index)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ActionItemHandlerCollection`:

[`ActionItemHandlerCollectionMap.serverSideAllPlayersActionItemsMap`](/game-api/types/alta-player/actionitemhandlercollectionmap#m-serversideallplayersactionitemsmap).
