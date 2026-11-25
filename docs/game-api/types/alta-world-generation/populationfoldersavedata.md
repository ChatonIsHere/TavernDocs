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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NewSaveData<PopulationFolder, PopulationFolderSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata), [`IPopulationFolderSaveDataBase`](/game-api/types/alta-world-generation/ipopulationfoldersavedatabase)
- **Derived types** [`PopulationFolder`](/game-api/types/alta-world-generation/populationfolder), [`PopulationFolderSaveData`](/game-api/types/alta-world-generation/populationfoldersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationFolderSaveData()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-checkpopulationtime" /><code>{"TimeSpan checkPopulationTime"}</code> |  |
| <Link id="m-children" /><code><Link to="/game-api/types/alta-world-generation/populationsavedatachild">{"PopulationSaveDataChild"}</Link>{"[] children"}</code> |  |
| <Link id="m-currentpopulation" /><code>{"int currentPopulation"}</code> |  |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition"}</code> |  |
| <Link id="m-ispopulationstarted" /><code>{"bool isPopulationStarted"}</code> |  |
| <Link id="m-maxpopulation" /><code>{"int maxPopulation"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-checkpopulationtime-2" /><code>{"TimeSpan CheckPopulationTime { get; set; }"}</code> | When the population is next checked. |
| <Link id="m-children-2" /><code><Link to="/game-api/types/alta-world-generation/populationsavedatachild">{"PopulationSaveDataChild"}</Link>{"[] Children { get; set; }"}</code> | The saved spawned entities with their spawn points. |
| <Link id="m-currentpopulation-2" /><code>{"int CurrentPopulation { get; set; }"}</code> | How many were alive when saved. |
| <Link id="m-definition-2" /><code><Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" Definition { get; set; }"}</code> | What the population spawns. |
| <Link id="m-ispopulationstarted-2" /><code>{"bool IsPopulationStarted { get; set; }"}</code> | Whether the population had started. |
| <Link id="m-maximumpopulation" /><code>{"int MaximumPopulation { get; set; }"}</code> | The population's maximum. |
