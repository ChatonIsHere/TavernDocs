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
| <Link id="m-ctor" /><code>{"ForestBiome()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-biomedefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biomeDefinition"}</code> | <span className="api-desc">Backing field for `BiomeDefinition`, the biome this forest biome spawns.</span> |
| <Link id="m-color" /><code>{"private Color color"}</code> | <span className="api-desc">Backing field for `Color`, probably for debug views. Default white.</span> |
| <Link id="m-maximumradius" /><code>{"private float maximumRadius"}</code> | <span className="api-desc">Backing field for `MaximumRadius`. Default 500.</span> |
| <Link id="m-minimumradius" /><code>{"private float minimumRadius"}</code> | <span className="api-desc">Backing field for `MinimumRadius`. Default 100.</span> |
| <Link id="m-parent" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{" parent"}</code> | <span className="api-desc">Backing field for `Parent`.</span> |
| <Link id="m-parents" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{"[] parents"}</code> | <span className="api-desc">Backing field for `Parents`.</span> |
| <Link id="m-randomextraweight" /><code>{"private float randomExtraWeight"}</code> | <span className="api-desc">Backing field for `RandomExtraWeight`: up to this much random weight is added in `GetScore`. Default 0.2.</span> |
| <Link id="m-simplexscale" /><code>{"private float simplexScale"}</code> | <span className="api-desc">Backing field for `SimplexScale`: noise coordinates are divided by this in `GetScore`. Default 100.</span> |
| <Link id="m-weighting" /><code>{"private float weighting"}</code> | <span className="api-desc">Backing field for `Weighting`, multiplied into the noise score. Default 1.</span> |
| <Link id="m-woffset" /><code>{"private int wOffset"}</code> | <span className="api-desc">Backing field for `WOffset`, the noise's fourth coordinate. `OnValidate` picks a random one when it's 0 or less.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-biomedefinition-2" /><code><Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" BiomeDefinition { get; }"}</code> | <span className="api-desc">The `Biome` this forest biome is tied to.</span> |
| <Link id="m-color-2" /><code>{"Color Color { get; }"}</code> | <span className="api-desc">Display colour for the biome, probably for debug maps.</span> |
| <Link id="m-maximumradius-2" /><code>{"float MaximumRadius { get; }"}</code> | <span className="api-desc">Largest radius setting for a patch of this biome (500 by default).</span> |
| <Link id="m-minimumradius-2" /><code>{"float MinimumRadius { get; }"}</code> | <span className="api-desc">Smallest radius setting for a patch of this biome (100 by default).</span> |
| <Link id="m-parent-2" /><code><Link to="/mod/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{" Parent { get; }"}</code> | <span className="api-desc">A single parent biome.</span> |
| <Link id="m-parents-2" /><code><Link to="/mod/game-api/types/global-e-h/forestbiome">{"ForestBiome"}</Link>{"[] Parents { get; }"}</code> | <span className="api-desc">Parent biomes this one can appear inside.</span> |
| <Link id="m-randomextraweight-2" /><code>{"float RandomExtraWeight { get; }"}</code> | <span className="api-desc">Most random weight added to the score per call (0.2 by default).</span> |
| <Link id="m-simplexscale-2" /><code>{"float SimplexScale { get; }"}</code> | <span className="api-desc">Noise scale. Larger values make bigger, smoother patches.</span> |
| <Link id="m-weighting-2" /><code>{"float Weighting { get; }"}</code> | <span className="api-desc">Multiplier on the noise when scoring.</span> |
| <Link id="m-woffset-2" /><code>{"int WOffset { get; }"}</code> | <span className="api-desc">Fourth noise coordinate (divided by 10000), so each biome gets different noise.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getscore" /><code>{"float GetScore("}<Link to="/mod/game-api/types/global-s/simplexnoise">{"SimplexNoise"}</Link>{" noise, Random random, Vector3 point, float strengthMultiplier = 1)"}</code> | <span className="api-desc">Simplex noise at the point (scaled by `SimplexScale`, offset by `WOffset`) times the weighting plus a random extra.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: gives the biome a random noise offset if it has none.</span> |

## Used in

Members of other types that take, return or hold a `ForestBiome`:

<div className="api-used-in">

[`ForestAttributeEvaluator.biomes`](/mod/game-api/types/alta-world-generation/forestattributeevaluator#m-biomes), [`BiomeSphere.biome`](/mod/game-api/types/global-a-b/biomesphere#m-biome), [`BiomeSphere.Biome`](/mod/game-api/types/global-a-b/biomesphere#m-biome-2), [`BiomeSphere.BiomeSphere`](/mod/game-api/types/global-a-b/biomesphere#m-ctor), [`BiomeSphereComponent.biome`](/mod/game-api/types/global-a-b/biomespherecomponent#m-biome), [`BiomeSphereManager.GetBiome`](/mod/game-api/types/global-a-b/biomespheremanager#m-getbiome-2), [`BiomeSphereManager.sorted`](/mod/game-api/types/global-a-b/biomespheremanager#m-sorted), [`BiomeSwitchFilter.Biome.forestBiome`](/mod/game-api/types/global-a-b/biomeswitchfilter-biome#m-forestbiome).

</div>
