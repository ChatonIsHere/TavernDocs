---
title: "GeneratingBiome"
description: "class GeneratingBiome in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneratingBiome

A **class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`CaveGeneratingBiome`](/game-api/types/alta-world-generation/cavegeneratingbiome)
- **Nested types** [`Range`](/game-api/types/alta-world-generation/generatingbiome-range)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GeneratingBiome()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-attributeranges" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{", "}<Link to="/game-api/types/alta-world-generation/generatingbiome-range">{"GeneratingBiome.Range"}</Link>{"> attributeRanges"}</code> |  |
| <Link id="m-biomeweightings" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{", float> biomeWeightings"}</code> |  |
| <Link id="m-elementmultipliers" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world-generation/element">{"Element"}</Link>{", float> elementMultipliers"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-totalweight" /><code>{"private float totalWeight"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addweighting" /><code>{"void AddWeighting("}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biome, float weighting)"}</code> |  |
| <Link id="m-generate" /><code><Link to="/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" Generate(int seed, "}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" from, "}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" to, float transition)"}</code> |  |
| <Link id="m-generateattributes" /><code>{"protected virtual void GenerateAttributes("}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes, Random random)"}</code> |  |

## Used in

Members of other types that take, return or hold a `GeneratingBiome`:

[`CaveBiomeGenerator.Preview`](/game-api/types/alta-world-generation/cavebiomegenerator#m-preview-3).
