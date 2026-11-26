---
title: "EntityMessageHandler"
description: "Routes an entity's network messages: sends them to the players the entity is spawned for, and calls the registered handler for each incoming EntityMessageType."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntityMessageHandler

A **class** in `Root.Township`, `Alta.Networking`.

Routes an entity's network messages: sends them to the players the entity is spawned for, and calls the registered handler for each incoming `EntityMessageType`. Get it from `NetworkEntity.MessageHandler`; `MethodSync` uses it underneath.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Documented in** [Entity sync](/game-api/networking/entity-sync#entitymessagehandler)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EntityMessageHandler("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" networkEntity)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity"}</code> | Private: the entity these messages belong to. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Private: logger for send and handle failures. |
| <Link id="m-messagehandlers" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{", "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{"> messageHandlers"}</code> | Private: handler per message type. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearhandler" /><code><Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" ClearHandler("}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" message)"}</code> | Removes the handler for a message type and returns it, or null if there was none. |
| <Link id="m-handlemessage" /><code>{"void HandleMessage("}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Calls the handler for an incoming message. Unknown types and exceptions are logged, not thrown. |
| <Link id="m-handlersgui" /><code>{"void HandlersGUI()"}</code> | Empty in this build. |
| <Link id="m-sendtochunks" /><code>{"void SendToChunks("}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel = null, params "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"[] except)"}</code> | Sends a message to every player the entity is spawned for, minus `except`. On a client it also sends it to the server. |
| <Link id="m-sendtoplayer" /><code>{"void SendToPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel = null)"}</code> | Sends a message to one player. Does nothing (with a warning) if the entity is not sending messages. |
| <Link id="m-sethandler" /><code>{"void SetHandler("}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler)"}</code> | Sets the handler for a message type, replacing any other. A null handler is refused with an error. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hashandler" /><code>{"private bool HasHandler("}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" message)"}</code> | Private: whether a handler is set for a message type. |

</details>

## Used in

Members of other types that take, return or hold a `EntityMessageHandler`:

[`INetworkEntity.MessageHandler`](/game-api/types/alta-networking/inetworkentity#m-messagehandler), [`NetworkEntity.messageHandler`](/game-api/types/alta-networking/networkentity#m-messagehandler), [`NetworkEntity.MessageHandler`](/game-api/types/alta-networking/networkentity#m-messagehandler-2).
