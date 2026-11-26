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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue)
- **Derived types** [`Section.Create`](/game-api/types/alta-world-generation/section-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/section-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Section()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attributemultipliers" /><code>{"private "}<Link to="/game-api/types/global-a-b/attributecurvevalue">{"AttributeCurveValue"}</Link>{"[] attributeMultipliers"}</code> | Attribute curves applied over the section's length. |
| <Link id="m-biomeweightings" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/biomesinglevalue">{"BiomeSingleValue"}</Link>{"[] biomeWeightings"}</code> | Biomes this section can pick, with their weights. |
| <Link id="m-length" /><code>{"private int length"}</code> | Backing field for `Length`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-length-2" /><code>{"int Length { get; }"}</code> | Number of layers in the section. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applymultipliers" /><code>{"void ApplyMultipliers(int layer, "}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes)"}</code> | Multiplies each listed attribute by its curve, evaluated at how far the layer is through the section. |
| <Link id="m-getrandombiome" /><code><Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" GetRandomBiome("}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" excluding = null)"}</code> | Picks a biome by weight, optionally excluding one (for example the previous layer's). |

## Used in

Members of other types that take, return or hold a `Section`:

[`BiomeResources.sections`](/game-api/types/alta-world-generation/biomeresources#m-sections), [`BiomeResources.Sections`](/game-api/types/alta-world-generation/biomeresources#m-sections-2), [`CaveBiomeGenerator.Preview`](/game-api/types/alta-world-generation/cavebiomegenerator#m-preview-2), [`CaveGeneratingBiome.CaveGeneratingBiome`](/game-api/types/alta-world-generation/cavegeneratingbiome#m-ctor), [`CaveGeneratingBiome.Section`](/game-api/types/alta-world-generation/cavegeneratingbiome#m-section).
