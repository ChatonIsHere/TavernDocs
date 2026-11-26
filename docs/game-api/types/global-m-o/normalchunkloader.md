---
title: "NormalChunkLoader"
description: "Default IChunkLoader for a player, created by PlayerChunkManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NormalChunkLoader

A **class** in `Root.Township`, no namespace.

Default `IChunkLoader` for a player, created by `PlayerChunkManager`. Loads the standard set of chunks around the player's current chunk.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`IChunkLoader`](/game-api/types/global-i-l/ichunkloader)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NormalChunkLoader("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Creates a `NormalChunkLoader` from `player`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | The player this loader belongs to. Not used when picking chunks. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getchunkstoload" /><code>{"private void IChunkLoader.GetChunksToLoad("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk, Vector3 position, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> dynamicList, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> staticList)"}</code> | Fills the dynamic and static chunk sets with the normal neighbours of the current chunk. |

</details>
