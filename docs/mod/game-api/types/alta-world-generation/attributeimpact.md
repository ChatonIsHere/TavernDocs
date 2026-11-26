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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AttributeImpact()"}</code> | <span className="api-desc">Creates an `AttributeImpact` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attribute" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" attribute"}</code> | <span className="api-desc">The biome attribute read.</span> |
| <Link id="m-impact" /><code>{"private AnimationCurve impact"}</code> | <span className="api-desc">Curve from the attribute value to a spawn weight multiplier.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getimpact" /><code>{"float GetImpact("}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes)"}</code> | <span className="api-desc">Reads the attribute from a biome's attribute set and returns the curve's value for it.</span> |

## Used in

Members of other types that take, return or hold a `AttributeImpact`:

<div className="api-used-in">

[`GlobalPopulationDefinition.attributes`](/mod/game-api/types/alta-world-generation/globalpopulationdefinition#m-attributes), [`PopulationDefinition.attributes`](/mod/game-api/types/alta-world-generation/populationdefinition#m-attributes), [`PopulationDefinition.Attributes`](/mod/game-api/types/alta-world-generation/populationdefinition#m-attributes-2).

</div>
