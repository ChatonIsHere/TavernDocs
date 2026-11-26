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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entityspawnindex" /><code>{"private static uint entitySpawnIndex"}</code> | Despawn spawn index; clients ignore the message for an entity spawned later than this. |
| <Link id="m-isallowingwait" /><code>{"private static bool isAllowingWait"}</code> | Whether the message may wait. Sent, but not used when reading. |
| <Link id="m-isunload" /><code>{"private static bool isUnload"}</code> | True to unload the entity (out of range) rather than destroy it. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"static void Serialize("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the message. Client: destroys or unloads the entity (waiting for it to spawn if needed), unless it was respawned after this despawn. |
| <Link id="m-set" /><code>{"static void Set("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload, bool isAllowingWait)"}</code> | Server: fills the message for an entity, with its despawn spawn index. |
