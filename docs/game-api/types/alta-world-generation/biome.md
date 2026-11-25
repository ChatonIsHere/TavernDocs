---
title: "Biome"
description: "Cave biome asset (under Caves/Biomes): loot tables, attribute ranges and element multipliers used by cave generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Biome

A **class** in `Root.Township`, `Alta.Caves`.

Cave biome asset (under `Caves/Biomes`): loot tables, attribute ranges and element multipliers used by cave generation.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`HashedGeneralValue<Biome>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`Biome`](/game-api/types/alta-world-generation/biome), [`Biome.Create`](/game-api/types/alta-world-generation/biome-create), [`BiomeDoubleValue`](/game-api/types/alta-world-generation/biomedoublevalue), [`BiomeSingleValue`](/game-api/types/alta-world-generation/biomesinglevalue)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/biome-create)
- **Attributes** `HashedPath`
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Biome()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code>{"private "}<Link to="/game-api/types/global-a-b/attributedoublevalue">{"AttributeDoubleValue"}</Link>{"[] attributes"}</code> |  |
| <Link id="m-elements" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/elementsinglevalue">{"ElementSingleValue"}</Link>{"[] elements"}</code> |  |
| <Link id="m-loottables" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/loottable">{"LootTable"}</Link>{"[] lootTables"}</code> |  |
| <Link id="m-spawndata" /><code>{"private "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attributes-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-a-b/attributedoublevalue">{"AttributeDoubleValue"}</Link>{"> Attributes { get; }"}</code> | Attribute ranges, each with a min and max value. |
| <Link id="m-elements-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world-generation/elementsinglevalue">{"ElementSingleValue"}</Link>{"> Elements { get; }"}</code> | Element multipliers. |
| <Link id="m-loottables-2" /><code><Link to="/game-api/types/alta-world-generation/loottable">{"LootTable"}</Link>{"[] LootTables { get; }"}</code> | Loot tables used in this biome. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getattribute" /><code>{"void GetAttribute("}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" attribute, out float min, out float max)"}</code> | Gets the min and max for a biome attribute. Both 0 if not set. |
| <Link id="m-getelementmultiplier" /><code>{"float GetElementMultiplier("}<Link to="/game-api/types/alta-world-generation/element">{"Element"}</Link>{" element)"}</code> | Gets the multiplier for an element. 1 if not set. |

## Used in

Members of other types that take, return or hold a `Biome`:

[`BiomeResources.biomes`](/game-api/types/alta-world-generation/biomeresources#m-biomes), [`BiomeResources.Biomes`](/game-api/types/alta-world-generation/biomeresources#m-biomes-2), [`BiomeSingleValue.BiomeSingleValue`](/game-api/types/alta-world-generation/biomesinglevalue#m-ctor-2), [`CaveBiomeGenerator.Preview`](/game-api/types/alta-world-generation/cavebiomegenerator#m-preview), [`GeneratedBiome.Basic`](/game-api/types/alta-world-generation/generatedbiome#m-basic), [`GeneratedBiome.biomes`](/game-api/types/alta-world-generation/generatedbiome#m-biomes), [`GeneratedBiome.BiomeWeightings`](/game-api/types/alta-world-generation/generatedbiome#m-biomeweightings), [`GeneratedBiome.From`](/game-api/types/alta-world-generation/generatedbiome#m-from), [`GeneratedBiome.GeneratedBiome`](/game-api/types/alta-world-generation/generatedbiome#m-ctor), [`GeneratedBiome.GetRandom`](/game-api/types/alta-world-generation/generatedbiome#m-getrandom), [`GeneratedBiome.To`](/game-api/types/alta-world-generation/generatedbiome#m-to), [`GeneratingBiome.AddWeighting`](/game-api/types/alta-world-generation/generatingbiome#m-addweighting), [`GeneratingBiome.biomeWeightings`](/game-api/types/alta-world-generation/generatingbiome#m-biomeweightings), [`GeneratingBiome.Generate`](/game-api/types/alta-world-generation/generatingbiome#m-generate), [`IBiomeValues.BiomeWeightings`](/game-api/types/alta-world-generation/ibiomevalues#m-biomeweightings), [`Section.GetRandomBiome`](/game-api/types/alta-world-generation/section#m-getrandombiome), [`SerializedGeneratedBiome.from`](/game-api/types/alta-world-generation/serializedgeneratedbiome#m-from), [`SerializedGeneratedBiome.to`](/game-api/types/alta-world-generation/serializedgeneratedbiome#m-to), [`LootModule.overrideBiome`](/game-api/types/alta-world-generation/lootmodule#m-overridebiome), [`LootModuleSaveData.biome`](/game-api/types/alta-world-generation/lootmodulesavedata#m-biome), [`LootModuleSaveData1.biome`](/game-api/types/alta-world-generation/lootmodulesavedata1#m-biome), [`LootModuleSaveData2.biome`](/game-api/types/alta-world-generation/lootmodulesavedata2#m-biome), [`LootModuleSaveData3.biome`](/game-api/types/alta-world-generation/lootmodulesavedata3#m-biome), [`LootModuleSaveData4.biome`](/game-api/types/alta-world-generation/lootmodulesavedata4#m-biome), [`ForestBiome.biomeDefinition`](/game-api/types/global-e-h/forestbiome#m-biomedefinition), [`ForestBiome.BiomeDefinition`](/game-api/types/global-e-h/forestbiome#m-biomedefinition-2).
