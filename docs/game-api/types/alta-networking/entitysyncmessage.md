---
title: "EntitySyncMessage"
description: "Network message that syncs a scene entity's identifier, embedded id and, for prefabs, the identifiers of its embedded entities."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EntitySyncMessage

A **static class** in `Root.Township`, `Alta.Networking`.

Network message that syncs a scene entity's identifier, embedded id and, for prefabs, the identifiers of its embedded entities. On read the scene manager matches them up.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-embedded" /><code>{"private static uint embedded"}</code> | The entity's embedded id. |
| <Link id="m-embeddedcount" /><code>{"private static uint embeddedCount"}</code> | Number of embedded entities on the prefab (sent in 8 bits). |
| <Link id="m-identifier" /><code>{"private static uint identifier"}</code> | The entity's identifier. |
| <Link id="m-isprefab" /><code>{"private static bool isPrefab"}</code> | Whether the entity comes from a prefab, so embedded ids follow. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"static void Serialize("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the ids; on read passes them to the network scene manager's `HandleSync`. |
| <Link id="m-set" /><code>{"static void Set("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Fills the message from an entity, copying embedded entity ids into `TemporaryUint256.array`. |
