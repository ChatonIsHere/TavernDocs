---
title: "OriginSingleValue"
description: "A serializable pair of a loot Origin and a float value, the SingleValue form used for weighting origins in loot assets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OriginSingleValue

A **class** in `Root.Township`, `Alta.Loot`.

A serializable pair of a loot `Origin` and a float value, the `SingleValue` form used for weighting origins in loot assets.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`SingleValue<Origin>`](/game-api/types/alta-utilities/singlevalue-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OriginSingleValue()"}</code> | Creates an `OriginSingleValue` from `origin` and `value`. |
| <Link id="m-ctor-2" /><code>{"OriginSingleValue("}<Link to="/game-api/types/alta-world-generation/origin">{"Origin"}</Link>{" origin, float value)"}</code> | Creates an `OriginSingleValue` from `origin` and `value`. |

## Used in

Members of other types that take, return or hold a `OriginSingleValue`:

[`Rarity.originWeightings`](/game-api/types/alta-world-generation/rarity#m-originweightings), [`Rarity.OriginWeightings`](/game-api/types/alta-world-generation/rarity#m-originweightings-2).
