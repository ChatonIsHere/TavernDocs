---
title: "IActionItemHandlerCollection"
description: "interface IActionItemHandlerCollection in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IActionItemHandlerCollection

An **internal interface** in `Root.Township`, `Alta.QuickAccessActions`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`ActionItemHandlerCollection`](/game-api/types/alta-player/actionitemhandlercollection), [`ActionItemHandlerCollectionMap`](/game-api/types/alta-player/actionitemhandlercollectionmap)

## Methods

| Member |
| --- |
| <Link id="m-gethandlerforactionindex" /><code><Link to="/game-api/types/alta-player/actionitemhandler">{"ActionItemHandler"}</Link>{" GetHandlerForActionIndex("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int actionItemIndex)"}</code> |
| <Link id="m-isspawnedfor" /><code>{"bool IsSpawnedFor("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int actionItemIndex)"}</code> |
| <Link id="m-removeplayer" /><code>{"void RemovePlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |

## Used in

Members of other types that take, return or hold a `IActionItemHandlerCollection`:

[`ActionItemsManager.itemCollection`](/game-api/types/alta-player/actionitemsmanager#m-itemcollection).
