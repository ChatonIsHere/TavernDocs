---
title: "IPopulationFolder"
description: "interface IPopulationFolder in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPopulationFolder

An **interface** in `Root.Township`, `Alta.Populations`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`BasicPopulationFolder`](/game-api/types/alta-world-generation/basicpopulationfolder), [`PopulationPath`](/game-api/types/global-p/populationpath)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accumulatedtime" /><code>{"float AccumulatedTime { get; set; }"}</code> |  |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" Definition { get; }"}</code> |  |
| <Link id="m-densitymultiplier" /><code>{"float DensityMultiplier { get; }"}</code> |  |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> |  |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-world-generation/ipopulationmanager">{"IPopulationManager"}</Link>{" Manager { get; }"}</code> |  |
| <Link id="m-pointevaluator" /><code><Link to="/game-api/types/alta-world-generation/ipointnormalevaluator">{"IPointNormalEvaluator"}</Link>{" PointEvaluator { get; }"}</code> |  |
| <Link id="m-population" /><code><Link to="/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" Population { get; }"}</code> |  |
| <Link id="m-squaremeters" /><code>{"float SquareMeters { get; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `IPopulationFolder`:

[`BasicPopulation.BasicPopulation`](/game-api/types/alta-world-generation/basicpopulation#m-ctor), [`BasicPopulation.Folder`](/game-api/types/alta-world-generation/basicpopulation#m-folder), [`BasicPopulationManager.Spawn`](/game-api/types/alta-world-generation/basicpopulationmanager#m-spawn), [`IPopulationManager.Spawn`](/game-api/types/alta-world-generation/ipopulationmanager#m-spawn).
