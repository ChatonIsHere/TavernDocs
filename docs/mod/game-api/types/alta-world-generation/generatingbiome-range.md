---
title: "GeneratingBiome.Range"
description: "A float range used by GeneratingBiome for a biome attribute's blended minimum and maximum."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneratingBiome.Range

A **class** in `Root.Township`, `Alta.Caves`.

A float range used by `GeneratingBiome` for a biome attribute's blended minimum and maximum.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`GeneratingBiome`](/mod/game-api/types/alta-world-generation/generatingbiome)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Range(float min, float max)"}</code> | <span className="api-desc">Creates a `GeneratingBiome.Range` from `min` and `max`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-max" /><code>{"float Max { get; set; }"}</code> | <span className="api-desc">Upper end of the range.</span> |
| <Link id="m-min" /><code>{"float Min { get; set; }"}</code> | <span className="api-desc">Lower end of the range.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-random" /><code>{"float Random(Random random)"}</code> | <span className="api-desc">Returns a value between `Min` and `Max`. Uses the given `System.Random`, or Unity's random when it is null.</span> |

## Used in

Members of other types that take, return or hold a `Range`:

<div className="api-used-in">

[`GeneratingBiome.attributeRanges`](/mod/game-api/types/alta-world-generation/generatingbiome#m-attributeranges).

</div>
