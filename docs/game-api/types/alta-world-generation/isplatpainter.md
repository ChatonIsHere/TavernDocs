---
title: "ISplatPainter"
description: "A component under a ForestGenerator that paints splat (terrain texture) data for each terrain point, such as SplatPainter and RiverGenerator."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISplatPainter

An **interface** in `Root.Township`, `Alta.Forests`.

A component under a `ForestGenerator` that paints splat (terrain texture) data for each terrain point, such as `SplatPainter` and `RiverGenerator`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`RiverGenerator`](/game-api/types/alta-world-generation/rivergenerator), [`SplatPainter`](/game-api/types/alta-world-generation/splatpainter)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-paint" /><code>{"void Paint("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, Random rowRandom, "}<Link to="/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access, int x, int z, Vector2 position, ref "}<Link to="/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{" data)"}</code> | Changes the splat data at one terrain point. Called from worker tasks that each paint one block, with a random seeded per block. |

## Used in

Members of other types that take, return or hold a `ISplatPainter`:

[`ForestGenerator.splatPainters`](/game-api/types/alta-world-generation/forestgenerator#m-splatpainters).
