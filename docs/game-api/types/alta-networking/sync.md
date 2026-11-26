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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`MethodSync`](/game-api/types/alta-networking/methodsync), [`ClassSerializer<T>`](/game-api/types/global-c-d/classserializer-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Sync("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/streammethod">{"StreamMethod"}</Link>{" handler)"}</code> |
| <Link id="m-ctor-2" /><code>{"Sync("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler = null)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaulthandler" /><code>{"private "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" defaultHandler"}</code> | Handler passed to the constructor. |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity"}</code> | The entity this sync belongs to. |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type"}</code> | The entity message type this sync uses. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"virtual "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" Handler { get; }"}</code> | The method that writes or reads this sync's data. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendtochunks" /><code>{"void SendToChunks(params "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"[] except)"}</code> | Sends the data to everyone in the entity's chunks, except the given players. |
| <Link id="m-sendtoplayer" /><code>{"void SendToPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Sends the data to one player. |
