---
title: "RejectDockArea"
description: "An automatic dock area that moves rejected items to a set spot and plays an effect there."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RejectDockArea

A **class** in `Root.Township`, `Alta.Inventory`.

An automatic dock area that moves rejected items to a set spot and plays an effect there. The server moves the item and syncs the effect to clients.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`AutomaticDockArea`](/mod/game-api/types/alta-items/automaticdockarea), [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RejectDockArea()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">Backing field for `Entity`.</span> |
| <Link id="m-rejecteffect" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformhandler">{"TransformHandler"}</Link>{" rejectEffect"}</code> | <span className="api-desc">Effect played at the reject position.</span> |
| <Link id="m-rejectposition" /><code>{"private Transform rejectPosition"}</code> | <span className="api-desc">Where rejected items are moved to.</span> |
| <Link id="m-synceffect" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<uint> syncEffect"}</code> | <span className="api-desc">Method sync carrying the rejected pickup's identifier.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The network entity this area syncs through.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handlereject" /><code>{"protected override void HandleReject("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Server: moves a rejected pickup to `rejectPosition`, plays the effect and tells clients.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.Initialize()"}</code> | <span className="api-desc">Creates the effect method sync.</span> |
| <Link id="m-initializeasserver" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-onconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-ondisconnected" /><code>{"private void Alta.Networking.INetworkEntityBehaviour.OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-playeffect" /><code>{"private void PlayEffect()"}</code> | <span className="api-desc">Plays the reject effect at `rejectPosition` unless headless.</span> |
| <Link id="m-synceffect-2" /><code>{"private void SyncEffect("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, uint pickupIdentifier)"}</code> | <span className="api-desc">Sends the rejected pickup's identifier; remote clients move that pickup and play the effect.</span> |

</details>
