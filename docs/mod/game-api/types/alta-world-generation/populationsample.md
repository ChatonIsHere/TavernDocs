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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`PopulationEvent`](/mod/game-api/types/alta-world-generation/populationevent), [`PopulationUnityEvent`](/mod/game-api/types/alta-world-generation/populationunityevent)
- **Documented in** [Spawning and despawning](/mod/game-api/creatures/spawning-and-despawning#populationsample), [Populations and spawners](/mod/game-api/world/populations#populationsample)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationSample("}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition, int currentPopulation, int maximumPopulation, "}<Link to="/mod/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" parent, bool isOneOff = false)"}</code> | <span className="api-desc">Creates a `PopulationSample` from `definition`, `currentPopulation`, `maximumPopulation`, `chunk`, `spawner`, `parent` and `isOneOff`.</span> |
| <Link id="m-ctor-2" /><code>{"PopulationSample("}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition, int currentPopulation, int maximumPopulation, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world-generation/ispawnsystem">{"ISpawnSystem"}</Link>{" spawner, "}<Link to="/mod/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" parent, bool isOneOff = false)"}</code> | <span className="api-desc">Creates a `PopulationSample` from `definition`, `currentPopulation`, `maximumPopulation`, `chunk`, `spawner`, `parent` and `isOneOff`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-onpopulationdiedout" /><code><Link to="/mod/game-api/types/alta-world-generation/populationdelegate">{"PopulationDelegate"}</Link>{" OnPopulationDiedOut"}</code> | <span className="api-desc">Called when the count reaches 0.</span> |
| <Link id="m-onpopulationmaxed" /><code><Link to="/mod/game-api/types/alta-world-generation/populationdelegate">{"PopulationDelegate"}</Link>{" OnPopulationMaxed"}</code> | <span className="api-desc">Called when the count reaches the maximum.</span> |
| <Link id="m-onpopulationstarted" /><code><Link to="/mod/game-api/types/alta-world-generation/populationdelegate">{"PopulationDelegate"}</Link>{" OnPopulationStarted"}</code> | <span className="api-desc">Called when the count goes from 0 to above 0.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> | <span className="api-desc">Timeline entry for the repeating population check. Saved and loaded with the sample.</span> |
| <Link id="m-isoneoff" /><code>{"private bool isOneOff"}</code> | <span className="api-desc">True for a one-off spawn: no repeating tick and spawned entities are not tracked.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-spawner" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/ispawnsystem">{"ISpawnSystem"}</Link>{" spawner"}</code> | <span className="api-desc">Spawn system that provides spawn points for this population.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; private set; }"}</code> | <span className="api-desc">The location chunk the population lives in.</span> |
| <Link id="m-currentpopulation" /><code>{"int CurrentPopulation { get; private set; }"}</code> | <span className="api-desc">Population count, including members not currently spawned.</span> |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" Definition { get; }"}</code> | <span className="api-desc">The population definition.</span> |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> | <span className="api-desc">Hash of the population definition.</span> |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; private set; }"}</code> | <span className="api-desc">True after `Initialize`.</span> |
| <Link id="m-maximumpopulation" /><code>{"int MaximumPopulation { get; private set; }"}</code> | <span className="api-desc">Largest population count.</span> |
| <Link id="m-parent" /><code><Link to="/mod/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" Parent { get; }"}</code> | <span className="api-desc">The population folder that owns this sample. Non-creature members are chunked under its entity.</span> |
| <Link id="m-spawnedentities" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/mod/game-api/types/alta-world-generation/populationitem">{"PopulationItem"}</Link>{"> SpawnedEntities { get; private set; }"}</code> | <span className="api-desc">Spawned members, with their `PopulationItem` components.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-newentityspawned" /><code>{"event "}<Link to="/mod/game-api/types/alta-world-generation/populationitemspawnhandler">{"PopulationItemSpawnHandler"}</Link>{" NewEntitySpawned"}</code> | <span className="api-desc">Raised when a member is spawned.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addentity" /><code>{"void AddEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, int pointIndex)"}</code> | <span className="api-desc">Adds an existing entity as a member at the spawn point with the given index.</span> |
| <Link id="m-checkspawned" /><code>{"void CheckSpawned()"}</code> | <span className="api-desc">Spawns members until the spawned count matches the population times the definition's spawned percentage. Gives up after three failed spawns.</span> |
| <Link id="m-destroy" /><code>{"void Destroy()"}</code> | <span className="api-desc">Stops the population's timer.</span> |
| <Link id="m-forcekillall" /><code>{"void ForceKillAll()"}</code> | <span className="api-desc">Destroys every spawned member, sets the population to 0 and rechecks spawning.</span> |
| <Link id="m-forcespawn" /><code>{"void ForceSpawn(int targetPopulation)"}</code> | <span className="api-desc">Raises the population to the target (capped at the maximum) and spawns to match.</span> |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world-generation/ispawnsystem">{"ISpawnSystem"}</Link>{" spawner)"}</code> | <span className="api-desc">Server: sets the chunk and spawner and starts the growth tick.</span> |
| <Link id="m-loadtime" /><code>{"void LoadTime(TimeSpan time)"}</code> | <span className="api-desc">Restores the tick timer from a save and runs the ticks missed while unloaded.</span> |
| <Link id="m-losemember" /><code>{"void LoseMember("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Removes a member that died, occupies its spawn point for a while and lowers the count.</span> |
| <Link id="m-replace" /><code>{"void Replace("}<Link to="/mod/game-api/types/alta-world-generation/populationitem">{"PopulationItem"}</Link>{" populationItem, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Swaps a member's entity for a new one at the same spawn point.</span> |
| <Link id="m-requestmove" /><code>{"bool RequestMove("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isAllowingSame = true)"}</code> | <span className="api-desc">Moves a member to another random free spawn point. False if none is available.</span> |
| <Link id="m-savetime" /><code>{"TimeSpan SaveTime()"}</code> | <span className="api-desc">Returns the tick timer for saving.</span> |
| <Link id="m-serializetime" /><code>{"void SerializeTime("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Obsolete: old way of saving the tick timer to a stream.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addentity-2" /><code>{"private void AddEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" point)"}</code> | <span className="api-desc">Adds an existing entity as a member at the spawn point with the given index.</span> |
| <Link id="m-additemto" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationitem">{"PopulationItem"}</Link>{" AddItemTo(GameObject gameObject)"}</code> | <span className="api-desc">Adds the right `PopulationItem` component to a spawned entity: radial, bounds or plain, by the definition's disconnect settings.</span> |
| <Link id="m-checkpopulation" /><code>{"private void CheckPopulation()"}</code> | <span className="api-desc">Server tick: shrinks an over-max population or grows it by the growth curve, then spawns entities if the chunk is loaded.</span> |
| <Link id="m-checktimeupdated" /><code>{"private void CheckTimeUpdated("}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" changedPopulation)"}</code> | <span className="api-desc">Reschedules the population tick when the definition's tick frequency is changed.</span> |
| <Link id="m-despawnentity" /><code>{"private void DespawnEntity("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isDeath)"}</code> | <span className="api-desc">Despawns a tracked entity and removes it from `SpawnedEntities`.</span> |
| <Link id="m-despawnentityinternal" /><code>{"private void DespawnEntityInternal("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isDeath)"}</code> | <span className="api-desc">Unhooks removal events, frees or occupies the spawn point (on death) and destroys the population item.</span> |
| <Link id="m-entitydestroyed" /><code>{"private void EntityDestroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Entity destroyed handler: an unload just despawns it, a real destroy counts as losing a member.</span> |
| <Link id="m-registerremovemethod" /><code>{"private void RegisterRemoveMethod("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newEntity)"}</code> | <span className="api-desc">Hooks the entity's removal methods and its destroyed event so the sample notices when it leaves.</span> |
| <Link id="m-spawnrandom" /><code>{"private bool SpawnRandom("}<Link to="/mod/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" value)"}</code> | <span className="api-desc">Server: spawns one random prefab at a free spawn point, applying the definition's rotation, safe spawn and chunk rules.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PopulationSample`:

<div className="api-used-in">

[`Ecosystem.PopulationApplication.InitializeSample`](/mod/game-api/types/alta-world-generation/ecosystem-populationapplication#m-initializesample), [`PopulationAnalytics.SendRecord`](/mod/game-api/types/alta-world-generation/populationanalytics#m-sendrecord-2), [`PopulationDefinition.Load`](/mod/game-api/types/alta-world-generation/populationdefinition#m-load), [`PopulationDefinition.Save`](/mod/game-api/types/alta-world-generation/populationdefinition#m-save), [`PopulationDefinition.Serialize`](/mod/game-api/types/alta-world-generation/populationdefinition#m-serialize), [`PopulationDelegate.BeginInvoke`](/mod/game-api/types/alta-world-generation/populationdelegate#m-begininvoke), [`PopulationDelegate.Invoke`](/mod/game-api/types/alta-world-generation/populationdelegate#m-invoke), [`PopulationEventData.PopulationEventData`](/mod/game-api/types/alta-world-generation/populationeventdata#m-ctor), [`PopulationFolderBase.Population`](/mod/game-api/types/alta-world-generation/populationfolderbase#m-population), [`PopulationFolderBase.SetSample`](/mod/game-api/types/alta-world-generation/populationfolderbase#m-setsample), [`PopulationItem.Population`](/mod/game-api/types/alta-world-generation/populationitem#m-population), [`PopulationItemSpawnHandler.BeginInvoke`](/mod/game-api/types/alta-world-generation/populationitemspawnhandler#m-begininvoke), [`PopulationItemSpawnHandler.Invoke`](/mod/game-api/types/alta-world-generation/populationitemspawnhandler#m-invoke).

</div>
