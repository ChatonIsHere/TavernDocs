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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Derived types** [`PlayerEntitySyncServer`](/mod/game-api/types/alta-world/playerentitysyncserver)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerEntitySync("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Creates a `PlayerEntitySync` from `chunk`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"protected "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | <span className="api-desc">The chunk this syncs.</span> |
| <Link id="m-syncloaded" /><code>{"protected "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncLoaded"}</code> | <span className="api-desc">Method sync on the chunk entity using the `ChunkStateChanged` message.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clientload" /><code>{"private void ClientLoad("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isLoaded)"}</code> | <span className="api-desc">Reads or writes the loaded flag. On a client, sets the chunk's `IsForceLoaded` from it.</span> |

</details>
