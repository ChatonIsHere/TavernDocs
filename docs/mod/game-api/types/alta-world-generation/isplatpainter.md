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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`RiverGenerator`](/mod/game-api/types/alta-world-generation/rivergenerator), [`SplatPainter`](/mod/game-api/types/alta-world-generation/splatpainter)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-paint" /><code>{"void Paint("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, Random rowRandom, "}<Link to="/mod/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access, int x, int z, Vector2 position, ref "}<Link to="/mod/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{" data)"}</code> | <span className="api-desc">Changes the splat data at one terrain point. Called from worker tasks that each paint one block, with a random seeded per block.</span> |

## Used in

Members of other types that take, return or hold a `ISplatPainter`:

<div className="api-used-in">

[`ForestGenerator.splatPainters`](/mod/game-api/types/alta-world-generation/forestgenerator#m-splatpainters).

</div>
