---
title: "PopulationSample"
description: "Server: one population (creatures or items of one PopulationDefinition) in one chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationSample

A **class** in `Root.Township`, `Alta.Populations`.

Server: one population (creatures or items of one `PopulationDefinition`) in one chunk. It ticks on the timeline to grow the population count towards its maximum, spawns members at free spawn points while the chunk is loaded, and tracks deaths.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`PopulationEvent`](/game-api/types/alta-world-generation/populationevent), [`PopulationUnityEvent`](/game-api/types/alta-world-generation/populationunityevent)
- **Documented in** [Spawning and despawning](/game-api/creatures/spawning-and-despawning#populationsample), [Populations and spawners](/game-api/world/populations#populationsample)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationSample("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition, int currentPopulation, int maximumPopulation, "}<Link to="/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" parent, bool isOneOff = false)"}</code> | Creates a `PopulationSample` from `definition`, `currentPopulation`, `maximumPopulation`, `chunk`, `spawner`, `parent` and `isOneOff`. |
| <Link id="m-ctor-2" /><code>{"PopulationSample("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition, int currentPopulation, int maximumPopulation, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world-generation/ispawnsystem">{"ISpawnSystem"}</Link>{" spawner, "}<Link to="/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" parent, bool isOneOff = false)"}</code> | Creates a `PopulationSample` from `definition`, `currentPopulation`, `maximumPopulation`, `chunk`, `spawner`, `parent` and `isOneOff`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-onpopulationdiedout" /><code><Link to="/game-api/types/alta-world-generation/populationdelegate">{"PopulationDelegate"}</Link>{" OnPopulationDiedOut"}</code> | Called when the count reaches 0. |
| <Link id="m-onpopulationmaxed" /><code><Link to="/game-api/types/alta-world-generation/populationdelegate">{"PopulationDelegate"}</Link>{" OnPopulationMaxed"}</code> | Called when the count reaches the maximum. |
| <Link id="m-onpopulationstarted" /><code><Link to="/game-api/types/alta-world-generation/populationdelegate">{"PopulationDelegate"}</Link>{" OnPopulationStarted"}</code> | Called when the count goes from 0 to above 0. |

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> | Timeline entry for the repeating population check. Saved and loaded with the sample. |
| <Link id="m-isoneoff" /><code>{"private bool isOneOff"}</code> | True for a one-off spawn: no repeating tick and spawned entities are not tracked. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-spawner" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/ispawnsystem">{"ISpawnSystem"}</Link>{" spawner"}</code> | Spawn system that provides spawn points for this population. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; private set; }"}</code> | The location chunk the population lives in. |
| <Link id="m-currentpopulation" /><code>{"int CurrentPopulation { get; private set; }"}</code> | Population count, including members not currently spawned. |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" Definition { get; }"}</code> | The population definition. |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> | Hash of the population definition. |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; private set; }"}</code> | True after `Initialize`. |
| <Link id="m-maximumpopulation" /><code>{"int MaximumPopulation { get; private set; }"}</code> | Largest population count. |
| <Link id="m-parent" /><code><Link to="/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" Parent { get; }"}</code> | The population folder that owns this sample. Non-creature members are chunked under its entity. |
| <Link id="m-spawnedentities" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/game-api/types/alta-world-generation/populationitem">{"PopulationItem"}</Link>{"> SpawnedEntities { get; private set; }"}</code> | Spawned members, with their `PopulationItem` components. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-newentityspawned" /><code>{"event "}<Link to="/game-api/types/alta-world-generation/populationitemspawnhandler">{"PopulationItemSpawnHandler"}</Link>{" NewEntitySpawned"}</code> | Raised when a member is spawned. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addentity" /><code>{"void AddEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, int pointIndex)"}</code> | Adds an existing entity as a member at the spawn point with the given index. |
| <Link id="m-checkspawned" /><code>{"void CheckSpawned()"}</code> | Spawns members until the spawned count matches the population times the definition's spawned percentage. Gives up after three failed spawns. |
| <Link id="m-destroy" /><code>{"void Destroy()"}</code> | Stops the population's timer. |
| <Link id="m-forcekillall" /><code>{"void ForceKillAll()"}</code> | Destroys every spawned member, sets the population to 0 and rechecks spawning. |
| <Link id="m-forcespawn" /><code>{"void ForceSpawn(int targetPopulation)"}</code> | Raises the population to the target (capped at the maximum) and spawns to match. |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world-generation/ispawnsystem">{"ISpawnSystem"}</Link>{" spawner)"}</code> | Server: sets the chunk and spawner and starts the growth tick. |
| <Link id="m-loadtime" /><code>{"void LoadTime(TimeSpan time)"}</code> | Restores the tick timer from a save and runs the ticks missed while unloaded. |
| <Link id="m-losemember" /><code>{"void LoseMember("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Removes a member that died, occupies its spawn point for a while and lowers the count. |
| <Link id="m-replace" /><code>{"void Replace("}<Link to="/game-api/types/alta-world-generation/populationitem">{"PopulationItem"}</Link>{" populationItem, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Swaps a member's entity for a new one at the same spawn point. |
| <Link id="m-requestmove" /><code>{"bool RequestMove("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isAllowingSame = true)"}</code> | Moves a member to another random free spawn point. False if none is available. |
| <Link id="m-savetime" /><code>{"TimeSpan SaveTime()"}</code> | Returns the tick timer for saving. |
| <Link id="m-serializetime" /><code>{"void SerializeTime("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Obsolete: old way of saving the tick timer to a stream. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addentity-2" /><code>{"private void AddEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" point)"}</code> | Adds an existing entity as a member at the spawn point with the given index. |
| <Link id="m-additemto" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationitem">{"PopulationItem"}</Link>{" AddItemTo(GameObject gameObject)"}</code> | Adds the right `PopulationItem` component to a spawned entity: radial, bounds or plain, by the definition's disconnect settings. |
| <Link id="m-checkpopulation" /><code>{"private void CheckPopulation()"}</code> | Server tick: shrinks an over-max population or grows it by the growth curve, then spawns entities if the chunk is loaded. |
| <Link id="m-checktimeupdated" /><code>{"private void CheckTimeUpdated("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" changedPopulation)"}</code> | Reschedules the population tick when the definition's tick frequency is changed. |
| <Link id="m-despawnentity" /><code>{"private void DespawnEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isDeath)"}</code> | Despawns a tracked entity and removes it from `SpawnedEntities`. |
| <Link id="m-despawnentityinternal" /><code>{"private void DespawnEntityInternal("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isDeath)"}</code> | Unhooks removal events, frees or occupies the spawn point (on death) and destroys the population item. |
| <Link id="m-entitydestroyed" /><code>{"private void EntityDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Entity destroyed handler: an unload just despawns it, a real destroy counts as losing a member. |
| <Link id="m-registerremovemethod" /><code>{"private void RegisterRemoveMethod("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newEntity)"}</code> | Hooks the entity's removal methods and its destroyed event so the sample notices when it leaves. |
| <Link id="m-spawnrandom" /><code>{"private bool SpawnRandom("}<Link to="/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" value)"}</code> | Server: spawns one random prefab at a free spawn point, applying the definition's rotation, safe spawn and chunk rules. |

</details>

## Used in

Members of other types that take, return or hold a `PopulationSample`:

[`Ecosystem.PopulationApplication.InitializeSample`](/game-api/types/alta-world-generation/ecosystem-populationapplication#m-initializesample), [`PopulationAnalytics.SendRecord`](/game-api/types/alta-world-generation/populationanalytics#m-sendrecord-2), [`PopulationDefinition.Load`](/game-api/types/alta-world-generation/populationdefinition#m-load), [`PopulationDefinition.Save`](/game-api/types/alta-world-generation/populationdefinition#m-save), [`PopulationDefinition.Serialize`](/game-api/types/alta-world-generation/populationdefinition#m-serialize), [`PopulationDelegate.BeginInvoke`](/game-api/types/alta-world-generation/populationdelegate#m-begininvoke), [`PopulationDelegate.Invoke`](/game-api/types/alta-world-generation/populationdelegate#m-invoke), [`PopulationEventData.PopulationEventData`](/game-api/types/alta-world-generation/populationeventdata#m-ctor), [`PopulationFolderBase.Population`](/game-api/types/alta-world-generation/populationfolderbase#m-population), [`PopulationFolderBase.SetSample`](/game-api/types/alta-world-generation/populationfolderbase#m-setsample), [`PopulationItem.Population`](/game-api/types/alta-world-generation/populationitem#m-population), [`PopulationItemSpawnHandler.BeginInvoke`](/game-api/types/alta-world-generation/populationitemspawnhandler#m-begininvoke), [`PopulationItemSpawnHandler.Invoke`](/game-api/types/alta-world-generation/populationitemspawnhandler#m-invoke).
