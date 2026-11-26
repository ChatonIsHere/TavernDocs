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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private static "}<Link to="/mod/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">Backing field for `Entity`.</span> |
| <Link id="m-entityidentifier" /><code>{"private static uint entityIdentifier"}</code> | <span className="api-desc">Backing field for `EntityIdentifier`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The entity of the current message; on read, looked up in the current scene (null if not spawned).</span> |
| <Link id="m-entityidentifier-2" /><code>{"static uint EntityIdentifier { get; }"}</code> | <span className="api-desc">The identifier of the current message's entity, 0 for none.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"static void Serialize("}<Link to="/mod/game-api/types/global-i-l/iconnection">{"IConnection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the identifier and, on read, looks up the entity.</span> |
| <Link id="m-set" /><code>{"static void Set("}<Link to="/mod/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Sets the entity for the next message.</span> |
