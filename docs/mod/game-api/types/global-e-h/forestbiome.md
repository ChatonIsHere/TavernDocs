---
title: "ForestBiome"
description: "A forest generation biome asset, with weighting and noise settings used to score which biome wins at a point."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestBiome

A **class** in `Root.Township`, the global namespace.

A forest generation biome asset, with weighting and noise settings used to score which biome wins at a point. Looked up by hash like other `HashedGeneralValue` assets.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`HashedGeneralValue<ForestBiome>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`ForestBiome`](/mod/game-api/types/global-e-h/forestbiome), [`ForestBiome.Create`](/mod/game-api/types/global-e-h/forestbiome-create)
- **Nested types** [`Create`](/mod/game-api/types/global-e-h/forestbiome-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestBiome()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-biomedefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biomeDefinition"}</code> | Backing field for `BiomeDefinition`, the biome this forest biome spawns. |
| <Link id="m-color" /><code>{"private Color color"}</code> | Backing field for `Color`, probably for debug views. Default white. |
| <Link id="m-maximumradius" /><code>{"private float maximumRadius"}</code> | Backing field for `MaximumRadius`. Default 500. |
| <Link id="m-minimumradius" /><code>{"private float minimumRadius"}</code> | Backing field for `MinimumRadius`. Default 100. |
| <Link id="m-parent" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{" parent"}</code> | Backing field for `Parent`. |
| <Link id="m-parents" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{"[] parents"}</code> | Backing field for `Parents`. |
| <Link id="m-randomextraweight" /><code>{"private float randomExtraWeight"}</code> | Backing field for `RandomExtraWeight`: up to this much random weight is added in `GetScore`. Default 0.2. |
| <Link id="m-simplexscale" /><code>{"private float simplexScale"}</code> | Backing field for `SimplexScale`: noise coordinates are divided by this in `GetScore`. Default 100. |
| <Link id="m-weighting" /><code>{"private float weighting"}</code> | Backing field for `Weighting`, multiplied into the noise score. Default 1. |
| <Link id="m-woffset" /><code>{"private int wOffset"}</code> | Backing field for `WOffset`, the noise's fourth coordinate. `OnValidate` picks a random one when it's 0 or less. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-biomedefinition-2" /><code><Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" BiomeDefinition { get; }"}</code> | The `Biome` this forest biome is tied to. |
| <Link id="m-color-2" /><code>{"Color Color { get; }"}</code> | Display colour for the biome, probably for debug maps. |
| <Link id="m-maximumradius-2" /><code>{"float MaximumRadius { get; }"}</code> | Largest radius setting for a patch of this biome (500 by default). |
| <Link id="m-minimumradius-2" /><code>{"float MinimumRadius { get; }"}</code> | Smallest radius setting for a patch of this biome (100 by default). |
| <Link id="m-parent-2" /><code><Link to="/mod/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{" Parent { get; }"}</code> | A single parent biome. |
| <Link id="m-parents-2" /><code><Link to="/mod/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{"[] Parents { get; }"}</code> | Parent biomes this one can appear inside. |
| <Link id="m-randomextraweight-2" /><code>{"float RandomExtraWeight { get; }"}</code> | Most random weight added to the score per call (0.2 by default). |
| <Link id="m-simplexscale-2" /><code>{"float SimplexScale { get; }"}</code> | Noise scale. Larger values make bigger, smoother patches. |
| <Link id="m-weighting-2" /><code>{"float Weighting { get; }"}</code> | Multiplier on the noise when scoring. |
| <Link id="m-woffset-2" /><code>{"int WOffset { get; }"}</code> | Fourth noise coordinate (divided by 10000), so each biome gets different noise. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getscore" /><code>{"float GetScore("}<Link to="/mod/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" noise, Random random, Vector3 point, float strengthMultiplier = 1)"}</code> | Simplex noise at the point (scaled by `SimplexScale`, offset by `WOffset`) times the weighting plus a random extra. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: gives the biome a random noise offset if it has none. |

## Used in

Members of other types that take, return or hold a `ForestBiome`:

[`ForestAttributeEvaluator.biomes`](/mod/game-api/types/alta-world-generation/forestattributeevaluator#m-biomes), [`BiomeSphere.biome`](/mod/game-api/types/global-a-b/biomesphere#m-biome), [`BiomeSphere.Biome`](/mod/game-api/types/global-a-b/biomesphere#m-biome-2), [`BiomeSphere.BiomeSphere`](/mod/game-api/types/global-a-b/biomesphere#m-ctor), [`BiomeSphereComponent.biome`](/mod/game-api/types/global-a-b/biomespherecomponent#m-biome), [`BiomeSphereManager.GetBiome`](/mod/game-api/types/global-a-b/biomespheremanager#m-getbiome-2), [`BiomeSphereManager.sorted`](/mod/game-api/types/global-a-b/biomespheremanager#m-sorted), [`BiomeSwitchFilter.Biome.forestBiome`](/mod/game-api/types/global-a-b/biomeswitchfilter-biome#m-forestbiome).
