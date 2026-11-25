---
title: "EntityMessageHandler"
description: "If an entity message arrives on a client before that entity has spawned there, the game keeps a copy and handles it when it spawns (Spawner.WaitForSpa"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntityMessageHandler

A **class** in `Root.Township`, `Alta.Networking`.

If an entity message arrives on a client before that entity has spawned there, the game keeps a copy and handles it when it spawns (`Spawner.WaitForSpawn`).

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Documented in** [Entity sync](/game-api/networking/entity-sync#entitymessagehandler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EntityMessageHandler("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" networkEntity)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-messagehandlers" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{", "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{"> messageHandlers"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearhandler" /><code><Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" ClearHandler("}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" message)"}</code> |  |
| <Link id="m-handlemessage" /><code>{"void HandleMessage("}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-handlersgui" /><code>{"void HandlersGUI()"}</code> |  |
| <Link id="m-sendtochunks" /><code>{"void SendToChunks("}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel = null, params "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"[] except)"}</code> |  |
| <Link id="m-sendtoplayer" /><code>{"void SendToPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel = null)"}</code> |  |
| <Link id="m-sethandler" /><code>{"void SetHandler("}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" messageType, "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler)"}</code> |  |
| <Link id="m-hashandler" /><code>{"private bool HasHandler("}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" message)"}</code> |  |

## Used in

Members of other types that take, return or hold a `EntityMessageHandler`:

[`INetworkEntity.MessageHandler`](/game-api/types/alta-networking/inetworkentity#m-messagehandler), [`NetworkEntity.messageHandler`](/game-api/types/alta-networking/networkentity#m-messagehandler), [`NetworkEntity.MessageHandler`](/game-api/types/alta-networking/networkentity#m-messagehandler-2).
