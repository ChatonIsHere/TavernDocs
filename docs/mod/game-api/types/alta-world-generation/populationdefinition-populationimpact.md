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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`PopulationDefinition`](/mod/game-api/types/alta-world-generation/populationdefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationImpact()"}</code> | <span className="api-desc">Creates a `PopulationDefinition.PopulationImpact` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-affectingpopulation" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" affectingPopulation"}</code> | <span className="api-desc">The population that would affect this one.</span> |
| <Link id="m-populationmultiplier" /><code>{"private AnimationCurve populationMultiplier"}</code> | <span className="api-desc">Curve for the multiplier it would apply.</span> |

</details>
