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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TradeStateManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/tradestatus">{"TradeStatus"}</Link>{" index"}</code> | <span className="api-desc">The current `TradeStatus`, or -1 before the first one.</span> |
| <Link id="m-indexedevents" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{"[] indexedEvents"}</code> | <span className="api-desc">Client: the status events, indexed by `TradeStatus` value.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class; unused.</span> |
| <Link id="m-onopenforsale" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" onOpenForSale"}</code> | <span className="api-desc">Event set true while the vendor is open for sale, false otherwise.</span> |
| <Link id="m-onoutofstock" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" onOutOfStock"}</code> | <span className="api-desc">Event set true while the vendor is out of stock.</span> |
| <Link id="m-onunnocupied" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolevent">{"BoolEvent"}</Link>{" onUnnocupied"}</code> | <span className="api-desc">Event set true while the vendor has no owner.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">The status sync message.</span> |
| <Link id="m-vendor" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/tradevendor">{"TradeVendor"}</Link>{" vendor"}</code> | <span className="api-desc">The vendor whose status is shown.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Server: listens to the vendor's status changes. Client: sets all status events to false. Both: sets up the sync message.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: applies the vendor's current status.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the current status to a player who just connected.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-statuschanged" /><code>{"private void StatusChanged("}<Link to="/mod/game-api/types/alta-crafting/tradestatus">{"TradeStatus"}</Link>{" index)"}</code> | <span className="api-desc">Switches the previous status event off and the new one on. On the server it then sends the status to nearby players.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes the status as an integer; clients apply what they read.</span> |

</details>
