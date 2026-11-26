---
title: "GeneratedBiome"
description: "The rolled result of a biome mix for a cave layer or area: the biomes and their weights, attributes and element chances, plus the two biomes it blends between."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneratedBiome

A **class** in `Root.Township`, `Alta.Caves`.

The rolled result of a biome mix for a cave layer or area: the biomes and their weights, attributes and element chances, plus the two biomes it blends between.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Documented in** [Caves](/mod/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GeneratedBiome(int seed, "}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" from, "}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" to, float transition, Dictionary<"}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{", float> biomeWeightings, "}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes, Dictionary<"}<Link to="/mod/game-api/types/alta-world-generation/element">{"Element"}</Link>{", float> elementChances)"}</code> | <span className="api-desc">Creates a `GeneratedBiome` from `seed`, `from`, `to`, `transition`, `biomeWeightings`, `attributes` and `elementChances`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-biomes" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{"[] biomes"}</code> | <span className="api-desc">The weighted biomes, in the same order as `biomeThresholds`.</span> |
| <Link id="m-biomethresholds" /><code>{"private float[] biomeThresholds"}</code> | <span className="api-desc">Running totals of the biome weightings, used by `GetRandom` to pick a biome.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code><Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" Attributes { get; private set; }"}</code> | <span className="api-desc">The biome attribute values for this area.</span> |
| <Link id="m-biomeweightings" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{", float> BiomeWeightings { get; private set; }"}</code> | <span className="api-desc">Weight of each biome in the mix.</span> |
| <Link id="m-elementchances" /><code>{"Dictionary<"}<Link to="/mod/game-api/types/alta-world-generation/element">{"Element"}</Link>{", float> ElementChances { get; private set; }"}</code> | <span className="api-desc">Chance of each element.</span> |
| <Link id="m-from" /><code><Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" From { get; private set; }"}</code> | <span className="api-desc">The biome it transitions from.</span> |
| <Link id="m-seed" /><code>{"int Seed { get; private set; }"}</code> | <span className="api-desc">Seed used to roll it.</span> |
| <Link id="m-to" /><code><Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" To { get; private set; }"}</code> | <span className="api-desc">The biome it transitions to, or null.</span> |
| <Link id="m-transition" /><code>{"float Transition { get; private set; }"}</code> | <span className="api-desc">How far between `From` and `To` it is.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-basic" /><code>{"static "}<Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" Basic(int seed, "}<Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" biome)"}</code> | <span className="api-desc">Makes a result with a single biome at full weight.</span> |
| <Link id="m-getdebugvalue" /><code>{"float GetDebugValue()"}</code> | <span className="api-desc">A number mixed from all values, for comparing two results when debugging.</span> |
| <Link id="m-getrandom" /><code><Link to="/mod/game-api/types/alta-world-generation/biome">{"Biome"}</Link>{" GetRandom()"}</code> | <span className="api-desc">Picks a biome by weight. Assumes the weights add up to 1; anything past the total picks the first biome.</span> |

## Used in

Members of other types that take, return or hold a `GeneratedBiome`:

<div className="api-used-in">

[`BiomeSerializer.SerializeBiome`](/mod/game-api/types/alta-world-generation/biomeserializer#m-serializebiome), [`CaveBiomeGenerator.Generate`](/mod/game-api/types/alta-world-generation/cavebiomegenerator#m-generate), [`CaveBiomeGenerator.Preview`](/mod/game-api/types/alta-world-generation/cavebiomegenerator#m-preview), [`CaveLayerManager.biomes`](/mod/game-api/types/alta-world-generation/cavelayermanager#m-biomes), [`CaveLayerManager.GetBiome`](/mod/game-api/types/alta-world-generation/cavelayermanager#m-getbiome), [`GeneratingBiome.Generate`](/mod/game-api/types/alta-world-generation/generatingbiome#m-generate), [`SerializedGeneratedBiome.GetGenerated`](/mod/game-api/types/alta-world-generation/serializedgeneratedbiome#m-getgenerated), [`ChunkEnvironment.Biome`](/mod/game-api/types/alta-world/chunkenvironment#m-biome-2), [`ChunkEnvironment.generatedBiome`](/mod/game-api/types/alta-world/chunkenvironment#m-generatedbiome), [`Ecosystem.PopulationApplication.InitializeSample`](/mod/game-api/types/alta-world-generation/ecosystem-populationapplication#m-initializesample), [`BiomePreset.Biome`](/mod/game-api/types/global-a-b/biomepreset#m-biome-2), [`BiomePreset.generated`](/mod/game-api/types/global-a-b/biomepreset#m-generated), [`BiomeSphere.Generated`](/mod/game-api/types/global-a-b/biomesphere#m-generated), [`GenerationStarter.biome`](/mod/game-api/types/global-e-h/generationstarter#m-biome), [`GenerationStartSaveData.generatedBiome`](/mod/game-api/types/global-e-h/generationstartsavedata#m-generatedbiome), [`HitSpawnData.HitSpawnData`](/mod/game-api/types/global-e-h/hitspawndata#m-ctor), [`SpawnData.Biome`](/mod/game-api/types/global-s/spawndata#m-biome), [`SpawnData.SpawnData`](/mod/game-api/types/global-s/spawndata#m-ctor).

</div>
