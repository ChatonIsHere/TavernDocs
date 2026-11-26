---
title: "DebugLoadMarker.IChunkLoader"
description: "Picks which chunks a DebugLoadMarker keeps loaded around its entity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugLoadMarker.IChunkLoader

An **interface** in `Root.Township`, `Alta.QATools`.

Picks which chunks a `DebugLoadMarker` keeps loaded around its entity. There is an optimised version for simple servers and a normal one.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`DebugLoadMarker`](/mod/game-api/types/alta-console/debugloadmarker)
- **Derived types** [`DebugLoadMarker.NormalChunkLoader`](/mod/game-api/types/alta-console/debugloadmarker-normalchunkloader), [`DebugLoadMarker.OptimisedChunkLoader`](/mod/game-api/types/alta-console/debugloadmarker-optimisedchunkloader)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getchunkstoload" /><code>{"void GetChunksToLoad("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk, Vector3 position, HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> dynamicList)"}</code> | <span className="api-desc">Adds the chunks to load around a position in the current chunk to the given set.</span> |

## Used in

Members of other types that take, return or hold a `IChunkLoader`:

<div className="api-used-in">

[`DebugLoadMarker.chunkLoader`](/mod/game-api/types/alta-console/debugloadmarker#m-chunkloader).

</div>
