---
title: "LiquidChunkVisuals.LiquidChunkData"
description: "One ingredient's floating chunk visuals in a liquid, tracked by LiquidChunkVisuals."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LiquidChunkVisuals.LiquidChunkData

A **private struct** in `Root.Township`, `Alta.Cooking`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One ingredient's floating chunk visuals in a liquid, tracked by `LiquidChunkVisuals`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Nested in** [`LiquidChunkVisuals`](/game-api/types/alta-crafting/liquidchunkvisuals)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentvisuals" /><code>{"Dictionary<int, List<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{">> CurrentVisuals { get; set; }"}</code> | The pooled chunk objects shown, keyed by liquid level. |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{" Definition { get; set; }"}</code> | The chunk visual definition these objects come from. |

## Used in

Members of other types that take, return or hold a `LiquidChunkData`:

[`LiquidChunkVisuals.displayingChunks`](/game-api/types/alta-crafting/liquidchunkvisuals#m-displayingchunks).
