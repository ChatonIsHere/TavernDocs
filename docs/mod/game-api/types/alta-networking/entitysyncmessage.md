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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-embedded" /><code>{"private static uint embedded"}</code> | <span className="api-desc">The entity's embedded id.</span> |
| <Link id="m-embeddedcount" /><code>{"private static uint embeddedCount"}</code> | <span className="api-desc">Number of embedded entities on the prefab (sent in 8 bits).</span> |
| <Link id="m-identifier" /><code>{"private static uint identifier"}</code> | <span className="api-desc">The entity's identifier.</span> |
| <Link id="m-isprefab" /><code>{"private static bool isPrefab"}</code> | <span className="api-desc">Whether the entity comes from a prefab, so embedded ids follow.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"static void Serialize("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the ids; on read passes them to the network scene manager's `HandleSync`.</span> |
| <Link id="m-set" /><code>{"static void Set("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Fills the message from an entity, copying embedded entity ids into `TemporaryUint256.array`.</span> |
