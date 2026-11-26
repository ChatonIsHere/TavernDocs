---
title: "PostBoxSenderManager"
description: "Tracks how many gifts each player may still send to each other player through post boxes, with a cap of GiftsPerPlayer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PostBoxSenderManager

A **class** in `Root.Township`, the global namespace.

Tracks how many gifts each player may still send to each other player through post boxes, with a cap of `GiftsPerPlayer`. The server keeps the counts and syncs each player their own; use the static `instance`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`PerPlayerSendingCount`](/mod/game-api/types/global-p/postboxsendermanager-perplayersendingcount)
- **Documented in** [Trading](/mod/game-api/game-systems/trading)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PostBoxSenderManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-p/postboxsendermanager">{"PostBoxSenderManager"}</Link>{" instance"}</code> | <span className="api-desc">The scene's instance, set in `Awake`.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-giftsperplayer" /><code>{"private int giftsPerPlayer"}</code> | <span className="api-desc">Backing field for `GiftsPerPlayer`.</span> |
| <Link id="m-perplayercounter" /><code>{"private Dictionary<int, "}<Link to="/mod/game-api/types/global-p/postboxsendermanager-perplayersendingcount">{"PostBoxSenderManager.PerPlayerSendingCount"}</Link>{"> perPlayerCounter"}</code> | <span className="api-desc">Remaining allowance by sender user id, then by receiver user id. Not saved in this file.</span> |
| <Link id="m-syncall" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncAll"}</code> | <span className="api-desc">Method sync for all counts.</span> |
| <Link id="m-syncsingle" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncSingle"}</code> | <span className="api-desc">Method sync for one count.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-giftsperplayer-2" /><code>{"int GiftsPerPlayer { get; }"}</code> | <span className="api-desc">Gift allowance per sender and receiver pair (3 by default).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getavailablequantity" /><code>{"int GetAvailableQuantity(int fromIdentifier, int toIdentifier)"}</code> | <span className="api-desc">How many gifts one player can still send another. Full allowance if none have been sent.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the full and single count syncs.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends a joining remote player all their counts.</span> |
| <Link id="m-retrieve" /><code>{"void Retrieve(int fromIdentifier, int toIdentifier, int quantity)"}</code> | <span className="api-desc">Gives back allowance when a sent gift is taken back, up to the cap, and syncs the sender.</span> |
| <Link id="m-send" /><code>{"void Send(int fromIdentifier, int toIdentifier, int quantity)"}</code> | <span className="api-desc">Uses up allowance for a gift from one player to another and syncs the sender.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets the static `instance`.</span> |
| <Link id="m-sendtoremotefromplayer" /><code>{"private void SendToRemoteFromPlayer(int fromIdentifier, int toIdentifier)"}</code> | <span className="api-desc">Sends the sender their updated count for one receiver, unless the sender is the local player.</span> |
| <Link id="m-syncall-2" /><code>{"private void SyncAll("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends a player all their counts. Client: stores them under the logged-in user.</span> |
| <Link id="m-syncsingle-2" /><code>{"private void SyncSingle("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int toIdentifier)"}</code> | <span className="api-desc">Sends a player their count for one receiver. Client: stores it.</span> |

</details>
