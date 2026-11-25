---
title: "PopulationSpawnInformation"
description: "Where a population can spawn: PointsPopulationValue (a list of points), SimplePopulationValue (asks an ISpawnPositions), CavePopulationSpawnInformatio"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationSpawnInformation

An **abstract class** in `Root.Township`, `Alta.Populations`.

Where a population can spawn: `PointsPopulationValue` (a list of points), `SimplePopulationValue` (asks an `ISpawnPositions`), `CavePopulationSpawnInformation`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`CavePopulationSpawnInformation`](/game-api/types/alta-world-generation/cavepopulationspawninformation), [`PointsPopulationValue`](/game-api/types/alta-world-generation/pointspopulationvalue), [`SimplePopulationValue`](/game-api/types/alta-world-generation/simplepopulationvalue)
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationSpawnInformation("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-spawndata" /><code><Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"virtual void DrawGizmos()"}</code> |  |
| <Link id="m-getarealimit" /><code>{"virtual int GetAreaLimit()"}</code> |  |
| <Link id="m-getpoint" /><code>{"abstract "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetPoint(int pointIndex)"}</code> |  |
| <Link id="m-getrandom" /><code>{"abstract "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetRandom("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition)"}</code> |  |
| <Link id="m-save" /><code>{"virtual "}<Link to="/game-api/types/alta-world-generation/ecosystemsavedata-entry">{"EcosystemSaveData.Entry"}</Link>{" Save(uint key)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PopulationSpawnInformation`:

[`Ecosystem.Alta.Populations.ISpawnSystem.Item`](/game-api/types/alta-world-generation/ecosystem#m-alta-populations-ispawnsystem-item), [`Ecosystem.SetPopulationValue`](/game-api/types/alta-world-generation/ecosystem#m-setpopulationvalue), [`Ecosystem.spawnInformationMap`](/game-api/types/alta-world-generation/ecosystem#m-spawninformationmap), [`Ecosystem.TryGetPopulationValue`](/game-api/types/alta-world-generation/ecosystem#m-trygetpopulationvalue), [`ISpawnSystem.Item`](/game-api/types/alta-world-generation/ispawnsystem#m-item), [`PopulationSample.SpawnRandom`](/game-api/types/alta-world-generation/populationsample#m-spawnrandom), [`PopulationSpawnArea.Alta.Populations.ISpawnSystem.Item`](/game-api/types/alta-world-generation/populationspawnarea#m-alta-populations-ispawnsystem-item), [`PopulationSpawnArea.population`](/game-api/types/alta-world-generation/populationspawnarea#m-population).
