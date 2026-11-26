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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Documented in** [Entity sync](/mod/game-api/networking/entity-sync#entitymessagehandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntityMessageHandler("}<Link to="/mod/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" networkEntity)"}</code> | <span className="api-desc">Creates an `EntityMessageHandler` from `networkEntity`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">Private: the entity these messages belong to.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Private: logger for send and handle failures.</span> |
| <Link id="m-messagehandlers" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{", "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{"> messageHandlers"}</code> | <span className="api-desc">Private: handler per message type.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearhandler" /><code><Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" ClearHandler("}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" message)"}</code> | <span className="api-desc">Removes the handler for a message type and returns it, or null if there was none.</span> |
| <Link id="m-handlemessage" /><code>{"void HandleMessage("}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Calls the handler for an incoming message. Unknown types and exceptions are logged, not thrown.</span> |
| <Link id="m-handlersgui" /><code>{"void HandlersGUI()"}</code> | <span className="api-desc">Empty in this build.</span> |
| <Link id="m-sendtochunks" /><code>{"void SendToChunks("}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel = null, params "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"[] except)"}</code> | <span className="api-desc">Sends a message to every player the entity is spawned for, minus `except`. On a client it also sends it to the server.</span> |
| <Link id="m-sendtoplayer" /><code>{"void SendToPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel = null)"}</code> | <span className="api-desc">Sends a message to one player. Does nothing (with a warning) if the entity is not sending messages.</span> |
| <Link id="m-sethandler" /><code>{"void SetHandler("}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler)"}</code> | <span className="api-desc">Sets the handler for a message type, replacing any other. A null handler is refused with an error.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hashandler" /><code>{"private bool HasHandler("}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" message)"}</code> | <span className="api-desc">Private: whether a handler is set for a message type.</span> |

</details>

## Used in

Members of other types that take, return or hold a `EntityMessageHandler`:

<div className="api-used-in">

[`INetworkEntity.MessageHandler`](/mod/game-api/types/alta-networking/inetworkentity#m-messagehandler), [`NetworkEntity.messageHandler`](/mod/game-api/types/alta-networking/networkentity#m-messagehandler), [`NetworkEntity.MessageHandler`](/mod/game-api/types/alta-networking/networkentity#m-messagehandler-2).

</div>
