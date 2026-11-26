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

<details>
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | The chunk the entity is in. |
| <Link id="m-embeddedcount" /><code>{"private static uint embeddedCount"}</code> | Number of embedded entities. |
| <Link id="m-entity" /><code>{"private static "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | The entity being spawned. |
| <Link id="m-entityidentifier" /><code>{"private static uint entityIdentifier"}</code> | The entity's identifier. |
| <Link id="m-entityspawnindex" /><code>{"private static uint entitySpawnIndex"}</code> | Spawn index, used to ignore destroy messages for an older spawn. |
| <Link id="m-issendingscale" /><code>{"private static bool isSendingScale"}</code> | Whether a scale is sent. |
| <Link id="m-issendingtransform" /><code>{"private static bool isSendingTransform"}</code> | Whether position and rotation are sent. |
| <Link id="m-lasttime" /><code>{"private static float lastTime"}</code> | Unused. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger; logs which prefab failed when spawning throws. |
| <Link id="m-maximumscale" /><code>{"private const float MaximumScale"}</code> | Largest scale that can be sent (10.23). |
| <Link id="m-position" /><code>{"private static Vector3 position"}</code> | Position sent with the chunk. |
| <Link id="m-prefabhash" /><code>{"private static uint prefabHash"}</code> | The prefab hash (sent in 16 bits). |
| <Link id="m-readcount" /><code>{"private static int readCount"}</code> | Unused. |
| <Link id="m-rotation" /><code>{"private static Quaternion rotation"}</code> | Rotation, compressed. |
| <Link id="m-scale" /><code>{"private static float scale"}</code> | Uniform scale. |
| <Link id="m-scalebits" /><code>{"private const int ScaleBits"}</code> | Bits used for scale (10). |
| <Link id="m-transformset" /><code>{"private static TransformSave transformSet"}</code> | Reused transform passed to the spawner. |
| <Link id="m-writecount" /><code>{"private static int writeCount"}</code> | Unused. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"static void Serialize("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the spawn data; on read spawns the prefab through the scene spawner and updates its spawn index. |
| <Link id="m-set" /><code>{"static void Set("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | Server: fills the message from a spawned prefab; transform only if it syncs position, scale only if not 1. |
