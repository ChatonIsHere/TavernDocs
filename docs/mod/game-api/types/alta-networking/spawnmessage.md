---
title: "SpawnMessage"
description: "The network message that spawns a prefab on clients: prefab hash, entity and embedded ids, spawn index, and optionally chunk, position, rotation and scale."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnMessage

A **static class** in `Root.Township`, `Alta.Networking`.

The network message that spawns a prefab on clients: prefab hash, entity and embedded ids, spawn index, and optionally chunk, position, rotation and scale.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Fields

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | <span className="api-desc">The chunk the entity is in.</span> |
| <Link id="m-embeddedcount" /><code>{"private static uint embeddedCount"}</code> | <span className="api-desc">Number of embedded entities.</span> |
| <Link id="m-entity" /><code>{"private static "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The entity being spawned.</span> |
| <Link id="m-entityidentifier" /><code>{"private static uint entityIdentifier"}</code> | <span className="api-desc">The entity's identifier.</span> |
| <Link id="m-entityspawnindex" /><code>{"private static uint entitySpawnIndex"}</code> | <span className="api-desc">Spawn index, used to ignore destroy messages for an older spawn.</span> |
| <Link id="m-issendingscale" /><code>{"private static bool isSendingScale"}</code> | <span className="api-desc">Whether a scale is sent.</span> |
| <Link id="m-issendingtransform" /><code>{"private static bool isSendingTransform"}</code> | <span className="api-desc">Whether position and rotation are sent.</span> |
| <Link id="m-lasttime" /><code>{"private static float lastTime"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger; logs which prefab failed when spawning throws.</span> |
| <Link id="m-maximumscale" /><code>{"private const float MaximumScale"}</code> | <span className="api-desc">Largest scale that can be sent (10.23).</span> |
| <Link id="m-position" /><code>{"private static Vector3 position"}</code> | <span className="api-desc">Position sent with the chunk.</span> |
| <Link id="m-prefabhash" /><code>{"private static uint prefabHash"}</code> | <span className="api-desc">The prefab hash (sent in 16 bits).</span> |
| <Link id="m-readcount" /><code>{"private static int readCount"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-rotation" /><code>{"private static Quaternion rotation"}</code> | <span className="api-desc">Rotation, compressed.</span> |
| <Link id="m-scale" /><code>{"private static float scale"}</code> | <span className="api-desc">Uniform scale.</span> |
| <Link id="m-scalebits" /><code>{"private const int ScaleBits"}</code> | <span className="api-desc">Bits used for scale (10).</span> |
| <Link id="m-transformset" /><code>{"private static TransformSave transformSet"}</code> | <span className="api-desc">Reused transform passed to the spawner.</span> |
| <Link id="m-writecount" /><code>{"private static int writeCount"}</code> | <span className="api-desc">Unused.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"static void Serialize("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the spawn data; on read spawns the prefab through the scene spawner and updates its spawn index.</span> |
| <Link id="m-set" /><code>{"static void Set("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | <span className="api-desc">Server: fills the message from a spawned prefab; transform only if it syncs position, scale only if not 1.</span> |
