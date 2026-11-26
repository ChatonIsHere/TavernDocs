---
title: "PopulationSpawnAreaSaveData"
description: "Save data for a PopulationSpawnArea: which population it holds, its counts, spawn timer and children."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationSpawnAreaSaveData

A **class** in `Root.Township`, `Alta.Populations`.

Save data for a `PopulationSpawnArea`: which population it holds, its counts, spawn timer and children.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NewSaveData<PopulationSpawnArea, PopulationSpawnAreaSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata), [`IPopulationFolderSaveDataBase`](/mod/game-api/types/alta-world-generation/ipopulationfoldersavedatabase)
- **Derived types** [`PopulationSpawnArea`](/mod/game-api/types/alta-world-generation/populationspawnarea), [`PopulationSpawnAreaSaveData`](/mod/game-api/types/alta-world-generation/populationspawnareasavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationSpawnAreaSaveData()"}</code> | Creates a `PopulationSpawnAreaSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-checkpopulationtime" /><code>{"TimeSpan checkPopulationTime"}</code> | Saved timer state of the population sample, restored on load. |
| <Link id="m-children" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsavedatachild">{"PopulationSaveDataChild"}</Link>{"[] children"}</code> | Saved population members of this area. |
| <Link id="m-currentpopulation" /><code>{"int currentPopulation"}</code> | How many members the area had when saved. |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition"}</code> | The population this spawn area spawns. |
| <Link id="m-isoneoff" /><code>{"bool isOneOff"}</code> | If true, the area spawns once and doesn't refill. |
| <Link id="m-ispopulationstarted" /><code>{"bool isPopulationStarted"}</code> | Whether the area had a running population when saved. |
| <Link id="m-maxpopulation" /><code>{"int maxPopulation"}</code> | The area's maximum population. |
| <Link id="m-numberofspawnpoints" /><code>{"int numberOfSpawnPoints"}</code> | How many static spawn points the area picks. |
| <Link id="m-startingpopulation" /><code>{"int startingPopulation"}</code> | How many members spawn when the area first starts. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-checkpopulationtime-2" /><code>{"TimeSpan CheckPopulationTime { get; set; }"}</code> | When the area next checks whether to spawn more. |
| <Link id="m-children-2" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsavedatachild">{"PopulationSaveDataChild"}</Link>{"[] Children { get; set; }"}</code> | Saved data for the area's spawned children. |
| <Link id="m-currentpopulation-2" /><code>{"int CurrentPopulation { get; set; }"}</code> | How many members were alive when saved. |
| <Link id="m-definition-2" /><code><Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" Definition { get; set; }"}</code> | The population definition this area spawns. |
| <Link id="m-ispopulationstarted-2" /><code>{"bool IsPopulationStarted { get; set; }"}</code> | Whether the area has already started spawning. |
| <Link id="m-maximumpopulation" /><code>{"int MaximumPopulation { get; set; }"}</code> | Most members the area allows at once. |

## Used in

Members of other types that take, return or hold a `PopulationSpawnAreaSaveData`:

[`PopulationSpawnArea.LoadSetup`](/mod/game-api/types/alta-world-generation/populationspawnarea#m-loadsetup), [`PopulationSpawnArea.SaveSetup`](/mod/game-api/types/alta-world-generation/populationspawnarea#m-savesetup).
