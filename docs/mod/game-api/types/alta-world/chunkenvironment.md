---
title: "ChunkEnvironment"
description: "Per-chunk environment settings on a LocationChunk: ambient temperature override, atmosphere override, terrain collision and the biome used for spawning."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkEnvironment

A **class** in `Root.Township`, `Alta.Chunks`.

Per-chunk environment settings on a `LocationChunk`: ambient temperature override, atmosphere override, terrain collision and the biome used for spawning.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkEnvironment()"}</code> | <span className="api-desc">Creates a `ChunkEnvironment` with default values.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ambienttemperature" /><code>{"private float ambientTemperature"}</code> | <span className="api-desc">Backing field for `AmbientTemperature` (default 23). Only shown in the inspector when the override is on.</span> |
| <Link id="m-biome" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/serializedgeneratedbiome">{"SerializedGeneratedBiome"}</Link>{" biome"}</code> | <span className="api-desc">Serialized biome that `SpawnData` is generated from when no procedural data was set.</span> |
| <Link id="m-generatedbiome" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" generatedBiome"}</code> | <span className="api-desc">Biome generated from `biome` the first time `SpawnData` is read.</span> |
| <Link id="m-generationcontext" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" generationContext"}</code> | <span className="api-desc">Cached `SpawnData`, either set by `SetProcedural` or built from the serialized biome.</span> |
| <Link id="m-isdisablingterraincollision" /><code>{"private bool isDisablingTerrainCollision"}</code> | <span className="api-desc">Backing field for `IsDisablingTerrainCollision`.</span> |
| <Link id="m-isonlyusingownedpointers" /><code>{"private bool isOnlyUsingOwnedPointers"}</code> | <span className="api-desc">Backing field for `IsOnlyUsingOwnedPointers`.</span> |
| <Link id="m-overridesambienttemperature" /><code>{"private bool overridesAmbientTemperature"}</code> | <span className="api-desc">Backing field for `OverridesAmbientTemperature`; set to true whenever `AmbientTemperature` is assigned.</span> |
| <Link id="m-overrideset" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" overrideSet"}</code> | <span className="api-desc">Backing field for `OverrideSet` (the chunk's atmosphere override).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ambienttemperature-2" /><code>{"float AmbientTemperature { get; set; }"}</code> | <span className="api-desc">The chunk's ambient temperature (default 23). Setting it also turns the override on.</span> |
| <Link id="m-biome-2" /><code><Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" Biome { get; }"}</code> | <span className="api-desc">The generated biome from `SpawnData`.</span> |
| <Link id="m-ecosystem" /><code><Link to="/mod/game-api/types/alta-world-generation/basicecosystem">{"BasicEcosystem"}</Link>{" Ecosystem { get; private set; }"}</code> | <span className="api-desc">The ecosystem set when the chunk was initialized.</span> |
| <Link id="m-isdisablingterraincollision-2" /><code>{"bool IsDisablingTerrainCollision { get; }"}</code> | <span className="api-desc">When set, pickups entering this chunk stop colliding with the main terrain.</span> |
| <Link id="m-isonlyusingownedpointers-2" /><code>{"bool IsOnlyUsingOwnedPointers { get; }"}</code> | <span className="api-desc">A serialized flag with no reader in this build.</span> |
| <Link id="m-overridesambienttemperature-2" /><code>{"bool OverridesAmbientTemperature { get; }"}</code> | <span className="api-desc">True when this chunk replaces the normal ambient temperature, read by `AmbientTemperatureChecker`.</span> |
| <Link id="m-overrideset-2" /><code><Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" OverrideSet { get; set; }"}</code> | <span className="api-desc">Atmosphere set that replaces the normal atmosphere (and audio aux bus) while the local player is in the chunk.</span> |
| <Link id="m-spawndata" /><code><Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" { get; }"}</code> | <span className="api-desc">Spawn context for things generated in this chunk. Built from the serialized biome on first use unless set procedurally.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world-generation/basicecosystem">{"BasicEcosystem"}</Link>{" ecosystem)"}</code> | <span className="api-desc">Stores the chunk's ecosystem.</span> |
| <Link id="m-isambient" /><code>{"bool IsAmbient(float temperature)"}</code> | <span className="api-desc">True when a temperature is within 0.1 of the chunk's ambient temperature.</span> |
| <Link id="m-setprocedural" /><code>{"void SetProcedural("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Replaces the spawn data, used by procedural cave generation.</span> |

## Used in

Members of other types that take, return or hold a `ChunkEnvironment`:

<div className="api-used-in">

[`LocationChunk.environment`](/mod/game-api/types/alta-world/locationchunk#m-environment), [`LocationChunk.Environment`](/mod/game-api/types/alta-world/locationchunk#m-environment-2).

</div>
