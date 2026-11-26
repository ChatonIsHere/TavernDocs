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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`BasicPopulationFolder`](/mod/game-api/types/alta-world-generation/basicpopulationfolder), [`PopulationPath`](/mod/game-api/types/global-p/populationpath)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accumulatedtime" /><code>{"float AccumulatedTime { get; set; }"}</code> | <span className="api-desc">Seconds of growth time carried over when the last growth check spawned nothing. Reset to 0 once something spawns. Saved.</span> |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" Definition { get; }"}</code> | <span className="api-desc">The population setup this folder spawns.</span> |
| <Link id="m-densitymultiplier" /><code>{"float DensityMultiplier { get; }"}</code> | <span className="api-desc">Multiplies the population cap for this area.</span> |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The folder's network entity. Population items use it as their chunking parent.</span> |
| <Link id="m-manager" /><code><Link to="/mod/game-api/types/alta-world-generation/ipopulationmanager">{"IPopulationManager"}</Link>{" Manager { get; }"}</code> | <span className="api-desc">The population manager that owns the folder.</span> |
| <Link id="m-pointevaluator" /><code><Link to="/mod/game-api/types/alta-world-generation/ipointnormalevaluator">{"IPointNormalEvaluator"}</Link>{" PointEvaluator { get; }"}</code> | <span className="api-desc">Picks spawn points (with surface normals) inside the area.</span> |
| <Link id="m-population" /><code><Link to="/mod/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" Population { get; }"}</code> | <span className="api-desc">The live population for this folder.</span> |
| <Link id="m-squaremeters" /><code>{"float SquareMeters { get; }"}</code> | <span className="api-desc">Area size. The cap is max population per square meter times this times `DensityMultiplier`.</span> |

## Used in

Members of other types that take, return or hold a `IPopulationFolder`:

<div className="api-used-in">

[`BasicPopulation.BasicPopulation`](/mod/game-api/types/alta-world-generation/basicpopulation#m-ctor), [`BasicPopulation.Folder`](/mod/game-api/types/alta-world-generation/basicpopulation#m-folder), [`BasicPopulationManager.Spawn`](/mod/game-api/types/alta-world-generation/basicpopulationmanager#m-spawn), [`IPopulationManager.Spawn`](/mod/game-api/types/alta-world-generation/ipopulationmanager#m-spawn).

</div>
