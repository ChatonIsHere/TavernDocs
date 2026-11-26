---
title: "Section"
description: "Cave generation asset for a run of layers: how many layers, which biomes they can be and how attributes change through them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Section

A **class** in `Root.Township`, `Alta.Caves`.

Cave generation asset for a run of layers: how many layers, which biomes they can be and how attributes change through them.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/mod/game-api/types/assembly-other/generalvalue)
- **Derived types** [`Section.Create`](/mod/game-api/types/alta-world-generation/section-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/section-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Section()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attributemultipliers" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/attributecurvevalue">{"AttributeCurveValue"}</Link>{"[] attributeMultipliers"}</code> | <span className="api-desc">Attribute curves applied over the section's length.</span> |
| <Link id="m-biomeweightings" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/biomesinglevalue">{"BiomeSingleValue"}</Link>{"[] biomeWeightings"}</code> | <span className="api-desc">Biomes this section can pick, with their weights.</span> |
| <Link id="m-length" /><code>{"private int length"}</code> | <span className="api-desc">Backing field for `Length`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-length-2" /><code>{"int Length { get; }"}</code> | <span className="api-desc">Number of layers in the section.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applymultipliers" /><code>{"void ApplyMultipliers(int layer, "}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes)"}</code> | <span className="api-desc">Multiplies each listed attribute by its curve, evaluated at how far the layer is through the section.</span> |
| <Link id="m-getrandombiome" /><code><Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" GetRandomBiome("}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" excluding = null)"}</code> | <span className="api-desc">Picks a biome by weight, optionally excluding one (for example the previous layer's).</span> |

## Used in

Members of other types that take, return or hold a `Section`:

<div className="api-used-in">

[`BiomeResources.sections`](/mod/game-api/types/alta-world-generation/biomeresources#m-sections), [`BiomeResources.Sections`](/mod/game-api/types/alta-world-generation/biomeresources#m-sections-2), [`CaveBiomeGenerator.Preview`](/mod/game-api/types/alta-world-generation/cavebiomegenerator#m-preview-2), [`CaveGeneratingBiome.CaveGeneratingBiome`](/mod/game-api/types/alta-world-generation/cavegeneratingbiome#m-ctor), [`CaveGeneratingBiome.Section`](/mod/game-api/types/alta-world-generation/cavegeneratingbiome#m-section).

</div>
