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
| <Link id="m-ctor" /><code>{"PopulationDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/attributeimpact">{"AttributeImpact"}</Link>{"[] attributes"}</code> | Backing field for `Attributes`. The ecosystem multiplies these impacts by the biome attributes to size the population. |
| <Link id="m-disconnectradius" /><code>{"private float disconnectRadius"}</code> | Backing field for `DisconnectRadius`. Above 0, spawned entities get a radial population item, else a bounds one. |
| <Link id="m-distribution" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> | Optional distribution picked from by spawn attributes. When null, `prefabHashes` (or an active festive group) is used. |
| <Link id="m-festivegroups" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition-festiveprefabgroup">{"PopulationDefinition.FestivePrefabGroup"}</Link>{"[] festiveGroups"}</code> | Prefab lists tied to festivities. The first active one replaces `prefabHashes`. |
| <Link id="m-isallowingdisconnect" /><code>{"private bool isAllowingDisconnect"}</code> | Backing field for `IsAllowingDisconnect`. If set, spawned entities can leave the population by moving away. |
| <Link id="m-iscreature" /><code>{"private bool isCreature"}</code> | Backing field for `IsCreature`. Creatures save as creatures and join the chunk directly; others are children of the spawner. |
| <Link id="m-iskinematiconspawn" /><code>{"private bool isKinematicOnSpawn"}</code> | Backing field for `IsKinematicOnSpawn`. Makes the spawned entity's rigidbody kinematic. |
| <Link id="m-isusingpointrotation" /><code>{"private bool isUsingPointRotation"}</code> | Backing field for `IsUsingPointRotation`. Spawned entities take the spawn point's rotation. |
| <Link id="m-isusingrandomrotation" /><code>{"private bool isUsingRandomRotation"}</code> | Backing field for `IsUsingRandomRotation`. Adds a random rotation of `randomRotationType` on spawn. |
| <Link id="m-isusingsafespawning" /><code>{"private bool isUsingSafeSpawning"}</code> | Backing field for `IsUsingSafeSpawning`. Lifts the spawn by the entity's largest collider bounds size. |
| <Link id="m-layerstoavoid" /><code>{"private LayerMask layersToAvoid"}</code> | Layers the sphere cast checks in `IsPositionValid`. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-maxpopulationgrowth" /><code>{"private int maxPopulationGrowth"}</code> | Backing field for `MaxPopulationGrowth`: most members added in one population tick. 5 by default. |
| <Link id="m-ondeathoccupypointfor" /><code>{"private float onDeathOccupyPointFor"}</code> | Backing field for `OnDeathOccupyPointFor`: seconds a spawn point stays taken after its entity dies. |
| <Link id="m-percentageofpopulationspawned" /><code>{"private float percentageOfPopulationSpawned"}</code> | Backing field for `PercentageOfPopulationSpawned`: share of the current population that exists as entities. |
| <Link id="m-populationgrowthcurve" /><code>{"private AnimationCurve populationGrowthCurve"}</code> | Backing field for `PopulationGrowthCurve`: growth chance by fill fraction. Values over 1 can add several per tick. |
| <Link id="m-positionforspherecast" /><code>{"private Vector3 positionForSphereCast"}</code> | Offset from the spawn point for the `IsPositionValid` sphere check. |
| <Link id="m-prefabhashes" /><code>{"private uint[] prefabHashes"}</code> | Network prefab hashes picked from at random when there is no distribution. |
| <Link id="m-randomrotationtype" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition-randomrotationtype">{"PopulationDefinition.RandomRotationType"}</Link>{" randomRotationType"}</code> | Whether the random rotation is around Y only or any axis. |
| <Link id="m-spherecastradius" /><code>{"private float sphereCastRadius"}</code> | Radius of the `IsPositionValid` sphere check. 0 or less turns the check off. |
| <Link id="m-tickfrequency" /><code>{"private float tickFrequency"}</code> | Backing field for `BaseTickFrequency`: seconds between population checks, before overrides and the spawn rate multiplier. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attributes-2" /><code><Link to="/mod/game-api/types/alta-world-generation/attributeimpact">{"AttributeImpact"}</Link>{"[] Attributes { get; }"}</code> | Biome attribute impacts that scale the population for the area's biome. |
| <Link id="m-basetickfrequency" /><code>{"float BaseTickFrequency { get; }"}</code> | Seconds between population ticks as set on the asset (default 5). |
| <Link id="m-disconnectradius-2" /><code>{"float DisconnectRadius { get; }"}</code> | When disconnecting is allowed, how far a member can move from the spawner before leaving the population. 0 uses bounds instead. |
| <Link id="m-isallowingdisconnect-2" /><code>{"bool IsAllowingDisconnect { get; }"}</code> | Whether members leave the population (and stop counting) when they move far away. |
| <Link id="m-iscreature-2" /><code>{"bool IsCreature { get; }"}</code> | Whether members are creatures. Creatures save as creatures and are skipped on simple servers. |
| <Link id="m-iskinematiconspawn-2" /><code>{"bool IsKinematicOnSpawn { get; }"}</code> | Makes the spawned rigidbody kinematic. |
| <Link id="m-isusingpointrotation-2" /><code>{"bool IsUsingPointRotation { get; }"}</code> | Whether spawns use the spawn point's rotation. |
| <Link id="m-isusingrandomrotation-2" /><code>{"bool IsUsingRandomRotation { get; }"}</code> | Whether a random rotation is added to spawns. |
| <Link id="m-isusingsafespawning-2" /><code>{"bool IsUsingSafeSpawning { get; }"}</code> | Raises spawns by their largest collider size so they don't start inside the ground. |
| <Link id="m-maxpopulationgrowth-2" /><code>{"int MaxPopulationGrowth { get; }"}</code> | Most members the population can grow by in one tick. |
| <Link id="m-ondeathoccupypointfor-2" /><code>{"float OnDeathOccupyPointFor { get; }"}</code> | Seconds a spawn point stays occupied after its member dies. |
| <Link id="m-percentageofpopulationspawned-2" /><code>{"float PercentageOfPopulationSpawned { get; }"}</code> | Fraction of the current population that is actually spawned as entities. |
| <Link id="m-populationgrowthcurve-2" /><code>{"AnimationCurve PopulationGrowthCurve { get; }"}</code> | Chance of growing per tick, by current population as a fraction of max. Values above 1 can add several at once. |
| <Link id="m-tickfrequency-2" /><code>{"float TickFrequency { get; }"}</code> | Seconds between ticks: the current (possibly overridden) value divided by the server's spawn rate multiplier. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandom" /><code>{"uint GetRandom("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Picks a prefab hash to spawn, from the distribution if set, otherwise from the prefab list (or an active festive group's list). |
| <Link id="m-getrandomrotation" /><code>{"Quaternion GetRandomRotation()"}</code> | A random rotation around Y only, or fully random, depending on the asset. |
| <Link id="m-ispositionvalid" /><code>{"bool IsPositionValid("}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" point)"}</code> | False when a sphere check at the spawn point hits the avoided layers. Always true if the sphere radius is 0 or less. |
| <Link id="m-load" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" Load("}<Link to="/mod/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" parent, "}<Link to="/mod/game-api/types/alta-world-generation/ipopulationfoldersavedatabase">{"IPopulationFolderSaveDataBase"}</Link>{" data)"}</code> | Creates a population sample from saved data. |
| <Link id="m-save" /><code>{"void Save("}<Link to="/mod/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" sample, "}<Link to="/mod/game-api/types/alta-world-generation/ipopulationfoldersavedatabase">{"IPopulationFolderSaveDataBase"}</Link>{" data)"}</code> | Writes a sample's current and max population and check time to save data. |
| <Link id="m-serialize" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" Serialize("}<Link to="/mod/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" baseSample, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" parent)"}</code> | Obsolete stream format for population samples. |

