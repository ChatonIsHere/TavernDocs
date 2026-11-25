---
title: "PopulationDefinition"
description: "Alta.Populations.PopulationDefinition, a HashedGeneralValue asset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationDefinition

A **class** in `Root.Township`, `Alta.Populations`.

`Alta.Populations.PopulationDefinition`, a `HashedGeneralValue` asset.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`HashedGeneralValue<PopulationDefinition>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`PopulationDefinition`](/game-api/types/alta-world-generation/populationdefinition), [`PopulationDefinition.Create`](/game-api/types/alta-world-generation/populationdefinition-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/populationdefinition-create), [`FestivePrefabGroup`](/game-api/types/alta-world-generation/populationdefinition-festiveprefabgroup), [`PopulationImpact`](/game-api/types/alta-world-generation/populationdefinition-populationimpact), [`RandomRotationType`](/game-api/types/alta-world-generation/populationdefinition-randomrotationtype)
- **Attributes** `TypeConverter`, `HashedPath`
- **Documented in** [Populations and spawners](/game-api/world/populations#populationdefinition), [Arguments and results](/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationDefinition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/attributeimpact">{"AttributeImpact"}</Link>{"[] attributes"}</code> |  |
| <Link id="m-disconnectradius" /><code>{"private float disconnectRadius"}</code> |  |
| <Link id="m-distribution" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/distribution">{"Distribution"}</Link>{" distribution"}</code> |  |
| <Link id="m-festivegroups" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationdefinition-festiveprefabgroup">{"PopulationDefinition.FestivePrefabGroup"}</Link>{"[] festiveGroups"}</code> |  |
| <Link id="m-isallowingdisconnect" /><code>{"private bool isAllowingDisconnect"}</code> |  |
| <Link id="m-iscreature" /><code>{"private bool isCreature"}</code> |  |
| <Link id="m-iskinematiconspawn" /><code>{"private bool isKinematicOnSpawn"}</code> |  |
| <Link id="m-isusingpointrotation" /><code>{"private bool isUsingPointRotation"}</code> |  |
| <Link id="m-isusingrandomrotation" /><code>{"private bool isUsingRandomRotation"}</code> |  |
| <Link id="m-isusingsafespawning" /><code>{"private bool isUsingSafeSpawning"}</code> |  |
| <Link id="m-layerstoavoid" /><code>{"private LayerMask layersToAvoid"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-maxpopulationgrowth" /><code>{"private int maxPopulationGrowth"}</code> |  |
| <Link id="m-ondeathoccupypointfor" /><code>{"private float onDeathOccupyPointFor"}</code> |  |
| <Link id="m-percentageofpopulationspawned" /><code>{"private float percentageOfPopulationSpawned"}</code> |  |
| <Link id="m-populationgrowthcurve" /><code>{"private AnimationCurve populationGrowthCurve"}</code> |  |
| <Link id="m-positionforspherecast" /><code>{"private Vector3 positionForSphereCast"}</code> |  |
| <Link id="m-prefabhashes" /><code>{"private uint[] prefabHashes"}</code> |  |
| <Link id="m-randomrotationtype" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationdefinition-randomrotationtype">{"PopulationDefinition.RandomRotationType"}</Link>{" randomRotationType"}</code> |  |
| <Link id="m-spherecastradius" /><code>{"private float sphereCastRadius"}</code> |  |
| <Link id="m-tickfrequency" /><code>{"private float tickFrequency"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attributes-2" /><code><Link to="/game-api/types/alta-world-generation/attributeimpact">{"AttributeImpact"}</Link>{"[] Attributes { get; }"}</code> |  |
| <Link id="m-basetickfrequency" /><code>{"float BaseTickFrequency { get; }"}</code> |  |
| <Link id="m-disconnectradius-2" /><code>{"float DisconnectRadius { get; }"}</code> |  |
| <Link id="m-isallowingdisconnect-2" /><code>{"bool IsAllowingDisconnect { get; }"}</code> |  |
| <Link id="m-iscreature-2" /><code>{"bool IsCreature { get; }"}</code> |  |
| <Link id="m-iskinematiconspawn-2" /><code>{"bool IsKinematicOnSpawn { get; }"}</code> |  |
| <Link id="m-isusingpointrotation-2" /><code>{"bool IsUsingPointRotation { get; }"}</code> |  |
| <Link id="m-isusingrandomrotation-2" /><code>{"bool IsUsingRandomRotation { get; }"}</code> |  |
| <Link id="m-isusingsafespawning-2" /><code>{"bool IsUsingSafeSpawning { get; }"}</code> |  |
| <Link id="m-maxpopulationgrowth-2" /><code>{"int MaxPopulationGrowth { get; }"}</code> |  |
| <Link id="m-ondeathoccupypointfor-2" /><code>{"float OnDeathOccupyPointFor { get; }"}</code> |  |
| <Link id="m-percentageofpopulationspawned-2" /><code>{"float PercentageOfPopulationSpawned { get; }"}</code> |  |
| <Link id="m-populationgrowthcurve-2" /><code>{"AnimationCurve PopulationGrowthCurve { get; }"}</code> |  |
| <Link id="m-tickfrequency-2" /><code>{"float TickFrequency { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandom" /><code>{"uint GetRandom("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-getrandomrotation" /><code>{"Quaternion GetRandomRotation()"}</code> |  |
| <Link id="m-ispositionvalid" /><code>{"bool IsPositionValid("}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" point)"}</code> |  |
| <Link id="m-load" /><code><Link to="/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" Load("}<Link to="/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" parent, "}<Link to="/game-api/types/alta-world-generation/ipopulationfoldersavedatabase">{"IPopulationFolderSaveDataBase"}</Link>{" data)"}</code> |  |
| <Link id="m-save" /><code>{"void Save("}<Link to="/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" sample, "}<Link to="/game-api/types/alta-world-generation/ipopulationfoldersavedatabase">{"IPopulationFolderSaveDataBase"}</Link>{" data)"}</code> |  |
| <Link id="m-serialize" /><code><Link to="/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" Serialize("}<Link to="/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" baseSample, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" parent)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PopulationDefinition`:

