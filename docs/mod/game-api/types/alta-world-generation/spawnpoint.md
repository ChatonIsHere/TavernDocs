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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Documented in** [Populations and spawners](/mod/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnPoint(Vector3 position, Quaternion rotation, int index)"}</code> | <span className="api-desc">Creates a `SpawnPoint` from `position`, `rotation` and `index`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isfree" /><code>{"private bool isFree"}</code> | <span className="api-desc">Whether nothing is assigned to this point. `IsFree` also needs `occupiedUntil` to have passed.</span> |
| <Link id="m-occupieduntil" /><code>{"private float occupiedUntil"}</code> | <span className="api-desc">Real time until which the point stays taken after its entity died. 0 when not held.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"int Index { get; private set; }"}</code> | <span className="api-desc">The point's index in its list.</span> |
| <Link id="m-isfree-2" /><code>{"bool IsFree { get; set; }"}</code> | <span className="api-desc">True when marked free and no busy time is running. Setting it clears the busy time.</span> |
| <Link id="m-position" /><code>{"Vector3 Position { get; private set; }"}</code> | <span className="api-desc">Spawn position.</span> |
| <Link id="m-rotation" /><code>{"Quaternion Rotation { get; private set; }"}</code> | <span className="api-desc">Spawn rotation.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-markoccupiedforduration" /><code>{"void MarkOccupiedForDuration(float duration)"}</code> | <span className="api-desc">Marks the point free but busy for a number of seconds; 0 or less makes it free now.</span> |

## Used in

Members of other types that take, return or hold a `SpawnPoint`:

<div className="api-used-in">

[`PositionSurfaceDefinition.GetSpawnPosition`](/mod/game-api/types/alta-world/positionsurfacedefinition#m-getspawnposition), [`CavePopulationSpawnInformation.dud`](/mod/game-api/types/alta-world-generation/cavepopulationspawninformation#m-dud), [`CavePopulationSpawnInformation.GetPoint`](/mod/game-api/types/alta-world-generation/cavepopulationspawninformation#m-getpoint), [`CavePopulationSpawnInformation.GetRandom`](/mod/game-api/types/alta-world-generation/cavepopulationspawninformation#m-getrandom), [`CavePopulationSpawnInformation.Raycast`](/mod/game-api/types/alta-world-generation/cavepopulationspawninformation#m-raycast), [`Ecosystem.SetPoints`](/mod/game-api/types/alta-world-generation/ecosystem#m-setpoints), [`PointsPopulationValue.GetPoint`](/mod/game-api/types/alta-world-generation/pointspopulationvalue#m-getpoint), [`PointsPopulationValue.GetRandom`](/mod/game-api/types/alta-world-generation/pointspopulationvalue#m-getrandom), [`PointsPopulationValue.Points`](/mod/game-api/types/alta-world-generation/pointspopulationvalue#m-points), [`PointsPopulationValue.PointsPopulationValue`](/mod/game-api/types/alta-world-generation/pointspopulationvalue#m-ctor), [`PopulationDefinition.IsPositionValid`](/mod/game-api/types/alta-world-generation/populationdefinition#m-ispositionvalid), [`PopulationItem.SpawnPoint`](/mod/game-api/types/alta-world-generation/populationitem#m-spawnpoint), [`PopulationSample.AddEntity`](/mod/game-api/types/alta-world-generation/populationsample#m-addentity-2), [`PopulationSpawnArea.spawnPoints`](/mod/game-api/types/alta-world-generation/populationspawnarea#m-spawnpoints), [`PopulationSpawnInformation.GetPoint`](/mod/game-api/types/alta-world-generation/populationspawninformation#m-getpoint), [`PopulationSpawnInformation.GetRandom`](/mod/game-api/types/alta-world-generation/populationspawninformation#m-getrandom), [`SimplePopulationValue.GetPoint`](/mod/game-api/types/alta-world-generation/simplepopulationvalue#m-getpoint), [`SimplePopulationValue.GetRandom`](/mod/game-api/types/alta-world-generation/simplepopulationvalue#m-getrandom), [`SimplePopulationValue.tracked`](/mod/game-api/types/alta-world-generation/simplepopulationvalue#m-tracked), [`SpawnAreaDisplay.Spawn`](/mod/game-api/types/alta-world-generation/spawnareadisplay#m-spawn), [`SpawnPointsDisplay.Spawn`](/mod/game-api/types/alta-world-generation/spawnpointsdisplay#m-spawn), [`ISpawnPositions.GetSpawnPosition`](/mod/game-api/types/global-i-l/ispawnpositions#m-getspawnposition), [`SpawnArea.GetSpawnPosition`](/mod/game-api/types/global-s/spawnarea#m-getspawnposition), [`SpawnPositions.GetLocalSpawnPosition`](/mod/game-api/types/global-s/spawnpositions#m-getlocalspawnposition), [`SpawnPositions.GetSpawnPosition`](/mod/game-api/types/global-s/spawnpositions#m-getspawnposition).

</div>
