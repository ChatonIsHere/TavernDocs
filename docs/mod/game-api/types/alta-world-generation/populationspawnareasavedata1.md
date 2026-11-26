---
title: "PopulationSpawnAreaSaveData1"
description: "Old version 1 save data for a PopulationSpawnArea, kept so old saves can load."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationSpawnAreaSaveData1

A **class** in `Root.Township`, `Alta.Populations`.

Old version 1 save data for a `PopulationSpawnArea`, kept so old saves can load.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationSpawnAreaSaveData1()"}</code> | <span className="api-desc">Creates a `PopulationSpawnAreaSaveData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-checkpopulationtime" /><code>{"float checkPopulationTime"}</code> | <span className="api-desc">Next population check time, in seconds.</span> |
| <Link id="m-children" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsavedatachild">{"PopulationSaveDataChild"}</Link>{"[] children"}</code> | <span className="api-desc">Saved data for each spawned member.</span> |
| <Link id="m-currentpopulation" /><code>{"int currentPopulation"}</code> | <span className="api-desc">Current population count.</span> |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition"}</code> | <span className="api-desc">The population definition.</span> |
| <Link id="m-isoneoff" /><code>{"bool isOneOff"}</code> | <span className="api-desc">Whether the area spawns only once.</span> |
| <Link id="m-ispopulationstarted" /><code>{"bool isPopulationStarted"}</code> | <span className="api-desc">Whether the population had started spawning.</span> |
| <Link id="m-maxpopulation" /><code>{"int maxPopulation"}</code> | <span className="api-desc">Maximum population.</span> |
| <Link id="m-numberofspawnpoints" /><code>{"int numberOfSpawnPoints"}</code> | <span className="api-desc">Number of spawn points in the area.</span> |
| <Link id="m-startingpopulation" /><code>{"int startingPopulation"}</code> | <span className="api-desc">Population to spawn at the start.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Copies the fields into the current save data, turning `checkPopulationTime` from seconds into a `TimeSpan`.</span> |
