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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`CutoutPathModifier`](/mod/game-api/types/alta-world-generation/cutoutpathmodifier)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modifyheight" /><code>{"void ModifyHeight("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator-nearestinfo">{"ForestGenerator.NearestInfo"}</Link>{" nearest, Vector2 position, ref float height)"}</code> | <span className="api-desc">Changes the terrain height at a point.</span> |
| <Link id="m-modifysplat" /><code>{"void ModifySplat("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, "}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator-nearestinfo">{"ForestGenerator.NearestInfo"}</Link>{" info, Vector2 position, ref "}<Link to="/mod/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{" data)"}</code> | <span className="api-desc">Changes the splat data at a point.</span> |

## Used in

Members of other types that take, return or hold a `ITerrainModifier`:

<div className="api-used-in">

[`ForestGenerator.terrainModifiers`](/mod/game-api/types/alta-world-generation/forestgenerator#m-terrainmodifiers).

</div>
