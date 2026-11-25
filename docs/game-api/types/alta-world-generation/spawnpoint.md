---
title: "SpawnPoint"
description: "A position and rotation a population can spawn at, with a free flag and an optional busy-until time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnPoint

A **class** in `Root.Township`, `Alta.Populations`.

A position and rotation a population can spawn at, with a free flag and an optional busy-until time.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnPoint(Vector3 position, Quaternion rotation, int index)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isfree" /><code>{"private bool isFree"}</code> |  |
| <Link id="m-occupieduntil" /><code>{"private float occupiedUntil"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"int Index { get; private set; }"}</code> | The point's index in its list. |
| <Link id="m-isfree-2" /><code>{"bool IsFree { get; set; }"}</code> | True when marked free and no busy time is running. Setting it clears the busy time. |
| <Link id="m-position" /><code>{"Vector3 Position { get; private set; }"}</code> | Spawn position. |
| <Link id="m-rotation" /><code>{"Quaternion Rotation { get; private set; }"}</code> | Spawn rotation. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-markoccupiedforduration" /><code>{"void MarkOccupiedForDuration(float duration)"}</code> | Marks the point free but busy for a number of seconds; 0 or less makes it free now. |

## Used in

Members of other types that take, return or hold a `SpawnPoint`:

[`PositionSurfaceDefinition.GetSpawnPosition`](/game-api/types/alta-world/positionsurfacedefinition#m-getspawnposition), [`CavePopulationSpawnInformation.dud`](/game-api/types/alta-world-generation/cavepopulationspawninformation#m-dud), [`CavePopulationSpawnInformation.GetPoint`](/game-api/types/alta-world-generation/cavepopulationspawninformation#m-getpoint), [`CavePopulationSpawnInformation.GetRandom`](/game-api/types/alta-world-generation/cavepopulationspawninformation#m-getrandom), [`CavePopulationSpawnInformation.Raycast`](/game-api/types/alta-world-generation/cavepopulationspawninformation#m-raycast), [`Ecosystem.SetPoints`](/game-api/types/alta-world-generation/ecosystem#m-setpoints), [`PointsPopulationValue.GetPoint`](/game-api/types/alta-world-generation/pointspopulationvalue#m-getpoint), [`PointsPopulationValue.GetRandom`](/game-api/types/alta-world-generation/pointspopulationvalue#m-getrandom), [`PointsPopulationValue.Points`](/game-api/types/alta-world-generation/pointspopulationvalue#m-points), [`PointsPopulationValue.PointsPopulationValue`](/game-api/types/alta-world-generation/pointspopulationvalue#m-ctor), [`PopulationDefinition.IsPositionValid`](/game-api/types/alta-world-generation/populationdefinition#m-ispositionvalid), [`PopulationItem.SpawnPoint`](/game-api/types/alta-world-generation/populationitem#m-spawnpoint), [`PopulationSample.AddEntity`](/game-api/types/alta-world-generation/populationsample#m-addentity-2), [`PopulationSpawnArea.spawnPoints`](/game-api/types/alta-world-generation/populationspawnarea#m-spawnpoints), [`PopulationSpawnInformation.GetPoint`](/game-api/types/alta-world-generation/populationspawninformation#m-getpoint), [`PopulationSpawnInformation.GetRandom`](/game-api/types/alta-world-generation/populationspawninformation#m-getrandom), [`SimplePopulationValue.GetPoint`](/game-api/types/alta-world-generation/simplepopulationvalue#m-getpoint), [`SimplePopulationValue.GetRandom`](/game-api/types/alta-world-generation/simplepopulationvalue#m-getrandom), [`SimplePopulationValue.tracked`](/game-api/types/alta-world-generation/simplepopulationvalue#m-tracked), [`SpawnAreaDisplay.Spawn`](/game-api/types/alta-world-generation/spawnareadisplay#m-spawn), [`SpawnPointsDisplay.Spawn`](/game-api/types/alta-world-generation/spawnpointsdisplay#m-spawn), [`ISpawnPositions.GetSpawnPosition`](/game-api/types/global-i-l/ispawnpositions#m-getspawnposition), [`SpawnArea.GetSpawnPosition`](/game-api/types/global-s/spawnarea#m-getspawnposition), [`SpawnPositions.GetLocalSpawnPosition`](/game-api/types/global-s/spawnpositions#m-getlocalspawnposition), [`SpawnPositions.GetSpawnPosition`](/game-api/types/global-s/spawnpositions#m-getspawnposition).
