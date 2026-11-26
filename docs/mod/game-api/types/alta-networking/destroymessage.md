---
title: "DestroyMessage"
description: "The network message that tells clients to destroy or unload an entity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DestroyMessage

A **static class** in `Root.Township`, `Alta.Networking`.

The network message that tells clients to destroy or unload an entity. Static fields hold one message's data between `Set` and `Serialize`.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entityspawnindex" /><code>{"private static uint entitySpawnIndex"}</code> | <span className="api-desc">Despawn spawn index; clients ignore the message for an entity spawned later than this.</span> |
| <Link id="m-isallowingwait" /><code>{"private static bool isAllowingWait"}</code> | <span className="api-desc">Whether the message may wait. Sent, but not used when reading.</span> |
| <Link id="m-isunload" /><code>{"private static bool isUnload"}</code> | <span className="api-desc">True to unload the entity (out of range) rather than destroy it.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"static void Serialize("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the message. Client: destroys or unloads the entity (waiting for it to spawn if needed), unless it was respawned after this despawn.</span> |
| <Link id="m-set" /><code>{"static void Set("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload, bool isAllowingWait)"}</code> | <span className="api-desc">Server: fills the message for an entity, with its despawn spawn index.</span> |
