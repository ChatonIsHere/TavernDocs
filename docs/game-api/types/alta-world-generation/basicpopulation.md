---
title: "BasicPopulation"
description: "The older, simpler population type: keeps a folder of spawned items up to a cap set by area and density, and spawns more on a tick timer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicPopulation

A **class** in `Root.Township`, `Alta.Populations`.

The older, simpler population type: keeps a folder of spawned items up to a cap set by area and density, and spawns more on a tick timer. Server side.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested types** [`PopulationEventHandler`](/game-api/types/alta-world-generation/basicpopulation-populationeventhandler)
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicPopulation("}<Link to="/game-api/types/alta-world-generation/ipopulationfolder">{"IPopulationFolder"}</Link>{" folder)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{"> items"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" Definition { get; private set; }"}</code> | The `PopulationSetup` with the spawn rate settings. |
| <Link id="m-folder" /><code><Link to="/game-api/types/alta-world-generation/ipopulationfolder">{"IPopulationFolder"}</Link>{" Folder { get; private set; }"}</code> | The folder entity the spawned items live under. |
| <Link id="m-populationcap" /><code>{"int PopulationCap { get; }"}</code> | Most items: population per square metre times the folder's area and density multiplier. |
| <Link id="m-timer" /><code><Link to="/game-api/types/global-t-x/ticktimer">{"TickTimer"}</Link>{" Timer { get; private set; }"}</code> | Tick timer at the respawn interval that triggers `CheckSpawn`. |
| <Link id="m-totalpopulation" /><code>{"int TotalPopulation { get; set; }"}</code> | How many items the population counts as existing, visible or not. |
| <Link id="m-visiblepopulation" /><code>{"int VisiblePopulation { get; }"}</code> | How many entities are actually in the folder now. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-populationdecreased" /><code>{"event "}<Link to="/game-api/types/alta-world-generation/basicpopulation-populationeventhandler">{"BasicPopulation.PopulationEventHandler"}</Link>{" PopulationDecreased"}</code> | Raised when an item leaves the population. |
| <Link id="m-populationincreased" /><code>{"event "}<Link to="/game-api/types/alta-world-generation/basicpopulation-populationeventhandler">{"BasicPopulation.PopulationEventHandler"}</Link>{" PopulationIncreased"}</code> | Raised when an item joins the population. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-adoptexisting" /><code>{"void AdoptExisting()"}</code> | Registers every entity already in the folder as a member, for example after loading. |
| <Link id="m-checkspawn-2" /><code>{"void CheckSpawn(TimeSpan elapsed)"}</code> | Grows the total by the spawn rate for the elapsed time, then spawns members toward it, limited by the emerge rate. |
| <Link id="m-deregister" /><code>{"void Deregister("}<Link to="/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" item)"}</code> | Removes an item and raises `PopulationDecreased`. Called when an item is removed. |
| <Link id="m-loadtime" /><code>{"void LoadTime(TimeSpan time, int totalPopulation)"}</code> | Restores the saved total and timer, then catches up spawning for the time since the save. |
| <Link id="m-register" /><code>{"void Register("}<Link to="/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" item)"}</code> | Adds an item, listens for its removal and raises `PopulationIncreased`. |
| <Link id="m-replace" /><code>{"void Replace("}<Link to="/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" basicPopulationItem, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" replacement)"}</code> | Swaps a member for a new entity, keeping it counted. Used when a population item is replaced, such as a grown plant. |
| <Link id="m-checkspawn" /><code>{"private void CheckSpawn()"}</code> | Grows the total by the spawn rate for the elapsed time, then spawns members toward it, limited by the emerge rate. |

## Used in

Members of other types that take, return or hold a `BasicPopulation`:

[`BasicEcosystem.Add`](/game-api/types/alta-world-generation/basicecosystem#m-add), [`BasicEcosystem.Get`](/game-api/types/alta-world-generation/basicecosystem#m-get), [`BasicEcosystem.populations`](/game-api/types/alta-world-generation/basicecosystem#m-populations), [`BasicEcosystem.Remove`](/game-api/types/alta-world-generation/basicecosystem#m-remove), [`BasicPopulation.PopulationEventHandler.BeginInvoke`](/game-api/types/alta-world-generation/basicpopulation-populationeventhandler#m-begininvoke), [`BasicPopulation.PopulationEventHandler.Invoke`](/game-api/types/alta-world-generation/basicpopulation-populationeventhandler#m-invoke), [`BasicPopulationFolder.Population`](/game-api/types/alta-world-generation/basicpopulationfolder#m-population), [`BasicPopulationItem.Create`](/game-api/types/alta-world-generation/basicpopulationitem#m-create), [`BasicPopulationItem.Population`](/game-api/types/alta-world-generation/basicpopulationitem#m-population), [`IPopulationFolder.Population`](/game-api/types/alta-world-generation/ipopulationfolder#m-population), [`SpawnRate.EvaluateGrowth`](/game-api/types/alta-world-generation/spawnrate#m-evaluategrowth), [`PopulationPath.Population`](/game-api/types/global-p/populationpath#m-population-2).
