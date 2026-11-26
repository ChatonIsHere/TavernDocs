---
title: "PopulationDefinition.PopulationImpact"
description: "Unused serialized pair inside PopulationDefinition: another population and a curve for how it would scale this one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationDefinition.PopulationImpact

A **private class** in `Root.Township`, `Alta.Populations`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Unused serialized pair inside `PopulationDefinition`: another population and a curve for how it would scale this one. Nothing reads it.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`PopulationDefinition`](/game-api/types/alta-world-generation/populationdefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationImpact()"}</code> | Creates a `PopulationDefinition.PopulationImpact` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectingpopulation" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" affectingPopulation"}</code> | The population that would affect this one. |
| <Link id="m-populationmultiplier" /><code>{"private AnimationCurve populationMultiplier"}</code> | Curve for the multiplier it would apply. |

</details>
