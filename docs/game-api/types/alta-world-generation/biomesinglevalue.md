---
title: "BiomeSingleValue"
description: "A biome paired with a float, serialisable in the inspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BiomeSingleValue

A **class** in `Root.Township`, `Alta.Caves`.

A biome paired with a float, serialisable in the inspector. `Section` uses an array of them for its biome weightings.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`SingleValue<Biome>`](/game-api/types/alta-utilities/singlevalue-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BiomeSingleValue()"}</code> | Creates a `BiomeSingleValue` from `biome` and `value`. |
| <Link id="m-ctor-2" /><code>{"BiomeSingleValue("}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biome, float value)"}</code> | Creates a `BiomeSingleValue` from `biome` and `value`. |

## Used in

Members of other types that take, return or hold a `BiomeSingleValue`:

[`Section.biomeWeightings`](/game-api/types/alta-world-generation/section#m-biomeweightings).
