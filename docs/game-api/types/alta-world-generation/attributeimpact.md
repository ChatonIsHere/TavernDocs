---
title: "AttributeImpact"
description: "Weights where a global population spawns by one biome attribute."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttributeImpact

A **class** in `Root.Township`, `Alta.Populations`.

Weights where a global population spawns by one biome attribute. `GlobalPopulationDefinition` multiplies these together per chunk.

- **Listed in** [World generation](/game-api/types/alta-world-generation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AttributeImpact()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attribute" /><code>{"private "}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" attribute"}</code> | The biome attribute read. |
| <Link id="m-impact" /><code>{"private AnimationCurve impact"}</code> | Curve from the attribute value to a spawn weight multiplier. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getimpact" /><code>{"float GetImpact("}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes)"}</code> | Reads the attribute from a biome's attribute set and returns the curve's value for it. |

## Used in

Members of other types that take, return or hold a `AttributeImpact`:

[`GlobalPopulationDefinition.attributes`](/game-api/types/alta-world-generation/globalpopulationdefinition#m-attributes), [`PopulationDefinition.attributes`](/game-api/types/alta-world-generation/populationdefinition#m-attributes), [`PopulationDefinition.Attributes`](/game-api/types/alta-world-generation/populationdefinition#m-attributes-2).
