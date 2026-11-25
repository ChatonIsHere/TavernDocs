---
title: "PopulationSample"
description: "One population of one PopulationDefinition in one chunk: a count, a maximum, and the entities it has spawned."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationSample

A **class** in `Root.Township`, `Alta.Populations`.

One population of one `PopulationDefinition` in one chunk: a count, a maximum, and the entities it has spawned.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`PopulationEvent`](/game-api/types/alta-world-generation/populationevent), [`PopulationUnityEvent`](/game-api/types/alta-world-generation/populationunityevent)
- **Documented in** [Spawning and despawning](/game-api/creatures/spawning-and-despawning#populationsample), [Populations and spawners](/game-api/world/populations#populationsample)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationSample("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition, int currentPopulation, int maximumPopulation, "}<Link to="/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" parent, bool isOneOff = false)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"PopulationSample("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition, int currentPopulation, int maximumPopulation, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world-generation/ispawnsystem">{"ISpawnSystem"}</Link>{" spawner, "}<Link to="/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" parent, bool isOneOff = false)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-onpopulationdiedout" /><code><Link to="/game-api/types/alta-world-generation/populationdelegate">{"PopulationDelegate"}</Link>{" OnPopulationDiedOut"}</code> |  |
| <Link id="m-onpopulationmaxed" /><code><Link to="/game-api/types/alta-world-generation/populationdelegate">{"PopulationDelegate"}</Link>{" OnPopulationMaxed"}</code> |  |
| <Link id="m-onpopulationstarted" /><code><Link to="/game-api/types/alta-world-generation/populationdelegate">{"PopulationDelegate"}</Link>{" OnPopulationStarted"}</code> |  |
| <Link id="m-entry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> |  |
| <Link id="m-isoneoff" /><code>{"private bool isOneOff"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-spawner" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/ispawnsystem">{"ISpawnSystem"}</Link>{" spawner"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; private set; }"}</code> |  |
| <Link id="m-currentpopulation" /><code>{"int CurrentPopulation { get; private set; }"}</code> |  |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" Definition { get; }"}</code> |  |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> |  |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; private set; }"}</code> |  |
| <Link id="m-maximumpopulation" /><code>{"int MaximumPopulation { get; private set; }"}</code> |  |
| <Link id="m-parent" /><code><Link to="/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" Parent { get; }"}</code> |  |
| <Link id="m-spawnedentities" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/game-api/types/alta-world-generation/populationitem">{"PopulationItem"}</Link>{"> SpawnedEntities { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-newentityspawned" /><code>{"event "}<Link to="/game-api/types/alta-world-generation/populationitemspawnhandler">{"PopulationItemSpawnHandler"}</Link>{" NewEntitySpawned"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addentity" /><code>{"void AddEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, int pointIndex)"}</code> |  |
| <Link id="m-checkspawned" /><code>{"void CheckSpawned()"}</code> |  |
| <Link id="m-destroy" /><code>{"void Destroy()"}</code> |  |
| <Link id="m-forcekillall" /><code>{"void ForceKillAll()"}</code> |  |
| <Link id="m-forcespawn" /><code>{"void ForceSpawn(int targetPopulation)"}</code> |  |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world-generation/ispawnsystem">{"ISpawnSystem"}</Link>{" spawner)"}</code> |  |
| <Link id="m-loadtime" /><code>{"void LoadTime(TimeSpan time)"}</code> |  |
| <Link id="m-losemember" /><code>{"void LoseMember("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-replace" /><code>{"void Replace("}<Link to="/game-api/types/alta-world-generation/populationitem">{"PopulationItem"}</Link>{" populationItem, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-requestmove" /><code>{"bool RequestMove("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isAllowingSame = true)"}</code> |  |
| <Link id="m-savetime" /><code>{"TimeSpan SaveTime()"}</code> |  |
| <Link id="m-serializetime" /><code>{"void SerializeTime("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-addentity-2" /><code>{"private void AddEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" point)"}</code> |  |
| <Link id="m-additemto" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationitem">{"PopulationItem"}</Link>{" AddItemTo(GameObject gameObject)"}</code> |  |
| <Link id="m-checkpopulation" /><code>{"private void CheckPopulation()"}</code> |  |
| <Link id="m-checktimeupdated" /><code>{"private void CheckTimeUpdated("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" changedPopulation)"}</code> |  |
| <Link id="m-despawnentity" /><code>{"private void DespawnEntity("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isDeath)"}</code> |  |
| <Link id="m-despawnentityinternal" /><code>{"private void DespawnEntityInternal("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isDeath)"}</code> |  |
| <Link id="m-entitydestroyed" /><code>{"private void EntityDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-registerremovemethod" /><code>{"private void RegisterRemoveMethod("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" newEntity)"}</code> |  |
| <Link id="m-spawnrandom" /><code>{"private bool SpawnRandom("}<Link to="/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" value)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PopulationSample`:

[`Ecosystem.PopulationApplication.InitializeSample`](/game-api/types/alta-world-generation/ecosystem-populationapplication#m-initializesample), [`PopulationAnalytics.SendRecord`](/game-api/types/alta-world-generation/populationanalytics#m-sendrecord-2), [`PopulationDefinition.Load`](/game-api/types/alta-world-generation/populationdefinition#m-load), [`PopulationDefinition.Save`](/game-api/types/alta-world-generation/populationdefinition#m-save), [`PopulationDefinition.Serialize`](/game-api/types/alta-world-generation/populationdefinition#m-serialize), [`PopulationDelegate.BeginInvoke`](/game-api/types/alta-world-generation/populationdelegate#m-begininvoke), [`PopulationDelegate.Invoke`](/game-api/types/alta-world-generation/populationdelegate#m-invoke), [`PopulationEventData.PopulationEventData`](/game-api/types/alta-world-generation/populationeventdata#m-ctor), [`PopulationFolderBase.Population`](/game-api/types/alta-world-generation/populationfolderbase#m-population), [`PopulationFolderBase.SetSample`](/game-api/types/alta-world-generation/populationfolderbase#m-setsample), [`PopulationItem.Population`](/game-api/types/alta-world-generation/populationitem#m-population), [`PopulationItemSpawnHandler.BeginInvoke`](/game-api/types/alta-world-generation/populationitemspawnhandler#m-begininvoke), [`PopulationItemSpawnHandler.Invoke`](/game-api/types/alta-world-generation/populationitemspawnhandler#m-invoke).
