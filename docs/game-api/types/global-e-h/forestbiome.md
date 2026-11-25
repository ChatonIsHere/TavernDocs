---
title: "ForestBiome"
description: "class ForestBiome in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestBiome

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`HashedGeneralValue<ForestBiome>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`ForestBiome`](/game-api/types/global-e-h/forestbiome), [`ForestBiome.Create`](/game-api/types/global-e-h/forestbiome-create)
- **Nested types** [`Create`](/game-api/types/global-e-h/forestbiome-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestBiome()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-biomedefinition" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biomeDefinition"}</code> |  |
| <Link id="m-color" /><code>{"private Color color"}</code> |  |
| <Link id="m-maximumradius" /><code>{"private float maximumRadius"}</code> |  |
| <Link id="m-minimumradius" /><code>{"private float minimumRadius"}</code> |  |
| <Link id="m-parent" /><code>{"private "}<Link to="/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{" parent"}</code> |  |
| <Link id="m-parents" /><code>{"private "}<Link to="/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{"[] parents"}</code> |  |
| <Link id="m-randomextraweight" /><code>{"private float randomExtraWeight"}</code> |  |
| <Link id="m-simplexscale" /><code>{"private float simplexScale"}</code> |  |
| <Link id="m-weighting" /><code>{"private float weighting"}</code> |  |
| <Link id="m-woffset" /><code>{"private int wOffset"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-biomedefinition-2" /><code><Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" BiomeDefinition { get; }"}</code> |  |
| <Link id="m-color-2" /><code>{"Color Color { get; }"}</code> |  |
| <Link id="m-maximumradius-2" /><code>{"float MaximumRadius { get; }"}</code> |  |
| <Link id="m-minimumradius-2" /><code>{"float MinimumRadius { get; }"}</code> |  |
| <Link id="m-parent-2" /><code><Link to="/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{" Parent { get; }"}</code> |  |
| <Link id="m-parents-2" /><code><Link to="/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{"[] Parents { get; }"}</code> |  |
| <Link id="m-randomextraweight-2" /><code>{"float RandomExtraWeight { get; }"}</code> |  |
| <Link id="m-simplexscale-2" /><code>{"float SimplexScale { get; }"}</code> |  |
| <Link id="m-weighting-2" /><code>{"float Weighting { get; }"}</code> |  |
| <Link id="m-woffset-2" /><code>{"int WOffset { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getscore" /><code>{"float GetScore("}<Link to="/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" noise, Random random, Vector3 point, float strengthMultiplier = 1)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ForestBiome`:

[`ForestAttributeEvaluator.biomes`](/game-api/types/alta-world-generation/forestattributeevaluator#m-biomes), [`BiomeSphere.biome`](/game-api/types/global-a-b/biomesphere#m-biome), [`BiomeSphere.Biome`](/game-api/types/global-a-b/biomesphere#m-biome-2), [`BiomeSphere.BiomeSphere`](/game-api/types/global-a-b/biomesphere#m-ctor), [`BiomeSphereComponent.biome`](/game-api/types/global-a-b/biomespherecomponent#m-biome), [`BiomeSphereManager.GetBiome`](/game-api/types/global-a-b/biomespheremanager#m-getbiome-2), [`BiomeSphereManager.sorted`](/game-api/types/global-a-b/biomespheremanager#m-sorted), [`BiomeSwitchFilter.Biome.forestBiome`](/game-api/types/global-a-b/biomeswitchfilter-biome#m-forestbiome).
