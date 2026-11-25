---
title: "TradeStateManager"
description: "class TradeStateManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TradeStateManager

A **class** in `Root.Township`, `Alta.Trading`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TradeStateManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"private "}<Link to="/game-api/types/alta-crafting/tradestatus">{"TradeStatus"}</Link>{" index"}</code> |  |
| <Link id="m-indexedevents" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{"[] indexedEvents"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-onopenforsale" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" onOpenForSale"}</code> |  |
| <Link id="m-onoutofstock" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" onOutOfStock"}</code> |  |
| <Link id="m-onunnocupied" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" onUnnocupied"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |
| <Link id="m-vendor" /><code>{"private "}<Link to="/game-api/types/alta-crafting/tradevendor">{"TradeVendor"}</Link>{" vendor"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-statuschanged" /><code>{"private void StatusChanged("}<Link to="/game-api/types/alta-crafting/tradestatus">{"TradeStatus"}</Link>{" index)"}</code> |  |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
