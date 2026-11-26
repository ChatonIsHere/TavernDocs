---
title: "GlobalPopulationDefinition"
description: "Server-only asset for a world-wide population: spawns its prefabs in random location chunks weighted by biome attributes, up to a cap."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalPopulationDefinition

A **class** in `Root.Township`, `Alta.Populations`.

Server-only asset for a world-wide population: spawns its prefabs in random location chunks weighted by biome attributes, up to a cap. Also the `global-population` (`globalpop`) console module with list, spawned, set-size, teleport and teleport-to commands.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`HashedGeneralValue<GlobalPopulationDefinition>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`GlobalPopulationDefinition`](/mod/game-api/types/alta-world-generation/globalpopulationdefinition)
- **Nested types** [`PopulationInfo`](/mod/game-api/types/alta-world-generation/globalpopulationdefinition-populationinfo)
- **Attributes** `CreateAssetMenu`, `Module`, `ServerOnly`, `Alias`, `TypeConverter`
- **Documented in** [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results), [Populations and spawners](/mod/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalPopulationDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/attributeimpact">{"AttributeImpact"}</Link>{"[] attributes"}</code> | Biome attribute impacts multiplied together to weight which location chunks elements spawn in. |
| <Link id="m-isspawningonastar" /><code>{"private bool isSpawningOnAStar"}</code> | Backing field for `IsSpawningOnAStar`. |
| <Link id="m-iterations" /><code>{"private int iterations"}</code> | Backing field for `Iterations`. At least 1. |
| <Link id="m-maxanglefromupdot" /><code>{"private float maxAngleFromUpDot"}</code> | Backing field for `MaxAngleFromUpDot`, set in the inspector as an angle from up. |
| <Link id="m-maxspawned" /><code>{"private int maxSpawned"}</code> | Largest number of elements alive at once. `CheckSpawned` tops up to this; `set-size` changes it. |
| <Link id="m-pertickgrowthcurve" /><code>{"private AnimationCurve perTickGrowthCurve"}</code> | Curve sampled with a random value on each `CheckSpawned` to decide how many elements to add. |
| <Link id="m-prefabs" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{"[] prefabs"}</code> | Prefabs to spawn; each element picks one at random. |
| <Link id="m-spawned" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-world-generation/spawnedelement">{"SpawnedElement"}</Link>{"> spawned"}</code> | The live spawned elements. Null until `Initialize` runs. |
| <Link id="m-startingpopulation" /><code>{"private int startingPopulation"}</code> | Number spawned at `StartUp` when the timer spawns on initialize. |
| <Link id="m-timer" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationtimerdefinition">{"PopulationTimerDefinition"}</Link>{" timer"}</code> | Timer definition that drives respawn checks and how long elements last before decaying. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isspawningonastar-2" /><code>{"bool IsSpawningOnAStar { get; }"}</code> | If true, spawns snap to the nearest `A*` pathfinding node and face a random way instead of aligning to the ground. |
| <Link id="m-iterations-2" /><code>{"int Iterations { get; }"}</code> | How many tries to find a valid spawn position in a chunk. |
| <Link id="m-maxanglefromupdot-2" /><code>{"float MaxAngleFromUpDot { get; }"}</code> | Steepest ground (as a dot product with up) a spawn position may have. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkspawned" /><code>{"void CheckSpawned()"}</code> | If below the cap, spawns a random amount taken from the per-tick growth curve. |
| <Link id="m-clean" /><code>{"void Clean()"}</code> | Tears down the population's timer. |
| <Link id="m-cleanelement" /><code>{"void CleanElement("}<Link to="/mod/game-api/types/alta-world-generation/spawnedelement">{"SpawnedElement"}</Link>{" element)"}</code> | Removes one spawned element from the population, freeing a slot. |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Creates the set of spawned elements if it doesn't exist yet. |
| <Link id="m-startup" /><code>{"void StartUp()"}</code> | Spawns the starting population if the timer says to, then sets up the growth timer. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getspawned" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{"> GetSpawned("}<Link to="/mod/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> | Console command `globalpop spawned`: lists the location chunks of a population's spawned elements. |
| <Link id="m-listpopulations" /><code>{"private static IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/globalpopulationdefinition-populationinfo">{"GlobalPopulationDefinition.PopulationInfo"}</Link>{"> ListPopulations()"}</code> | Console command `globalpop list`: lists every global population with its hash, name, spawned count and max size. |
| <Link id="m-setsize" /><code>{"private static void SetSize("}<Link to="/mod/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population, int maxSpawned)"}</code> | Console command `globalpop set-size`: sets the population's max size and spawns up to it straight away. |
| <Link id="m-spawnquantity" /><code>{"private void SpawnQuantity(int toSpawn)"}</code> | Spawns the given number of elements, each in a random location chunk weighted by the biome `attributes`. |
| <Link id="m-teleporttopopulationitem" /><code>{"private static async Task TeleportToPopulationItem("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population, float distanceAway = 3)"}</code> | Console command `globalpop teleport`: teleports the player near a spawned element, force loading its chunk if none are loaded. |
| <Link id="m-teleporttospecificpopulationitem" /><code>{"private static async Task TeleportToSpecificPopulationItem("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population, int index, float distanceAway = 3)"}</code> | Console command `globalpop teleport-to`: teleports the player near the spawned element at the given index. |

</details>

## Used in

Members of other types that take, return or hold a `GlobalPopulationDefinition`:

[`DayNightOnlyTimerDefinition.activePopulations`](/mod/game-api/types/alta-world-generation/daynightonlytimerdefinition#m-activepopulations), [`DayNightOnlyTimerDefinition.Clean`](/mod/game-api/types/alta-world-generation/daynightonlytimerdefinition#m-clean), [`DayNightOnlyTimerDefinition.Setup`](/mod/game-api/types/alta-world-generation/daynightonlytimerdefinition#m-setup), [`FrequencyTimerDefinition.Clean`](/mod/game-api/types/alta-world-generation/frequencytimerdefinition#m-clean), [`FrequencyTimerDefinition.entries`](/mod/game-api/types/alta-world-generation/frequencytimerdefinition#m-entries), [`FrequencyTimerDefinition.Setup`](/mod/game-api/types/alta-world-generation/frequencytimerdefinition#m-setup), [`GlobalPopulationDefinition.PopulationInfo.op_Implicit`](/mod/game-api/types/alta-world-generation/globalpopulationdefinition-populationinfo#m-op-implicit), [`GlobalPopulationsManager.populations`](/mod/game-api/types/alta-world-generation/globalpopulationsmanager#m-populations), [`PopulationTimerDefinition.Clean`](/mod/game-api/types/alta-world-generation/populationtimerdefinition#m-clean), [`PopulationTimerDefinition.Setup`](/mod/game-api/types/alta-world-generation/populationtimerdefinition#m-setup), [`SpawnedElement.populationDefinition`](/mod/game-api/types/alta-world-generation/spawnedelement#m-populationdefinition), [`SpawnedElement.SpawnedElement`](/mod/game-api/types/alta-world-generation/spawnedelement#m-ctor).
