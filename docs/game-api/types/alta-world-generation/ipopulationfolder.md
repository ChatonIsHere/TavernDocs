---
title: "IPopulationFolder"
description: "A saved area that holds one population: its size, density and spawn point picker."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPopulationFolder

An **interface** in `Root.Township`, `Alta.Populations`.

A saved area that holds one population: its size, density and spawn point picker. `BasicPopulationFolder` is the main implementation.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`BasicPopulationFolder`](/game-api/types/alta-world-generation/basicpopulationfolder), [`PopulationPath`](/game-api/types/global-p/populationpath)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accumulatedtime" /><code>{"float AccumulatedTime { get; set; }"}</code> | Seconds of growth time carried over when the last growth check spawned nothing. Reset to 0 once something spawns. Saved. |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" Definition { get; }"}</code> | The population setup this folder spawns. |
| <Link id="m-densitymultiplier" /><code>{"float DensityMultiplier { get; }"}</code> | Multiplies the population cap for this area. |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The folder's network entity. Population items use it as their chunking parent. |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-world-generation/ipopulationmanager">{"IPopulationManager"}</Link>{" Manager { get; }"}</code> | The population manager that owns the folder. |
| <Link id="m-pointevaluator" /><code><Link to="/game-api/types/alta-world-generation/ipointnormalevaluator">{"IPointNormalEvaluator"}</Link>{" PointEvaluator { get; }"}</code> | Picks spawn points (with surface normals) inside the area. |
| <Link id="m-population" /><code><Link to="/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" Population { get; }"}</code> | The live population for this folder. |
| <Link id="m-squaremeters" /><code>{"float SquareMeters { get; }"}</code> | Area size. The cap is max population per square meter times this times `DensityMultiplier`. |

## Used in

Members of other types that take, return or hold a `IPopulationFolder`:

[`BasicPopulation.BasicPopulation`](/game-api/types/alta-world-generation/basicpopulation#m-ctor), [`BasicPopulation.Folder`](/game-api/types/alta-world-generation/basicpopulation#m-folder), [`BasicPopulationManager.Spawn`](/game-api/types/alta-world-generation/basicpopulationmanager#m-spawn), [`IPopulationManager.Spawn`](/game-api/types/alta-world-generation/ipopulationmanager#m-spawn).
