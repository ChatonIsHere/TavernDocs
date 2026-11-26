---
title: "ChunksToSync"
description: "Message the server sends a player's PlayerChunkManager with the chunk they are in and every chunk loaded for them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunksToSync

A **internal struct** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Message the server sends a player's `PlayerChunkManager` with the chunk they are in and every chunk loaded for them. Up to 127 loaded chunks.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentchunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" currentChunk"}</code> | The chunk the player is in. |
| <Link id="m-loadedchunks" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"[] loadedChunks"}</code> | Chunks loaded for the player. On receipt they are force loaded and any others are unloaded. |

## Used in

Members of other types that take, return or hold a `ChunksToSync`:

[`PlayerChunkManager.HandleChunkSync`](/game-api/types/global-p/playerchunkmanager#m-handlechunksync), [`PlayerChunkManager.syncChunks`](/game-api/types/global-p/playerchunkmanager#m-syncchunks).
