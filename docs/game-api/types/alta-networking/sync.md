---
title: "Sync"
description: "abstract class Sync in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Sync

An **abstract class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`MethodSync`](/game-api/types/alta-networking/methodsync), [`ClassSerializer<T>`](/game-api/types/global-c-d/classserializer-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Sync("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/streammethod">{"StreamMethod"}</Link>{" handler)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"Sync("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler = null)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-defaulthandler" /><code>{"private "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" defaultHandler"}</code> |  |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"virtual "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" Handler { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendtochunks" /><code>{"void SendToChunks(params "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"[] except)"}</code> |  |
| <Link id="m-sendtoplayer" /><code>{"void SendToPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
