---
title: "BaseSync"
description: "abstract class BaseSync in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BaseSync

An **abstract class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`ClientSync`](/game-api/types/alta-networking/clientsync), [`ServerSync`](/game-api/types/alta-networking/serversync)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected BaseSync("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"protected readonly "}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |  |
| <Link id="m-reader" /><code>{"protected "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" reader"}</code> |  |
| <Link id="m-type" /><code>{"protected readonly "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type"}</code> |  |
| <Link id="m-writer" /><code>{"protected "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" writer"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendtochunks" /><code>{"virtual void SendToChunks(params "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"[] except)"}</code> |  |
| <Link id="m-messagehandler" /><code>{"protected virtual void MessageHandler("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
