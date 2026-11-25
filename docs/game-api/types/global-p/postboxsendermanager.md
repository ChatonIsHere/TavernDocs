---
title: "PostBoxSenderManager"
description: "Tracks how many items one player may still send another (GetAvailableQuantity(from, to))."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PostBoxSenderManager

A **class** in `Root.Township`, no namespace.

Tracks how many items one player may still send another (`GetAvailableQuantity(from, to)`).

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`PerPlayerSendingCount`](/game-api/types/global-p/postboxsendermanager-perplayersendingcount)
- **Documented in** [Trading](/game-api/game-systems/trading)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PostBoxSenderManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-p/postboxsendermanager">{"PostBoxSenderManager"}</Link>{" instance"}</code> |  |
| <Link id="m-giftsperplayer" /><code>{"private int giftsPerPlayer"}</code> |  |
| <Link id="m-perplayercounter" /><code>{"private Dictionary<int, "}<Link to="/game-api/types/global-p/postboxsendermanager-perplayersendingcount">{"PostBoxSenderManager.PerPlayerSendingCount"}</Link>{"> perPlayerCounter"}</code> |  |
| <Link id="m-syncall" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncAll"}</code> |  |
| <Link id="m-syncsingle" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncSingle"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-giftsperplayer-2" /><code>{"int GiftsPerPlayer { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getavailablequantity" /><code>{"int GetAvailableQuantity(int fromIdentifier, int toIdentifier)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-retrieve" /><code>{"void Retrieve(int fromIdentifier, int toIdentifier, int quantity)"}</code> |  |
| <Link id="m-send" /><code>{"void Send(int fromIdentifier, int toIdentifier, int quantity)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-sendtoremotefromplayer" /><code>{"private void SendToRemoteFromPlayer(int fromIdentifier, int toIdentifier)"}</code> |  |
| <Link id="m-syncall-2" /><code>{"private void SyncAll("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncsingle-2" /><code>{"private void SyncSingle("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int toIdentifier)"}</code> |  |
