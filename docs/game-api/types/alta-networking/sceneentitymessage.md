---
title: "SceneEntityMessage"
description: "Writes or reads which entity a message is about, by identifier."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SceneEntityMessage

A **static class** in `Root.Township`, `Alta.Networking`.

Writes or reads which entity a message is about, by identifier. Other messages such as `MoveMessage` and `DestroyMessage` start with it.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private static "}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity"}</code> | Backing field for `Entity`. |
| <Link id="m-entityidentifier" /><code>{"private static uint entityIdentifier"}</code> | Backing field for `EntityIdentifier`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity-2" /><code>{"static "}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" Entity { get; }"}</code> | The entity of the current message; on read, looked up in the current scene (null if not spawned). |
| <Link id="m-entityidentifier-2" /><code>{"static uint EntityIdentifier { get; }"}</code> | The identifier of the current message's entity, 0 for none. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"static void Serialize("}<Link to="/game-api/types/global-i-l/iconnection">{"IConnection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the identifier and, on read, looks up the entity. |
| <Link id="m-set" /><code>{"static void Set("}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity)"}</code> | Sets the entity for the next message. |