[`SettingsCommandModules.PopulationSettings.CheckPopulationTime`](/game-api/types/alta-console/settingscommandmodules-populationsettings#m-checkpopulationtime), [`SettingsCommandModules.PopulationSettings.ResetPopulationTime`](/game-api/types/alta-console/settingscommandmodules-populationsettings#m-resetpopulationtime), [`SettingsCommandModules.PopulationSettings.SetPopulationTime`](/game-api/types/alta-console/settingscommandmodules-populationsettings#m-setpopulationtime), [`SpawnCommandModule.SpawnPopulation`](/game-api/types/alta-console/spawncommandmodule#m-spawnpopulation), [`CavePopulationSpawnInformation.GetRandom`](/game-api/types/alta-world-generation/cavepopulationspawninformation#m-getrandom), [`Ecosystem.PopulationApplication.definition`](/game-api/types/alta-world-generation/ecosystem-populationapplication#m-definition), [`Ecosystem.PopulationApplication.Definition`](/game-api/types/alta-world-generation/ecosystem-populationapplication#m-definition-2), [`IPopulationFolderSaveDataBase.Definition`](/game-api/types/alta-world-generation/ipopulationfoldersavedatabase#m-definition), [`PointsPopulationValue.GetRandom`](/game-api/types/alta-world-generation/pointspopulationvalue#m-getrandom), [`PopulationDefinition.PopulationImpact.affectingPopulation`](/game-api/types/alta-world-generation/populationdefinition-populationimpact#m-affectingpopulation), [`PopulationDefinitionManager.GetValue`](/game-api/types/alta-world-generation/populationdefinitionmanager#m-getvalue), [`PopulationDefinitionManager.ResetValue`](/game-api/types/alta-world-generation/populationdefinitionmanager#m-resetvalue), [`PopulationDefinitionManager.SetValue`](/game-api/types/alta-world-generation/populationdefinitionmanager#m-setvalue), [`PopulationDefinitionManager.ValuedUpdated`](/game-api/types/alta-world-generation/populationdefinitionmanager#m-valuedupdated), [`PopulationFolderBase.PopulationDefinition`](/game-api/types/alta-world-generation/populationfolderbase#m-populationdefinition), [`PopulationFolderSaveData.definition`](/game-api/types/alta-world-generation/populationfoldersavedata#m-definition), [`PopulationFolderSaveData.Definition`](/game-api/types/alta-world-generation/populationfoldersavedata#m-definition-2), [`PopulationFolderSaveData1.definition`](/game-api/types/alta-world-generation/populationfoldersavedata1#m-definition), [`PopulationSample.CheckTimeUpdated`](/game-api/types/alta-world-generation/populationsample#m-checktimeupdated), [`PopulationSample.Definition`](/game-api/types/alta-world-generation/populationsample#m-definition), [`PopulationSample.PopulationSample`](/game-api/types/alta-world-generation/populationsample#m-ctor), [`PopulationSpawnArea.populationDefinition`](/game-api/types/alta-world-generation/populationspawnarea#m-populationdefinition), [`PopulationSpawnArea.PopulationDefinition`](/game-api/types/alta-world-generation/populationspawnarea#m-populationdefinition-2), [`PopulationSpawnArea.Setup`](/game-api/types/alta-world-generation/populationspawnarea#m-setup), [`PopulationSpawnAreaSaveData.definition`](/game-api/types/alta-world-generation/populationspawnareasavedata#m-definition), [`PopulationSpawnAreaSaveData.Definition`](/game-api/types/alta-world-generation/populationspawnareasavedata#m-definition-2), [`PopulationSpawnAreaSaveData1.definition`](/game-api/types/alta-world-generation/populationspawnareasavedata1#m-definition), [`PopulationSpawnInformation.GetRandom`](/game-api/types/alta-world-generation/populationspawninformation#m-getrandom), [`SimplePopulationValue.GetRandom`](/game-api/types/alta-world-generation/simplepopulationvalue#m-getrandom), [`SpawnAreaDisplay.targetPopulations`](/game-api/types/alta-world-generation/spawnareadisplay#m-targetpopulations), [`SpawnPointsDisplay.targetPopulation`](/game-api/types/alta-world-generation/spawnpointsdisplay#m-targetpopulation).
