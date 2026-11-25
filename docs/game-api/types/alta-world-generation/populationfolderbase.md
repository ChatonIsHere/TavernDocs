---
title: "PopulationFolderBase"
description: "class PopulationFolderBase in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationFolderBase

A **class** in `Root.Township`, `Alta.Populations`.

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
| <Link id="m-serializedentitiesspawnpoint" /><code>{"protected Dictionary<int, "}<Link to="/game-api/types/alta-world-generation/populationfolderbase-serializedchild">{"PopulationFolderBase.SerializedChild"}</Link>{"> serializedentitiesSpawnPoint"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> |  |
| <Link id="m-population" /><code><Link to="/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" Population { get; protected set; }"}</code> |  |
| <Link id="m-populationdefinition" /><code>{"virtual "}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" { get; protected set; }"}</code> |  |
| <Link id="m-addtoecosystem" /><code>{"protected virtual bool AddToEcosystem { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world-generation/ispawnsystem">{"ISpawnSystem"}</Link>{" spawner)"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-setsample" /><code>{"void SetSample("}<Link to="/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" sample)"}</code> |  |
| <Link id="m-tryaddtoecosystem" /><code>{"private void TryAddToEcosystem("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PopulationFolderBase`:

[`Ecosystem.AddPopulation`](/game-api/types/alta-world-generation/ecosystem#m-addpopulation), [`Ecosystem.populations`](/game-api/types/alta-world-generation/ecosystem#m-populations), [`Ecosystem.PopulationApplication.InitializeSample`](/game-api/types/alta-world-generation/ecosystem-populationapplication#m-initializesample), [`PopulationDefinition.Load`](/game-api/types/alta-world-generation/populationdefinition#m-load), [`PopulationDefinition.Serialize`](/game-api/types/alta-world-generation/populationdefinition#m-serialize), [`PopulationSample.Parent`](/game-api/types/alta-world-generation/populationsample#m-parent), [`PopulationSample.PopulationSample`](/game-api/types/alta-world-generation/populationsample#m-ctor).
