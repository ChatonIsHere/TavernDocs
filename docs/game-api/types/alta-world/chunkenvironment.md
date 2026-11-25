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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkEnvironment()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-ambienttemperature" /><code>{"private float ambientTemperature"}</code> |  |
| <Link id="m-biome" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/serializedgeneratedbiome">{"SerializedGeneratedBiome"}</Link>{" biome"}</code> |  |
| <Link id="m-generatedbiome" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" generatedBiome"}</code> |  |
| <Link id="m-generationcontext" /><code>{"private "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" generationContext"}</code> |  |
| <Link id="m-isdisablingterraincollision" /><code>{"private bool isDisablingTerrainCollision"}</code> |  |
| <Link id="m-isonlyusingownedpointers" /><code>{"private bool isOnlyUsingOwnedPointers"}</code> |  |
| <Link id="m-overridesambienttemperature" /><code>{"private bool overridesAmbientTemperature"}</code> |  |
| <Link id="m-overrideset" /><code>{"private "}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" overrideSet"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ambienttemperature-2" /><code>{"float AmbientTemperature { get; set; }"}</code> | The chunk's ambient temperature (default 23). Setting it also turns the override on. |
| <Link id="m-biome-2" /><code><Link to="/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" Biome { get; }"}</code> | The generated biome from `SpawnData`. |
| <Link id="m-ecosystem" /><code><Link to="/game-api/types/alta-world-generation/basicecosystem">{"BasicEcosystem"}</Link>{" Ecosystem { get; private set; }"}</code> | The ecosystem set when the chunk was initialized. |
| <Link id="m-isdisablingterraincollision-2" /><code>{"bool IsDisablingTerrainCollision { get; }"}</code> | When set, pickups entering this chunk stop colliding with the main terrain. |
| <Link id="m-isonlyusingownedpointers-2" /><code>{"bool IsOnlyUsingOwnedPointers { get; }"}</code> | A serialized flag with no reader in this build. |
| <Link id="m-overridesambienttemperature-2" /><code>{"bool OverridesAmbientTemperature { get; }"}</code> | True when this chunk replaces the normal ambient temperature, read by `AmbientTemperatureChecker`. |
| <Link id="m-overrideset-2" /><code><Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" OverrideSet { get; set; }"}</code> | Atmosphere set that replaces the normal atmosphere (and audio aux bus) while the local player is in the chunk. |
| <Link id="m-spawndata" /><code><Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" { get; }"}</code> | Spawn context for things generated in this chunk. Built from the serialized biome on first use unless set procedurally. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world-generation/basicecosystem">{"BasicEcosystem"}</Link>{" ecosystem)"}</code> | Stores the chunk's ecosystem. |
| <Link id="m-isambient" /><code>{"bool IsAmbient(float temperature)"}</code> | True when a temperature is within 0.1 of the chunk's ambient temperature. |
| <Link id="m-setprocedural" /><code>{"void SetProcedural("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Replaces the spawn data, used by procedural cave generation. |

## Used in

Members of other types that take, return or hold a `ChunkEnvironment`:

[`LocationChunk.environment`](/game-api/types/alta-world/locationchunk#m-environment), [`LocationChunk.Environment`](/game-api/types/alta-world/locationchunk#m-environment-2).
