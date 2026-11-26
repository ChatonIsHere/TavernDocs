---
title: "PlayerEntitySync"
description: "Syncs a chunk's force-loaded state from the server to clients through the chunk's entity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEntitySync

A **class** in `Root.Township`, `Alta.Chunks`.

Syncs a chunk's force-loaded state from the server to clients through the chunk's entity. Only set up for chunks that auto sync.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Derived types** [`PlayerEntitySyncServer`](/game-api/types/alta-world/playerentitysyncserver)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerEntitySync("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"protected "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | The chunk this syncs. |
| <Link id="m-syncloaded" /><code>{"protected "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncLoaded"}</code> | Method sync on the chunk entity using the `ChunkStateChanged` message. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clientload" /><code>{"private void ClientLoad("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isLoaded)"}</code> | Reads or writes the loaded flag. On a client, sets the chunk's `IsForceLoaded` from it. |

</details>
