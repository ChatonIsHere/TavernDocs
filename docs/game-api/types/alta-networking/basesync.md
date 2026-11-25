---
title: "BaseSync"
description: "Base of the MethodSync family."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BaseSync

An **abstract class** in `Root.Township`, `Alta.Networking`.

Base of the `MethodSync` family. Registers a handler for one entity message type and sends that message to everyone in the entity's chunks.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`ClientSync`](/game-api/types/alta-networking/clientsync), [`ServerSync`](/game-api/types/alta-networking/serversync)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BaseSync("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"protected readonly "}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity"}</code> | The entity the message belongs to. |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |  |
| <Link id="m-reader" /><code>{"protected "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader"}</code> | Method that reads the message. |
| <Link id="m-type" /><code>{"protected readonly "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type"}</code> | The entity message type. |
| <Link id="m-writer" /><code>{"protected "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer"}</code> | Method that writes the message. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendtochunks" /><code>{"virtual void SendToChunks(params "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"[] except)"}</code> | Sends the message to players in the entity's chunks, except the ones given. |
| <Link id="m-messagehandler" /><code>{"protected virtual void MessageHandler("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Runs `reader` for a received message. Logs an error if there is none. |
