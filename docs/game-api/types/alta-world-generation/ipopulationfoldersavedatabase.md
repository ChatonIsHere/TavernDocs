---
title: "IPopulationFolderSaveDataBase"
description: "interface IPopulationFolderSaveDataBase in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPopulationFolderSaveDataBase

An **interface** in `Root.Township`, `Alta.Populations`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`PopulationFolderSaveData`](/game-api/types/alta-world-generation/populationfoldersavedata), [`PopulationSpawnAreaSaveData`](/game-api/types/alta-world-generation/populationspawnareasavedata)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-checkpopulationtime" /><code>{"TimeSpan CheckPopulationTime { get; set; }"}</code> |  |
| <Link id="m-children" /><code><Link to="/game-api/types/alta-world-generation/populationsavedatachild">{"PopulationSaveDataChild"}</Link>{"[] Children { get; set; }"}</code> |  |
| <Link id="m-currentpopulation" /><code>{"int CurrentPopulation { get; set; }"}</code> |  |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" Definition { get; set; }"}</code> |  |
| <Link id="m-ispopulationstarted" /><code>{"bool IsPopulationStarted { get; set; }"}</code> |  |
| <Link id="m-maximumpopulation" /><code>{"int MaximumPopulation { get; set; }"}</code> |  |

## Used in

Members of other types that take, return or hold a `IPopulationFolderSaveDataBase`:

[`PopulationDefinition.Load`](/game-api/types/alta-world-generation/populationdefinition#m-load), [`PopulationDefinition.Save`](/game-api/types/alta-world-generation/populationdefinition#m-save).
