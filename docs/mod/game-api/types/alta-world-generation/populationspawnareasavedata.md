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
| <Link id="m-ctor" /><code>{"PopulationSpawnAreaSaveData()"}</code> | <span className="api-desc">Creates a `PopulationSpawnAreaSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-checkpopulationtime" /><code>{"TimeSpan checkPopulationTime"}</code> | <span className="api-desc">Saved timer state of the population sample, restored on load.</span> |
| <Link id="m-children" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsavedatachild">{"PopulationSaveDataChild"}</Link>{"[] children"}</code> | <span className="api-desc">Saved population members of this area.</span> |
| <Link id="m-currentpopulation" /><code>{"int currentPopulation"}</code> | <span className="api-desc">How many members the area had when saved.</span> |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition"}</code> | <span className="api-desc">The population this spawn area spawns.</span> |
| <Link id="m-isoneoff" /><code>{"bool isOneOff"}</code> | <span className="api-desc">If true, the area spawns once and doesn't refill.</span> |
| <Link id="m-ispopulationstarted" /><code>{"bool isPopulationStarted"}</code> | <span className="api-desc">Whether the area had a running population when saved.</span> |
| <Link id="m-maxpopulation" /><code>{"int maxPopulation"}</code> | <span className="api-desc">The area's maximum population.</span> |
| <Link id="m-numberofspawnpoints" /><code>{"int numberOfSpawnPoints"}</code> | <span className="api-desc">How many static spawn points the area picks.</span> |
| <Link id="m-startingpopulation" /><code>{"int startingPopulation"}</code> | <span className="api-desc">How many members spawn when the area first starts.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-checkpopulationtime-2" /><code>{"TimeSpan CheckPopulationTime { get; set; }"}</code> | <span className="api-desc">When the area next checks whether to spawn more.</span> |
| <Link id="m-children-2" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsavedatachild">{"PopulationSaveDataChild"}</Link>{"[] Children { get; set; }"}</code> | <span className="api-desc">Saved data for the area's spawned children.</span> |
| <Link id="m-currentpopulation-2" /><code>{"int CurrentPopulation { get; set; }"}</code> | <span className="api-desc">How many members were alive when saved.</span> |
| <Link id="m-definition-2" /><code><Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" Definition { get; set; }"}</code> | <span className="api-desc">The population definition this area spawns.</span> |
| <Link id="m-ispopulationstarted-2" /><code>{"bool IsPopulationStarted { get; set; }"}</code> | <span className="api-desc">Whether the area has already started spawning.</span> |
| <Link id="m-maximumpopulation" /><code>{"int MaximumPopulation { get; set; }"}</code> | <span className="api-desc">Most members the area allows at once.</span> |

## Used in

Members of other types that take, return or hold a `PopulationSpawnAreaSaveData`:

<div className="api-used-in">

[`PopulationSpawnArea.LoadSetup`](/mod/game-api/types/alta-world-generation/populationspawnarea#m-loadsetup), [`PopulationSpawnArea.SaveSetup`](/mod/game-api/types/alta-world-generation/populationspawnarea#m-savesetup).

</div>
