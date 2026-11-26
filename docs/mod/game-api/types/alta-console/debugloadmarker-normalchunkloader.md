---
title: "DebugLoadMarker.NormalChunkLoader"
description: "Chunk loader for DebugLoadMarker that uses the current chunk's normal dynamic load strength."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DebugLoadMarker.NormalChunkLoader

A **private class** in `Root.Township`, `Alta.QATools`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Chunk loader for `DebugLoadMarker` that uses the current chunk's normal dynamic load strength.

- **Listed in** [Console, logging and analytics](/mod/game-api/types/alta-console)
- **Nested in** [`DebugLoadMarker`](/mod/game-api/types/alta-console/debugloadmarker)
- **Inherits or implements** [`DebugLoadMarker.IChunkLoader`](/mod/game-api/types/alta-console/debugloadmarker-ichunkloader)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NormalChunkLoader()"}</code> | <span className="api-desc">Creates a `DebugLoadMarker.NormalChunkLoader` with default values.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getchunkstoload" /><code>{"private void Alta.QATools.DebugLoadMarker.IChunkLoader.GetChunksToLoad("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" currentChunk, Vector3 position, HashSet<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> dynamicList)"}</code> | <span className="api-desc">Adds the chunks reachable from the current chunk within its `DynamicLoadStrength`.</span> |

</details>
