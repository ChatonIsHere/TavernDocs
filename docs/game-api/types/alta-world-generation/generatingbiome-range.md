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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`GeneratingBiome`](/game-api/types/alta-world-generation/generatingbiome)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Range(float min, float max)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-max" /><code>{"float Max { get; set; }"}</code> | Upper end of the range. |
| <Link id="m-min" /><code>{"float Min { get; set; }"}</code> | Lower end of the range. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-random" /><code>{"float Random(Random random)"}</code> | Returns a value between `Min` and `Max`. Uses the given `System.Random`, or Unity's random when it is null. |

## Used in

Members of other types that take, return or hold a `Range`:

[`GeneratingBiome.attributeRanges`](/game-api/types/alta-world-generation/generatingbiome#m-attributeranges).
