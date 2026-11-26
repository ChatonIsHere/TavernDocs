---
title: "DebugLoadMarker.OptimisedChunkLoader"
description: "Chunk loader for DebugLoadMarker on a simple server: loads by the streaming settings' load bounds and keeps loaded chunks inside the unload bounds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugLoadMarker.OptimisedChunkLoader

A **private class** in `Root.Township`, `Alta.QATools`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Chunk loader for `DebugLoadMarker` on a simple server: loads by the streaming settings' load bounds and keeps loaded chunks inside the unload bounds.

- **Listed in** [Console, logging and analytics](/game-api/types/alta-console)
- **Nested in** [`DebugLoadMarker`](/game-api/types/alta-console/debugloadmarker)
- **Inherits or implements** [`DebugLoadMarker.IChunkLoader`](/game-api/types/alta-console/debugloadmarker-ichunkloader)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OptimisedChunkLoader(HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> currentLoaded)"}</code> | Creates a `DebugLoadMarker.OptimisedChunkLoader` from `currentLoaded`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentloaded" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> currentLoaded"}</code> | The marker's set of currently loaded chunks, used to keep ones inside the unload bounds. |

</details>

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getchunkstoload" /><code>{"private void Alta.QATools.DebugLoadMarker.IChunkLoader.GetChunksToLoad("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk, Vector3 position, HashSet<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> dynamicList)"}</code> | In the overworld, adds location chunks inside the load bounds; elsewhere, the current chunk and its forced neighbours. Keeps loaded chunks still inside the unload bounds. |

</details>
