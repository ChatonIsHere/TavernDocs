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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`PopulationFolder<TThis, TData>`](/game-api/types/alta-world-generation/populationfolder-tthis-tdata)
- **Nested types** [`SerializedChild`](/game-api/types/alta-world-generation/populationfolderbase-serializedchild)
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationFolderBase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-onpopulationdiedout" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationevent">{"PopulationEvent"}</Link>{" OnPopulationDiedOut"}</code> |  |
| <Link id="m-onpopulationmaxed" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationevent">{"PopulationEvent"}</Link>{" OnPopulationMaxed"}</code> |  |
| <Link id="m-onpopulationstarted" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationevent">{"PopulationEvent"}</Link>{" OnPopulationStarted"}</code> |  |
| <Link id="m-serializedentitiesspawnpoint" /><code>{"protected Dictionary<int, "}<Link to="/game-api/types/alta-world-generation/populationfolderbase-serializedchild">{"PopulationFolderBase.SerializedChild"}</Link>{"> serializedentitiesSpawnPoint"}</code> | Loaded child entities by spawn point, kept until `Initialize` adds them to the population. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> | The population definition's hash. |
| <Link id="m-population" /><code><Link to="/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" Population { get; protected set; }"}</code> | The population sample: what's spawned and how many. |
| <Link id="m-populationdefinition" /><code>{"virtual "}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" { get; protected set; }"}</code> | What this population spawns. Taken from `Population` unless a subclass overrides it. |
| <Link id="m-addtoecosystem" /><code>{"protected virtual bool AddToEcosystem { get; }"}</code> | Whether the population joins the chunk's `Ecosystem` when the entity is added to a procedural chunk. True by default. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world-generation/ispawnsystem">{"ISpawnSystem"}</Link>{" spawner)"}</code> | Server: initializes the population for a chunk and spawner, and adds back any loaded children at their spawn points. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: hooks up joining the ecosystem when the entity is added to a chunk. |
| <Link id="m-setsample" /><code>{"void SetSample("}<Link to="/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" sample)"}</code> | Sets the population sample once and hooks its events to the inspector events. A second sample is destroyed with an error. |
| <Link id="m-tryaddtoecosystem" /><code>{"private void TryAddToEcosystem("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PopulationFolderBase`:

[`Ecosystem.AddPopulation`](/game-api/types/alta-world-generation/ecosystem#m-addpopulation), [`Ecosystem.populations`](/game-api/types/alta-world-generation/ecosystem#m-populations), [`Ecosystem.PopulationApplication.InitializeSample`](/game-api/types/alta-world-generation/ecosystem-populationapplication#m-initializesample), [`PopulationDefinition.Load`](/game-api/types/alta-world-generation/populationdefinition#m-load), [`PopulationDefinition.Serialize`](/game-api/types/alta-world-generation/populationdefinition#m-serialize), [`PopulationSample.Parent`](/game-api/types/alta-world-generation/populationsample#m-parent), [`PopulationSample.PopulationSample`](/game-api/types/alta-world-generation/populationsample#m-ctor).
