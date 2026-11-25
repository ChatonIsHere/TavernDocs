---
title: "Section"
description: "class Section in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Section

A **class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue)
- **Derived types** [`Section.Create`](/game-api/types/alta-world-generation/section-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/section-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Section()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-attributemultipliers" /><code>{"private "}<Link to="/game-api/types/global-a-b/attributecurvevalue">{"AttributeCurveValue"}</Link>{"[] attributeMultipliers"}</code> |  |
| <Link id="m-biomeweightings" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/biomesinglevalue">{"BiomeSingleValue"}</Link>{"[] biomeWeightings"}</code> |  |
| <Link id="m-length" /><code>{"private int length"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-length-2" /><code>{"int Length { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applymultipliers" /><code>{"void ApplyMultipliers(int layer, "}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes)"}</code> |  |
| <Link id="m-getrandombiome" /><code><Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" GetRandomBiome("}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" excluding = null)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Section`:

[`BiomeResources.sections`](/game-api/types/alta-world-generation/biomeresources#m-sections), [`BiomeResources.Sections`](/game-api/types/alta-world-generation/biomeresources#m-sections-2), [`CaveBiomeGenerator.Preview`](/game-api/types/alta-world-generation/cavebiomegenerator#m-preview-2), [`CaveGeneratingBiome.CaveGeneratingBiome`](/game-api/types/alta-world-generation/cavegeneratingbiome#m-ctor), [`CaveGeneratingBiome.Section`](/game-api/types/alta-world-generation/cavegeneratingbiome#m-section).
