---
title: "SpawnRate"
description: "Asset that sets how a creature or resource population grows back: respawn interval, a growth curve to the cap, density and how much is visible at once."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnRate

A **class** in `Root.Township`, `Alta.Populations`.

Asset that sets how a creature or resource population grows back: respawn interval, a growth curve to the cap, density and how much is visible at once.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/mod/game-api/types/assembly-other/generalvalue)
- **Derived types** [`SpawnRate.Create`](/mod/game-api/types/alta-world-generation/spawnrate-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/spawnrate-create)
- **Documented in** [Populations and spawners](/mod/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnRate()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curvetomaxpopulation" /><code>{"private AnimationCurve curveToMaxPopulation"}</code> | <span className="api-desc">Curve of population (as a share of the cap) over normalized time to maximum.</span> |
| <Link id="m-durationtomaximumpopulation" /><code>{"private float durationToMaximumPopulation"}</code> | <span className="api-desc">Seconds to grow from empty to the cap. Defaults to a day.</span> |
| <Link id="m-emergerateperminute" /><code>{"private float emergeRatePerMinute"}</code> | <span className="api-desc">Backing field for `EmergeRatePerMinute`.</span> |
| <Link id="m-maxpopulationpersquaremeter" /><code>{"private float maxPopulationPerSquareMeter"}</code> | <span className="api-desc">Backing field for `MapPopulationPerSquareMeter`.</span> |
| <Link id="m-populationgrowthvariance" /><code>{"private const float PopulationGrowthVariance"}</code> | <span className="api-desc">Random variance applied to each growth result (0.1).</span> |
| <Link id="m-respawninterval" /><code>{"private float respawnInterval"}</code> | <span className="api-desc">Backing field for `RespawnInterval`, in seconds.</span> |
| <Link id="m-visiblepopulation" /><code>{"private float visiblePopulation"}</code> | <span className="api-desc">Backing field for `VisiblePopulation`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-emergerateperminute-2" /><code>{"float EmergeRatePerMinute { get; }"}</code> | <span className="api-desc">Share of the total population that may emerge each minute, up to the visible amount, so cleared areas don't refill at once.</span> |
| <Link id="m-mappopulationpersquaremeter" /><code>{"float MapPopulationPerSquareMeter { get; }"}</code> | <span className="api-desc">Maximum population per square metre.</span> |
| <Link id="m-respawninterval-2" /><code>{"TimeSpan RespawnInterval { get; }"}</code> | <span className="api-desc">Time between respawn ticks. Defaults to 60 seconds.</span> |
| <Link id="m-visiblepopulation-2" /><code>{"float VisiblePopulation { get; }"}</code> | <span className="api-desc">Share of the population that can be visible at once (0 to 1).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluategrowth" /><code>{"int EvaluateGrowth("}<Link to="/mod/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" population, TimeSpan elapsedSpan)"}</code> | <span className="api-desc">Returns how many to add to a population after elapsed time, following the curve with 10% random variance. Stores leftover time when the result is zero.</span> |

## Used in

Members of other types that take, return or hold a `SpawnRate`:

<div className="api-used-in">

[`PopulationSetup.spawnRate`](/mod/game-api/types/alta-world-generation/populationsetup#m-spawnrate), [`PopulationSetup.SpawnRate`](/mod/game-api/types/alta-world-generation/populationsetup#m-spawnrate-2).

</div>
