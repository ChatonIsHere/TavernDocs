---
title: "ForestGenerator.TerrainNoise"
description: "One layer of simplex noise ForestGenerator adds to forest terrain height."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestGenerator.TerrainNoise

A **private class** in `Root.Township`, `Alta.Forests`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One layer of simplex noise `ForestGenerator` adds to forest terrain height.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`ForestGenerator`](/mod/game-api/types/alta-world-generation/forestgenerator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TerrainNoise()"}</code> | <span className="api-desc">Creates a `ForestGenerator.TerrainNoise` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-magnitude" /><code>{"float magnitude"}</code> | <span className="api-desc">Height of the noise at full strength.</span> |
| <Link id="m-pathfade" /><code>{"float pathFade"}</code> | <span className="api-desc">Distance from a path over which the noise fades in, so paths stay smooth.</span> |
| <Link id="m-scale" /><code>{"float scale"}</code> | <span className="api-desc">Size of the noise features.</span> |

## Used in

Members of other types that take, return or hold a `TerrainNoise`:

<div className="api-used-in">

[`ForestGenerator.terrainNoise`](/mod/game-api/types/alta-world-generation/forestgenerator#m-terrainnoise).

</div>
