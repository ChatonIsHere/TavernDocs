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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`ClientSync`](/mod/game-api/types/alta-networking/clientsync), [`ServerSync`](/mod/game-api/types/alta-networking/serversync)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BaseSync("}<Link to="/mod/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type)"}</code> | <span className="api-desc">Creates a `BaseSync` from `entity` and `type`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"protected readonly "}<Link to="/mod/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The entity the message belongs to.</span> |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | <span className="api-desc">Shared logger, set by the static constructors of `ClientSync` and `ServerSync`.</span> |
| <Link id="m-reader" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader"}</code> | <span className="api-desc">Method that reads the message.</span> |
| <Link id="m-type" /><code>{"protected readonly "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type"}</code> | <span className="api-desc">The entity message type.</span> |
| <Link id="m-writer" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer"}</code> | <span className="api-desc">Method that writes the message.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendtochunks" /><code>{"virtual void SendToChunks(params "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"[] except)"}</code> | <span className="api-desc">Sends the message to players in the entity's chunks, except the ones given.</span> |
| <Link id="m-messagehandler" /><code>{"protected virtual void MessageHandler("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Runs `reader` for a received message. Logs an error if there is none.</span> |
