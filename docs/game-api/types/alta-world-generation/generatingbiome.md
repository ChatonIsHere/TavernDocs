---
title: "GeneratingBiome"
description: "Builds a GeneratedBiome by blending weighted biomes: attribute ranges and element multipliers are summed by weight, then rolled with a seed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneratingBiome

A **class** in `Root.Township`, `Alta.Caves`.

Builds a `GeneratedBiome` by blending weighted biomes: attribute ranges and element multipliers are summed by weight, then rolled with a seed.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`CaveGeneratingBiome`](/game-api/types/alta-world-generation/cavegeneratingbiome)
- **Nested types** [`Range`](/game-api/types/alta-world-generation/generatingbiome-range)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GeneratingBiome()"}</code> | Creates a `GeneratingBiome` with default values. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attributeranges" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{", "}<Link to="/game-api/types/alta-world-generation/generatingbiome-range">{"GeneratingBiome.Range"}</Link>{"> attributeRanges"}</code> | Blended minimum and maximum for each biome attribute. |
| <Link id="m-biomeweightings" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{", float> biomeWeightings"}</code> | Total weight added for each biome. |
| <Link id="m-elementmultipliers" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world-generation/element">{"Element"}</Link>{", float> elementMultipliers"}</code> | Blended multiplier for each element. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-totalweight" /><code>{"private float totalWeight"}</code> | Sum of all weights added. Should be 1 by the time `Generate` runs. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addweighting" /><code>{"void AddWeighting("}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biome, float weighting)"}</code> | Adds a biome with a weight, adding its attribute ranges and element multipliers (or the defaults) scaled by that weight. |
| <Link id="m-generate" /><code><Link to="/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" Generate(int seed, "}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" from, "}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" to, float transition)"}</code> | Rolls the attributes from the seed, scales each element by its efficiency for them, and returns the `GeneratedBiome`. Warns if weights don't sum to 1. |
| <Link id="m-generateattributes" /><code>{"protected virtual void GenerateAttributes("}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes, Random random)"}</code> | Picks a random value inside each attribute's blended range. Virtual, so a subclass can change how attributes are rolled. |

## Used in

Members of other types that take, return or hold a `GeneratingBiome`:

[`CaveBiomeGenerator.Preview`](/game-api/types/alta-world-generation/cavebiomegenerator#m-preview-3).
