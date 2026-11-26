---
title: "ChunksToSync"
description: "Message the server sends a player's PlayerChunkManager with the chunk they are in and every chunk loaded for them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunksToSync

A **internal struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Message the server sends a player's `PlayerChunkManager` with the chunk they are in and every chunk loaded for them. Up to 127 loaded chunks.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentchunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" currentChunk"}</code> | <span className="api-desc">The chunk the player is in.</span> |
| <Link id="m-loadedchunks" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"[] loadedChunks"}</code> | <span className="api-desc">Chunks loaded for the player. On receipt they are force loaded and any others are unloaded.</span> |

## Used in

Members of other types that take, return or hold a `ChunksToSync`:

<div className="api-used-in">

[`PlayerChunkManager.HandleChunkSync`](/mod/game-api/types/global-p/playerchunkmanager#m-handlechunksync), [`PlayerChunkManager.syncChunks`](/mod/game-api/types/global-p/playerchunkmanager#m-syncchunks).

</div>
