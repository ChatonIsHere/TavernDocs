---
title: "IChunkLoader"
description: "Picks which chunks to load around a position."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IChunkLoader

An **interface** in `Root.Township`, no namespace.

Picks which chunks to load around a position. `NormalChunkLoader` implements it.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`NormalChunkLoader`](/game-api/types/global-m-o/normalchunkloader), [`OptimisedChunkLoader`](/game-api/types/global-m-o/optimisedchunkloader)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getchunkstoload" /><code>{"void GetChunksToLoad("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk, Vector3 position, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> dynamicList, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> staticList)"}</code> | Fills the dynamic and static chunk sets to load for the current location chunk and position. |

## Used in

Members of other types that take, return or hold a `IChunkLoader`:

[`PlayerChunkManager.chunkLoader`](/game-api/types/global-p/playerchunkmanager#m-chunkloader).
