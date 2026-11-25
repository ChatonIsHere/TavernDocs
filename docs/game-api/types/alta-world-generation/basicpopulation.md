---
title: "BasicPopulation"
description: "class BasicPopulation in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicPopulation

A **class** in `Root.Township`, `Alta.Populations`.

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
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" Definition { get; private set; }"}</code> |  |
| <Link id="m-folder" /><code><Link to="/game-api/types/alta-world-generation/ipopulationfolder">{"IPopulationFolder"}</Link>{" Folder { get; private set; }"}</code> |  |
| <Link id="m-populationcap" /><code>{"int PopulationCap { get; }"}</code> |  |
| <Link id="m-timer" /><code><Link to="/game-api/types/global-t-x/ticktimer">{"TickTimer"}</Link>{" Timer { get; private set; }"}</code> |  |
| <Link id="m-totalpopulation" /><code>{"int TotalPopulation { get; set; }"}</code> |  |
| <Link id="m-visiblepopulation" /><code>{"int VisiblePopulation { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-populationdecreased" /><code>{"event "}<Link to="/game-api/types/alta-world-generation/basicpopulation-populationeventhandler">{"BasicPopulation.PopulationEventHandler"}</Link>{" PopulationDecreased"}</code> |  |
| <Link id="m-populationincreased" /><code>{"event "}<Link to="/game-api/types/alta-world-generation/basicpopulation-populationeventhandler">{"BasicPopulation.PopulationEventHandler"}</Link>{" PopulationIncreased"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-adoptexisting" /><code>{"void AdoptExisting()"}</code> |  |
| <Link id="m-checkspawn-2" /><code>{"void CheckSpawn(TimeSpan elapsed)"}</code> |  |
| <Link id="m-deregister" /><code>{"void Deregister("}<Link to="/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" item)"}</code> |  |
| <Link id="m-loadtime" /><code>{"void LoadTime(TimeSpan time, int totalPopulation)"}</code> |  |
| <Link id="m-register" /><code>{"void Register("}<Link to="/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" item)"}</code> |  |
| <Link id="m-replace" /><code>{"void Replace("}<Link to="/game-api/types/alta-world-generation/basicpopulationitem">{"BasicPopulationItem"}</Link>{" basicPopulationItem, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" replacement)"}</code> |  |
| <Link id="m-checkspawn" /><code>{"private void CheckSpawn()"}</code> |  |

## Used in

Members of other types that take, return or hold a `BasicPopulation`:

[`BasicEcosystem.Add`](/game-api/types/alta-world-generation/basicecosystem#m-add), [`BasicEcosystem.Get`](/game-api/types/alta-world-generation/basicecosystem#m-get), [`BasicEcosystem.populations`](/game-api/types/alta-world-generation/basicecosystem#m-populations), [`BasicEcosystem.Remove`](/game-api/types/alta-world-generation/basicecosystem#m-remove), [`BasicPopulation.PopulationEventHandler.BeginInvoke`](/game-api/types/alta-world-generation/basicpopulation-populationeventhandler#m-begininvoke), [`BasicPopulation.PopulationEventHandler.Invoke`](/game-api/types/alta-world-generation/basicpopulation-populationeventhandler#m-invoke), [`BasicPopulationFolder.Population`](/game-api/types/alta-world-generation/basicpopulationfolder#m-population), [`BasicPopulationItem.Create`](/game-api/types/alta-world-generation/basicpopulationitem#m-create), [`BasicPopulationItem.Population`](/game-api/types/alta-world-generation/basicpopulationitem#m-population), [`IPopulationFolder.Population`](/game-api/types/alta-world-generation/ipopulationfolder#m-population), [`SpawnRate.EvaluateGrowth`](/game-api/types/alta-world-generation/spawnrate#m-evaluategrowth), [`PopulationPath.Population`](/game-api/types/global-p/populationpath#m-population-2).