## Used in

Members of other types that take, return or hold a `PopulationDefinition`:

[`SettingsCommandModules.PopulationSettings.CheckPopulationTime`](/mod/game-api/types/alta-console/settingscommandmodules-populationsettings#m-checkpopulationtime), [`SettingsCommandModules.PopulationSettings.ResetPopulationTime`](/mod/game-api/types/alta-console/settingscommandmodules-populationsettings#m-resetpopulationtime), [`SettingsCommandModules.PopulationSettings.SetPopulationTime`](/mod/game-api/types/alta-console/settingscommandmodules-populationsettings#m-setpopulationtime), [`SpawnCommandModule.SpawnPopulation`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawnpopulation), [`CavePopulationSpawnInformation.GetRandom`](/mod/game-api/types/alta-world-generation/cavepopulationspawninformation#m-getrandom), [`Ecosystem.PopulationApplication.definition`](/mod/game-api/types/alta-world-generation/ecosystem-populationapplication#m-definition), [`Ecosystem.PopulationApplication.Definition`](/mod/game-api/types/alta-world-generation/ecosystem-populationapplication#m-definition-2), [`IPopulationFolderSaveDataBase.Definition`](/mod/game-api/types/alta-world-generation/ipopulationfoldersavedatabase#m-definition), [`PointsPopulationValue.GetRandom`](/mod/game-api/types/alta-world-generation/pointspopulationvalue#m-getrandom), [`PopulationDefinition.PopulationImpact.affectingPopulation`](/mod/game-api/types/alta-world-generation/populationdefinition-populationimpact#m-affectingpopulation), [`PopulationDefinitionManager.GetValue`](/mod/game-api/types/alta-world-generation/populationdefinitionmanager#m-getvalue), [`PopulationDefinitionManager.ResetValue`](/mod/game-api/types/alta-world-generation/populationdefinitionmanager#m-resetvalue), [`PopulationDefinitionManager.SetValue`](/mod/game-api/types/alta-world-generation/populationdefinitionmanager#m-setvalue), [`PopulationDefinitionManager.ValuedUpdated`](/mod/game-api/types/alta-world-generation/populationdefinitionmanager#m-valuedupdated), [`PopulationFolderBase.PopulationDefinition`](/mod/game-api/types/alta-world-generation/populationfolderbase#m-populationdefinition), [`PopulationFolderSaveData.definition`](/mod/game-api/types/alta-world-generation/populationfoldersavedata#m-definition), [`PopulationFolderSaveData.Definition`](/mod/game-api/types/alta-world-generation/populationfoldersavedata#m-definition-2), [`PopulationFolderSaveData1.definition`](/mod/game-api/types/alta-world-generation/populationfoldersavedata1#m-definition), [`PopulationSample.CheckTimeUpdated`](/mod/game-api/types/alta-world-generation/populationsample#m-checktimeupdated), [`PopulationSample.Definition`](/mod/game-api/types/alta-world-generation/populationsample#m-definition), [`PopulationSample.PopulationSample`](/mod/game-api/types/alta-world-generation/populationsample#m-ctor), [`PopulationSpawnArea.populationDefinition`](/mod/game-api/types/alta-world-generation/populationspawnarea#m-populationdefinition), [`PopulationSpawnArea.PopulationDefinition`](/mod/game-api/types/alta-world-generation/populationspawnarea#m-populationdefinition-2), [`PopulationSpawnArea.Setup`](/mod/game-api/types/alta-world-generation/populationspawnarea#m-setup), [`PopulationSpawnAreaSaveData.definition`](/mod/game-api/types/alta-world-generation/populationspawnareasavedata#m-definition), [`PopulationSpawnAreaSaveData.Definition`](/mod/game-api/types/alta-world-generation/populationspawnareasavedata#m-definition-2), [`PopulationSpawnAreaSaveData1.definition`](/mod/game-api/types/alta-world-generation/populationspawnareasavedata1#m-definition), [`PopulationSpawnInformation.GetRandom`](/mod/game-api/types/alta-world-generation/populationspawninformation#m-getrandom), [`SimplePopulationValue.GetRandom`](/mod/game-api/types/alta-world-generation/simplepopulationvalue#m-getrandom), [`SpawnAreaDisplay.targetPopulations`](/mod/game-api/types/alta-world-generation/spawnareadisplay#m-targetpopulations), [`SpawnPointsDisplay.targetPopulation`](/mod/game-api/types/alta-world-generation/spawnpointsdisplay#m-targetpopulation).
