---
title: "ActionItemHandlersBase"
description: "Internal base for action item handler collections: holds the ActionItemData list and the destroy callback."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionItemHandlersBase

An **internal abstract class** in `Root.Township`, `Alta.QuickAccessActions`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal base for action item handler collections: holds the `ActionItemData` list and the destroy callback.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Derived types** [`ActionItemHandlerCollection`](/mod/game-api/types/alta-player/actionitemhandlercollection), [`ActionItemHandlerCollectionMap`](/mod/game-api/types/alta-player/actionitemhandlercollectionmap)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ActionItemHandlersBase("}<Link to="/mod/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{"[] actionItems, Action<int, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyItem)"}</code> | Creates an `ActionItemHandlersBase` from `actionItems` and `destroyItem`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-actionitems" /><code>{"protected readonly "}<Link to="/mod/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{"[] actionItems"}</code> | The action item data, by index. |
| <Link id="m-destroyitem" /><code>{"protected Action<int, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyItem"}</code> | Callback that destroys a player's item by index, from `ActionItemsManager`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createhandler" /><code>{"protected "}<Link to="/mod/game-api/types/alta-player/actionitemhandler">{"ActionItemHandler"}</Link>{" CreateHandler("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int index)"}</code> | Makes an `ActionItemHandler` for a player and action index. |
| <Link id="m-summonindexisvalid" /><code>{"protected bool SummonIndexIsValid(int index)"}</code> | True if the index is inside the action item list; logs an error otherwise. |
