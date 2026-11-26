---
title: "TradeStateManager"
description: "Syncs a trade vendor's status (unoccupied, out of stock, open for sale) to clients and fires an event per status for visuals."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TradeStateManager

A **class** in `Root.Township`, `Alta.Trading`.

Syncs a trade vendor's status (unoccupied, out of stock, open for sale) to clients and fires an event per status for visuals. The server reads the status from the `TradeVendor`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TradeStateManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"private "}<Link to="/game-api/types/alta-crafting/tradestatus">{"TradeStatus"}</Link>{" index"}</code> | The current `TradeStatus`, or -1 before the first one. |
| <Link id="m-indexedevents" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{"[] indexedEvents"}</code> | Client: the status events, indexed by `TradeStatus` value. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class; unused. |
| <Link id="m-onopenforsale" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" onOpenForSale"}</code> | Event set true while the vendor is open for sale, false otherwise. |
| <Link id="m-onoutofstock" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" onOutOfStock"}</code> | Event set true while the vendor is out of stock. |
| <Link id="m-onunnocupied" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" onUnnocupied"}</code> | Event set true while the vendor has no owner. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | The status sync message. |
| <Link id="m-vendor" /><code>{"private "}<Link to="/game-api/types/alta-crafting/tradevendor">{"TradeVendor"}</Link>{" vendor"}</code> | The vendor whose status is shown. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Server: listens to the vendor's status changes. Client: sets all status events to false. Both: sets up the sync message. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: applies the vendor's current status. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the current status to a player who just connected. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-statuschanged" /><code>{"private void StatusChanged("}<Link to="/game-api/types/alta-crafting/tradestatus">{"TradeStatus"}</Link>{" index)"}</code> | Switches the previous status event off and the new one on. On the server it then sends the status to nearby players. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes the status as an integer; clients apply what they read. |

</details>
