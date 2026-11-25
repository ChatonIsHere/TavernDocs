---
title: "SpecialBiomeAttributes"
description: "Global settings asset listing the biome attributes forest generation fills in for each node and path (depth, radius, elevation, slope and so on)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpecialBiomeAttributes

A **class** in `Root.Township`, no namespace.

Global settings asset listing the biome attributes forest generation fills in for each node and path (depth, radius, elevation, slope and so on). Get it with `GlobalSettings<SpecialBiomeAttributes>.Instance`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`GlobalSettings<SpecialBiomeAttributes>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`SpecialBiomeAttributes`](/game-api/types/global-s/specialbiomeattributes), [`SpecialBiomeAttributes.Create`](/game-api/types/global-s/specialbiomeattributes-create)
- **Nested types** [`Create`](/game-api/types/global-s/specialbiomeattributes-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpecialBiomeAttributes()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-depth" /><code>{"private "}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" depth"}</code> |  |
| <Link id="m-distancefromborder" /><code>{"private "}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" distanceFromBorder"}</code> |  |
| <Link id="m-distancefrompath" /><code>{"private "}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" distanceFromPath"}</code> |  |
| <Link id="m-elevation" /><code>{"private "}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" elevation"}</code> |  |
| <Link id="m-radius" /><code>{"private "}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" radius"}</code> |  |
| <Link id="m-relativeelevationmax" /><code>{"private "}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" relativeElevationMax"}</code> |  |
| <Link id="m-relativeelevationmin" /><code>{"private "}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" relativeElevationMin"}</code> |  |
| <Link id="m-slope" /><code>{"private "}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" slope"}</code> |  |
| <Link id="m-traversaldepth" /><code>{"private "}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" traversalDepth"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-depth-2" /><code><Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" Depth { get; }"}</code> | Attribute for cave layer depth. Cave biomes set it to 0. |
| <Link id="m-distancefromborder-2" /><code><Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" DistanceFromBorder { get; }"}</code> | Attribute set to the distance from the forest border. |
| <Link id="m-distancefrompath-2" /><code><Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" DistanceFromPath { get; }"}</code> | Attribute set on spawns to their distance from the path edge. |
| <Link id="m-elevation-2" /><code><Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" Elevation { get; }"}</code> | Attribute set to a node's height or a path's average height. |
| <Link id="m-radius-2" /><code><Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" Radius { get; }"}</code> | Attribute set to a node's radius. |
| <Link id="m-relativeelevationmax-2" /><code><Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" RelativeElevationMax { get; }"}</code> | Attribute set to the highest height difference to neighbouring nodes. |
| <Link id="m-relativeelevationmin-2" /><code><Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" RelativeElevationMin { get; }"}</code> | Attribute set to the lowest height difference to neighbouring nodes. |
| <Link id="m-slope-2" /><code><Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" Slope { get; }"}</code> | Attribute for slope. Nodes get 0; paths get the height change over their length. |
| <Link id="m-traversaldepth-2" /><code><Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" TraversalDepth { get; }"}</code> | Attribute set to the path distance from the forest's entrance nodes. |

## Used in

Members of other types that take, return or hold a `SpecialBiomeAttributes`:

[`ForestAttributeEvaluator.definitions`](/game-api/types/alta-world-generation/forestattributeevaluator#m-definitions).
