---
title: "SpawnRate"
description: "class SpawnRate in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnRate

A **class** in `Root.Township`, `Alta.Populations`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue)
- **Derived types** [`SpawnRate.Create`](/game-api/types/alta-world-generation/spawnrate-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/spawnrate-create)
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnRate()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-curvetomaxpopulation" /><code>{"private AnimationCurve curveToMaxPopulation"}</code> |  |
| <Link id="m-durationtomaximumpopulation" /><code>{"private float durationToMaximumPopulation"}</code> |  |
| <Link id="m-emergerateperminute" /><code>{"private float emergeRatePerMinute"}</code> |  |
| <Link id="m-maxpopulationpersquaremeter" /><code>{"private float maxPopulationPerSquareMeter"}</code> |  |
| <Link id="m-populationgrowthvariance" /><code>{"private const float PopulationGrowthVariance"}</code> |  |
| <Link id="m-respawninterval" /><code>{"private float respawnInterval"}</code> |  |
| <Link id="m-visiblepopulation" /><code>{"private float visiblePopulation"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-emergerateperminute-2" /><code>{"float EmergeRatePerMinute { get; }"}</code> |  |
| <Link id="m-mappopulationpersquaremeter" /><code>{"float MapPopulationPerSquareMeter { get; }"}</code> |  |
| <Link id="m-respawninterval-2" /><code>{"TimeSpan RespawnInterval { get; }"}</code> |  |
| <Link id="m-visiblepopulation-2" /><code>{"float VisiblePopulation { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluategrowth" /><code>{"int EvaluateGrowth("}<Link to="/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" population, TimeSpan elapsedSpan)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SpawnRate`:

[`PopulationSetup.spawnRate`](/game-api/types/alta-world-generation/populationsetup#m-spawnrate), [`PopulationSetup.SpawnRate`](/game-api/types/alta-world-generation/populationsetup#m-spawnrate-2).
