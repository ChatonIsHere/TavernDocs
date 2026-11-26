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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PopulationSpawnAreaSaveData1()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-checkpopulationtime" /><code>{"float checkPopulationTime"}</code> | Next population check time, in seconds. |
| <Link id="m-children" /><code><Link to="/game-api/types/alta-world-generation/populationsavedatachild">{"PopulationSaveDataChild"}</Link>{"[] children"}</code> | Saved data for each spawned member. |
| <Link id="m-currentpopulation" /><code>{"int currentPopulation"}</code> | Current population count. |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition"}</code> | The population definition. |
| <Link id="m-isoneoff" /><code>{"bool isOneOff"}</code> | Whether the area spawns only once. |
| <Link id="m-ispopulationstarted" /><code>{"bool isPopulationStarted"}</code> | Whether the population had started spawning. |
| <Link id="m-maxpopulation" /><code>{"int maxPopulation"}</code> | Maximum population. |
| <Link id="m-numberofspawnpoints" /><code>{"int numberOfSpawnPoints"}</code> | Number of spawn points in the area. |
| <Link id="m-startingpopulation" /><code>{"int startingPopulation"}</code> | Population to spawn at the start. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Copies the fields into the current save data, turning `checkPopulationTime` from seconds into a `TimeSpan`. |
