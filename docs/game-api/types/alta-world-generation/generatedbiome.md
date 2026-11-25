---
title: "GeneratedBiome"
description: "class GeneratedBiome in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneratedBiome

A **class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GeneratedBiome(int seed, "}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" from, "}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" to, float transition, Dictionary<"}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{", float> biomeWeightings, "}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes, Dictionary<"}<Link to="/game-api/types/alta-world-generation/element">{"Element"}</Link>{", float> elementChances)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-biomes" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{"[] biomes"}</code> |  |
| <Link id="m-biomethresholds" /><code>{"private float[] biomeThresholds"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code><Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" Attributes { get; private set; }"}</code> |  |
| <Link id="m-biomeweightings" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{", float> BiomeWeightings { get; private set; }"}</code> |  |
| <Link id="m-elementchances" /><code>{"Dictionary<"}<Link to="/game-api/types/alta-world-generation/element">{"Element"}</Link>{", float> ElementChances { get; private set; }"}</code> |  |
| <Link id="m-from" /><code><Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" From { get; private set; }"}</code> |  |
| <Link id="m-seed" /><code>{"int Seed { get; private set; }"}</code> |  |
| <Link id="m-to" /><code><Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" To { get; private set; }"}</code> |  |
| <Link id="m-transition" /><code>{"float Transition { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-basic" /><code>{"static "}<Link to="/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" Basic(int seed, "}<Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biome)"}</code> |  |
| <Link id="m-getdebugvalue" /><code>{"float GetDebugValue()"}</code> |  |
| <Link id="m-getrandom" /><code><Link to="/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" GetRandom()"}</code> |  |

## Used in

Members of other types that take, return or hold a `GeneratedBiome`:

[`BiomeSerializer.SerializeBiome`](/game-api/types/alta-world-generation/biomeserializer#m-serializebiome), [`CaveBiomeGenerator.Generate`](/game-api/types/alta-world-generation/cavebiomegenerator#m-generate), [`CaveBiomeGenerator.Preview`](/game-api/types/alta-world-generation/cavebiomegenerator#m-preview), [`CaveLayerManager.biomes`](/game-api/types/alta-world-generation/cavelayermanager#m-biomes), [`CaveLayerManager.GetBiome`](/game-api/types/alta-world-generation/cavelayermanager#m-getbiome), [`GeneratingBiome.Generate`](/game-api/types/alta-world-generation/generatingbiome#m-generate), [`SerializedGeneratedBiome.GetGenerated`](/game-api/types/alta-world-generation/serializedgeneratedbiome#m-getgenerated), [`ChunkEnvironment.Biome`](/game-api/types/alta-world/chunkenvironment#m-biome-2), [`ChunkEnvironment.generatedBiome`](/game-api/types/alta-world/chunkenvironment#m-generatedbiome), [`Ecosystem.PopulationApplication.InitializeSample`](/game-api/types/alta-world-generation/ecosystem-populationapplication#m-initializesample), [`BiomePreset.Biome`](/game-api/types/global-a-b/biomepreset#m-biome-2), [`BiomePreset.generated`](/game-api/types/global-a-b/biomepreset#m-generated), [`BiomeSphere.Generated`](/game-api/types/global-a-b/biomesphere#m-generated), [`GenerationStarter.biome`](/game-api/types/global-e-h/generationstarter#m-biome), [`GenerationStartSaveData.generatedBiome`](/game-api/types/global-e-h/generationstartsavedata#m-generatedbiome), [`HitSpawnData.HitSpawnData`](/game-api/types/global-e-h/hitspawndata#m-ctor), [`SpawnData.Biome`](/game-api/types/global-s/spawndata#m-biome), [`SpawnData.SpawnData`](/game-api/types/global-s/spawndata#m-ctor).
