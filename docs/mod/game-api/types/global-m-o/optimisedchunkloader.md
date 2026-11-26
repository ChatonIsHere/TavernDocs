---
title: "OptimisedChunkLoader"
description: "An IChunkLoader for a player that picks which chunks to keep loaded around them, using the streaming load and unload bounds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OptimisedChunkLoader

A **class** in `Root.Township`, the global namespace.

An `IChunkLoader` for a player that picks which chunks to keep loaded around them, using the streaming load and unload bounds. Server-side, one per player.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`IChunkLoader`](/mod/game-api/types/global-i-l/ichunkloader)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OptimisedChunkLoader("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Creates an `OptimisedChunkLoader` from `player`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | <span className="api-desc">The player this loader picks chunks for.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getchunkstoload" /><code>{"private void IChunkLoader.GetChunksToLoad("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk, Vector3 position, HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> dynamicList, HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> staticList)"}</code> | <span className="api-desc">Fills the lists with chunks inside the load bounds (or just the current cave chunk), forced neighbours, and already-loaded chunks still inside the unload bounds.</span> |

</details>
