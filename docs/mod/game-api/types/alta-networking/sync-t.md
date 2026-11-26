---
title: "Sync<T>"
description: "Base for an entity sync that sends a value of type T."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Sync&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Networking`.

Base for an entity sync that sends a value of type `T`. Registers its handler with the entity's message handler for one message type.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Derived types** [`MethodSyncClass<T>`](/mod/game-api/types/alta-networking/methodsyncclass-t), [`MethodSyncStruct<T>`](/mod/game-api/types/alta-networking/methodsyncstruct-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Sync("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type)"}</code> | <span className="api-desc">Creates a `Sync` from `entity` and `type`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The entity this sync belongs to.</span> |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type"}</code> | <span className="api-desc">The entity message type this sync uses.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" Handler { get; }"}</code> | <span className="api-desc">The method that writes or reads the value; set by the subclass.</span> |
| <Link id="m-value" /><code>{"T Value { get; protected set; }"}</code> | <span className="api-desc">The value last sent.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendtochunks" /><code>{"void SendToChunks(T value, params "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"[] except)"}</code> | <span className="api-desc">Stores the value and sends it to everyone in the entity's chunks, except the given players.</span> |
| <Link id="m-sendtoplayer" /><code>{"void SendToPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, T value)"}</code> | <span className="api-desc">Stores the value and sends it to one player.</span> |
