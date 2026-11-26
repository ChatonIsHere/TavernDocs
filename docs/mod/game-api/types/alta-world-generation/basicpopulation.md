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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested types** [`PopulationEventHandler`](/mod/game-api/types/alta-world-generation/basicpopulation-populationeventhandler)
- **Documented in** [Populations and spawners](/mod/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicPopulation("}<Link to="/mod/game-api/types/alta-world-generation/ipopulationfolder">{"IPopulationFolder"}</Link>{" folder)"}</code> | <span className="api-desc">Creates a `BasicPopulation` from `folder`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{"> items"}</code> | <span className="api-desc">The population items currently registered, added by `Register` and `AdoptExisting` and removed when an item is removed.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" Definition { get; private set; }"}</code> | <span className="api-desc">The `PopulationSetup` with the spawn rate settings.</span> |
| <Link id="m-folder" /><code><Link to="/mod/game-api/types/alta-world-generation/ipopulationfolder">{"IPopulationFolder"}</Link>{" Folder { get; private set; }"}</code> | <span className="api-desc">The folder entity the spawned items live under.</span> |
| <Link id="m-populationcap" /><code>{"int PopulationCap { get; }"}</code> | <span className="api-desc">Most items: population per square metre times the folder's area and density multiplier.</span> |
| <Link id="m-timer" /><code><Link to="/mod/game-api/types/global-t-x/ticktimer">{"TickTimer"}</Link>{" Timer { get; private set; }"}</code> | <span className="api-desc">Tick timer at the respawn interval that triggers `CheckSpawn`.</span> |
| <Link id="m-totalpopulation" /><code>{"int TotalPopulation { get; set; }"}</code> | <span className="api-desc">How many items the population counts as existing, visible or not.</span> |
| <Link id="m-visiblepopulation" /><code>{"int VisiblePopulation { get; }"}</code> | <span className="api-desc">How many entities are actually in the folder now.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-populationdecreased" /><code>{"event "}<Link to="/mod/game-api/types/alta-world-generation/basicpopulation-populationeventhandler">{"BasicPopulation.PopulationEventHandler"}</Link>{" PopulationDecreased"}</code> | <span className="api-desc">Raised when an item leaves the population.</span> |
| <Link id="m-populationincreased" /><code>{"event "}<Link to="/mod/game-api/types/alta-world-generation/basicpopulation-populationeventhandler">{"BasicPopulation.PopulationEventHandler"}</Link>{" PopulationIncreased"}</code> | <span className="api-desc">Raised when an item joins the population.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-adoptexisting" /><code>{"void AdoptExisting()"}</code> | <span className="api-desc">Registers every entity already in the folder as a member, for example after loading.</span> |
| <Link id="m-checkspawn-2" /><code>{"void CheckSpawn(TimeSpan elapsed)"}</code> | <span className="api-desc">Grows the total by the spawn rate for the elapsed time, then spawns members toward it, limited by the emerge rate.</span> |
| <Link id="m-deregister" /><code>{"void Deregister("}<Link to="/mod/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" item)"}</code> | <span className="api-desc">Removes an item and raises `PopulationDecreased`. Called when an item is removed.</span> |
| <Link id="m-loadtime" /><code>{"void LoadTime(TimeSpan time, int totalPopulation)"}</code> | <span className="api-desc">Restores the saved total and timer, then catches up spawning for the time since the save.</span> |
| <Link id="m-register" /><code>{"void Register("}<Link to="/mod/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" item)"}</code> | <span className="api-desc">Adds an item, listens for its removal and raises `PopulationIncreased`.</span> |
| <Link id="m-replace" /><code>{"void Replace("}<Link to="/mod/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" basicPopulationItem, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" replacement)"}</code> | <span className="api-desc">Swaps a member for a new entity, keeping it counted. Used when a population item is replaced, such as a grown plant.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkspawn" /><code>{"private void CheckSpawn()"}</code> | <span className="api-desc">Grows the total by the spawn rate for the elapsed time, then spawns members toward it, limited by the emerge rate.</span> |

</details>

## Used in

Members of other types that take, return or hold a `BasicPopulation`:

<div className="api-used-in">

[`BasicEcosystem.Add`](/mod/game-api/types/alta-world-generation/basicecosystem#m-add), [`BasicEcosystem.Get`](/mod/game-api/types/alta-world-generation/basicecosystem#m-get), [`BasicEcosystem.populations`](/mod/game-api/types/alta-world-generation/basicecosystem#m-populations), [`BasicEcosystem.Remove`](/mod/game-api/types/alta-world-generation/basicecosystem#m-remove), [`BasicPopulation.PopulationEventHandler.BeginInvoke`](/mod/game-api/types/alta-world-generation/basicpopulation-populationeventhandler#m-begininvoke), [`BasicPopulation.PopulationEventHandler.Invoke`](/mod/game-api/types/alta-world-generation/basicpopulation-populationeventhandler#m-invoke), [`BasicPopulationFolder.Population`](/mod/game-api/types/alta-world-generation/basicpopulationfolder#m-population), [`BasicPopulationItem.Create`](/mod/game-api/types/alta-world-generation/basicpopulationitem#m-create), [`BasicPopulationItem.Population`](/mod/game-api/types/alta-world-generation/basicpopulationitem#m-population), [`IPopulationFolder.Population`](/mod/game-api/types/alta-world-generation/ipopulationfolder#m-population), [`SpawnRate.EvaluateGrowth`](/mod/game-api/types/alta-world-generation/spawnrate#m-evaluategrowth), [`PopulationPath.Population`](/mod/game-api/types/global-p/populationpath#m-population-2).

</div>
