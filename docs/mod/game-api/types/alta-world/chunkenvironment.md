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
| <Link id="m-ctor" /><code>{"ChunkEnvironment()"}</code> | Creates a `ChunkEnvironment` with default values. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ambienttemperature" /><code>{"private float ambientTemperature"}</code> | Backing field for `AmbientTemperature` (default 23). Only shown in the inspector when the override is on. |
| <Link id="m-biome" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/serializedgeneratedbiome">{"SerializedGeneratedBiome"}</Link>{" biome"}</code> | Serialized biome that `SpawnData` is generated from when no procedural data was set. |
| <Link id="m-generatedbiome" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" generatedBiome"}</code> | Biome generated from `biome` the first time `SpawnData` is read. |
| <Link id="m-generationcontext" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" generationContext"}</code> | Cached `SpawnData`, either set by `SetProcedural` or built from the serialized biome. |
| <Link id="m-isdisablingterraincollision" /><code>{"private bool isDisablingTerrainCollision"}</code> | Backing field for `IsDisablingTerrainCollision`. |
| <Link id="m-isonlyusingownedpointers" /><code>{"private bool isOnlyUsingOwnedPointers"}</code> | Backing field for `IsOnlyUsingOwnedPointers`. |
| <Link id="m-overridesambienttemperature" /><code>{"private bool overridesAmbientTemperature"}</code> | Backing field for `OverridesAmbientTemperature`; set to true whenever `AmbientTemperature` is assigned. |
| <Link id="m-overrideset" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" overrideSet"}</code> | Backing field for `OverrideSet` (the chunk's atmosphere override). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ambienttemperature-2" /><code>{"float AmbientTemperature { get; set; }"}</code> | The chunk's ambient temperature (default 23). Setting it also turns the override on. |
| <Link id="m-biome-2" /><code><Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" Biome { get; }"}</code> | The generated biome from `SpawnData`. |
| <Link id="m-ecosystem" /><code><Link to="/mod/game-api/types/alta-world-generation/basicecosystem">{"BasicEcosystem"}</Link>{" Ecosystem { get; private set; }"}</code> | The ecosystem set when the chunk was initialized. |
| <Link id="m-isdisablingterraincollision-2" /><code>{"bool IsDisablingTerrainCollision { get; }"}</code> | When set, pickups entering this chunk stop colliding with the main terrain. |
| <Link id="m-isonlyusingownedpointers-2" /><code>{"bool IsOnlyUsingOwnedPointers { get; }"}</code> | A serialized flag with no reader in this build. |
| <Link id="m-overridesambienttemperature-2" /><code>{"bool OverridesAmbientTemperature { get; }"}</code> | True when this chunk replaces the normal ambient temperature, read by `AmbientTemperatureChecker`. |
| <Link id="m-overrideset-2" /><code><Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" OverrideSet { get; set; }"}</code> | Atmosphere set that replaces the normal atmosphere (and audio aux bus) while the local player is in the chunk. |
| <Link id="m-spawndata" /><code><Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" { get; }"}</code> | Spawn context for things generated in this chunk. Built from the serialized biome on first use unless set procedurally. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world-generation/basicecosystem">{"BasicEcosystem"}</Link>{" ecosystem)"}</code> | Stores the chunk's ecosystem. |
| <Link id="m-isambient" /><code>{"bool IsAmbient(float temperature)"}</code> | True when a temperature is within 0.1 of the chunk's ambient temperature. |
| <Link id="m-setprocedural" /><code>{"void SetProcedural("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Replaces the spawn data, used by procedural cave generation. |

## Used in

Members of other types that take, return or hold a `ChunkEnvironment`:

[`LocationChunk.environment`](/mod/game-api/types/alta-world/locationchunk#m-environment), [`LocationChunk.Environment`](/mod/game-api/types/alta-world/locationchunk#m-environment-2).
