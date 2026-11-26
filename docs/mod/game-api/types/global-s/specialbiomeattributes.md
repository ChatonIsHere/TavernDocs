---
title: "SpecialBiomeAttributes"
description: "Global settings asset listing the biome attributes forest generation fills in for each node and path (depth, radius, elevation, slope and so on)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpecialBiomeAttributes

A **class** in `Root.Township`, the global namespace.

Global settings asset listing the biome attributes forest generation fills in for each node and path (depth, radius, elevation, slope and so on). Get it with `GlobalSettings<SpecialBiomeAttributes>.Instance`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`GlobalSettings<SpecialBiomeAttributes>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`SpecialBiomeAttributes`](/mod/game-api/types/global-s/specialbiomeattributes), [`SpecialBiomeAttributes.Create`](/mod/game-api/types/global-s/specialbiomeattributes-create)
- **Nested types** [`Create`](/mod/game-api/types/global-s/specialbiomeattributes-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpecialBiomeAttributes()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-depth" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" depth"}</code> | <span className="api-desc">Backing field for `Depth`.</span> |
| <Link id="m-distancefromborder" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" distanceFromBorder"}</code> | <span className="api-desc">Backing field for `DistanceFromBorder`.</span> |
| <Link id="m-distancefrompath" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" distanceFromPath"}</code> | <span className="api-desc">Backing field for `DistanceFromPath`.</span> |
| <Link id="m-elevation" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" elevation"}</code> | <span className="api-desc">Backing field for `Elevation`.</span> |
| <Link id="m-radius" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" radius"}</code> | <span className="api-desc">Backing field for `Radius`.</span> |
| <Link id="m-relativeelevationmax" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" relativeElevationMax"}</code> | <span className="api-desc">Backing field for `RelativeElevationMax`.</span> |
| <Link id="m-relativeelevationmin" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" relativeElevationMin"}</code> | <span className="api-desc">Backing field for `RelativeElevationMin`.</span> |
| <Link id="m-slope" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" slope"}</code> | <span className="api-desc">Backing field for `Slope`.</span> |
| <Link id="m-traversaldepth" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" traversalDepth"}</code> | <span className="api-desc">Backing field for `TraversalDepth`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-depth-2" /><code><Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" Depth { get; }"}</code> | <span className="api-desc">Attribute for cave layer depth. Cave biomes set it to 0.</span> |
| <Link id="m-distancefromborder-2" /><code><Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" DistanceFromBorder { get; }"}</code> | <span className="api-desc">Attribute set to the distance from the forest border.</span> |
| <Link id="m-distancefrompath-2" /><code><Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" DistanceFromPath { get; }"}</code> | <span className="api-desc">Attribute set on spawns to their distance from the path edge.</span> |
| <Link id="m-elevation-2" /><code><Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" Elevation { get; }"}</code> | <span className="api-desc">Attribute set to a node's height or a path's average height.</span> |
| <Link id="m-radius-2" /><code><Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" Radius { get; }"}</code> | <span className="api-desc">Attribute set to a node's radius.</span> |
| <Link id="m-relativeelevationmax-2" /><code><Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" RelativeElevationMax { get; }"}</code> | <span className="api-desc">Attribute set to the highest height difference to neighbouring nodes.</span> |
| <Link id="m-relativeelevationmin-2" /><code><Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" RelativeElevationMin { get; }"}</code> | <span className="api-desc">Attribute set to the lowest height difference to neighbouring nodes.</span> |
| <Link id="m-slope-2" /><code><Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" Slope { get; }"}</code> | <span className="api-desc">Attribute for slope. Nodes get 0; paths get the height change over their length.</span> |
| <Link id="m-traversaldepth-2" /><code><Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" TraversalDepth { get; }"}</code> | <span className="api-desc">Attribute set to the path distance from the forest's entrance nodes.</span> |

## Used in

Members of other types that take, return or hold a `SpecialBiomeAttributes`:

<div className="api-used-in">

[`ForestAttributeEvaluator.definitions`](/mod/game-api/types/alta-world-generation/forestattributeevaluator#m-definitions).

</div>
