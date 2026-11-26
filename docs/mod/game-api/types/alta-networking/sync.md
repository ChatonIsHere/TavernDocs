---
title: "Sync"
description: "Base for an entity sync with one handler method that both writes and reads."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Sync

An **abstract class** in `Root.Township`, `Alta.Networking`.

Base for an entity sync with one handler method that both writes and reads. Registers the handler with the entity's message handler for one message type.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`MethodSync`](/mod/game-api/types/alta-networking/methodsync), [`ClassSerializer<T>`](/mod/game-api/types/global-c-d/classserializer-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Sync("}<Link to="/mod/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type, "}<Link to="/mod/game-api/types/alta-networking/streammethod">{"StreamMethod"}</Link>{" handler)"}</code> | <span className="api-desc">Creates a `Sync` from `entity`, `type` and `handler`.</span> |
| <Link id="m-ctor-2" /><code>{"Sync("}<Link to="/mod/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type, "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler = null)"}</code> | <span className="api-desc">Creates a `Sync` from `entity`, `type` and `handler`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaulthandler" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" defaultHandler"}</code> | <span className="api-desc">Handler passed to the constructor.</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The entity this sync belongs to.</span> |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type"}</code> | <span className="api-desc">The entity message type this sync uses.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"virtual "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" Handler { get; }"}</code> | <span className="api-desc">The method that writes or reads this sync's data.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendtochunks" /><code>{"void SendToChunks(params "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"[] except)"}</code> | <span className="api-desc">Sends the data to everyone in the entity's chunks, except the given players.</span> |
| <Link id="m-sendtoplayer" /><code>{"void SendToPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Sends the data to one player.</span> |
