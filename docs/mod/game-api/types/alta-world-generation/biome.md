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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`HashedGeneralValue<Biome>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`Biome`](/mod/game-api/types/alta-world-generation/biome), [`Biome.Create`](/mod/game-api/types/alta-world-generation/biome-create), [`BiomeDoubleValue`](/mod/game-api/types/alta-world-generation/biomedoublevalue), [`BiomeSingleValue`](/mod/game-api/types/alta-world-generation/biomesinglevalue)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/biome-create)
- **Attributes** `HashedPath`
- **Documented in** [Caves](/mod/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Biome()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/attributedoublevalue">{"AttributeDoubleValue"}</Link>{"[] attributes"}</code> | Backing field for `Attributes`: min and max values per biome attribute, read by `GetAttribute`. |
| <Link id="m-elements" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/elementsinglevalue">{"ElementSingleValue"}</Link>{"[] elements"}</code> | Backing field for `Elements`: per-element multipliers, read by `GetElementMultiplier` (1 when missing). |
| <Link id="m-loottables" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/loottable">{"LootTable"}</Link>{"[] lootTables"}</code> | Backing field for `LootTables`, used when filling docks with generated loot. |
| <Link id="m-spawndata" /><code>{"private "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData"}</code> | Not used in this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-attributes-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-a-b/attributedoublevalue">{"AttributeDoubleValue"}</Link>{"> Attributes { get; }"}</code> | Attribute ranges, each with a min and max value. |
| <Link id="m-elements-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/elementsinglevalue">{"ElementSingleValue"}</Link>{"> Elements { get; }"}</code> | Element multipliers. |
| <Link id="m-loottables-2" /><code><Link to="/mod/game-api/types/alta-world-generation/loottable">{"LootTable"}</Link>{"[] LootTables { get; }"}</code> | Loot tables used in this biome. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getattribute" /><code>{"void GetAttribute("}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" attribute, out float min, out float max)"}</code> | Gets the min and max for a biome attribute. Both 0 if not set. |
| <Link id="m-getelementmultiplier" /><code>{"float GetElementMultiplier("}<Link to="/mod/game-api/types/alta-world-generation/element">{"Element"}</Link>{" element)"}</code> | Gets the multiplier for an element. 1 if not set. |

## Used in

Members of other types that take, return or hold a `Biome`:

[`BiomeResources.biomes`](/mod/game-api/types/alta-world-generation/biomeresources#m-biomes), [`BiomeResources.Biomes`](/mod/game-api/types/alta-world-generation/biomeresources#m-biomes-2), [`BiomeSingleValue.BiomeSingleValue`](/mod/game-api/types/alta-world-generation/biomesinglevalue#m-ctor-2), [`CaveBiomeGenerator.Preview`](/mod/game-api/types/alta-world-generation/cavebiomegenerator#m-preview), [`GeneratedBiome.Basic`](/mod/game-api/types/alta-world-generation/generatedbiome#m-basic), [`GeneratedBiome.biomes`](/mod/game-api/types/alta-world-generation/generatedbiome#m-biomes), [`GeneratedBiome.BiomeWeightings`](/mod/game-api/types/alta-world-generation/generatedbiome#m-biomeweightings), [`GeneratedBiome.From`](/mod/game-api/types/alta-world-generation/generatedbiome#m-from), [`GeneratedBiome.GeneratedBiome`](/mod/game-api/types/alta-world-generation/generatedbiome#m-ctor), [`GeneratedBiome.GetRandom`](/mod/game-api/types/alta-world-generation/generatedbiome#m-getrandom), [`GeneratedBiome.To`](/mod/game-api/types/alta-world-generation/generatedbiome#m-to), [`GeneratingBiome.AddWeighting`](/mod/game-api/types/alta-world-generation/generatingbiome#m-addweighting), [`GeneratingBiome.biomeWeightings`](/mod/game-api/types/alta-world-generation/generatingbiome#m-biomeweightings), [`GeneratingBiome.Generate`](/mod/game-api/types/alta-world-generation/generatingbiome#m-generate), [`IBiomeValues.BiomeWeightings`](/mod/game-api/types/alta-world-generation/ibiomevalues#m-biomeweightings), [`Section.GetRandomBiome`](/mod/game-api/types/alta-world-generation/section#m-getrandombiome), [`SerializedGeneratedBiome.from`](/mod/game-api/types/alta-world-generation/serializedgeneratedbiome#m-from), [`SerializedGeneratedBiome.to`](/mod/game-api/types/alta-world-generation/serializedgeneratedbiome#m-to), [`LootModule.overrideBiome`](/mod/game-api/types/alta-world-generation/lootmodule#m-overridebiome), [`LootModuleSaveData.biome`](/mod/game-api/types/alta-world-generation/lootmodulesavedata#m-biome), [`LootModuleSaveData1.biome`](/mod/game-api/types/alta-world-generation/lootmodulesavedata1#m-biome), [`LootModuleSaveData2.biome`](/mod/game-api/types/alta-world-generation/lootmodulesavedata2#m-biome), [`LootModuleSaveData3.biome`](/mod/game-api/types/alta-world-generation/lootmodulesavedata3#m-biome), [`LootModuleSaveData4.biome`](/mod/game-api/types/alta-world-generation/lootmodulesavedata4#m-biome), [`ForestBiome.biomeDefinition`](/mod/game-api/types/global-e-h/forestbiome#m-biomedefinition), [`ForestBiome.BiomeDefinition`](/mod/game-api/types/global-e-h/forestbiome#m-biomedefinition-2).
