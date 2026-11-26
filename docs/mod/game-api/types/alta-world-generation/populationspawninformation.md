---
title: "PopulationSpawnInformation"
description: "Base for the spawn point source a population sample uses: gives random or indexed spawn points and saves itself into the ecosystem save."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationSpawnInformation

An **abstract class** in `Root.Township`, `Alta.Populations`.

Base for the spawn point source a population sample uses: gives random or indexed spawn points and saves itself into the ecosystem save.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`CavePopulationSpawnInformation`](/mod/game-api/types/alta-world-generation/cavepopulationspawninformation), [`PointsPopulationValue`](/mod/game-api/types/alta-world-generation/pointspopulationvalue), [`SimplePopulationValue`](/mod/game-api/types/alta-world-generation/simplepopulationvalue)
- **Documented in** [Populations and spawners](/mod/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationSpawnInformation("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Creates a `PopulationSpawnInformation` from `spawnData`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-spawndata" /><code><Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" { get; }"}</code> | <span className="api-desc">Spawn data passed on to things spawned from these points.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"virtual void DrawGizmos()"}</code> | <span className="api-desc">Editor: draws the spawn points. Empty by default.</span> |
| <Link id="m-getarealimit" /><code>{"virtual int GetAreaLimit()"}</code> | <span className="api-desc">Most members this area can hold. No limit by default.</span> |
| <Link id="m-getpoint" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetPoint(int pointIndex)"}</code> | <span className="api-desc">Gets the spawn point at an index.</span> |
| <Link id="m-getrandom" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetRandom("}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">Picks a random spawn point suitable for the given population definition.</span> |
| <Link id="m-save" /><code>{"virtual "}<Link to="/mod/game-api/types/alta-world-generation/ecosystemsavedata-entry">{"EcosystemSaveData.Entry"}</Link>{" Save(uint key)"}</code> | <span className="api-desc">Writes an ecosystem save entry for this information under the given key.</span> |

## Used in

Members of other types that take, return or hold a `PopulationSpawnInformation`:

<div className="api-used-in">

[`Ecosystem.Alta.Populations.ISpawnSystem.Item`](/mod/game-api/types/alta-world-generation/ecosystem#m-alta-populations-ispawnsystem-item), [`Ecosystem.SetPopulationValue`](/mod/game-api/types/alta-world-generation/ecosystem#m-setpopulationvalue), [`Ecosystem.spawnInformationMap`](/mod/game-api/types/alta-world-generation/ecosystem#m-spawninformationmap), [`Ecosystem.TryGetPopulationValue`](/mod/game-api/types/alta-world-generation/ecosystem#m-trygetpopulationvalue), [`ISpawnSystem.Item`](/mod/game-api/types/alta-world-generation/ispawnsystem#m-item), [`PopulationSample.SpawnRandom`](/mod/game-api/types/alta-world-generation/populationsample#m-spawnrandom), [`PopulationSpawnArea.Alta.Populations.ISpawnSystem.Item`](/mod/game-api/types/alta-world-generation/populationspawnarea#m-alta-populations-ispawnsystem-item), [`PopulationSpawnArea.population`](/mod/game-api/types/alta-world-generation/populationspawnarea#m-population).

</div>
