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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`PopulationFolderSaveData`](/mod/game-api/types/alta-world-generation/populationfoldersavedata), [`PopulationSpawnAreaSaveData`](/mod/game-api/types/alta-world-generation/populationspawnareasavedata)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-checkpopulationtime" /><code>{"TimeSpan CheckPopulationTime { get; set; }"}</code> | <span className="api-desc">Time to the next population check. Checks missed while unloaded are run on load.</span> |
| <Link id="m-children" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsavedatachild">{"PopulationSaveDataChild"}</Link>{"[] Children { get; set; }"}</code> | <span className="api-desc">The spawned creatures and the spawn point each used.</span> |
| <Link id="m-currentpopulation" /><code>{"int CurrentPopulation { get; set; }"}</code> | <span className="api-desc">Creatures the population has now.</span> |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" Definition { get; set; }"}</code> | <span className="api-desc">The `PopulationDefinition`.</span> |
| <Link id="m-ispopulationstarted" /><code>{"bool IsPopulationStarted { get; set; }"}</code> | <span className="api-desc">True if the population had been set up when saved.</span> |
| <Link id="m-maximumpopulation" /><code>{"int MaximumPopulation { get; set; }"}</code> | <span className="api-desc">Most creatures the population can have.</span> |

## Used in

Members of other types that take, return or hold a `IPopulationFolderSaveDataBase`:

<div className="api-used-in">

[`PopulationDefinition.Load`](/mod/game-api/types/alta-world-generation/populationdefinition#m-load), [`PopulationDefinition.Save`](/mod/game-api/types/alta-world-generation/populationdefinition#m-save).

</div>
