---
title: "GlobalPopulationDefinition"
description: "class GlobalPopulationDefinition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalPopulationDefinition

A **class** in `Root.Township`, `Alta.Populations`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`HashedGeneralValue<GlobalPopulationDefinition>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`GlobalPopulationDefinition`](/game-api/types/alta-world-generation/globalpopulationdefinition)
- **Nested types** [`PopulationInfo`](/game-api/types/alta-world-generation/globalpopulationdefinition-populationinfo)
- **Attributes** `CreateAssetMenu`, `Module`, `ServerOnly`, `Alias`, `TypeConverter`
- **Documented in** [Arguments and results](/game-api/console-and-utilities/arguments-and-results), [Populations and spawners](/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalPopulationDefinition()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/attributeimpact">{"AttributeImpact"}</Link>{"[] attributes"}</code> |  |
| <Link id="m-isspawningonastar" /><code>{"private bool isSpawningOnAStar"}</code> |  |
| <Link id="m-iterations" /><code>{"private int iterations"}</code> |  |
| <Link id="m-maxanglefromupdot" /><code>{"private float maxAngleFromUpDot"}</code> |  |
| <Link id="m-maxspawned" /><code>{"private int maxSpawned"}</code> |  |
| <Link id="m-pertickgrowthcurve" /><code>{"private AnimationCurve perTickGrowthCurve"}</code> |  |
| <Link id="m-prefabs" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"[] prefabs"}</code> |  |
| <Link id="m-spawned" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world-generation/spawnedelement">{"SpawnedElement"}</Link>{"> spawned"}</code> |  |
| <Link id="m-startingpopulation" /><code>{"private int startingPopulation"}</code> |  |
| <Link id="m-timer" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationtimerdefinition">{"PopulationTimerDefinition"}</Link>{" timer"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isspawningonastar-2" /><code>{"bool IsSpawningOnAStar { get; }"}</code> |  |
| <Link id="m-iterations-2" /><code>{"int Iterations { get; }"}</code> |  |
| <Link id="m-maxanglefromupdot-2" /><code>{"float MaxAngleFromUpDot { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkspawned" /><code>{"void CheckSpawned()"}</code> |  |
| <Link id="m-clean" /><code>{"void Clean()"}</code> |  |
| <Link id="m-cleanelement" /><code>{"void CleanElement("}<Link to="/game-api/types/alta-world-generation/spawnedelement">{"SpawnedElement"}</Link>{" element)"}</code> |  |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |  |
| <Link id="m-startup" /><code>{"void StartUp()"}</code> |  |
| <Link id="m-getspawned" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetSpawned("}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> |  |
| <Link id="m-listpopulations" /><code>{"private static IEnumerable<"}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition-populationinfo">{"GlobalPopulationDefinition.PopulationInfo"}</Link>{"> ListPopulations()"}</code> |  |
| <Link id="m-setsize" /><code>{"private static void SetSize("}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population, int maxSpawned)"}</code> |  |
| <Link id="m-spawnquantity" /><code>{"private void SpawnQuantity(int toSpawn)"}</code> |  |
| <Link id="m-teleporttopopulationitem" /><code>{"private static async Task TeleportToPopulationItem("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population, float distanceAway = 3)"}</code> |  |
| <Link id="m-teleporttospecificpopulationitem" /><code>{"private static async Task TeleportToSpecificPopulationItem("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population, int index, float distanceAway = 3)"}</code> |  |

## Used in

Members of other types that take, return or hold a `GlobalPopulationDefinition`:

[`DayNightOnlyTimerDefinition.activePopulations`](/game-api/types/alta-world-generation/daynightonlytimerdefinition#m-activepopulations), [`DayNightOnlyTimerDefinition.Clean`](/game-api/types/alta-world-generation/daynightonlytimerdefinition#m-clean), [`DayNightOnlyTimerDefinition.Setup`](/game-api/types/alta-world-generation/daynightonlytimerdefinition#m-setup), [`FrequencyTimerDefinition.Clean`](/game-api/types/alta-world-generation/frequencytimerdefinition#m-clean), [`FrequencyTimerDefinition.entries`](/game-api/types/alta-world-generation/frequencytimerdefinition#m-entries), [`FrequencyTimerDefinition.Setup`](/game-api/types/alta-world-generation/frequencytimerdefinition#m-setup), [`GlobalPopulationDefinition.PopulationInfo.op_Implicit`](/game-api/types/alta-world-generation/globalpopulationdefinition-populationinfo#m-op-implicit), [`GlobalPopulationsManager.populations`](/game-api/types/alta-world-generation/globalpopulationsmanager#m-populations), [`PopulationTimerDefinition.Clean`](/game-api/types/alta-world-generation/populationtimerdefinition#m-clean), [`PopulationTimerDefinition.Setup`](/game-api/types/alta-world-generation/populationtimerdefinition#m-setup), [`SpawnedElement.populationDefinition`](/game-api/types/alta-world-generation/spawnedelement#m-populationdefinition), [`SpawnedElement.SpawnedElement`](/game-api/types/alta-world-generation/spawnedelement#m-ctor).
