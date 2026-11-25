---
title: "ActionItemHandlersBase"
description: "abstract class ActionItemHandlersBase in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionItemHandlersBase

An **internal abstract class** in `Root.Township`, `Alta.QuickAccessActions`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`ActionItemHandlerCollection`](/game-api/types/alta-player/actionitemhandlercollection), [`ActionItemHandlerCollectionMap`](/game-api/types/alta-player/actionitemhandlercollectionmap)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ActionItemHandlersBase("}<Link to="/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{"[] actionItems, Action<int, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyItem)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-actionitems" /><code>{"protected readonly "}<Link to="/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{"[] actionItems"}</code> |  |
| <Link id="m-destroyitem" /><code>{"protected Action<int, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyItem"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createhandler" /><code>{"protected "}<Link to="/game-api/types/alta-player/actionitemhandler">{"ActionItemHandler"}</Link>{" CreateHandler("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int index)"}</code> |  |
| <Link id="m-summonindexisvalid" /><code>{"protected bool SummonIndexIsValid(int index)"}</code> |  |
