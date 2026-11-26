---
title: "OptimisedChunkLoader"
description: "An IChunkLoader for a player that picks which chunks to keep loaded around them, using the streaming load and unload bounds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OptimisedChunkLoader

A **class** in `Root.Township`, no namespace.

An `IChunkLoader` for a player that picks which chunks to keep loaded around them, using the streaming load and unload bounds. Server-side, one per player.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`IChunkLoader`](/game-api/types/global-i-l/ichunkloader)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OptimisedChunkLoader("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | The player this loader picks chunks for. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getchunkstoload" /><code>{"private void IChunkLoader.GetChunksToLoad("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk, Vector3 position, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> dynamicList, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> staticList)"}</code> | Fills the lists with chunks inside the load bounds (or just the current cave chunk), forced neighbours, and already-loaded chunks still inside the unload bounds. |

</details>
