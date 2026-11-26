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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue)
- **Derived types** [`SpawnRate.Create`](/game-api/types/alta-world-generation/spawnrate-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/spawnrate-create)
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpawnRate()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curvetomaxpopulation" /><code>{"private AnimationCurve curveToMaxPopulation"}</code> | Curve of population (as a share of the cap) over normalized time to maximum. |
| <Link id="m-durationtomaximumpopulation" /><code>{"private float durationToMaximumPopulation"}</code> | Seconds to grow from empty to the cap. Defaults to a day. |
| <Link id="m-emergerateperminute" /><code>{"private float emergeRatePerMinute"}</code> | Backing field for `EmergeRatePerMinute`. |
| <Link id="m-maxpopulationpersquaremeter" /><code>{"private float maxPopulationPerSquareMeter"}</code> | Backing field for `MapPopulationPerSquareMeter`. |
| <Link id="m-populationgrowthvariance" /><code>{"private const float PopulationGrowthVariance"}</code> | Random variance applied to each growth result (0.1). |
| <Link id="m-respawninterval" /><code>{"private float respawnInterval"}</code> | Backing field for `RespawnInterval`, in seconds. |
| <Link id="m-visiblepopulation" /><code>{"private float visiblePopulation"}</code> | Backing field for `VisiblePopulation`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-emergerateperminute-2" /><code>{"float EmergeRatePerMinute { get; }"}</code> | Share of the total population that may emerge each minute, up to the visible amount, so cleared areas don't refill at once. |
| <Link id="m-mappopulationpersquaremeter" /><code>{"float MapPopulationPerSquareMeter { get; }"}</code> | Maximum population per square metre. |
| <Link id="m-respawninterval-2" /><code>{"TimeSpan RespawnInterval { get; }"}</code> | Time between respawn ticks. Defaults to 60 seconds. |
| <Link id="m-visiblepopulation-2" /><code>{"float VisiblePopulation { get; }"}</code> | Share of the population that can be visible at once (0 to 1). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluategrowth" /><code>{"int EvaluateGrowth("}<Link to="/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" population, TimeSpan elapsedSpan)"}</code> | Returns how many to add to a population after elapsed time, following the curve with 10% random variance. Stores leftover time when the result is zero. |

## Used in

Members of other types that take, return or hold a `SpawnRate`:

[`PopulationSetup.spawnRate`](/game-api/types/alta-world-generation/populationsetup#m-spawnrate), [`PopulationSetup.SpawnRate`](/game-api/types/alta-world-generation/populationsetup#m-spawnrate-2).
