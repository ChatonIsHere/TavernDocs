---
title: "IPopulationFolderSaveDataBase"
description: "Saved state of one population in a chunk: its counts, next check time and spawned children."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPopulationFolderSaveDataBase

An **interface** in `Root.Township`, `Alta.Populations`.

Saved state of one population in a chunk: its counts, next check time and spawned children.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`PopulationFolderSaveData`](/game-api/types/alta-world-generation/populationfoldersavedata), [`PopulationSpawnAreaSaveData`](/game-api/types/alta-world-generation/populationspawnareasavedata)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-checkpopulationtime" /><code>{"TimeSpan CheckPopulationTime { get; set; }"}</code> | Time to the next population check. Checks missed while unloaded are run on load. |
| <Link id="m-children" /><code><Link to="/game-api/types/alta-world-generation/populationsavedatachild">{"PopulationSaveDataChild"}</Link>{"[] Children { get; set; }"}</code> | The spawned creatures and the spawn point each used. |
| <Link id="m-currentpopulation" /><code>{"int CurrentPopulation { get; set; }"}</code> | Creatures the population has now. |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" Definition { get; set; }"}</code> | The `PopulationDefinition`. |
| <Link id="m-ispopulationstarted" /><code>{"bool IsPopulationStarted { get; set; }"}</code> | True if the population had been set up when saved. |
| <Link id="m-maximumpopulation" /><code>{"int MaximumPopulation { get; set; }"}</code> | Most creatures the population can have. |

## Used in

Members of other types that take, return or hold a `IPopulationFolderSaveDataBase`:

[`PopulationDefinition.Load`](/game-api/types/alta-world-generation/populationdefinition#m-load), [`PopulationDefinition.Save`](/game-api/types/alta-world-generation/populationdefinition#m-save).
