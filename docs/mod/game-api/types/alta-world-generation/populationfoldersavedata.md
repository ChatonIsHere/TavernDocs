---
title: "PopulationFolderSaveData"
description: "Save data (version 2) for a PopulationFolder: its population definition, counts, timer and saved children."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationFolderSaveData

A **class** in `Root.Township`, `Alta.Populations`.

Save data (version 2) for a `PopulationFolder`: its population definition, counts, timer and saved children.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NewSaveData<PopulationFolder, PopulationFolderSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata), [`IPopulationFolderSaveDataBase`](/mod/game-api/types/alta-world-generation/ipopulationfoldersavedatabase)
- **Derived types** [`PopulationFolder`](/mod/game-api/types/alta-world-generation/populationfolder), [`PopulationFolderSaveData`](/mod/game-api/types/alta-world-generation/populationfoldersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationFolderSaveData()"}</code> | <span className="api-desc">Creates a `PopulationFolderSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-checkpopulationtime" /><code>{"TimeSpan checkPopulationTime"}</code> | <span className="api-desc">Backing field for `CheckPopulationTime`: when the population is next checked.</span> |
| <Link id="m-children" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsavedatachild">{"PopulationSaveDataChild"}</Link>{"[] children"}</code> | <span className="api-desc">Backing field for `Children`: saved data for each spawned member.</span> |
| <Link id="m-currentpopulation" /><code>{"int currentPopulation"}</code> | <span className="api-desc">Backing field for `CurrentPopulation`.</span> |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition"}</code> | <span className="api-desc">Backing field for `Definition`.</span> |
| <Link id="m-ispopulationstarted" /><code>{"bool isPopulationStarted"}</code> | <span className="api-desc">Backing field for `IsPopulationStarted`.</span> |
| <Link id="m-maxpopulation" /><code>{"int maxPopulation"}</code> | <span className="api-desc">Backing field for `MaximumPopulation`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-checkpopulationtime-2" /><code>{"TimeSpan CheckPopulationTime { get; set; }"}</code> | <span className="api-desc">When the population is next checked.</span> |
| <Link id="m-children-2" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsavedatachild">{"PopulationSaveDataChild"}</Link>{"[] Children { get; set; }"}</code> | <span className="api-desc">The saved spawned entities with their spawn points.</span> |
| <Link id="m-currentpopulation-2" /><code>{"int CurrentPopulation { get; set; }"}</code> | <span className="api-desc">How many were alive when saved.</span> |
| <Link id="m-definition-2" /><code><Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" Definition { get; set; }"}</code> | <span className="api-desc">What the population spawns.</span> |
| <Link id="m-ispopulationstarted-2" /><code>{"bool IsPopulationStarted { get; set; }"}</code> | <span className="api-desc">Whether the population had started.</span> |
| <Link id="m-maximumpopulation" /><code>{"int MaximumPopulation { get; set; }"}</code> | <span className="api-desc">The population's maximum.</span> |
