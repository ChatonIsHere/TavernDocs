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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`ForestGenerator`](/game-api/types/alta-world-generation/forestgenerator)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TerrainNoise()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-magnitude" /><code>{"float magnitude"}</code> | Height of the noise at full strength. |
| <Link id="m-pathfade" /><code>{"float pathFade"}</code> | Distance from a path over which the noise fades in, so paths stay smooth. |
| <Link id="m-scale" /><code>{"float scale"}</code> | Size of the noise features. |

## Used in

Members of other types that take, return or hold a `TerrainNoise`:

[`ForestGenerator.terrainNoise`](/game-api/types/alta-world-generation/forestgenerator#m-terrainnoise).
