---
title: "PopulationFolderBase"
description: "Base for a networked object that owns a population (a group of spawned creatures or objects), and raises inspector events when it starts, dies out or is full."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationFolderBase

A **class** in `Root.Township`, `Alta.Populations`.

Base for a networked object that owns a population (a group of spawned creatures or objects), and raises inspector events when it starts, dies out or is full.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`PopulationFolder<TThis, TData>`](/mod/game-api/types/alta-world-generation/populationfolder-tthis-tdata)
- **Nested types** [`SerializedChild`](/mod/game-api/types/alta-world-generation/populationfolderbase-serializedchild)
- **Documented in** [Populations and spawners](/mod/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationFolderBase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-serializedentitiesspawnpoint" /><code>{"protected Dictionary<int, "}<Link to="/mod/game-api/types/alta-world-generation/populationfolderbase-serializedchild">{"PopulationFolderBase.SerializedChild"}</Link>{"> serializedentitiesSpawnPoint"}</code> | <span className="api-desc">Loaded child entities by spawn point, kept until `Initialize` adds them to the population.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onpopulationdiedout" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationevent">{"PopulationEvent"}</Link>{" OnPopulationDiedOut"}</code> | <span className="api-desc">Unity event raised when the population sample dies out.</span> |
| <Link id="m-onpopulationmaxed" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationevent">{"PopulationEvent"}</Link>{" OnPopulationMaxed"}</code> | <span className="api-desc">Unity event raised when the population sample reaches its maximum.</span> |
| <Link id="m-onpopulationstarted" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationevent">{"PopulationEvent"}</Link>{" OnPopulationStarted"}</code> | <span className="api-desc">Unity event raised when the population starts, and straight away in `SetSample` if it already has members.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> | <span className="api-desc">The population definition's hash.</span> |
| <Link id="m-population" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" Population { get; protected set; }"}</code> | <span className="api-desc">The population sample: what's spawned and how many.</span> |
| <Link id="m-populationdefinition" /><code>{"virtual "}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" { get; protected set; }"}</code> | <span className="api-desc">What this population spawns. Taken from `Population` unless a subclass overrides it.</span> |
| <Link id="m-addtoecosystem" /><code>{"protected virtual bool AddToEcosystem { get; }"}</code> | <span className="api-desc">Whether the population joins the chunk's `Ecosystem` when the entity is added to a procedural chunk. True by default.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world-generation/ispawnsystem">{"ISpawnSystem"}</Link>{" spawner)"}</code> | <span className="api-desc">Server: initializes the population for a chunk and spawner, and adds back any loaded children at their spawn points.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: hooks up joining the ecosystem when the entity is added to a chunk.</span> |
| <Link id="m-setsample" /><code>{"void SetSample("}<Link to="/mod/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" sample)"}</code> | <span className="api-desc">Sets the population sample once and hooks its events to the inspector events. A second sample is destroyed with an error.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-tryaddtoecosystem" /><code>{"private void TryAddToEcosystem("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Server: when added to a procedural chunk, registers this population with the chunk's `Ecosystem`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PopulationFolderBase`:

<div className="api-used-in">

[`Ecosystem.AddPopulation`](/mod/game-api/types/alta-world-generation/ecosystem#m-addpopulation), [`Ecosystem.populations`](/mod/game-api/types/alta-world-generation/ecosystem#m-populations), [`Ecosystem.PopulationApplication.InitializeSample`](/mod/game-api/types/alta-world-generation/ecosystem-populationapplication#m-initializesample), [`PopulationDefinition.Load`](/mod/game-api/types/alta-world-generation/populationdefinition#m-load), [`PopulationDefinition.Serialize`](/mod/game-api/types/alta-world-generation/populationdefinition#m-serialize), [`PopulationSample.Parent`](/mod/game-api/types/alta-world-generation/populationsample#m-parent), [`PopulationSample.PopulationSample`](/mod/game-api/types/alta-world-generation/populationsample#m-ctor).

</div>
