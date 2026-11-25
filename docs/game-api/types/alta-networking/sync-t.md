---
title: "Sync<T>"
description: "abstract class Sync<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Sync&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Derived types** [`MethodSyncClass<T>`](/game-api/types/alta-networking/methodsyncclass-t), [`MethodSyncStruct<T>`](/game-api/types/alta-networking/methodsyncstruct-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Sync("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"abstract "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" Handler { get; }"}</code> |  |
| <Link id="m-value" /><code>{"T Value { get; protected set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendtochunks" /><code>{"void SendToChunks(T value, params "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"[] except)"}</code> |  |
| <Link id="m-sendtoplayer" /><code>{"void SendToPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, T value)"}</code> |  |
