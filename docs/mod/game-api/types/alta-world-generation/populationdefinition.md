---
title: "PopulationDefinition"
description: "An asset describing one kind of population (creatures, plants, ore and so on): which prefabs to spawn, how fast it grows and how spawns are placed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationDefinition

A **class** in `Root.Township`, `Alta.Populations`.

An asset describing one kind of population (creatures, plants, ore and so on): which prefabs to spawn, how fast it grows and how spawns are placed. Used by population samples on the server.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`HashedGeneralValue<PopulationDefinition>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`PopulationDefinition`](/mod/game-api/types/alta-world-generation/populationdefinition), [`PopulationDefinition.Create`](/mod/game-api/types/alta-world-generation/populationdefinition-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/populationdefinition-create), [`FestivePrefabGroup`](/mod/game-api/types/alta-world-generation/populationdefinition-festiveprefabgroup), [`PopulationImpact`](/mod/game-api/types/alta-world-generation/populationdefinition-populationimpact), [`RandomRotationType`](/mod/game-api/types/alta-world-generation/populationdefinition-randomrotationtype)
- **Attributes** `TypeConverter`, `HashedPath`
- **Documented in** [Populations and spawners](/mod/game-api/world/populations#populationdefinition), [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/attributeimpact">{"AttributeImpact"}</Link>{"[] attributes"}</code> | <span className="api-desc">Backing field for `Attributes`. The ecosystem multiplies these impacts by the biome attributes to size the population.</span> |
| <Link id="m-disconnectradius" /><code>{"private float disconnectRadius"}</code> | <span className="api-desc">Backing field for `DisconnectRadius`. Above 0, spawned entities get a radial population item, else a bounds one.</span> |
| <Link id="m-distribution" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> | <span className="api-desc">Optional distribution picked from by spawn attributes. When null, `prefabHashes` (or an active festive group) is used.</span> |
| <Link id="m-festivegroups" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition-festiveprefabgroup">{"PopulationDefinition.FestivePrefabGroup"}</Link>{"[] festiveGroups"}</code> | <span className="api-desc">Prefab lists tied to festivities. The first active one replaces `prefabHashes`.</span> |
| <Link id="m-isallowingdisconnect" /><code>{"private bool isAllowingDisconnect"}</code> | <span className="api-desc">Backing field for `IsAllowingDisconnect`. If set, spawned entities can leave the population by moving away.</span> |
| <Link id="m-iscreature" /><code>{"private bool isCreature"}</code> | <span className="api-desc">Backing field for `IsCreature`. Creatures save as creatures and join the chunk directly; others are children of the spawner.</span> |
| <Link id="m-iskinematiconspawn" /><code>{"private bool isKinematicOnSpawn"}</code> | <span className="api-desc">Backing field for `IsKinematicOnSpawn`. Makes the spawned entity's rigidbody kinematic.</span> |
| <Link id="m-isusingpointrotation" /><code>{"private bool isUsingPointRotation"}</code> | <span className="api-desc">Backing field for `IsUsingPointRotation`. Spawned entities take the spawn point's rotation.</span> |
| <Link id="m-isusingrandomrotation" /><code>{"private bool isUsingRandomRotation"}</code> | <span className="api-desc">Backing field for `IsUsingRandomRotation`. Adds a random rotation of `randomRotationType` on spawn.</span> |
| <Link id="m-isusingsafespawning" /><code>{"private bool isUsingSafeSpawning"}</code> | <span className="api-desc">Backing field for `IsUsingSafeSpawning`. Lifts the spawn by the entity's largest collider bounds size.</span> |
| <Link id="m-layerstoavoid" /><code>{"private LayerMask layersToAvoid"}</code> | <span className="api-desc">Layers the sphere cast checks in `IsPositionValid`.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-maxpopulationgrowth" /><code>{"private int maxPopulationGrowth"}</code> | <span className="api-desc">Backing field for `MaxPopulationGrowth`: most members added in one population tick. 5 by default.</span> |
| <Link id="m-ondeathoccupypointfor" /><code>{"private float onDeathOccupyPointFor"}</code> | <span className="api-desc">Backing field for `OnDeathOccupyPointFor`: seconds a spawn point stays taken after its entity dies.</span> |
| <Link id="m-percentageofpopulationspawned" /><code>{"private float percentageOfPopulationSpawned"}</code> | <span className="api-desc">Backing field for `PercentageOfPopulationSpawned`: share of the current population that exists as entities.</span> |
| <Link id="m-populationgrowthcurve" /><code>{"private AnimationCurve populationGrowthCurve"}</code> | <span className="api-desc">Backing field for `PopulationGrowthCurve`: growth chance by fill fraction. Values over 1 can add several per tick.</span> |
| <Link id="m-positionforspherecast" /><code>{"private Vector3 positionForSphereCast"}</code> | <span className="api-desc">Offset from the spawn point for the `IsPositionValid` sphere check.</span> |
| <Link id="m-prefabhashes" /><code>{"private uint[] prefabHashes"}</code> | <span className="api-desc">Network prefab hashes picked from at random when there is no distribution.</span> |
| <Link id="m-randomrotationtype" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition-randomrotationtype">{"PopulationDefinition.RandomRotationType"}</Link>{" randomRotationType"}</code> | <span className="api-desc">Whether the random rotation is around Y only or any axis.</span> |
| <Link id="m-spherecastradius" /><code>{"private float sphereCastRadius"}</code> | <span className="api-desc">Radius of the `IsPositionValid` sphere check. 0 or less turns the check off.</span> |
| <Link id="m-tickfrequency" /><code>{"private float tickFrequency"}</code> | <span className="api-desc">Backing field for `BaseTickFrequency`: seconds between population checks, before overrides and the spawn rate multiplier.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attributes-2" /><code><Link to="/mod/game-api/types/alta-world-generation/attributeimpact">{"AttributeImpact"}</Link>{"[] Attributes { get; }"}</code> | <span className="api-desc">Biome attribute impacts that scale the population for the area's biome.</span> |
| <Link id="m-basetickfrequency" /><code>{"float BaseTickFrequency { get; }"}</code> | <span className="api-desc">Seconds between population ticks as set on the asset (default 5).</span> |
| <Link id="m-disconnectradius-2" /><code>{"float DisconnectRadius { get; }"}</code> | <span className="api-desc">When disconnecting is allowed, how far a member can move from the spawner before leaving the population. 0 uses bounds instead.</span> |
| <Link id="m-isallowingdisconnect-2" /><code>{"bool IsAllowingDisconnect { get; }"}</code> | <span className="api-desc">Whether members leave the population (and stop counting) when they move far away.</span> |
| <Link id="m-iscreature-2" /><code>{"bool IsCreature { get; }"}</code> | <span className="api-desc">Whether members are creatures. Creatures save as creatures and are skipped on simple servers.</span> |
| <Link id="m-iskinematiconspawn-2" /><code>{"bool IsKinematicOnSpawn { get; }"}</code> | <span className="api-desc">Makes the spawned rigidbody kinematic.</span> |
| <Link id="m-isusingpointrotation-2" /><code>{"bool IsUsingPointRotation { get; }"}</code> | <span className="api-desc">Whether spawns use the spawn point's rotation.</span> |
| <Link id="m-isusingrandomrotation-2" /><code>{"bool IsUsingRandomRotation { get; }"}</code> | <span className="api-desc">Whether a random rotation is added to spawns.</span> |
| <Link id="m-isusingsafespawning-2" /><code>{"bool IsUsingSafeSpawning { get; }"}</code> | <span className="api-desc">Raises spawns by their largest collider size so they don't start inside the ground.</span> |
| <Link id="m-maxpopulationgrowth-2" /><code>{"int MaxPopulationGrowth { get; }"}</code> | <span className="api-desc">Most members the population can grow by in one tick.</span> |
| <Link id="m-ondeathoccupypointfor-2" /><code>{"float OnDeathOccupyPointFor { get; }"}</code> | <span className="api-desc">Seconds a spawn point stays occupied after its member dies.</span> |
| <Link id="m-percentageofpopulationspawned-2" /><code>{"float PercentageOfPopulationSpawned { get; }"}</code> | <span className="api-desc">Fraction of the current population that is actually spawned as entities.</span> |
| <Link id="m-populationgrowthcurve-2" /><code>{"AnimationCurve PopulationGrowthCurve { get; }"}</code> | <span className="api-desc">Chance of growing per tick, by current population as a fraction of max. Values above 1 can add several at once.</span> |
| <Link id="m-tickfrequency-2" /><code>{"float TickFrequency { get; }"}</code> | <span className="api-desc">Seconds between ticks: the current (possibly overridden) value divided by the server's spawn rate multiplier.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandom" /><code>{"uint GetRandom("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Picks a prefab hash to spawn, from the distribution if set, otherwise from the prefab list (or an active festive group's list).</span> |
| <Link id="m-getrandomrotation" /><code>{"Quaternion GetRandomRotation()"}</code> | <span className="api-desc">A random rotation around Y only, or fully random, depending on the asset.</span> |
| <Link id="m-ispositionvalid" /><code>{"bool IsPositionValid("}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" point)"}</code> | <span className="api-desc">False when a sphere check at the spawn point hits the avoided layers. Always true if the sphere radius is 0 or less.</span> |
| <Link id="m-load" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" Load("}<Link to="/mod/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" parent, "}<Link to="/mod/game-api/types/alta-world-generation/ipopulationfoldersavedatabase">{"IPopulationFolderSaveDataBase"}</Link>{" data)"}</code> | <span className="api-desc">Creates a population sample from saved data.</span> |
| <Link id="m-save" /><code>{"void Save("}<Link to="/mod/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" sample, "}<Link to="/mod/game-api/types/alta-world-generation/ipopulationfoldersavedatabase">{"IPopulationFolderSaveDataBase"}</Link>{" data)"}</code> | <span className="api-desc">Writes a sample's current and max population and check time to save data.</span> |
| <Link id="m-serialize" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" Serialize("}<Link to="/mod/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" baseSample, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" parent)"}</code> | <span className="api-desc">Obsolete stream format for population samples.</span> |

## Used in

Members of other types that take, return or hold a `PopulationDefinition`:

<div className="api-used-in">

[`SettingsCommandModules.PopulationSettings.CheckPopulationTime`](/mod/game-api/types/alta-console/settingscommandmodules-populationsettings#m-checkpopulationtime), [`SettingsCommandModules.PopulationSettings.ResetPopulationTime`](/mod/game-api/types/alta-console/settingscommandmodules-populationsettings#m-resetpopulationtime), [`SettingsCommandModules.PopulationSettings.SetPopulationTime`](/mod/game-api/types/alta-console/settingscommandmodules-populationsettings#m-setpopulationtime), [`SpawnCommandModule.SpawnPopulation`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawnpopulation), [`CavePopulationSpawnInformation.GetRandom`](/mod/game-api/types/alta-world-generation/cavepopulationspawninformation#m-getrandom), [`Ecosystem.PopulationApplication.definition`](/mod/game-api/types/alta-world-generation/ecosystem-populationapplication#m-definition), [`Ecosystem.PopulationApplication.Definition`](/mod/game-api/types/alta-world-generation/ecosystem-populationapplication#m-definition-2), [`IPopulationFolderSaveDataBase.Definition`](/mod/game-api/types/alta-world-generation/ipopulationfoldersavedatabase#m-definition), [`PointsPopulationValue.GetRandom`](/mod/game-api/types/alta-world-generation/pointspopulationvalue#m-getrandom), [`PopulationDefinition.PopulationImpact.affectingPopulation`](/mod/game-api/types/alta-world-generation/populationdefinition-populationimpact#m-affectingpopulation), [`PopulationDefinitionManager.GetValue`](/mod/game-api/types/alta-world-generation/populationdefinitionmanager#m-getvalue), [`PopulationDefinitionManager.ResetValue`](/mod/game-api/types/alta-world-generation/populationdefinitionmanager#m-resetvalue), [`PopulationDefinitionManager.SetValue`](/mod/game-api/types/alta-world-generation/populationdefinitionmanager#m-setvalue), [`PopulationDefinitionManager.ValuedUpdated`](/mod/game-api/types/alta-world-generation/populationdefinitionmanager#m-valuedupdated), [`PopulationFolderBase.PopulationDefinition`](/mod/game-api/types/alta-world-generation/populationfolderbase#m-populationdefinition), [`PopulationFolderSaveData.definition`](/mod/game-api/types/alta-world-generation/populationfoldersavedata#m-definition), [`PopulationFolderSaveData.Definition`](/mod/game-api/types/alta-world-generation/populationfoldersavedata#m-definition-2), [`PopulationFolderSaveData1.definition`](/mod/game-api/types/alta-world-generation/populationfoldersavedata1#m-definition), [`PopulationSample.CheckTimeUpdated`](/mod/game-api/types/alta-world-generation/populationsample#m-checktimeupdated), [`PopulationSample.Definition`](/mod/game-api/types/alta-world-generation/populationsample#m-definition), [`PopulationSample.PopulationSample`](/mod/game-api/types/alta-world-generation/populationsample#m-ctor), [`PopulationSpawnArea.populationDefinition`](/mod/game-api/types/alta-world-generation/populationspawnarea#m-populationdefinition), [`PopulationSpawnArea.PopulationDefinition`](/mod/game-api/types/alta-world-generation/populationspawnarea#m-populationdefinition-2), [`PopulationSpawnArea.Setup`](/mod/game-api/types/alta-world-generation/populationspawnarea#m-setup), [`PopulationSpawnAreaSaveData.definition`](/mod/game-api/types/alta-world-generation/populationspawnareasavedata#m-definition), [`PopulationSpawnAreaSaveData.Definition`](/mod/game-api/types/alta-world-generation/populationspawnareasavedata#m-definition-2), [`PopulationSpawnAreaSaveData1.definition`](/mod/game-api/types/alta-world-generation/populationspawnareasavedata1#m-definition), [`PopulationSpawnInformation.GetRandom`](/mod/game-api/types/alta-world-generation/populationspawninformation#m-getrandom), [`SimplePopulationValue.GetRandom`](/mod/game-api/types/alta-world-generation/simplepopulationvalue#m-getrandom), [`SpawnAreaDisplay.targetPopulations`](/mod/game-api/types/alta-world-generation/spawnareadisplay#m-targetpopulations), [`SpawnPointsDisplay.targetPopulation`](/mod/game-api/types/alta-world-generation/spawnpointsdisplay#m-targetpopulation).

</div>
