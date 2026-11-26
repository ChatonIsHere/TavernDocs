---
title: "ITerrainModifier"
description: "A node map modifier that also changes forest terrain height and splat at each point, given the nearest path."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITerrainModifier

An **interface** in `Root.Township`, `Alta.Forests`.

A node map modifier that also changes forest terrain height and splat at each point, given the nearest path.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`CutoutPathModifier`](/game-api/types/alta-world-generation/cutoutpathmodifier)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifyheight" /><code>{"void ModifyHeight("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world-generation/forestgenerator-nearestinfo">{"ForestGenerator.NearestInfo"}</Link>{" nearest, Vector2 position, ref float height)"}</code> | Changes the terrain height at a point. |
| <Link id="m-modifysplat" /><code>{"void ModifySplat("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/game-api/types/alta-world-generation/forestgenerator-nearestinfo">{"ForestGenerator.NearestInfo"}</Link>{" info, Vector2 position, ref "}<Link to="/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{" data)"}</code> | Changes the splat data at a point. |

## Used in

Members of other types that take, return or hold a `ITerrainModifier`:

[`ForestGenerator.terrainModifiers`](/game-api/types/alta-world-generation/forestgenerator#m-terrainmodifiers).
